/* ================================================================
Description: Authentication server actions
Author: Noah Huesman

Creation Date: 01/02/2025
Modification History:
#1 (01/02/2025) - Initial creation - Noah Huesman
================================================================ */

// ========================================
// DIRECTIVES
// ========================================

"use server"

// ========================================
// IMPORTS
// ========================================

// Auth
import { signIn, signOut, auth } from "@/auth"

// ========================================
// LOGIN
// ========================================

export const login = async (
	provider: string,
	redirectPath: string,
	email: string = ""
) => {
	// Perform login
	await signIn(provider, {
		redirectTo: redirectPath,
		email,
	})
}

// ========================================
// LOGOUT
// ========================================

export const logout = async (redirectPath: string) => {
	// Perform logout
	await signOut({ redirectTo: redirectPath })
}

// ========================================
// GET SESSION
// ========================================

export const getSession = async () => {
	// Get session
	const session = await auth()
	return session
}
