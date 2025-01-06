/* ================================================================
Description: Magic link email for email verification via Resend
Author: Noah Huesman

Creation Date: 01/05/2025
Modification History:
#1 (01/05/2025) - Initial creation - Noah Huesman
================================================================ */

// ========================================
// IMPORTS
// ========================================

// React email
import {
	Html,
	Body,
	Button,
	Container,
	Head,
	Heading,
	Hr,
	Preview,
	Section,
	Text,
} from "@react-email/components"

// ========================================
// MAGIC LINK
// ========================================

export default function MagicLink({ url }: { url: string }) {
	return (
		<Html>
			<Head />
			<Preview>Your login code for Spartan</Preview>
			<Body style={main}>
				<Container style={container}>
					<Heading style={heading}>Your login for Spartan</Heading>
					<Section style={buttonContainer}>
						<Button style={button} href={url}>
							Login to Spartan
						</Button>
					</Section>
					<Text style={paragraph}>
						This link will only be valid for the next 24 hours.
					</Text>
					<Hr style={hr} />
				</Container>
			</Body>
		</Html>
	)
}

const main = {
	backgroundColor: "#ffffff",
	fontFamily:
		'-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
}

const container = {
	margin: "0 auto",
	padding: "20px 0 48px",
	maxWidth: "560px",
}

const heading = {
	fontSize: "24px",
	letterSpacing: "-0.5px",
	lineHeight: "1.3",
	fontWeight: "400",
	color: "#484848",
	padding: "17px 0 0",
}

const paragraph = {
	margin: "0 0 15px",
	fontSize: "15px",
	lineHeight: "1.4",
	color: "#3c4149",
}

const buttonContainer = {
	padding: "27px 0 27px",
}

const button = {
	backgroundColor: "#5e6ad2",
	borderRadius: "3px",
	fontWeight: "600",
	color: "#fff",
	fontSize: "15px",
	textDecoration: "none",
	textAlign: "center" as const,
	display: "block",
	padding: "11px 23px",
}

const hr = {
	borderColor: "#dfe1e4",
	margin: "42px 0 26px",
}
