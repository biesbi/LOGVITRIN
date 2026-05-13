import { AppLayout } from '@/components/layout/AppLayout';
import { DataCard } from '@/components/ui/DataCard';
import { PageHeader } from '@/components/ui/PageHeader';
import { StatusBadge } from '@/components/ui/StatusBadge';

export default function WarehousePage() {
  return (
    <AppLayout>
      <div className="space-y-5">
        <PageHeader eyebrow="Depo" title="Saha operasyonlari" />
        <div className="grid gap-3 md:grid-cols-2">
          <DataCard>
            <p className="font-semibold">A Blok / Raf 12</p>
            <p className="mt-1 text-sm text-ink/65">Yuksek doluluk</p>
            <div className="mt-3"><StatusBadge tone="warning">%88 dolu</StatusBadge></div>
          </DataCard>
          <DataCard>
            <p className="font-semibold">Paketleme hatti</p>
            <p className="mt-1 text-sm text-ink/65">Siradaki gorevler hazir</p>
            <div className="mt-3"><StatusBadge tone="success">Aktif</StatusBadge></div>
          </DataCard>
        </div>
      </div>
    </AppLayout>
  );
}
