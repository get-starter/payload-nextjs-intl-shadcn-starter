# Payload Next.js I18n Shadcn Starter

This is a modern, production-ready starter template combining Payload CMS, Next.js (App Router), Shadcn UI, and a robust Multi-language system.

## Features
- Payload CMS
- Next.js
- Localization (I18n)
- Shadcn UI
- Seeding System
- Custom Global Data: Integrated providers for global state management

## Getting Started
```bash
#
pnpm install

# Generate the necessary import maps and TypeScript types for Payload:
pnpm gen:importmap
pnpm gen:types

# Optional: Clear database and run migrations
npx payload migrate:fresh
# Run the seed script
pnpm payload seed

# Start the development server:
pnpm dev
```


## Default Credentials
Once the seed script is completed, you can access the admin panel at /admin using these credentials:
Field,Value

http://localhost:3000/admin

|          |                |
| -------- | -------------- |
| Email    | admin@mail.com |
| Password | 123444         |
