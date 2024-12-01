import "./globals.css";

export const metadata = {
  title: "3D Test",
  description: "3D Test",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
