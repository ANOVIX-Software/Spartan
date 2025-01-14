/* ================================================================
Description: Button for saving a document and showing a success notification
Author: Noah Huesman

Creation Date: 01/06/2025
Modification History:
#1 (01/06/2025) - Initial creation - Noah Huesman
================================================================ */

// ========================================
// DIRECTIVES
// ========================================

"use client"

// ========================================
// IMPORTS
// ========================================

// CSS
// import classes from "./save-document.module.css"

// Mantine
import { Button } from "@mantine/core"
import { notifications } from "@mantine/notifications"

// ========================================
// SAVE DOCUMENT
// ========================================

export function SaveDocument() {
	// Render
	return (
		<Button
			onClick={() =>
				notifications.show({
					title: "Save success",
					message: "Your document has been saved successfully.",
					color: "green",
				})
			}
		>
			Save document
		</Button>
	)
}
