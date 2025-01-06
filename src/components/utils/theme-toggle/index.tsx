/* ================================================================
Description: Theme toggle
Author: Noah Huesman

Creation Date: 01/06/2025
Modification History:
#1 (01/06/2025) - Initial creation - Noah Huesman
================================================================ */

// ========================================
// IMPORTS
// ========================================

// CSS
import classes from "./index.module.css"

// Mantine
import {
	ActionIcon,
	Group,
	useComputedColorScheme,
	useMantineColorScheme,
} from "@mantine/core"

// CLSX
import cx from "clsx"

// Tabler icons
import { IconMoon, IconSun } from "@tabler/icons-react"

// ========================================
// THEME TOGGLE
// ========================================

export function ThemeToggle() {
	// Get and set color scheme
	const { setColorScheme } = useMantineColorScheme()
	const computedColorScheme = useComputedColorScheme("light", {
		getInitialValueInEffect: true,
	})

	// Render
	return (
		<Group justify="center">
			<ActionIcon
				onClick={() =>
					setColorScheme(
						computedColorScheme === "light" ? "dark" : "light"
					)
				}
				variant="default"
				size="xl"
				aria-label="Toggle color scheme"
			>
				<IconSun
					className={cx(classes.icon, classes.light)}
					stroke={1.5}
				/>
				<IconMoon
					className={cx(classes.icon, classes.dark)}
					stroke={1.5}
				/>
			</ActionIcon>
		</Group>
	)
}
