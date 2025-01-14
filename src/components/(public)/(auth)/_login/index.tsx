/* ================================================================
Description: Login
Author: Noah Huesman

Creation Date: 01/02/2025
Modification History:
#1 (01/02/2025) - Initial creation - Noah Huesman
#2 (01/05/2025) - Added dev login - Noah Huesman
================================================================ */

// ========================================
// IMPORTS
// ========================================

// Components
import ResendLogin from "./resend-login"
import GoogleLogin from "./google-login/"
import FacebookLogin from "./facebook-login/"
import GithubLogin from "./github-login"
import KeycloakLogin from "./keycloak-login"

// Mantine
import { Stack, Paper, PaperProps, Text, Divider, Group } from "@mantine/core"

// ========================================
// LOGIN
// ========================================

export default function Login(props: PaperProps) {
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
				<ResendLogin />
			</Group>

			<Divider label="Or continue with" labelPosition="center" my="lg" />

			<Stack mt="sm">
				<GoogleLogin />
				<FacebookLogin />
				<GithubLogin />
			</Stack>

			{process.env.NODE_ENV === "development" && (
				<div>
					<Divider
						label="THIS LINE AND BELOW IS NOT IN PRODUCTION BY DEFAULT"
						labelPosition="center"
						my="lg"
					/>
					<KeycloakLogin />
				</div>
			)}
		</Paper>
	)
}
