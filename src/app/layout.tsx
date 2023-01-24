"use client";
import "./globals.css";
import { Toaster } from "react-hot-toast";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        {children}
        <Toaster
          toastOptions={{
            style: {
              fontSize: "14px",
              color: "#555",
              fontWeight: "500",
            },
          }}
        />
      </body>
    </html>
  );
}
