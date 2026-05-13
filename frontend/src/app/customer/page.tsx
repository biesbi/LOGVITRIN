import { AppLayout } from '@/components/layout/AppLayout';
import { DataCard } from '@/components/ui/DataCard';
import { PageHeader } from '@/components/ui/PageHeader';
import { StatusBadge } from '@/components/ui/StatusBadge';

export default function CustomerPage() {
  return (
    <AppLayout>
      <div className="space-y-5">
        <PageHeader eyebrow="Musteri" title="Stok ve siparis durumu" />
        <DataCard className="flex items-center justify-between gap-3">
          <div>
            <p className="font-semibold">LV-ORD-1042</p>
            <p className="text-sm text-ink/65">Hazirlanan siparis</p>
          </div>
          <StatusBadge tone="info">Toplanıyor</StatusBadge>
        </DataCard>
      </div>
    </AppLayout>
  );
}
