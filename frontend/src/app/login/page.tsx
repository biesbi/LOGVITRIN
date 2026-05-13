import { AppLayout } from '@/components/layout/AppLayout';
import { DataCard } from '@/components/ui/DataCard';
import { PageHeader } from '@/components/ui/PageHeader';

export default function LoginPage() {
  return (
    <AppLayout>
      <div className="max-w-lg space-y-4">
        <PageHeader eyebrow="Giris" title="LOGVITRIN hesabina gir" />
        <DataCard className="space-y-3">
          <input className="min-h-12 w-full rounded-lg border border-line px-3" placeholder="E-posta" />
          <input className="min-h-12 w-full rounded-lg border border-line px-3" placeholder="Sifre" type="password" />
          <button className="min-h-12 w-full rounded-lg bg-ink px-4 font-semibold text-white">Giris yap</button>
        </DataCard>
      </div>
    </AppLayout>
  );
}
