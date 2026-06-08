# 🎓 PlaySchl — Modern School Management Platform

> A production-ready, enterprise-grade school management web application built with a clean architecture monorepo.

## Tech Stack

| Layer         | Technology                                    |
|---------------|-----------------------------------------------|
| **Frontend**  | React 18 · TypeScript · Vite · Zustand        |
| **Backend**   | Node.js · Express · TypeScript · Prisma       |
| **Database**  | PostgreSQL 16 · Redis 7                       |
| **Infra**     | Docker · Turborepo · GitHub Actions           |
| **Testing**   | Vitest · Playwright · Supertest               |

## Quick Start

```bash
# 1. Clone & install
git clone <repo-url> playschl
cd playschl
npm install

# 2. Start infrastructure
cp .env.example .env
docker-compose up -d postgres redis

# 3. Setup database
npm run db:migrate
npm run db:seed

# 4. Start development servers
npm run dev
```

**Frontend:** http://localhost:3000  
**API:** http://localhost:4000  
**API Docs:** http://localhost:4000/api/v1/docs

### Default Admin Login
```
Email:    admin@playschl.com
Password: Admin@123
```

## Project Structure

```
playschl/
├── apps/
│   ├── api/                    # Backend (Express + TypeScript)
│   │   ├── prisma/             # Database schema, migrations, seed
│   │   ├── src/
│   │   │   ├── main.ts         # Server bootstrap
│   │   │   ├── app.ts          # Express app factory
│   │   │   ├── config/         # Zod-validated env config
│   │   │   ├── routes/         # Route aggregator
│   │   │   ├── modules/        # Feature modules ⬇
│   │   │   │   ├── auth/       # Authentication & authorization
│   │   │   │   ├── students/   # Student management
│   │   │   │   ├── teachers/   # Teacher management
│   │   │   │   ├── parents/    # Parent portal
│   │   │   │   ├── attendance/ # Attendance tracking
│   │   │   │   ├── timetable/  # Timetable management
│   │   │   │   ├── assignments/# Homework & assignments
│   │   │   │   ├── exams/      # Exams & results
│   │   │   │   ├── fees/       # Fee management
│   │   │   │   ├── notifications/ # Announcements
│   │   │   │   ├── dashboard/  # Analytics
│   │   │   │   ├── settings/   # App settings
│   │   │   │   ├── classes/    # Class management
│   │   │   │   ├── subjects/   # Subject management
│   │   │   │   └── academic-years/
│   │   │   ├── common/         # Shared backend code
│   │   │   │   ├── middleware/ # Auth, validation, error handling
│   │   │   │   ├── errors/     # Typed error hierarchy
│   │   │   │   └── utils/      # Async handler, pagination
│   │   │   └── infrastructure/ # External services
│   │   │       ├── database/   # Prisma client
│   │   │       ├── cache/      # Redis + cache service
│   │   │       ├── logger/     # Pino structured logging
│   │   │       ├── email/      # Nodemailer service
│   │   │       └── storage/    # S3/MinIO file storage
│   │   └── tests/
│   │       ├── unit/           # Unit tests (Vitest)
│   │       ├── integration/    # API integration tests
│   │       ├── e2e/            # End-to-end tests
│   │       ├── fixtures/       # Test data
│   │       └── helpers/        # Test utilities
│   │
│   └── web/                    # Frontend (React + Vite)
│       ├── public/             # Static assets
│       ├── src/
│       │   ├── main.tsx        # React entry
│       │   ├── App.tsx         # Provider composition
│       │   ├── router/         # Routes & guards
│       │   ├── providers/      # Auth, Theme providers
│       │   ├── stores/         # Zustand state (auth, UI)
│       │   ├── services/api/   # Axios client + API services
│       │   ├── hooks/          # Custom React hooks
│       │   ├── components/     # UI components ⬇
│       │   │   ├── common/     # Button, Input, Modal, Table...
│       │   │   ├── layout/     # Sidebar, Header, DashboardLayout
│       │   │   ├── charts/     # Chart.js wrappers
│       │   │   └── forms/      # Login, Student, Teacher forms
│       │   ├── pages/          # Route-mapped pages ⬇
│       │   │   ├── auth/       # Login, Forgot Password
│       │   │   ├── dashboard/  # Dashboard
│       │   │   ├── students/   # List, Detail, Create
│       │   │   ├── teachers/   # List, Detail, Create
│       │   │   ├── parents/    # List, Detail
│       │   │   ├── attendance/ # Mark, Report
│       │   │   ├── timetable/  # View, Edit
│       │   │   ├── assignments/# List, Detail, Create
│       │   │   ├── exams/      # List, Detail, Results
│       │   │   ├── fees/       # List, Payment, Report
│       │   │   ├── notifications/
│       │   │   ├── settings/   # Settings, Profile
│       │   │   └── errors/     # 404, 403
│       │   ├── styles/         # CSS tokens & globals
│       │   ├── utils/          # Format, validation
│       │   ├── constants/      # App constants
│       │   ├── types/          # Frontend types
│       │   └── assets/         # Images, icons
│       └── tests/
│           ├── unit/           # Component/hook tests
│           └── e2e/            # Playwright E2E tests
│
├── packages/
│   ├── shared/                 # Shared types & constants
│   │   └── src/
│   │       ├── types/          # Domain interfaces
│   │       └── constants/      # Shared enums & values
│   ├── ui/                     # Shared component library
│   │   └── src/
│   └── config/                 # Shared lint/format configs
│
├── docker/
│   ├── api/Dockerfile          # Multi-stage API build
│   ├── web/Dockerfile          # Multi-stage Web build
│   ├── web/nginx.conf          # Production Nginx config
│   └── postgres/init.sql       # DB initialization
│
├── docs/
│   ├── api/                    # API documentation
│   ├── architecture/           # Architecture overview
│   ├── guides/                 # Developer guides
│   └── deployment/             # Deployment guides
│
├── .github/workflows/ci.yml   # CI/CD pipeline
├── docker-compose.yml          # Local development stack
├── turbo.json                  # Turborepo pipeline
├── tsconfig.json               # Root TypeScript config
├── .env.example                # Environment template
└── package.json                # Monorepo root
```

## Module Pattern

Every backend feature module follows the same structure:

```
modules/<feature>/
├── <feature>.routes.ts        # Express router + middleware
├── <feature>.controller.ts    # HTTP request/response handler
├── <feature>.service.ts       # Business logic
├── <feature>.repository.ts    # Data access (Prisma)
├── <feature>.validation.ts    # Zod schemas
└── index.ts                   # Barrel export
```

## Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start all apps in development |
| `npm run build` | Build all apps |
| `npm run test` | Run all tests |
| `npm run test:e2e` | Run Playwright E2E tests |
| `npm run lint` | Lint all workspaces |
| `npm run db:migrate` | Run database migrations |
| `npm run db:seed` | Seed development data |
| `npm run db:studio` | Open Prisma Studio |
| `npm run docker:up` | Start Docker services |

## Naming Conventions

| Item | Convention | Example |
|------|-----------|---------|
| Files | kebab-case | `student-list.page.tsx` |
| Components | PascalCase | `StudentListPage` |
| Hooks | camelCase with `use` prefix | `useAuth`, `useDebounce` |
| Stores | camelCase with `.store` suffix | `auth.store.ts` |
| API services | camelCase with `.api` suffix | `students.api.ts` |
| Middleware | kebab-case with `.middleware` suffix | `auth.middleware.ts` |
| Validation | kebab-case with `.validation` suffix | `auth.validation.ts` |
| Tests | same name with `.test` or `.spec` suffix | `auth.service.test.ts` |

## Roles & Access

| Feature | Admin | Teacher | Student | Parent |
|---------|:-----:|:-------:|:-------:|:------:|
| Dashboard | ✅ | ✅ | ✅ | ✅ |
| Students | ✅ | ✅ (read) | ❌ | ❌ |
| Teachers | ✅ | ❌ | ❌ | ❌ |
| Attendance | ✅ | ✅ | ❌ | ❌ |
| Timetable | ✅ | ✅ | ✅ (read) | ❌ |
| Assignments | ✅ | ✅ | ✅ | ❌ |
| Exams/Results | ✅ | ✅ | ✅ (read) | ✅ (read) |
| Fees | ✅ | ❌ | ❌ | ✅ |
| Notifications | ✅ | ✅ | ✅ (read) | ✅ (read) |
| Settings | ✅ | ❌ | ❌ | ❌ |

## License

Private — All rights reserved.
