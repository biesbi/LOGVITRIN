import { AppLayout } from '@/components/layout/AppLayout';
import { DataCard } from '@/components/ui/DataCard';
import { PageHeader } from '@/components/ui/PageHeader';

export default function RegisterPage() {
  return (
    <AppLayout>
      <div className="max-w-lg space-y-4">
        <PageHeader eyebrow="Kayit" title="Yeni firma basvurusu" />
        <DataCard className="space-y-3">
          <input className="min-h-12 w-full rounded-lg border border-line px-3" placeholder="Firma adi" />
          <input className="min-h-12 w-full rounded-lg border border-line px-3" placeholder="Yetkili e-posta" />
          <button className="min-h-12 w-full rounded-lg bg-ink px-4 font-semibold text-white">Basvuru olustur</button>
        </DataCard>
      </div>
    </AppLayout>
  );
}
