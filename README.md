<h1 align="center">OnlyFans but for Horses 🐴</h1>

![Demo App](/public/demo-for-readme.png)

[Video Tutorial on Youtube](https://youtu.be/mduqkHlJujA)

Some Features:

-   ⚛️ Tech Stack: Next.js 14, TypeScript, Tailwind CSS, Prisma, PostgreSQL, Stripe
-   🔐 Authentication with Kinde Auth
-   💸 Monthly and Annually Subscriptions with Stripe.
-   💰 One Time Payments with Stripe
-   💵 Building a Stripe Billing Portal
-   🛒 E-Commerce Store
-   ✉ Sending "Successful Payment" Emails to Users
-   ✍️ Creating Posts
-   💬 Commenting on Posts
-   ❤️ Liking Posts
-   🔒 Secret Admin Dashboard
-   📝 Data Aggregation with Prisma
-   🖼️ Edit Profile
-   📷 Image/Video Uploads using Cloudinary
-   💙 Awesome Landing Page
-   🌐 Deployment
-   👀 And Millions of Other Cool Features
-   ✅ This is a lot of work. Support me by subscribing to the [Youtube Channel](https://www.youtube.com/@asaprogrammer_)

### Setup .env file

```js
// kinde
KINDE_CLIENT_ID=<get_from_kinde>
KINDE_CLIENT_SECRET=<get_from_kinde>
KINDE_ISSUER_URL=<get_from_kinde>
KINDE_SITE_URL=<get_from_kinde>
KINDE_POST_LOGOUT_REDIRECT_URL=<get_from_kinde>
KINDE_POST_LOGIN_REDIRECT_URL=<get_from_kinde>

// cloduinary
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=<get_from_cloudinary>
NEXT_PUBLIC_CLOUDINARY_API_KEY=<get_from_cloudinary>
CLOUDINARY_API_SECRET=<get_from_cloudinary>

DATABASE_URL=<any_postgres_db_url>

ADMIN_EMAIL=<your_email>

// stripe
STRIPE_SECRET_KEY=<get_from_stripe>
STRIPE_WEBHOOK_SECRET_DEV_KEY=<get_from_stripe>
STRIPE_WEBHOOK_SECRET_LIVE_KEY=<get_from_stripe>
NEXT_PUBLIC_STRIPE_DEV_MONTHLY_URL=<get_from_stripe>
NEXT_PUBLIC_STRIPE_LIVE_MONTHLY_URL=<get_from_stripe>
NEXT_PUBLIC_STRIPE_DEV_YEARLY_URL=<get_from_stripe>
STRIPE_MONTHLY_PLAN_PRICE_ID=<get_from_stripe>
STRIPE_YEARLY_PLAN_PRICE_ID=<get_from_stripe>
STRIPE_BILLING_PORTAL_LINK_DEV=<get_from_stripe>

// resend
RESEND_API_KEY=<get_from_resend>

NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

### Install dependencies

```shell
npm install
```

### Start the app

```shell
npm run dev
```

<hr/>
<hr/>
This project is built for "OnlyEducational" purposes. 😳
<hr/>
<hr/>

## `Timestamps` for your convenience:

-   00:00:00 - App Showcase
-   00:04:20 - Setup Next.js and ShadCN
-   00:17:20 - Building the Landing Page
-   02:00:25 - Building a BaseLayout Component
-   02:34:00 - Building the Home Page
-   03:44:00 - Building the Merch Page
-   04:13:00 - Building the Admin Dashboard Page
-   05:08:30 - Database Setup and Prisma
-   05:33:30 - Understanding Auth Callbacks
-   05:53:40 - Creating Posts
-   06:06:40 - Fetching and Creating Products
-   06:23:30 - Archiving Products
-   06:36:00 - Working on Our Merch Pages
-   06:47:00 - Update Profile Page
-   07:17:44 - Data Aggregation with Prisma
-   07:32:40 - Fetching Posts for the Home Page
-   07:52:10 - Deleting Posts
-   07:59:00 - Likes and Comments
-   08:30:30 - Stripe Subscriptions
-   09:32:10 - Sending Welcome Emails
-   09:47:30 - One Time Payments with Stripe
-   10:31:00 - Sending Receipt Emails
-   10:44:40 - Aggregating Dashboard Analytics
-   10:58:30 - Stripe Billing Portal and Small Fixes
-   11:07:00 - Detailed Deployment Guide

### I'll see you in the next one! 🚀
