import { Roboto, Inter } from "next/font/google";
import "./globals.css";

const roboto_init = Roboto({
  subsets: ['latin'],
  variable: "--font-roboto",
  weight: ["100", "300", "400","500","700", "900"],
});

const inter_init = Inter({
  subsets: ['latin'],
  variable: "--font-inter",
  weight: ["100","300","400","500","700","900"]
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto_init.variable}  ${inter_init.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
