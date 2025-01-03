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

// Zod
import z from "zod"

// Logger
import logger from "@/lib/utils/logger"

// ========================================
// GET A USER'S DOCUMENTS
// ========================================

export const getUserDocuments = async (userId: string) => {
	// Validate the userId using zod
	const input = z
		.object({
			userId: z.string(),
		})
		.parse({ userId }) // Validate the input

	try {
		// Fetch the user's documents
		const documents = await prisma.document.findMany({
			where: {
				userId: input.userId,
			},
		})

		// Log the successful retrieval of documents
		logger.info(
			`Successfully fetched documents for user: ${input.userId}`,
			{
				userId: input.userId,
				documentCount: documents.length,
			}
		)

		// Return the user's documents
		return documents
	} catch (error) {
		// Log error
		logger.error("Failed to fetch user's documents", {
			error: error instanceof Error ? error.message : "Unknown error",
			userId,
		})

		// Throw an error
		throw new Error("Failed to fetch user's documents")
	}
}
