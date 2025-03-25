/** @type {import('next').NextConfig} */

// List of required environment variables
const requiredEnvVars = ["SENDGRID_API_KEY"];

// Check for missing environment variables
requiredEnvVars.forEach((envVar) => {
  if (!process.env[envVar]) {
    console.warn(
      `⚠️ WARNING: Missing required environment variable: ${envVar}`,
    );
  }
});

const nextConfig = {};

export default nextConfig;
