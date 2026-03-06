import { Card, CardContent } from '@/components/ui/card';

export function Team() {
  return (
    <div className="max-w-4xl">
      <h1 className="text-4xl font-bold text-red-500 mb-4">
        Meet The Team
      </h1>
      <p className="text-white/70 text-sm mb-8">(Virtually only advised)</p>

      <Card className="bg-[#2a1a10] border-red-900/30">
        <CardContent className="p-8 text-center">
          <div className="text-6xl mb-6">👥</div>
          <h2 className="text-2xl font-semibold mb-4">Team Directory</h2>
          <p className="text-white/60">
            Content coming soon...
          </p>
          <p className="text-sm text-white/40 mt-4">
            Meet our infernal staff members and their respective departments.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
