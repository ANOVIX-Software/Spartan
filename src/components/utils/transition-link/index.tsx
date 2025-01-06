/* ================================================================
Description: Link with transition between pages
Author: Noah Huesman

Creation Date: 01/02/2025
Modification History:
#1 (01/02/2025) - Initial creation - Noah Huesman
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
	// Initialize Router
	const router = useRouter()

	// Handle Transition
	const handleTransition = async (
		e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
	) => {
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
