# PlaySchl Architecture Overview

## Monorepo Structure (Turborepo)

This project uses a monorepo architecture managed by Turborepo with the following workspaces:

- **apps/web** — React + Vite frontend
- **apps/api** — Express + TypeScript backend
- **packages/shared** — Shared types, constants, and utilities
- **packages/ui** — Shared React component library
- **packages/config** — Shared ESLint, Prettier, TypeScript configs

## Backend Architecture (Clean Architecture)

`
apps/api/src/
+-- main.ts                    # Bootstrap & graceful shutdown
+-- app.ts                     # Express app factory
+-- config/                    # Env-validated configuration
+-- routes/                    # Route aggregator
+-- modules/                   # Feature modules (DDD-inspired)
|   +-- auth/
|   |   +-- auth.routes.ts     # Route definitions
|   |   +-- auth.controller.ts # HTTP layer (thin)
|   |   +-- auth.service.ts    # Business logic
|   |   +-- auth.repository.ts # Data access (Prisma)
|   |   +-- auth.validation.ts # Zod schemas
|   |   +-- index.ts           # Barrel export
|   +-- students/
|   +-- teachers/
|   +-- ... (same pattern)
+-- common/
|   +-- middleware/             # Auth, validation, error handling
|   +-- errors/                # Typed error hierarchy
|   +-- utils/                 # Async handler, pagination
+-- infrastructure/
    +-- database/              # Prisma client singleton
    +-- cache/                 # Redis client + cache service
    +-- logger/                # Pino structured logger
    +-- email/                 # Nodemailer service
    +-- storage/               # S3/MinIO file storage
`

## Frontend Architecture

`
apps/web/src/
+-- main.tsx                   # React entry point
+-- App.tsx                    # Provider composition root
+-- router/                    # Routing + guards
+-- providers/                 # Context providers
+-- stores/                    # Zustand state management
+-- services/api/              # Axios API client + services
+-- hooks/                     # Custom React hooks
+-- components/
|   +-- common/                # Reusable UI components
|   +-- layout/                # Sidebar, Header, Footer
|   +-- charts/                # Chart.js wrappers
|   +-- forms/                 # Form components
+-- pages/                     # Route-mapped page components
+-- styles/                    # CSS design tokens + globals
+-- utils/                     # Format, validation helpers
+-- constants/                 # App-wide constants
+-- types/                     # Frontend-specific types
+-- assets/                    # Images, icons
`

## Data Flow

`
Client -> API Client (Axios) -> Express Router -> Controller -> Service -> Repository -> Prisma -> PostgreSQL
                                                      |
                                                  Cache (Redis)
`

## Key Design Decisions

1. **Feature-based modules** — Each domain (students, teachers, etc.) is a self-contained module
2. **Clean Architecture layers** — Controller -> Service -> Repository separation
3. **Zod validation** — Schema-first validation shared between runtime and types
4. **Zustand + React Query** — Zustand for client state, React Query for server state
5. **Prisma ORM** — Type-safe database access with migrations
