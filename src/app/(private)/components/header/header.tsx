/* ================================================================
Description: Header component for the private layout
Author: Noah Huesman

Creation Date: 01/02/2025
Modification History:
#1 (01/02/2025) - Initial creation - Noah Huesman
#2 (01/02/2025) - Added project icon and title - Noah Huesman
#3 (01/03/2025) - Added auth components - Noah Huesman
#4 (01/17/2025) - Removed auth components as they are not needed here, only admins and moderators can - Noah Huesman
================================================================ */

// ========================================
// IMPORTS
// ========================================

// CSS
// import classes from "./header.module.css"

// Shared components
import { Profile, NavbarToggle } from "@/components/shared"

// Mantine
import { AppShellHeader, Group, Title } from "@mantine/core"

// Tabler icons
import { IconSwords } from "@tabler/icons-react"

// Server library
import { getSession } from "@/library/server"

// ========================================
// HEADER
// ========================================

export async function Header() {
	// Get session
	const session = await getSession()

	// Render
	return (
		<AppShellHeader px="md">
			<Group h="100%" justify="space-between">
				<Group>
					<NavbarToggle />
					<IconSwords size={30} />
					<Title order={2}>PROTECTED</Title>
				</Group>
				<Group visibleFrom="sm">
					<Profile session={session!} />
				</Group>
			</Group>
		</AppShellHeader>
	)
}
