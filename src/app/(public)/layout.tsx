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

// Wrapper
import Wrapper from "@/app/wrapper"

// Components
import Header from "@/components/(public)/header"
import Navbar from "@/components/(public)/navbar"
import Aside from "@/components/(public)/aside"

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
		<Wrapper>
			<Header />
			<Navbar />
			<Aside />
			{children}
		</Wrapper>
	)
}
