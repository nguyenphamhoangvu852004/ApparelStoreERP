
## Project Overview
**ApparelStoreERP** is a robust enterprise resource planning system designed specifically for apparel retail management. The system focuses on scalability, maintanability and strict engineering standards.

<!-- **Key Features:**
- **User Management**: Role-Based Access Control (RBAC) with granular permissions.
- **Domain Modeling**: Strict adherence to DDD principles using Value Objects and Entities.
- **Scalable Architecture**: Decoupled layers for presentation, application logic, and infrastructure. -->

## Tech Stack
| Category | Technology |
| :--- | :--- |
| **Language** | TypeScript (^5.7.3) |
| **Backend Framework** | NestJS (^11.0.1) |
| **Database** | MySQL |
| **Unit Testing** | Jest |
| **Linting/Formatting** | ESLint, Prettier |

## Architecture
The project implements **Clean Architecture** combined with **Domain-Driven Design (DDD)** and applied some essential **Design Partterns** such as: Abstract Factory Pattern, Singleton Pattern, Usecase Pattern, Repository Pattern, ...

### Folder Structure
```text
src/
├── modules/                # Business Domains
│   ├── user/               # User Domain Module
│   │   ├── application/    # Use cases, DTOs, and Ports
│   │   ├── domain/         # Domain Entities and business logic
│   │   ├── infrastructure/ # Persistence and external implementations
│   │   └── presentation/   # Controllers and API entry points
│   └── product/            # Product Domain Module (In development)
├── shared/                 # Cross-cutting concerns
│   ├── domain/             # Shared Value Objects and Entities
│   └── interfaces/         # Shared interfaces (e.g., IValidator)
└── main.ts                 # Application entry point
```

## Rules
### Engineering Conventions
- **Encapsulation**: Always use `private` for attributes that are not part of the public API.
- **Immutability**: Always use `readonly` for immutable Value Object attributes.
- **Creational Patterns**: Use `UserProps` types for constructors and provide static `create()` methods for complex initialization.
- **Validation**: Validation logic can be encapsulated (e.g., `Address.validate()`) or implemented before an Object created into heap memmory (e.g., `if (validate something) {throw new Error('Invalid...') return new Object here}`)
- **Domain Logic**: Pure business rules must reside in Entities or Value Objects, not in Services.

### Naming Conventions
- **Files**: `kebab-case` (e.g., `user.controller.ts`).
- **Classes**: `PascalCase` (e.g., `UserService`).
- **Interfaces**: Prefixed with `I` (e.g., `IValidator`).

## Getting Started
### Prerequisites
- Node.js (Latest LTS recommended)
- npm

### Installation
```bash
$ npm install
```

### Environment Setup
Copy the example environment file and configure your local settings:
```bash
$ cp env.example .env
```

### Running Locally
```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Scripts
| Command | Description |
| :--- | :--- |
| `npm run build` | Compiles the application to the `dist` directory. |
| `npm run start` | Runs the compiled application. |
| `npm run start:dev` | Runs the application in watch mode for development. |
| `npm run test` | Executes unit tests using Jest. |
| `npm run test:e2e` | Executes end-to-end tests. |
| `npm run lint` | Runs ESLint to find and fix code style issues. |

## Environment Variables
| Variable | Description | Default |
| :--- | :--- | :--- |
| `MYSQL_HOST` | Database host address | `localhost` |
| `MYSQL_USER` | Database username | `root` |
| `MYSQL_PASSWORD` | Database password | `root` |
| `MYSQL_DATABASE` | Target database name | `apparalstoreerp` |
| `MYSQL_PORT` | Database port | `3306` |
| `PORT` | Application listener port | `3000` |

## API Documentation
The API is organized by resource-based routes.
- **Root Endpoint**: `/`
- **User Module**: `/user`
  - `POST /user`: Create user
  - `GET /user`: List all users
  - `GET /user/:id`: Get user details
  - `PATCH /user/:id`: Update user
  - `DELETE /user/:id`: Remove user

**Authentication**: Not detectable from current repository.

## Database
- **Engine**: MySQL
- **Pattern**: Repository Pattern used to decouple domain from persistence.

## Testing
The project uses **Jest** for testing, following a pyramid strategy:
- **Unit Tests**: Located alongside source files (`.spec.ts`). Focus on VOs, Pure entity's business logic he .
<!-- - **E2E Tests**: Located in the `test/` directory. Focus on full request/response cycles. -->

<!-- # e2e tests
$ npm run test:e2e -->

```bash
# unit tests
$ npm run test

# test coverage
$ npm run test:cov
```
## Engineering Notes
- **Architectural Strength**: Strong use of Value Objects ensures data integrity at the domain level.
- **Technical Debt**: `product` module and `infrastructure` layers are currently placeholders and require implementation.
- **Scalability**: The modular monolith structure allows for easy extraction of modules into microservices if needed.

---
*Generated by Antigravity, and reviewed by me ^^*
