Peer Review, Sebastian Breve-Sanchez: You have a functioning tip calculator, with a unique design. However, seeing how the tip calculator should have been build off of the design images, it is moot. I do like how you implemented the modal, though. I noticed that when you input a number with a decimal inside the bill input, the decimal does not carry over to the total. I did some tests and if you replace input: text with input: number in your billing component, as well as replace parseInt with Number and remove the math.Ceil, you can get the decimal to carry. You also have an issue where, when inputting a zero in your Number of People imput, you can get infinity. That issue becomes more common when replacing the parseInts and removing the Math.ceil, though. To top it all off, your reset button clears all of the values inside the code, but does not clear the values off the screen, so you can still see any inputted numbers.



This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
