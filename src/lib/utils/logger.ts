/* ================================================================
Description: Logger configuration and instance uisng Winston
Author: Noah Huesman

Creation Date: 01/02/2025
Modification History:
#1 (01/02/2025) - Initial creation - Noah Huesman
================================================================ */

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
// LOGGER
// ========================================

// Configure logging level
const level = process.env.NODE_ENV === "production" ? "info" : "debug"

// Create logger instance
const logger = winston.createLogger({
	levels: logLevels.levels,
	transports: [
		// Console transport for logging in terminal
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
		}),
		// Rotating file transport for logging
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
		// Separate file for errors
		new winston.transports.File({
			filename: "logs/error.log",
			level: "error",
			maxsize: 5242880, // 5MB
			format: winston.format.combine(
				winston.format.timestamp(),
				winston.format.json()
			),
		}),
	],
})

// ========================================
// EXPORTS
// ========================================

export default logger
