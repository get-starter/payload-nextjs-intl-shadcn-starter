# PayloadCMS & Next.js i18n & ShadcnUI Starter Template

This is a minimal boilerplate for building applications with **Next.js**, **PayloadCMS**, **Shadcn/UI**, and **Tailwind CSS**. It provides a clean starting point with essential features pre-configured to reduce initial setup time.

## Tech Stack
* **PayloadCMS**: CMS for content management
* **Next.js (App Router)**: Modern React framework
* **next-intl**: Robust internationalization (i18n) support
* **Shadcn/UI & Tailwind CSS**: Component library and styling

## Key Features
* **Multi-language Support**: Pre-configured routes and middleware for multilingual content.
* **Seeding System**: Automated scripts to populate initial data.
* **Global Data Management**: Integrated providers for handling global state and settings.
* **Clean Architecture**: Optimized folder structure for scalability and maintenance.

## Get Starter
```bash
#
pnpm install

# Generate the necessary import maps and TypeScript types for Payload:
pnpm gen:imap
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

http://localhost:3000/admin

|          |                |
| -------- | -------------- |
| Email    | admin@mail.com |
| Password | 123444         |


## Docs

Refer to the official documentation for detailed configuration and advanced usage:

* [PayloadCMS Documentation](https://payloadcms.com/docs)
* [Next.js Documentation](https://nextjs.org/docs)
* [next-intl Documentation](https://next-intl.dev)
* [Shadcn/UI Documentation](https://ui.shadcn.com)
* [Tailwind CSS Documentation](https://tailwindcss.com)


## Contributing
Feel free to open an issue or submit a pull request

## License
MIT
