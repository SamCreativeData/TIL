import { Card, CardContent } from '@/components/ui/card';

export function Memos() {
  return (
    <div className="max-w-4xl">
      <h1 className="text-4xl font-bold text-red-500 mb-8">Memos</h1>

      <Card className="bg-[#2a1a10] border-red-900/30">
        <CardContent className="p-8 text-center">
          <div className="text-6xl mb-6">📄</div>
          <h2 className="text-2xl font-semibold mb-4">Internal Memos</h2>
          <p className="text-white/60">
            Content coming soon...
          </p>
          <p className="text-sm text-white/40 mt-4">
            Access official communications and departmental announcements.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
