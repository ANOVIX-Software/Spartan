/* ================================================================
Description: Mantine theme configuration
Author: Noah Huesman

Creation Date: 01/02/2025
Modification History:
#1 (01/02/2025) - Initial creation - Noah Huesman
================================================================ */

// ========================================
// IMPORTS
// ========================================

// Mantine
import {
	createTheme,
	DEFAULT_THEME,
	mergeMantineTheme,
	colorsTuple,
} from "@mantine/core"

// ========================================
// THEME
// ========================================

// Theme override
const themeOverride = createTheme({
	// Primary color
	primaryColor: "accent-primary",

	// Colors
	colors: {
		// Flame
		"accent-primary": colorsTuple("#DE541E"),
	},
})

// ========================================
// EXPORTS
// ========================================

export const theme = mergeMantineTheme(DEFAULT_THEME, themeOverride)
