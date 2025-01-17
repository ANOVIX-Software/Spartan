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

export const useLayoutStore = create<LayoutState>()((set) => ({
	// Navbar
	isNavbarCollapsed: true, // Initial state
	toggleNavbarCollapse: () =>
		set((state) => ({
			isNavbarCollapsed: !state.isNavbarCollapsed,
		})),
	openNavbar: () => set({ isNavbarCollapsed: false }),
	closeNavbar: () => set({ isNavbarCollapsed: true }),

	// Aside
	isAsideCollapsed: true, // Initial state
	toggleAsideCollapse: () =>
		set((state) => ({
			isAsideCollapsed: !state.isAsideCollapsed,
		})),
	openAside: () => set({ isAsideCollapsed: false }),
	closeAside: () => set({ isAsideCollapsed: true }),
}))
