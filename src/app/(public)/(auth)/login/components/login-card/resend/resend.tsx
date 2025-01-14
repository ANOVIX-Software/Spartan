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

// CSS
// import classes from "./resend.module.css"

// Mantine
import { TextInput, ActionIcon } from "@mantine/core"
import { useForm } from "@mantine/form"
import { zodResolver } from "mantine-form-zod-resolver"

// Zod
import { z } from "zod"

// Tabler icons
import { IconSend2 } from "@tabler/icons-react"

// Server library
import { login } from "@/library/server"

// ========================================
// RESEND
// ========================================

export function Resend() {
	// Email validation schema
	const schema = z.object({
		email: z
			.string()
			.trim()
			.email({ message: "Invalid email" })
			.max(100, { message: "Email must be at most 100 characters" }),
	})

	// Email form
	const form = useForm({
		mode: "uncontrolled",
		initialValues: { email: "" },
		validate: zodResolver(schema),
	})

	// Render
	return (
		<form
			onSubmit={form.onSubmit(() =>
				login("resend", "/", {
					email: form.getValues().email,
				})
			)}
		>
			<TextInput
				key={form.key("email")}
				label="Email"
				placeholder="john.doe@email.com"
				withAsterisk
				rightSectionWidth={50}
				{...form.getInputProps("email")}
				rightSection={
					<ActionIcon
						type="submit"
						size={26}
						w={50}
						variant="transparent"
						loading={form.submitting}
					>
						<IconSend2 size={18} stroke={1.5} />
					</ActionIcon>
				}
			></TextInput>
		</form>
	)
}
