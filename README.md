
# Node.js Boilerplate

This is a **Node.js Boilerplate** project designed to provide a simple yet powerful starting point for building Node.js applications. It includes a basic setup using **TypeScript**, **Express.js**, **Prisma**, and other commonly used libraries for building scalable and maintainable applications.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [Available Scripts](#available-scripts)
- [Dependencies](#dependencies)
- [License](#license)

## Features

- **Express.js** as the web framework
- **TypeScript** for static type checking
- **Prisma** ORM for database interactions
- **Joi** for validation
- **JWT** for user authentication
- Well-structured and scalable project layout

## Installation

### Prerequisites

- Node.js (v14.x or higher)
- Yarn or npm (Yarn recommended)
- PostgreSQL (for Prisma)

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/nguptaesaral/node-boilerplate.git
   ```

2. Navigate to the project directory:
   ```bash
   cd node-boilerplate
   ```

3. Install the dependencies:
   ```bash
   yarn install
   ```

4. Create a `.env` file based on `.env.dev`:
   ```bash
   cp .env.dev .env
   ```

5. Update the `.env` file with your configuration (e.g., database URL, JWT secret).

6. Apply the Prisma migrations:
   ```bash
   yarn migrate
   ```

7. (Optional) Seed the database:
   ```bash
   yarn seed
   ```

8. Start the development server:
   ```bash
   yarn dev
   ```


## Project Structure

```bash
src/
├── config/            # Configuration files (e.g., database, environment)
├── controllers/       # Controllers for handling HTTP requests
├── middlewares/       # Custom Express.js middlewares (e.g., authentication)
├── models/            # Prisma models (defined in schema.prisma)
├── public/            # Public assets (if applicable)
├── routes/            # API routes
│   └── v1/            # Versioned API routes
├── services/          # Business logic and service layer
├── types/             # TypeScript types
├── utils/             # Utility functions
├── validations/       # Joi validation schemas
├── index.ts           # Application entry point
prisma/
├── migrations/        # Prisma migration files
├── schema.prisma      # Prisma schema definition
.gitignore             # Files to be ignored by Git
LICENSE                # License information
package.json           # Node.js project dependencies and scripts
README.md              # This file
tsconfig.json          # TypeScript configuration
yarn.lock              # Yarn lockfile for dependencies
```

## Environment Variables

Create a `.env` file at the root of your project and add the following environment variables:

```bash
DATABASE_URL=postgres://<username>:<password>@<host>:<port>/<database>
JWT_SECRET=your_jwt_secret
```

- **`DATABASE_URL`**: Connection string for PostgreSQL.
- **`JWT_SECRET`**: Secret key for signing JWT tokens.

## Available Scripts

- **`yarn build`**: Compile TypeScript to JavaScript.
- **`yarn start`**: Start the server in production mode.
- **`yarn dev`**: Start the server in development mode with hot-reloading.
- **`yarn migrate`**: Run Prisma database migrations.
- **`yarn seed`**: Seed the database with test data.

## Dependencies

- **Express**: Web framework for Node.js.
- **Prisma**: ORM for database access.
- **JWT**: Token-based authentication.
- **Joi**: Data validation library.
- **Bcrypt**: Password hashing.

## License

This project is licensed under the **MIT License**.
