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

// Mantine
import { Container, List, ListItem, Center, Loader, Text } from "@mantine/core"

// Document server actions
import { getUserDocuments } from "@/lib/server/document"

// ========================================
// PUBLIC PAGE
// ========================================

export default async function PublicPage() {
	// Fetch user documents
	const documents = await getUserDocuments("6766f481b5a40a4c5760240d")

	// Render
	return (
		<Container fluid>
			<Text size="xl">Your Documents</Text>

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
		</Container>
	)
}
