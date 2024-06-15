# portfolio

- **Framework**: [Next.js](https://nextjs.org/)
- **Database**: [Postgres](https://vercel.com/postgres)
- **Deployment**: [Vercel](https://vercel.com)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **Analytics**: [Vercel Analytics](https://vercel.com/analytics)

## Running Locally

This application requires Node.js v18.17+.

```bash
git clone https://github.com/disin8/portfolio.git
cd portfolio
bun install
bun dev
```

Create a `.env.local` file similar to [`.env.example`](https://github.com/disin8/portfolio/blob/main/.env.example).

## Database Schema

```sql
CREATE TABLE views (
  slug VARCHAR(255) PRIMARY KEY,
  count INT NOT NULL
);
```