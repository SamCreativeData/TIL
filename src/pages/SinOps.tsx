import { Card, CardContent } from '@/components/ui/card';

export function SinOps() {
  return (
    <div className="max-w-4xl">
      <h1 className="text-4xl font-bold text-red-500 mb-8">SinOps HQ</h1>

      <Card className="bg-[#461313] border-red-500/50">
        <CardContent className="p-8 text-center">
          <div className="text-6xl mb-6">🔴</div>
          <h2 className="text-2xl font-semibold mb-4 text-red-400">
            Sin Operations Headquarters
          </h2>
          <p className="text-white/60">
            Content coming soon...
          </p>
          <p className="text-sm text-red-300/60 mt-4">
            High-level operations and strategic sin management.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
