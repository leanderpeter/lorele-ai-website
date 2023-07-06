import { Analytics } from '@vercel/analytics/react';
import { Suspense } from 'react';

export const metadata = {
  title: 'Next.js 13 + PlanetScale + NextAuth + Tailwind CSS',
  description:
    'A user admin dashboard configured with Next.js, PlanetScale, NextAuth, Tailwind CSS, TypeScript, ESLint, and Prettier.'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Suspense></Suspense>
      {children}
      <Analytics />
    </>
  );
}
