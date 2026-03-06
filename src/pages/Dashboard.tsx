import { Card, CardContent } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { MessageCircle } from 'lucide-react';

const archiveCases = [
  { caseNumber: 'CASE #72891' },
  { caseNumber: 'CASE #71268' },
  { caseNumber: 'CASE #68782' },
];

export function Dashboard() {
  return (
    <div className="space-y-8">
      <div className="flex gap-6">
        <Card className="flex-1 bg-[#d9d9d9] border-0 rounded-none">
          <CardContent className="p-0 relative min-h-[456px]">
            <div className="p-6">
              <h2 className="font-bold text-[#2f3033] text-xl mb-2">
                Tribunal Livestream
              </h2>

              <div className="text-base font-medium mb-4">
                <span className="text-[#2f3033]">CASE #</span>
                <span className="text-[#a48a1c]">72911</span>
                <br />
                <span className="text-[#2f3033]">
                  Pazuzu v. Duty of Demonic Engagement
                </span>
              </div>

              <div className="flex items-center gap-2 mb-6">
                <div className="w-4 h-4 bg-red-500 rounded-lg" />
                <span className="font-medium text-[#2f3033] text-base">LIVE</span>
              </div>

              <div className="w-full h-[353px] bg-[#1e0a0a] border-2 border-solid border-red-500 flex items-center justify-center">
                <div className="text-center text-white/50 text-sm">
                  <div className="text-6xl mb-4">📹</div>
                  <p>Livestream Feed</p>
                  <p className="text-xs mt-2">YouTube embed placeholder</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="w-[220px]">
          <div className="mb-4">
            <h3 className="font-bold text-[#5a5b5c] text-base mb-4">Archive</h3>
          </div>

          <ScrollArea className="h-[400px]">
            <div className="space-y-4">
              {archiveCases.map((caseItem, index) => (
                <div key={index} className="relative">
                  <div className="w-full h-[102px] bg-[#1e0a0a] border border-solid border-red-500" />
                  <div className="w-full h-3 bg-red-500" />
                  <div className="absolute bottom-1 left-1 text-[#2f3033] text-[8px] font-normal">
                    {caseItem.caseNumber}
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="space-y-6">
          <Card className="border-0 rounded-none bg-transparent">
            <CardContent className="p-0 relative">
              <svg
                viewBox="0 0 488 103"
                className="w-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 0h473v103H0V15C0 6.716 6.716 0 15 0z"
                  fill="#D9D9D9"
                />
                <path d="M0 0h30v15H0z" fill="#8B7355" />
              </svg>
              <div className="absolute top-6 left-3 font-semibold text-[#2f3033] text-base">
                Internal Memo: 329
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 rounded-none bg-transparent">
            <CardContent className="p-0 relative">
              <svg
                viewBox="0 0 488 103"
                className="w-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 0h473v103H0V15C0 6.716 6.716 0 15 0z"
                  fill="#D9D9D9"
                />
                <path d="M0 0h30v15H0z" fill="#8B7355" />
              </svg>
              <div className="absolute top-6 left-3 font-semibold text-[#2f3033] text-base">
                Case File: 14730
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="border-0 rounded-none bg-[#461313] relative overflow-hidden">
          <CardContent className="p-6">
            <h3 className="font-semibold text-white text-xl mb-6">
              Ask HR: Intern Nimothy
            </h3>

            <div className="text-white text-[15px] font-normal space-y-4">
              <p>Need help?</p>
              <p>
                Ask the junior senior (mayhapsly best) HR intern:<br />
                Nimothy.
              </p>
            </div>

            <button className="absolute bottom-6 right-6 w-14 h-14 bg-[#5a2626] rounded-full flex items-center justify-center hover:bg-[#6b3333] transition-colors">
              <MessageCircle className="w-6 h-6 text-white" />
            </button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
