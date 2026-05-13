import Link from 'next/link';
import { Boxes, Building2, ClipboardList, Home, UserRound } from 'lucide-react';

const links = [
  { href: '/admin', label: 'Admin', icon: Home },
  { href: '/customer', label: 'Musteri', icon: UserRound },
  { href: '/warehouse', label: 'Depo', icon: Building2 },
  { href: '/worker', label: 'Gorevler', icon: ClipboardList },
];

export function Sidebar() {
  return (
    <aside className="hidden min-h-screen border-r border-line bg-white px-4 py-6 md:block">
      <Link href="/" className="mb-8 flex items-center gap-2 text-lg font-bold text-ink">
        <Boxes className="h-6 w-6 text-clay" />
        LOGVITRIN
      </Link>
      <nav className="space-y-2">
        {links.map(({ href, label, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className="flex min-h-11 items-center gap-3 rounded-lg px-3 text-sm font-semibold text-ink/75 hover:bg-paper hover:text-ink"
          >
            <Icon className="h-5 w-5" />
            {label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
