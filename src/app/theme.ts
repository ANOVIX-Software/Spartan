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
		// Cool blue
		"accent-primary": [
			"#edf3ff",
			"#dce3f3",
			"#b6c5e3",
			"#8ea5d4",
			"#6d8ac7",
			"#5779bf",
			"#4c70bd",
			"#3d5fa7",
			"#335596",
			"#264986",
		],
	},
})

// ========================================
// EXPORTS
// ========================================

export const theme = mergeMantineTheme(DEFAULT_THEME, themeOverride)
