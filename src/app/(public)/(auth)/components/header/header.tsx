/* ================================================================
Description: Header component for the auth layout
Author: Noah Huesman

Creation Date: 01/02/2025
Modification History:
#1 (01/02/2025) - Initial creation - Noah Huesman
================================================================ */

// ========================================
// IMPORTS
// ========================================

// CSS
// import classes from "./header.module.css"

// Shared components
import { TransitionLink } from "@/components/shared"

// Mantine
import { Group, Button } from "@mantine/core"

// Tabler icons
import { IconArrowLeft } from "@tabler/icons-react"

// ========================================
// HEADER
// ========================================

export function Header() {
	// Render
	return (
		<Group h="100%">
			<TransitionLink
				href="/"
				closeNavbarOnTransition
				closeAsideOnTransition
			>
				<Button
					size="md"
					variant="outline"
					leftSection={<IconArrowLeft size={20} />}
				>
					Back to home page
				</Button>
			</TransitionLink>
		</Group>
	)
}
