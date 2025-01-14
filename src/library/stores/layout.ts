/* ================================================================
Description: Store for the navbar and aside collapse state
Author: Noah Huesman

Creation Date: 01/02/2025
Modification History:
#1 (01/02/2025) - Initial creation - Noah Huesman
================================================================ */

// ========================================
// IMPORTS
// ========================================

// Zustand
import { create } from "zustand"
import { persist, PersistOptions } from "zustand/middleware"

// ========================================
// INTERFACE
// ========================================

interface LayoutState {
	// Navbar
	isNavbarCollapsed: boolean
	toggleNavbarCollapse: () => void

	// Aside
	isAsideCollapsed: boolean
	toggleAsideCollapse: () => void
}

// ========================================
// LAYOUT STORE
// ========================================

export const useLayoutStore = create<LayoutState>()(
	// Preserve state in local storage
	persist(
		(set) => ({
			// Navbar
			isNavbarCollapsed: true, // Initial state
			toggleNavbarCollapse: () =>
				set((state) => ({
					isNavbarCollapsed: !state.isNavbarCollapsed,
				})),

			// Aside
			isAsideCollapsed: true, // Initial state
			toggleAsideCollapse: () =>
				set((state) => ({
					isAsideCollapsed: !state.isAsideCollapsed,
				})),
		}),
		{
			name: "layout-storage",
		} as PersistOptions<LayoutState>
	)
)
