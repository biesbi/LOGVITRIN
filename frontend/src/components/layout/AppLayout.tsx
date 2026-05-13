import { MobileBottomNav } from './MobileBottomNav';
import { Sidebar } from './Sidebar';

export function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-paper md:grid md:grid-cols-[248px_1fr]">
      <Sidebar />
      <main className="mx-auto w-full max-w-6xl px-4 py-5 pb-24 md:px-8 md:py-8 md:pb-8">
        {children}
      </main>
      <MobileBottomNav />
    </div>
  );
}
