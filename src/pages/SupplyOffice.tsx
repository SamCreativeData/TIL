import { Card, CardContent } from '@/components/ui/card';

export function SupplyOffice() {
  return (
    <div className="max-w-4xl">
      <h1 className="text-4xl font-bold text-red-500 mb-8">
        Infernal Supply Office
      </h1>

      <Card className="bg-[#2a1a10] border-red-900/30">
        <CardContent className="p-8 text-center">
          <div className="text-6xl mb-6">📦</div>
          <h2 className="text-2xl font-semibold mb-4">Supply Requisitions</h2>
          <p className="text-white/60">
            Content coming soon...
          </p>
          <p className="text-sm text-white/40 mt-4">
            Order office supplies, equipment, and infernal implements.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
