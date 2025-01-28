/* ================================================================
Description: Logger configuration and instance using Winston
Author: Noah Huesman

Creation Date: 01/02/2025
Modification History:
#1 (01/02/2025) - Initial creation - Noah Huesman
#2 (01/28/2025) - Updated to log to console on prod and to logs folder on dev - Noah Huesman
================================================================ */

// ========================================
// DIRECTIVES
// ========================================

"use server"

// ========================================
// IMPORTS
// ========================================

// Winston
import winston from "winston"
import DailyRotateFile from "winston-daily-rotate-file"

// ========================================
// LOGGER LEVELS AND COLORS
// ========================================

// Log levels and colors
const logLevels = {
	levels: {
		error: 0,
		warn: 1,
		info: 2,
		http: 3,
		verbose: 4,
		debug: 5,
		silly: 6,
	},
	colors: {
		error: "red",
		warn: "yellow",
		info: "green",
		http: "magenta",
		verbose: "cyan",
		debug: "blue",
		silly: "grey",
	},
}

// Add colors to console logs
winston.addColors(logLevels.colors)

// ========================================
// CREATE LOGGER
// ========================================

// Configure logging level
const level = process.env.NODE_ENV === "production" ? "info" : "debug"

// Create async function to initialize logger
export const createLogger = async () => {
	const transports = []

	// Console transport for all environments
	transports.push(
		new winston.transports.Console({
			level,
			format: winston.format.combine(
				winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
				winston.format.colorize(),
				winston.format.printf(
					({ level, message, timestamp }) =>
						`${timestamp} [${level}]: ${message}`
				)
			),
		})
	)

	// File transports for development only
	if (process.env.NODE_ENV === "development") {
		transports.push(
			new DailyRotateFile({
				filename: "logs/%DATE%.log",
				datePattern: "YYYY-MM-DD",
				maxSize: "10m", // 10mb
				maxFiles: "7d", // 7 days
				level: "info",
				format: winston.format.combine(
					winston.format.timestamp(),
					winston.format.json()
				),
			}),
			new winston.transports.File({
				filename: "logs/error.log",
				level: "error",
				maxsize: 5242880, // 5MB
				format: winston.format.combine(
					winston.format.timestamp(),
					winston.format.json()
				),
			})
		)
	}

	return winston.createLogger({
		levels: logLevels.levels,
		transports,
	})
}
