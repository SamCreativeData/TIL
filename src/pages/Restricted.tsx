import { Card, CardContent } from '@/components/ui/card';
import { Lock } from 'lucide-react';

export function Restricted() {
  return (
    <div className="max-w-4xl">
      <h1 className="text-4xl font-bold text-red-500 mb-8">Restricted Area</h1>

      <Card className="bg-[#461313] border-red-500/50">
        <CardContent className="p-12 text-center">
          <Lock className="w-16 h-16 text-red-400 mx-auto mb-6" />
          <h2 className="text-2xl font-semibold mb-4 text-red-400">
            Access Denied
          </h2>
          <p className="text-white/60 mb-4">
            This area requires Level 9 clearance.
          </p>
          <p className="text-sm text-red-300/60">
            Unauthorized access attempts will be logged and may result in eternal filing duty.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
