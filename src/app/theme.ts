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
import { createTheme, DEFAULT_THEME, mergeMantineTheme } from "@mantine/core"

// ========================================
// THEME
// ========================================

// Theme override
const themeOverride = createTheme({
	// Primary color
	primaryColor: "accent-primary",

	// Colors
	colors: {
		// Light red
		"accent-primary": [
			"#faf0f1",
			"#eddde0",
			"#deb8be",
			"#d09099",
			"#c46e7b",
			"#bd5967",
			"#ba4d5d",
			"#a43f4d",
			"#933744",
			"#812c3a",
		],
	},
})

// ========================================
// EXPORTS
// ========================================

export const theme = mergeMantineTheme(DEFAULT_THEME, themeOverride)
