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

// CSS
// import classes from "./navbar-toggle.module.css"

// Mantine
import { Burger } from "@mantine/core"

// Stores library
import { useLayoutStore } from "@/library/stores"

// ========================================
// NAVBAR TOGGLE
// ========================================

export function NavbarToggle() {
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
