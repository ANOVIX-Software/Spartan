/* ================================================================
Description: Protect all pages within (protected) directory
Author: Noah Huesman

Creation Date: 01/04/2025
Modification History:
#1 (01/04/2025) - Initial creation - Noah Huesman
================================================================ */

// ========================================
// IMPORTS
// ========================================

// Wrapper
import Wrapper from "@/app/wrapper"

// Components
import Header from "@/components/(protected)/header"
import Navbar from "@/components/(protected)/navbar"
import Aside from "@/components/(protected)/aside"

// Auth server actions
import { getSession } from "@/lib/server/auth"

// Next
import { redirect } from "next/navigation"

// ========================================
// PROTECTED LAYOUT
// ========================================

export default async function ProtectedLayout({
	children,
}: {
	children: React.ReactNode
}) {
	// Get session
	const session = await getSession()

	// Redirect to login if no user is signed in
	if (!session?.user) redirect("/login")

	// Redirect to root if user has role USER
	if (session?.user?.role === "USER") redirect("/")

	// Render protected content if user is signed in
	return (
		<Wrapper>
			<Header />
			<Navbar />
			<Aside />
			{children}
		</Wrapper>
	)
}
