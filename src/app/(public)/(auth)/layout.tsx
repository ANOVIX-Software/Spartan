/* ================================================================
Description: Auth layout
Author: Noah Huesman

Creation Date: 01/02/2025
Modification History:
#1 (01/02/2025) - Initial creation - Noah Huesman
================================================================ */

// ========================================
// IMPORTS
// ========================================

// Auth components
import { Header } from "./components"

// Mantine
import { AppShell, AppShellHeader, AppShellMain } from "@mantine/core"

// ========================================
// AUTH LAYOUT
// ========================================

export default function AuthLayout({
	children,
}: {
	children: React.ReactNode
}) {
	// Render
	return (
		<AppShell header={{ height: 70 }}>
			<AppShellHeader px="md">
				<Header />
			</AppShellHeader>
			<AppShellMain>{children}</AppShellMain>
		</AppShell>
	)
}
