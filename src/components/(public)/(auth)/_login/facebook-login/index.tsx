/* ================================================================
Description: Facebook button for logging in with Facebook
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

// Auth server actions
import { login } from "@/lib/server/auth"

// ========================================
// FACEBOOK ICON SVG
// ========================================

function FacebookIcon(props: React.ComponentPropsWithoutRef<"svg">) {
	// Render
	return (
		<svg
			aria-hidden="true"
			focusable="false"
			data-prefix="fab"
			data-icon="facebook"
			role="img"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 512 512"
			style={{ width: 16, height: 16 }}
			{...props}
		>
			<path
				fill="currentColor"
				d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.8 90.69 226.4 209.3 245V327.7h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.3 482.4 504 379.8 504 256z"
			/>
		</svg>
	)
}

// ========================================
// FACEBOOK LOGIN
// ========================================

export default function FacebookLogin(
	props: ButtonProps & React.ComponentPropsWithoutRef<"button">
) {
	// Render
	return (
		<Button
			type="submit"
			className={classes.facebookButton}
			leftSection={<FacebookIcon />}
			variant="default"
			size="md"
			onClick={() => login("facebook", "/")}
			{...props}
		>
			Facebook
		</Button>
	)
}
