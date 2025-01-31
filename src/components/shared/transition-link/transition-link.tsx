/* ================================================================
Description: Link with transition between pages
Author: Noah Huesman

Creation Date: 01/02/2025
Modification History:
#1 (01/02/2025) - Initial creation - Noah Huesman
#2 (01/09/2025) - Added option to close navbar and aside - Noah Huesman
#3 (01/17/2025) - Replaced toggleNavbar and toggleAside with closeNavbar and closeAside functions - Noah Huesman
================================================================ */

// ========================================
// DIRECTIVES
// ========================================

"use client"

// ========================================
// IMPORTS
// ========================================

// CSS
// import classes from "./transition-link.module.css"

// React
import React, { ReactNode } from "react"

// Next
import Link, { LinkProps } from "next/link"
import { useRouter } from "next/navigation"

// Utils library
import { sleep } from "@/library/utils"

// Stores library
import { useLayoutStore } from "@/library/stores"

// ========================================
// TRANSITION LINK PROPS
// ========================================

interface TransitionLinkProps extends LinkProps {
	children: ReactNode
	href: string
	closeNavbarOnTransition: boolean
	closeAsideOnTransition: boolean
}

// ========================================
// TRANSITION LINK
// ========================================

export function TransitionLink({
	children,
	href,
	closeNavbarOnTransition,
	closeAsideOnTransition,
	...props
}: TransitionLinkProps) {
	// Layout store
	const { closeNavbar, closeAside } = useLayoutStore()

	// Initialize Router
	const router = useRouter()

	// Handle Transition
	const handleTransition = async (
		e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
	) => {
		// Close navbar and aside if specified
		if (closeNavbarOnTransition) closeNavbar()
		if (closeAsideOnTransition) closeAside()

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
