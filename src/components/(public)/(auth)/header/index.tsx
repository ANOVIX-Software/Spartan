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

// Components
import TransitionLink from "@/components/utils/transition-link"

// Mantine
import { Group, Button } from "@mantine/core"

// Tabler icons
import { IconArrowLeft } from "@tabler/icons-react"

// ========================================
// HEADER
// ========================================

export default function Header() {
	// Render
	return (
		<Group h="100%">
			<TransitionLink href="/">
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
