/* ================================================================
Description: Document collection server actions
Author: Noah Huesman

Creation Date: 01/02/2025
Modification History:
#1 (01/02/2025) - Initial creation - Noah Huesman
================================================================ */

// ========================================
// DIRECTIVES
// ========================================

"use server"

// ========================================
// IMPORTS
// ========================================

// Prisma
import { prisma } from "@/prisma"

// Utils library
import { createLogger } from "@/library/utils"

// ========================================
// LOGGER INTIALIZATION
// ========================================

const logger = await createLogger()

// ========================================
// GET USER DOCUMENTS
// ========================================

export const getUserDocuments = async (userId: string) => {
	try {
		// Fetch the user's documents
		const documents = await prisma.document.findMany({
			where: {
				userId: userId,
			},
		})

		// Log success in dev
		if (process.env.NODE_ENV === "development") {
			logger.info(`Successfully fetched documents for user: ${userId}`, {
				documents: documents,
			})
		}

		// Return the user's documents
		return documents
	} catch (error) {
		// Log and throw error
		logger.error("Failed to fetch user's documents", {
			error: error instanceof Error ? error.message : "Unknown error",
			userId,
		})

		throw new Error("Failed to fetch user's documents")
	}
}
