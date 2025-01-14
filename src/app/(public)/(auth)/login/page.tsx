/* ================================================================
Description: Login/register page
Author: Noah Huesman

Creation Date: 01/02/2025
Modification History:
#1 (01/02/2025) - Initial creation - Noah Huesman
================================================================ */

// ========================================
// IMPORTS
// ========================================

// Login components
import { LoginCard } from "./components"

// Mantine
import { Container, Center } from "@mantine/core"

// ========================================
// LOGIN PAGE
// ========================================

export default function LoginPage() {
	// Render
	return (
		<Container>
			<Center h={550}>
				<LoginCard />
			</Center>
		</Container>
	)
}
