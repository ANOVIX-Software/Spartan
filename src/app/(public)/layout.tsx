/* ================================================================
Description: Public layout - Mantine app shell
Author: Noah Huesman

Creation Date: 01/02/2025
Modification History:
#1 (01/02/2025) - Initial creation - Noah Huesman
================================================================ */

// ========================================
// IMPORTS
// ========================================

// Appshell wrapper
import AppshellWrapper from "@/app/appshell-wrapper"

// Public components
import { Header, Navbar, Aside } from "./components"

// ========================================
// PUBLIC LAYOUT
// ========================================

export default function PublicLayout({
	children,
}: {
	children: React.ReactNode
}) {
	// Render
	return (
		<AppshellWrapper>
			<Header />
			<Navbar />
			<Aside />
			{children}
		</AppshellWrapper>
	)
}
