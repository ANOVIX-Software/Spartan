/* ================================================================
Description: Resend eamil form for loggin in with Resend
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

// Mantine
import { TextInput, ActionIcon } from "@mantine/core"
import { useForm } from "@mantine/form"
import { zodResolver } from "mantine-form-zod-resolver"

// Zod
import { z } from "zod"

// Tabler icons
import { IconSend2 } from "@tabler/icons-react"

// Auth server actions
import { login } from "@/lib/server/auth"

// ========================================
// RESEND LOGIN
// ========================================

export default function ResendLogin() {
	// Email validation schema
	const emailSchema = z.object({
		email: z.string().email({ message: "Invalid email" }),
	})

	// Email form
	const emailForm = useForm({
		mode: "uncontrolled",
		initialValues: { email: "" },
		validate: zodResolver(emailSchema),
	})

	// Render
	return (
		<form
			onSubmit={emailForm.onSubmit(() =>
				login("resend", "/", emailForm.getValues().email)
			)}
		>
			<TextInput
				key={emailForm.key("email")}
				label="Email"
				placeholder="your@email.com"
				withAsterisk
				rightSectionWidth={50}
				{...emailForm.getInputProps("email")}
				rightSection={
					<ActionIcon
						type="submit"
						size={26}
						w={50}
						variant="transparent"
					>
						<IconSend2 size={18} stroke={1.5} />
					</ActionIcon>
				}
			></TextInput>
		</form>
	)
}
