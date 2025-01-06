/* ================================================================
Description: App shell wrapper - Client-side functionality
Author: Noah Huesman

Creation Date: 01/02/2025
Modification History:
#1 (01/02/2025) - Initial creation - Noah Huesman
================================================================ */

// ========================================
// DIRECTIVES
// ========================================

"use client"

// ========================================
// IMPORTS
// ========================================

// Mantine
import { AppShell } from "@mantine/core"

// Layout store
import useLayoutStore from "@/lib/stores/layout"

// ========================================
//  WRAPPER
// ========================================

export default function Wrapper({ children }: { children: React.ReactNode }) {
	// Layout store
	const { isNavbarCollapsed, isAsideCollapsed } = useLayoutStore()

	// Render
	return (
		<AppShell
			header={{ height: 70 }}
			navbar={{
				width: { base: 200, md: 350 },
				breakpoint: "sm",
				collapsed: {
					mobile: isNavbarCollapsed,
					desktop: isNavbarCollapsed,
				},
			}}
			aside={{
				width: { base: 200, md: 350 },
				breakpoint: "sm",
				collapsed: {
					mobile: isAsideCollapsed,
					desktop: isAsideCollapsed,
				},
			}}
			padding="md"
		>
			<AppShell.Main>{children}</AppShell.Main>
		</AppShell>
	)
}
