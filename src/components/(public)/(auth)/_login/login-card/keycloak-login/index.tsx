/* ================================================================
Description: Login with Keycloak credentials for development e2e testing
Author: Noah Huesman

Creation Date: 01/05/2025
Modification History:
#1 (01/05/2025) - Initial creation - Noah Huesman
================================================================ */

// ========================================
// DIRECTIVES
// ========================================

"use client"

// ========================================
// IMPORTS
// ========================================

// Mantine
import { Group, Button } from "@mantine/core"

// Auth server actions
import { login } from "@/lib/server/auth"

// ========================================
// KEYCLOAK LOGIN
// ========================================

export default function KeycloakLogin() {
	// Render
	return (
		<Group grow>
			<Button type="submit" onClick={() => login("keycloak", "/")}>
				KEYCLOAK DEVELOPMENT LOGIN
			</Button>
		</Group>
	)
}
