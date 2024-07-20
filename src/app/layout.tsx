import Providers from '@/providers';
import { envSchema } from '@/schemas';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import 'reshaped/themes/reshaped/theme.css';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

const parsedEnv = envSchema.parse(process.env);

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-rs-theme="reshaped" data-rs-color-mode="dark">
      <body className={inter.className}>
        <div className="p-7">
          <Providers env={parsedEnv}>{children}</Providers>
        </div>
      </body>
    </html>
  );
}
