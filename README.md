# aryan-portfolio

Premium one-page portfolio for a Full Stack Mobile App Developer, built with Next.js App Router, Tailwind CSS, and Framer Motion.

## Stack

- Next.js
- Tailwind CSS
- Framer Motion
- TypeScript
- Resend-ready API route for lead capture

## Local development

```bash
npm install
npm run dev
```

## Environment variables

Create a `.env.local` file using the example below.

```bash
RESEND_API_KEY=your_resend_api_key
CONTACT_TO_EMAIL=aroraaryan512@gmail.com
CONTACT_FROM_EMAIL="aryan-portfolio <onboarding@resend.dev>"
```

`CONTACT_FROM_EMAIL` should use a sender address that is verified in Resend for production use.

## Production

```bash
npm run build
npm start
```

## Lead form behavior

- Frontend form submits to `/api/contact`
- API route validates required fields and optional file upload
- If `RESEND_API_KEY` is configured, the lead is emailed to `CONTACT_TO_EMAIL`
- Optional attachment support is limited to 5MB

## Deployment

Deploy directly to Vercel for the smoothest setup, then add the same environment variables in the Vercel project settings.
