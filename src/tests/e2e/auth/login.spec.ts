/* ================================================================
Description: Login test suite
Author: Noah Huesman

Creation Date: 01/06/2025
Modification History:
#1 (01/06/2025) - Initial creation - Noah Huesman
================================================================ */

// ========================================
// IMPORTS
// ========================================

// Dotenv
import { config } from "dotenv"

// Playwright
import { test, expect } from "@playwright/test"

// ========================================
// ENV CONFIG
// ========================================

// Load environment variables
config()

// ========================================
// USER LOGIN
// ========================================

test("user login", async ({ page }) => {
	// Go to the login page
	await page.goto("http://localhost:3000/login")

	// Click the login button
	await page
		.getByRole("button", { name: "KEYCLOAK DEVELOPMENT LOGIN" })
		.click()

	// Fill the username input
	await page
		.locator("#username")
		.fill(process.env.TEST_KEYCLOAK_USER_USERNAME as string)

	// Fill the password input
	await page
		.locator("#password")
		.fill(process.env.TEST_KEYCLOAK_PASSWORD as string)

	// Click the login button
	await page.getByRole("button", { name: "Sign In" }).click()

	// Try to navigate to dashboard page
	await page.goto("http://localhost:3000/dashboard")

	// Confirm we are still on the home page - Dashboard is not accessible to users
	await expect(page.url()).toBe("http://localhost:3000/")
})

// ========================================
// MODERATOR LOGIN
// ========================================

test("moderator login", async ({ page }) => {
	// Go to the login page
	await page.goto("http://localhost:3000/login")

	// Click the login button
	await page
		.getByRole("button", { name: "KEYCLOAK DEVELOPMENT LOGIN" })
		.click()

	// Fill the username input
	await page
		.locator("#username")
		.fill(process.env.TEST_KEYCLOAK_MODERATOR_USERNAME as string)

	// Fill the password input
	await page
		.locator("#password")
		.fill(process.env.TEST_KEYCLOAK_PASSWORD as string)

	// Click the login button
	await page.getByRole("button", { name: "Sign In" }).click()

	// Try to navigate to dashboard page
	await page.goto("http://localhost:3000/dashboard")

	// Confirm we made it to the dashboard page
	await expect(page.url()).toBe("http://localhost:3000/dashboard")
})

// ========================================
// ADMIN LOGIN
// ========================================

test("admin login", async ({ page }) => {
	// Go to the login page
	await page.goto("http://localhost:3000/login")

	// Click the login button
	await page
		.getByRole("button", { name: "KEYCLOAK DEVELOPMENT LOGIN" })
		.click()

	// Fill the username input
	await page
		.locator("#username")
		.fill(process.env.TEST_KEYCLOAK_ADMIN_USERNAME as string)

	// Fill the password input
	await page
		.locator("#password")
		.fill(process.env.TEST_KEYCLOAK_PASSWORD as string)

	// Click the login button
	await page.getByRole("button", { name: "Sign In" }).click()

	// Try to navigate to dashboard page
	await page.goto("http://localhost:3000/dashboard")

	// Confirm we made it to the dashboard page
	await expect(page.url()).toBe("http://localhost:3000/dashboard")
})
