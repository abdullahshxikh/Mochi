import type { Metadata } from "next";
import "./globals.css";
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Mochi | Master Your Health through Play",
  description: "Mochi is your gamified AI health companion. Track calories, reach goals, and level up your wellness journey.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="header">
          <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
            <Link href="/" className="logo">
              <span>🍡</span> Mochi
            </Link>
            <nav className="nav-links">
              <Link href="/" className="nav-link">Home</Link>
              <Link href="/terms" className="nav-link">Terms</Link>
              <Link href="/privacy" className="nav-link">Privacy</Link>
            </nav>
          </div>
        </header>
        
        <main>{children}</main>

        <footer>
          <div className="container footer-content">
            <div className="logo" style={{ fontSize: '1.2rem' }}>
              <span>🍡</span> Mochi
            </div>
            <p className="copyright">© 2026 Mochi AI. All rights reserved.</p>
            <div className="footer-links">
              <Link href="/terms">Terms of Service</Link>
              <Link href="/privacy">Privacy Policy</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
