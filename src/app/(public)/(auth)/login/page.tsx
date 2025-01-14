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

// Components
import Login from "@/components/(public)/(auth)/_login/"

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
				<Login />
			</Center>
		</Container>
	)
}
