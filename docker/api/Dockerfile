# ─── Stage 1: Base ───────────────────────────────────
FROM node:20-alpine AS base
RUN apk add --no-cache libc6-compat
WORKDIR /app

# ─── Stage 2: Dependencies ──────────────────────────
FROM base AS deps
COPY package.json package-lock.json* ./
COPY apps/api/package.json ./apps/api/
COPY packages/shared/package.json ./packages/shared/
COPY packages/config/package.json ./packages/config/
RUN npm ci --workspace=apps/api

# ─── Stage 3: Development ───────────────────────────
FROM base AS development
COPY --from=deps /app/node_modules ./node_modules
COPY . .
EXPOSE 4000
CMD ["npm", "run", "dev", "--workspace=apps/api"]

# ─── Stage 4: Build ─────────────────────────────────
FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build --workspace=apps/api

# ─── Stage 5: Production ────────────────────────────
FROM base AS production
ENV NODE_ENV=production
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 api
COPY --from=builder --chown=api:nodejs /app/apps/api/dist ./dist
COPY --from=builder --chown=api:nodejs /app/node_modules ./node_modules
COPY --from=builder --chown=api:nodejs /app/apps/api/package.json ./package.json
USER api
EXPOSE 4000
CMD ["node", "dist/main.js"]
