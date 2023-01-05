import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="theme">
      <Head />
      <body className="scroll-smooth antialiased w-full h-screen">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
