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

// CSS
// import classes from "./aside.module.css"

// Shared components
import { AsideClose } from "@/components/shared"

// Mantine
import {
	AppShellAside,
	AppShellSection,
	ScrollArea,
	Group,
} from "@mantine/core"

// ========================================
// ASIDE
// ========================================

export function Aside() {
	// Render
	return (
		<AppShellAside p="md">
			<AppShellSection grow component={ScrollArea}>
				<Group justify="space-between">
					aside
					<AsideClose />
				</Group>
			</AppShellSection>
		</AppShellAside>
	)
}
