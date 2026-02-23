import type { Metadata } from 'next';
import { Space_Grotesk, Sora } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-display' });
const sora = Sora({ subsets: ['latin'], variable: '--font-body' });

export const metadata: Metadata = {
  metadataBase: new URL('https://sameer-kadi-portfolio.vercel.app'),
  title: 'Sameer Kadi | Product Operations + AI Products',
  description:
    'Product Operations portfolio for Sameer Kadi: AI product operations, system execution, analytics, stakeholder orchestration, and scalable delivery.',
  keywords: ['Sameer Kadi', 'Product Operations', 'AI Product', 'Product Operations Associate', 'Data Science', 'Portfolio'],
  openGraph: {
    title: 'Sameer Kadi | Product Operations + AI Products',
    description: 'I design, operate, and scale AI-powered systems with execution discipline.',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sameer Kadi | Product Operations + AI Products',
    description: 'Product Operations portfolio focused on AI systems, analytics, and large-scale execution.'
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  // Display and body fonts are split intentionally for contrast and visual hierarchy.
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${sora.variable}`}>
      <body className="font-[var(--font-body)] antialiased">
        <Script id="theme-init" strategy="beforeInteractive">
          {`try { var t = localStorage.getItem('theme'); if (t === 'light') document.documentElement.classList.add('light'); } catch (e) {}`}
        </Script>
        {children}
      </body>
    </html>
  );
}
