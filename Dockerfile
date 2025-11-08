# Stage 1: build
FROM node:20-alpine AS builder
WORKDIR /app

# Install build tools
RUN apk add --no-cache python3 make g++ git

# Install pnpm
RUN npm install -g pnpm

# Copy only package files for caching
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install

# Copy source code
COPY . .

# Build the app
RUN pnpm run build

# Stage 2: production
FROM node:20-alpine
WORKDIR /app

# Install runtime tools
RUN apk add --no-cache tini
RUN npm install -g pnpm

# Copy built files from builder
COPY --from=builder /app/package.json ./
COPY --from=builder /app/pnpm-lock.yaml ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Use tini to handle signals
ENTRYPOINT ["/sbin/tini", "--"]

EXPOSE 3000
CMD ["pnpm", "start"]
