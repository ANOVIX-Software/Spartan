/* ================================================================
Description: Login card
Author: Noah Huesman

Creation Date: 01/02/2025
Modification History:
#1 (01/02/2025) - Initial creation - Noah Huesman
#2 (01/05/2025) - Added dev login - Noah Huesman
================================================================ */

// ========================================
// IMPORTS
// ========================================

// CSS
// import classes from "./login-card.module.css"

// Components
import { Resend } from "./resend"
import { Google } from "./google"
import { Facebook } from "./facebook"
import { Github } from "./github"
import { Keycloak } from "./keycloak"

// Mantine
import { Stack, Paper, PaperProps, Text, Divider, Group } from "@mantine/core"

// ========================================
// LOGIN
// ========================================

export function LoginCard(props: PaperProps) {
	// Render
	return (
		<Paper
			radius="sm"
			p="xl"
			w="550"
			withBorder
			{...props}
			shadow="lg"
			mt="xl"
		>
			<Text size="lg" fw={500} mb="xs">
				Welcome to Spartan, login with your email
			</Text>

			<Group grow>
				<Resend />
			</Group>

			<Divider label="Or continue with" labelPosition="center" my="lg" />

			<Stack mt="sm">
				<Google />
				<Facebook />
				<Github />
			</Stack>

			{process.env.NODE_ENV === "development" && (
				<div>
					<Divider
						label="THIS LINE AND BELOW IS NOT IN PRODUCTION BY DEFAULT"
						labelPosition="center"
						my="lg"
					/>
					<Keycloak />
				</div>
			)}
		</Paper>
	)
}
