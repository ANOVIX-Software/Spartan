/* ================================================================
Description: Header component for the public layout
Author: Noah Huesman

Creation Date: 01/02/2025
Modification History:
#1 (01/02/2025) - Initial creation - Noah Huesman
================================================================ */

// ========================================
// IMPORTS
// ========================================

// Components
import NavbarToggle from "@/components/(public)/header/navbar-toggle"

// Mantine
import { AppShellHeader, Group } from "@mantine/core"

// ========================================
// HEADER
// ========================================

export default function Header() {
	// Render
	return (
		<AppShellHeader p="md">
			<Group h="100%">
				<NavbarToggle />
				header
			</Group>
		</AppShellHeader>
	)
}
