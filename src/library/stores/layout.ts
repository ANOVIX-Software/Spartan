/* ================================================================
Description: Store for the navbar and aside collapse state
Author: Noah Huesman

Creation Date: 01/02/2025
Modification History:
#1 (01/02/2025) - Initial creation - Noah Huesman
#2 (01/17/2025) - Removed persist option and added open and close functions - Noah Huesman
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
	toggleNavbar: () => void
	openNavbar: () => void
	closeNavbar: () => void

	// Aside
	isAsideCollapsed: boolean
	toggleAside: () => void
	openAside: () => void
	closeAside: () => void
}

// ========================================
// LAYOUT STORE
// ========================================

export const useLayoutStore = create<LayoutState>()((set) => ({
	// Navbar
	isNavbarCollapsed: true, // Initial state
	toggleNavbar: () =>
		set((state) => ({
			isNavbarCollapsed: !state.isNavbarCollapsed,
		})),
	openNavbar: () => set({ isNavbarCollapsed: false }),
	closeNavbar: () => set({ isNavbarCollapsed: true }),

	// Aside
	isAsideCollapsed: true, // Initial state
	toggleAside: () =>
		set((state) => ({
			isAsideCollapsed: !state.isAsideCollapsed,
		})),
	openAside: () => set({ isAsideCollapsed: false }),
	closeAside: () => set({ isAsideCollapsed: true }),
}))
