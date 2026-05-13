import Link from 'next/link';
import { Building2, ClipboardList, Home, UserRound } from 'lucide-react';

const links = [
  { href: '/admin', label: 'Admin', icon: Home },
  { href: '/customer', label: 'Musteri', icon: UserRound },
  { href: '/warehouse', label: 'Depo', icon: Building2 },
  { href: '/worker', label: 'Gorev', icon: ClipboardList },
];

export function MobileBottomNav() {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-30 border-t border-line bg-white px-2 py-2 md:hidden">
      <div className="mx-auto grid max-w-md grid-cols-4 gap-1">
        {links.map(({ href, label, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className="flex min-h-14 flex-col items-center justify-center gap-1 rounded-lg text-xs font-semibold text-ink/70 hover:bg-paper hover:text-ink"
          >
            <Icon className="h-5 w-5" />
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
