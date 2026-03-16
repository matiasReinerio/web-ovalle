import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans, Orbitron } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta-sans',
});

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron',
});

export const metadata: Metadata = {
  title: 'Empresas Ovalle | 30 Años de Excelencia',
  description: 'Empresas Ovalle, compañía líder con 30 años de trayectoria.',
  icons: {
    icon: '/fire_icon.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning className={`${inter.variable} ${plusJakartaSans.variable} ${orbitron.variable}`}>
      <body className="font-sans antialiased relative min-h-screen overflow-x-hidden">
        <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark" disableTransitionOnChange>
          {/* Mesh Gradients Background */}
          <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-accent/15 blur-3xl dark:bg-accent/10" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-primary/10 blur-3xl dark:bg-primary/20" />
            <div className="absolute top-[40%] left-[60%] w-[30%] h-[30%] rounded-full bg-action/10 blur-3xl dark:bg-action/5" />
          </div>
          
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
