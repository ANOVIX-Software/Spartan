/* ================================================================
Description: Error 404 page
Author: Noah Huesman

Creation Date: 01/06/2025
Modification History:
#1 (01/06/2025) - Initial creation - Noah Huesman
================================================================ */

// ========================================
// IMPORTS
// ========================================

// Components
import TransitionLink from "@/components/utils/transition-link"

// CSS
import classes from "./index.module.css"

// Mantine
import { Button, Container, Group, Text, Title } from "@mantine/core"

// ========================================
// ERROR 404
// ========================================

export default function Error404() {
	// Render
	return (
		<Container className={classes.root}>
			<div className={classes.label}>404</div>
			<Title className={classes.title}>Nothing to see here</Title>
			<Text
				c="dimmed"
				size="lg"
				ta="center"
				className={classes.description}
			>
				The page you are trying to open does not exist. You may have
				mistyped the address, or the page has been moved to another URL.
				If you think this is an error contact support.
			</Text>
			<Group justify="center">
				<TransitionLink href="/">
					<Button variant="outline" size="md">
						Take me back to home page
					</Button>
				</TransitionLink>
			</Group>
		</Container>
	)
}
