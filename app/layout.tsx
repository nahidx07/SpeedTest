import "./globals.css";

export const metadata = {
  title: "Internet Speed Test | Fast.com Clone",
  description: "How fast is your internet?",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
