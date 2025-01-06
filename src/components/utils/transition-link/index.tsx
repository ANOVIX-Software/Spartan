/* ================================================================
Description: Link with transition between pages
Author: Noah Huesman

Creation Date: 01/02/2025
Modification History:
#1 (01/02/2025) - Initial creation - Noah Huesman
#2 (01/06/2025) - Added logic for closing navbar and aside - Noah Huesman
================================================================ */

// ========================================
// DIRECTIVES
// ========================================

"use client"

// ========================================
// IMPORTS
// ========================================

// React
import React, { ReactNode } from "react"

// Next
import Link, { LinkProps } from "next/link"
import { useRouter } from "next/navigation"

// Utils
import sleep from "@/lib/utils/sleep"

// Layout store
import useLayoutStore from "@/lib/stores/layout"

// ========================================
// TRANSITION LINK PROPS
// ========================================

interface TransitionLinkProps extends LinkProps {
	children: ReactNode
	href: string
}

// ========================================
// TRANSITION LINK
// ========================================

export default function TransitionLink({
	children,
	href,
	...props
}: TransitionLinkProps) {
	// Layout store
	const { isNavbarCollapsed, isAsideCollapsed } = useLayoutStore()

	// Initialize Router
	const router = useRouter()

	// Handle Transition
	const handleTransition = async (
		e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
	) => {
		// If navbar or aside are open, close them
		if (!isNavbarCollapsed)
			useLayoutStore.setState({ isNavbarCollapsed: true })
		if (!isAsideCollapsed)
			useLayoutStore.setState({ isAsideCollapsed: true })

		// Prevent default behavior
		e.preventDefault()

		// Grab body and add transition class
		const body = document.querySelector("body")
		body?.classList.add("page-transition")

		// Sleep on transition start
		await sleep(250)

		// Navigate to page
		await router.push(href)

		// Sleep on transition end
		await sleep(250)

		// Remove transition class
		body?.classList.remove("page-transition")
	}

	// Render
	return (
		<Link onClick={handleTransition} href={href} {...props}>
			{children}
		</Link>
	)
}
