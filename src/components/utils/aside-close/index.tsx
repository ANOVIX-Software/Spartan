/* ================================================================
Description: Aside close button
Author: Noah Huesman

Creation Date: 01/07/2025
Modification History:
#1 (01/07/2025) - Initial creation - Noah Huesman
================================================================ */

// ========================================
// DIRECTIVES
// ========================================

"use client"

// ========================================
// IMPORTS
// ========================================

// Mantine
import { ActionIcon } from "@mantine/core"

// Tabler icons
import { IconX } from "@tabler/icons-react"

// Layout store
import useLayoutStore from "@/lib/stores/layout"

// ========================================
// ASIDE TOGGLE
// ========================================

export default function AsideClose() {
	// Layout store
	const { toggleAsideCollapse } = useLayoutStore()

	// Render
	return (
		<ActionIcon
			variant="transparent"
			color="black"
			aria-label="Close aside"
		>
			<IconX onClick={toggleAsideCollapse} />
		</ActionIcon>
	)
}
