/* ================================================================
Description: Auth.js configuration
Author: Noah Huesman

Creation Date: 01/02/2025
Modification History:
#1 (01/02/2025) - Initial creation - Noah Huesman
================================================================ */

// ========================================
// IMPORTS
// ========================================

// Auth.js
import NextAuth from "next-auth"

// Prisma client
import { prisma } from "@/prisma"

// Prisma adapter
import { PrismaAdapter } from "@auth/prisma-adapter"

// Providers
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
// AUTH.JS CONFIGURATION
// ========================================

export const { handlers, auth, signIn, signOut } = NextAuth({
	adapter: PrismaAdapter(prisma),
	providers: [Resend, Google, Facebook, GitHub],
	callbacks: {
		// Add user id and role to session
		session({ session, user }) {
			session.user.id = user.id
			session.user.role = user.role
			return session
		},
	},
})
