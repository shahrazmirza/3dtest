import "./globals.css";

export const metadata = {
  title: "NSW Central West Muslim Association (NSWCWMA)",
  description: "Public Benevolent Institute",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
