import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sonho de Criança Buffet",
  description: "Festas infantis em Piracicaba. Há mais de 23 anos fazendo parte de histórias.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
