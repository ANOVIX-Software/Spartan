/* ================================================================
Description: Protect all pages within the (private) directory
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

// Private components
import { Header, Navbar, Aside } from "./components"

// Server library
import { getSession } from "@/library/server"

// Next
import { redirect } from "next/navigation"

// ========================================
// PRIVATE LAYOUT
// ========================================

export default async function PrivateLayout({
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

	// Render private content if user is signed in
	return (
		<Wrapper>
			<Header />
			<Navbar />
			<Aside />
			{children}
		</Wrapper>
	)
}
