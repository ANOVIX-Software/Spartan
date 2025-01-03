/* ================================================================
Description: Aside component for the public layout
Author: Noah Huesman

Creation Date: 01/02/2025
Modification History:
#1 (01/02/2025) - Initial creation - Noah Huesman
================================================================ */

// ========================================
// IMPORTS
// ========================================

// Mantine
import { AppShellAside, AppShellSection, ScrollArea } from "@mantine/core"

// ========================================
// ASIDE
// ========================================

export default function Aside() {
	// Render
	return (
		<AppShellAside p="md">
			<AppShellSection grow component={ScrollArea}>
				aside
			</AppShellSection>
		</AppShellAside>
	)
}
