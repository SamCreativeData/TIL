import { Card, CardContent } from '@/components/ui/card';
import { MessageCircle } from 'lucide-react';

export function AskNimothy() {
  return (
    <div className="max-w-4xl">
      <h1 className="text-4xl font-bold text-red-500 mb-8">Ask Nimothy</h1>

      <Card className="bg-[#461313] border-red-900/50">
        <CardContent className="p-8">
          <div className="flex items-start gap-6">
            <div className="w-24 h-24 bg-[#5a2626] rounded-full flex items-center justify-center flex-shrink-0">
              <MessageCircle className="w-12 h-12 text-white" />
            </div>

            <div className="flex-1">
              <h2 className="text-2xl font-semibold mb-4">
                Ask HR: Intern Nimothy
              </h2>
              <p className="text-white/80 mb-6">
                Need help navigating the infernal bureaucracy? Have questions about your eternal employment contract?
              </p>
              <p className="text-white/80 mb-6">
                Ask the junior senior (mayhapsly best) HR intern: Nimothy.
              </p>

              <div className="bg-[#2a1a10] p-6 rounded border border-red-900/30 text-center">
                <p className="text-white/60">
                  Chat interface coming soon...
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
