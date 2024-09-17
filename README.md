# The Payload Access Control Project

This repository contains an example that showcases how powerful Payload's access control is, and how it can be used to create simple, yet powerful editor experiences where you can control who can do what to a very fine-grained level.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Contributing](#contributing)
- [License](#license)

## Introduction

Access Control is one of Payload's most important features—it's way more powerful than a typical RBAC pattern, which is often inflexible when it comes to document-based or even field-based permissions. With Payload's access control, you can build incredibly powerful and secure apps.

Payload's admin UI automatically responds to the access control that you define. For example, if a user can't edit a document, the "Publish" button will be automatically removed. If a user can't edit a field, the field is automatically set to read-only in the admin UI. If a user can't create new documents in a collection, the "Create New" function will be disabled throughout all of the admin UI.

**The best part is that it's all done in clean, declarative, easy-to-read code.**

## Features

In this application, I will attempt to discover how to:

- Implement and share access control that shows how to create a "multi-tenant"-style infrastructure on top of Payload.
- Utilize access control on the collection-level, to restrict who can do what on a collection basis.
- Utilize field-level access control to allow users to update some, but not all, fields on a given document.
- Open up a collection for "public" creation (in this case, I will attempt to create a Contact Requests collection, which anyone can submit to).
- Restrict who can access draft documents.
- Auto-generate and re-use TypeScript types based on the shape of the collections.

## Tech Stack

- **Frontend:** Next.js version 15, TypeScript, Tailwind CSS and Shadcn UI.
- **Backend:** Payload CMS, MongoDB and UploadThing Digital Asset Management.
- **Deployment:** Vercel

## Getting Started

1. Clone the repository.
2. Install dependencies using `pnpm install`.
3. Run the development server with `pnpm dev`.

## Contributing

I will eventually welcome contributions.

## License

This project is licensed under the MIT License.

Thank you for being a part of The Payload Access Control project... 🚀✨
