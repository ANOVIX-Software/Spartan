/* ================================================================
Description: Navbar toggle burger
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
import { Burger } from "@mantine/core"

// Layout store
import useLayoutStore from "@/lib/stores/layout"

// ========================================
// NAVBAR TOGGLE
// ========================================

export default function NavbarToggle() {
	// Layout store
	const { isNavbarCollapsed, toggleNavbarCollapse } = useLayoutStore()

	// Render
	return (
		<Burger
			opened={!isNavbarCollapsed}
			onClick={toggleNavbarCollapse}
			size="sm"
		/>
	)
}
