/* ================================================================
Description: Auth.js configuration
Author: Noah Huesman

Creation Date: 01/02/2025
Modification History:
#1 (01/02/2025) - Initial creation - Noah Huesman]
#2 (01/04/2025) - Added custom emails to Resend provider - Noah Huesman
#3 (01/05/2025) - Added dev login for e2e testing - Noah Huesman
================================================================ */

// ========================================
// IMPORTS
// ========================================

// Auth.js
import NextAuth from "next-auth"
import type { Provider } from "next-auth/providers"

// Prisma
import { prisma } from "@/prisma"

// Prisma adapter
import { PrismaAdapter } from "@auth/prisma-adapter"

// Server library
import { sendVerificationEmail } from "@/library/server"

// Providers
import Keycloak from "next-auth/providers/keycloak"
import Resend from "next-auth/providers/resend"
import Google from "next-auth/providers/google"
import Facebook from "next-auth/providers/facebook"
import GitHub from "next-auth/providers/github"

// ========================================
// USER TYPE EXTENSION
// ========================================

declare module "next-auth" {
	interface User {
		role?: string | null
	}
}

// ========================================
// PROVIDERS
// ========================================

// Authentication providers
const providers: Provider[] = [
	Resend({
		from: process.env.RESEND_EMAIL_NOREPLY,
		sendVerificationRequest({ provider, identifier, url }) {
			sendVerificationEmail(provider.from as string, identifier, url)
		},
	}),
	Google({ allowDangerousEmailAccountLinking: true }),
	Facebook({ allowDangerousEmailAccountLinking: true }),
	GitHub({ allowDangerousEmailAccountLinking: true }),
]

// Add keycloak provider in development for e2e testing
if (process.env.NODE_ENV === "development") providers.push(Keycloak)

// ========================================
// AUTH.JS CONFIGURATION
// ========================================

export const { handlers, auth, signIn, signOut } = NextAuth({
	adapter: PrismaAdapter(prisma),
	providers: [...providers],
	callbacks: {
		// Add user id and role to session
		session({ session, user }) {
			session.user.id = user.id
			session.user.role = user.role
			return session
		},
	},
})
