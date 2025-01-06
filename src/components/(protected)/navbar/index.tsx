/* ================================================================
Description: Navbar component for the protected layout
Author: Noah Huesman

Creation Date: 01/02/2025
Modification History:
#1 (01/02/2025) - Initial creation - Noah Huesman
================================================================ */

// ========================================
// IMPORTS
// ========================================

// Mantine
import { AppShellNavbar, AppShellSection, ScrollArea } from "@mantine/core"

// ========================================
// NAVBAR
// ========================================

export default function Navbar() {
	// Render
	return (
		<AppShellNavbar p="md">
			<AppShellSection grow component={ScrollArea}>
				navbar
			</AppShellSection>
		</AppShellNavbar>
	)
}
