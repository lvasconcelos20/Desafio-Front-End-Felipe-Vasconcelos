"use client";

import AuthenticatedOnlyFeature from "@/components/templates/Authenticated/authenticated";



export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <AuthenticatedOnlyFeature>
      <main className="flex h-screen w-full flex-col items-center justify-center gap-5">
      
        {children}
      </main>
    </AuthenticatedOnlyFeature>
  );
}
