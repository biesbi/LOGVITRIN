import { AppLayout } from '@/components/layout/AppLayout';
import { PageHeader } from '@/components/ui/PageHeader';
import { StatCard } from '@/components/ui/StatCard';

export default function AdminPage() {
  return (
    <AppLayout>
      <div className="space-y-5">
        <PageHeader eyebrow="Admin" title="Operasyon ozeti" />
        <div className="grid gap-3 sm:grid-cols-3">
          <StatCard label="Aktif firma" value="18" />
          <StatCard label="Acil gorev" value="7" />
          <StatCard label="Bugun sevk" value="42" />
        </div>
      </div>
    </AppLayout>
  );
}
