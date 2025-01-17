/* ================================================================
Description: Aside close button
Author: Noah Huesman

Creation Date: 01/07/2025
Modification History:
#1 (01/07/2025) - Initial creation - Noah Huesman
#2 (01/17/2025) - Replaced toggleAside with closeAside function - Noah Huesman
================================================================ */

// ========================================
// DIRECTIVES
// ========================================

"use client"

// ========================================
// IMPORTS
// ========================================

// CSS
// import classes from "./aside-close.module.css"

// Mantine
import { ActionIcon } from "@mantine/core"

// Tabler icons
import { IconX } from "@tabler/icons-react"

// Stores library
import { useLayoutStore } from "@/library/stores"

// ========================================
// ASIDE CLOSE
// ========================================

export function AsideClose() {
	// Layout store
	const { closeAside } = useLayoutStore()

	// Render
	return (
		<ActionIcon variant="transparent" aria-label="Close aside">
			<IconX onClick={closeAside} />
		</ActionIcon>
	)
}
