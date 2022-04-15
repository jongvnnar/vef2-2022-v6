# Verkefni 6
Verkefnið keyrir á https://vef2-2022-v6-jongvnnar.vercel.app/

# Dev keyrsla
Fyrst þarf að setja upp .env skrá í rót:

## .env skrá sem virkar:
```
PRISMIC_BASE_URL=https://vef2-2022-v6-jongvnnar.prismic.io/graphql
PRISMIC_REPO=vef2-2022-v6-jongvnnar
PRISMIC_API_TOKEN=MC5ZbGliVXhjQUFDa0EtN3E2.77-9Yirvv73vv73vv73vv73vv71U77-9PXLvv73vv73vv73vv73vv70277-977-9PkXvv73vv71777-977-977-9fO-_vV1y
```

Til að keyra:
```
yarn install
yarn dev
```

# Prismic
Verkefnið er tengt við Prismic repo.

Hægt er að skoða graphql api fyrir repoið: https://vef2-2022-v6-jongvnnar.prismic.io/graphql

-------------

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
