/* ================================================================
Description: Github button for logging in with Github
Author: Noah Huesman

Creation Date: 01/02/2025
Modification History:
#1 (01/02/2025) - Initial creation - Noah Huesman
================================================================ */

// ========================================
// DIRECTIVES
// ========================================

"use client"

// ========================================
// IMPORTS
// ========================================

// CSS
import classes from "./index.module.css"

// Mantine
import { Button, ButtonProps } from "@mantine/core"
import { GithubIcon } from "@mantinex/dev-icons"

// Auth server actions
import { login } from "@/lib/server/auth"

// ========================================
// GITHUB LOGIN
// ========================================

export default function GithubLogin(
	props: ButtonProps & React.ComponentPropsWithoutRef<"button">
) {
	// Render
	return (
		<Button
			type="submit"
			className={classes.githubButton}
			leftSection={<GithubIcon size={16} />}
			variant="default"
			size="md"
			onClick={() => login("github", "/")}
			{...props}
		>
			GitHub
		</Button>
	)
}
