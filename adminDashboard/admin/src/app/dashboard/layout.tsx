"use client";

import { SessionProvider } from "next-auth/react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
