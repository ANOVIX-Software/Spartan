/* ================================================================
Description: User profile menu
Author: Noah Huesman

Creation Date: 01/03/2025
Modification History:
#1 (01/03/2025) - Initial creation - Noah Huesman
================================================================ */

// ========================================
// DIRECTIVES
// ========================================

"use client"

// ========================================
// IMPORTS
// ========================================

// CSS
// import classes from "./profile.module.css"

// Mantine
import { Menu, Avatar, Group, Text } from "@mantine/core"

// Tabler icons
import { IconLayoutDashboard, IconHome, IconLogout2 } from "@tabler/icons-react"

// Auth.js (Session type)
import { Session } from "next-auth"

// Server library
import { logout } from "@/library/server"

// Shared components
import { TransitionLink } from "@/components/shared"

// ========================================
// PROFILE
// ========================================

export function Profile({ session }: { session: Session }) {
	// Render
	return (
		<Menu shadow="md" width={200} withArrow arrowPosition="center">
			<Menu.Target>
				<Group gap="xs" className="cursor-pointer">
					<Avatar
						src={session.user?.image ?? null}
						name={session.user?.name ?? session.user?.email ?? ""}
						size="sm"
						radius="xl"
						color="initials"
					/>
					<Text size="md">
						{session.user?.name ?? session.user?.email ?? ""}
					</Text>
				</Group>
			</Menu.Target>

			<Menu.Dropdown>
				<Menu.Label>Profile</Menu.Label>
				{(session.user?.role === "MODERATOR" ||
					session.user?.role === "ADMIN") && (
					<div>
						<TransitionLink
							href="/"
							closeNavbarOnTransition={false}
							closeAsideOnTransition
						>
							<Menu.Item leftSection={<IconHome />}>
								Home
							</Menu.Item>
						</TransitionLink>
						<TransitionLink
							href="/dashboard"
							closeNavbarOnTransition={false}
							closeAsideOnTransition
						>
							<Menu.Item leftSection={<IconLayoutDashboard />}>
								Dashboard
							</Menu.Item>
						</TransitionLink>
					</div>
				)}
				<Menu.Item
					leftSection={<IconLogout2 />}
					onClick={() => logout("/")}
				>
					Log out
				</Menu.Item>
			</Menu.Dropdown>
		</Menu>
	)
}
