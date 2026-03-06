import { Link, useLocation } from 'react-router-dom';
import { Separator } from '@/components/ui/separator';

const navigationItems = [
  { label: 'Dashboard', path: '/dashboard' },
  { label: 'Meet The Team', subtext: '(Virtually only advised)', path: '/team' },
  { label: 'Onboarding', path: '/onboarding' },
  { label: 'Memos', path: '/memos' },
  { label: 'Ask Nimothy', path: '/ask-nimothy' },
  { label: 'Infernal Supply Office', path: '/supply-office' },
  { label: 'Incident Reports', path: '/incidents' },
  { label: 'SinOps HQ', path: '/sinops', isRed: true },
  { label: 'Restricted Area', path: '/restricted', isRed: true },
];

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const location = useLocation();

  return (
    <div className="bg-[#1c0b04] min-h-screen text-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#1c0b04] border-b border-[#2a1a10]">
        <div className="max-w-[1440px] mx-auto px-16 py-6 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="w-16 h-16">
              <img
                src="/icon-w.png"
                alt="Logo"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          <h1 className="absolute left-1/2 -translate-x-1/2 font-extrabold text-red-500 text-4xl">
            Infernal HR Portal™
          </h1>

          <div className="flex items-center gap-3">
            <span className="font-medium text-base">
              Portal Status: UNSTABLE
            </span>
            <div className="w-4 h-4 bg-red-500 rounded-lg" />
          </div>
        </div>

        <div className="max-w-[1440px] mx-auto px-16 pb-2">
          <div className="bg-[#2a1a10] px-4 py-2 text-white text-xs font-medium">
            SYSTEM ALERT — Unauthorized soul submission detected. Tribunal hearing now in session.
          </div>
        </div>
      </header>

      <div className="flex pt-36">
        <aside className="fixed left-0 w-64 h-[calc(100vh-144px)] px-8 py-8">
          <nav className="space-y-4">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block font-medium text-base transition-colors ${
                  item.isRed
                    ? 'text-red-500 hover:text-red-400'
                    : location.pathname === item.path
                    ? 'text-white font-semibold'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {item.label}
                {item.subtext && (
                  <span className="block text-sm opacity-75">
                    {item.subtext}
                  </span>
                )}
              </Link>
            ))}
          </nav>
        </aside>

        <main className="flex-1 ml-64 mr-16 pb-32">
          {children}
        </main>
      </div>

      <footer className="fixed bottom-0 left-0 right-0 bg-[#1c0b04] border-t border-white/20">
        <div className="max-w-[1440px] mx-auto px-16 py-6">
          <div className="flex items-center justify-center mb-4">
            <Separator className="flex-1 bg-white" />
            <img
              src="/icon-w.png"
              alt="Icon"
              className="w-12 h-7 mx-8 object-contain"
            />
            <Separator className="flex-1 bg-white" />
          </div>

          <div className="text-center text-xs font-extralight space-y-2">
            <p className="font-normal">LEGAL COMPLIANCE NOTICE</p>
            <p>
              This Infernal Life™ is a product of Infernal Bureaucracy Media™. Do not remix, train-on, summon, or copy without notarized pact.
            </p>
            <p>
              Violators may face: Legal correspondence (infernal and celestial), Eternal onboarding paperwork, a direct message from Nim™ (you will regret it)
            </p>
            <p className="pt-2">
              © ∞ Infernal Bureau of Compliance and Interdimensional Oversight™ | All rights reserved across all dimensions, timelines, and states of existence.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
