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

// CSS
// import classes from "./keycloak.module.css"

// Mantine
import { Group, Button } from "@mantine/core"

// Server library
import { login } from "@/library/server"

// ========================================
// KEYCLOAK
// ========================================

export function Keycloak() {
	// Render
	return (
		<Group grow>
			<Button type="submit" onClick={() => login("keycloak", "/")}>
				KEYCLOAK DEVELOPMENT LOGIN
			</Button>
		</Group>
	)
}
