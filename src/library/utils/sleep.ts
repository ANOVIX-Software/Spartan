/* ================================================================
Description: Function to sleep for a specified amount of time
Author: Noah Huesman

Creation Date: 01/02/2025
Modification History:
#1 (01/02/2025) - Initial creation - Noah Huesman
================================================================ */

// ========================================
// SLEEP
// ========================================

export function sleep(ms: number): Promise<void> {
	// Return an empty promise after a specified time
	return new Promise((resolve) => setTimeout(resolve, ms))
}
