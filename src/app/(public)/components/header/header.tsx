/* ================================================================
Description: Header component for the public layout
Author: Noah Huesman

Creation Date: 01/02/2025
Modification History:
#1 (01/02/2025) - Initial creation - Noah Huesman
#2 (01/02/2025) - Added project icon and title - Noah Huesman
#3 (01/03/2025) - Added auth components - Noah Huesman
================================================================ */

// ========================================
// IMPORTS
// ========================================

// CSS
// import classes from "./header.module.css"

// Shared components
import { Profile, TransitionLink, NavbarToggle } from "@/components/shared"

// Mantine
import { AppShellHeader, Group, Button, Title, Text } from "@mantine/core"

// Tabler icons
import { IconSwords, IconLogin2 } from "@tabler/icons-react"

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
					<Title order={2}>Spartan</Title>
					<Text
						span
						size="sm"
						fs="italic"
						c="accent-primary"
						visibleFrom="sm"
						mt="sm"
					>
						A Next.js Template with MongoDB (Prisma) and Mantine
					</Text>
				</Group>
				<Group visibleFrom="sm">
					{session?.user ? (
						<Profile session={session} />
					) : (
						<TransitionLink href="/login" closeNavbar closeAside>
							<Button
								size="md"
								variant="outline"
								type="submit"
								rightSection={<IconLogin2 size={20} />}
							>
								Login
							</Button>
						</TransitionLink>
					)}
				</Group>
			</Group>
		</AppShellHeader>
	)
}
