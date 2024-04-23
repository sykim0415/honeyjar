import "@/styles/globals.css";

export const metadata = {
  title: "gwaje difficult..",
  description: "Todo React App using Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
