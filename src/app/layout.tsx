"use client"
import '@shopify/polaris/build/esm/styles.css';
import "./globals.css";
import enTranslations from '@shopify/polaris/locales/en.json';
import {AppProvider} from '@shopify/polaris';
import { Inter } from "next/font/google";
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const inter = Inter({ subsets: ["latin"] });

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <AppProvider i18n={enTranslations}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </AppProvider>
      </body>
    </html>
  );
}
