/* ================================================================
Description: Public page
Author: Noah Huesman

Creation Date: 01/02/2025
Modification History:
#1 (01/02/2025) - Initial creation - Noah Huesman
================================================================ */

// ========================================
// IMPORTS
// ========================================

// Components
import SaveDocument from "@/components/(public)/save-document"

// Mantine
import { Container, List, ListItem, Center, Loader, Text } from "@mantine/core"

// Auth server actions
import { getSession } from "@/lib/server/auth"

// Document server actions
import { getUserDocuments } from "@/lib/server/document"

// ========================================
// PUBLIC PAGE
// ========================================

export default async function PublicPage() {
	// Get session
	const session = await getSession()

	// If session doesn't exist render a message
	if (!session) {
		return (
			<Container fluid>
				<Text size="xl">
					You are not logged in. Please log in to access your
					documents.
				</Text>
			</Container>
		)
	}

	// Get user's documents
	const documents = await getUserDocuments(session.user?.id as string)

	// Render
	return (
		<Container fluid>
			<Text size="xl">
				Welcome, {session.user?.role}:{" "}
				{session.user?.name ?? session.user?.email ?? ""}!
			</Text>
			<Text size="lg">Your Documents:</Text>

			{!documents ? (
				<Center mt="xl">
					<Loader size="xl" variant="dots" />
				</Center>
			) : (
				<div>
					{documents.length === 0 ? (
						<Text>No documents found</Text>
					) : (
						<List spacing="xs" size="sm" mt="md">
							{documents.map((doc) => (
								<ListItem key={doc.id}>{doc.name}</ListItem>
							))}
						</List>
					)}
				</div>
			)}
			<SaveDocument />
		</Container>
	)
}
