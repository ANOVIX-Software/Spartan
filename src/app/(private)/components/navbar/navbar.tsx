/* ================================================================
Description: Navbar component for the private layout
Author: Noah Huesman

Creation Date: 01/02/2025
Modification History:
#1 (01/02/2025) - Initial creation - Noah Huesman
================================================================ */

// ========================================
// IMPORTS
// ========================================

// CSS
// import classes from "./navbar.module.css"

// Mantine
import { AppShellNavbar, AppShellSection, ScrollArea } from "@mantine/core"

// ========================================
// NAVBAR
// ========================================

export function Navbar() {
	// Render
	return (
		<AppShellNavbar p="md">
			<AppShellSection grow component={ScrollArea}>
				navbar
			</AppShellSection>
		</AppShellNavbar>
	)
}
