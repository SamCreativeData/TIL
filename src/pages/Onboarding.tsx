import { Card, CardContent } from '@/components/ui/card';

export function Onboarding() {
  return (
    <div className="max-w-4xl">
      <h1 className="text-4xl font-bold text-red-500 mb-8">Onboarding</h1>

      <div className="space-y-6">
        <Card className="bg-[#2a1a10] border-red-900/30">
          <CardContent className="p-8">
            <h2 className="text-2xl font-semibold mb-4">Welcome to Infernal HR</h2>
            <p className="text-white/60 mb-6">
              Complete your onboarding modules to gain full access to the portal.
            </p>

            <div className="space-y-4">
              <div className="bg-[#1c0b04] p-4 rounded border border-red-900/20">
                <h3 className="text-lg font-semibold mb-2">
                  📋 Demon Etiquette 101
                </h3>
                <p className="text-sm text-white/60">
                  Essential protocols for interdimensional workplace conduct.
                </p>
                <div className="mt-3 text-xs text-white/40">
                  Status: Available
                </div>
              </div>

              <div className="bg-[#1c0b04] p-4 rounded border border-red-900/20 opacity-60">
                <h3 className="text-lg font-semibold mb-2">
                  🔥 Soul Processing Basics
                </h3>
                <p className="text-sm text-white/60">
                  Learn the fundamentals of eternal documentation.
                </p>
                <div className="mt-3 text-xs text-white/40">
                  Status: Locked
                </div>
              </div>

              <div className="bg-[#1c0b04] p-4 rounded border border-red-900/20 opacity-60">
                <h3 className="text-lg font-semibold mb-2">
                  ⚖️ Tribunal Procedures
                </h3>
                <p className="text-sm text-white/60">
                  Understanding infernal legal processes.
                </p>
                <div className="mt-3 text-xs text-white/40">
                  Status: Locked
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#461313] border-red-900/50">
          <CardContent className="p-6 text-center">
            <p className="text-sm text-white/80">
              Additional modules coming soon...
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
