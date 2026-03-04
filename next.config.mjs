/** @type {import('next').NextConfig} */

// List of required environment variables
const requiredEnvVars = ["SMTP_PASS"];

// Check for missing environment variables
requiredEnvVars.forEach((envVar) => {
  if (!process.env[envVar]) {
    console.warn(
      `⚠️ WARNING: Missing required environment variable: ${envVar}`
    );
  }
});

const nextConfig = {
  images: {
    qualities: [100, 75],
  },
  async rewrites() {
    return [
      {
        source: "/ingest/static/:path*",
        destination: "https://eu-assets.i.posthog.com/static/:path*",
      },
      {
        source: "/ingest/:path*",
        destination: "https://eu.i.posthog.com/:path*",
      },
    ];
  },
  // This is required to support PostHog trailing slash API requests
  skipTrailingSlashRedirect: true,
};

export default nextConfig;
