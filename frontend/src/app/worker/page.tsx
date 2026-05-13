'use client';

import { useMemo, useState } from 'react';
import {
  AlertTriangle,
  Barcode,
  CheckCircle2,
  ClipboardCheck,
  ClipboardList,
  Loader2,
  PackageCheck,
  ScanLine,
  TriangleAlert,
} from 'lucide-react';
import { AppLayout } from '@/components/layout/AppLayout';
import { ActionButton } from '@/components/ui/ActionButton';
import { DataCard } from '@/components/ui/DataCard';
import { EmptyState } from '@/components/ui/EmptyState';
import { LoadingState } from '@/components/ui/LoadingState';
import { PageHeader } from '@/components/ui/PageHeader';
import { StatCard } from '@/components/ui/StatCard';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { cn } from '@/lib/utils';

type TaskType = 'picking' | 'packing';
type TaskStatus = 'ready' | 'in_progress' | 'blocked' | 'done';
type ScanState = 'idle' | 'correct_location' | 'wrong_location' | 'correct_product' | 'wrong_product';

type WorkerTask = {
  id: string;
  type: TaskType;
  orderNo: string;
  productName: string;
  quantity: number;
  locationCode: string;
  productBarcode: string;
  priority: 'Acil' | 'Yuksek' | 'Normal';
  status: TaskStatus;
  customer: string;
  packageType: string;
};

const tasks: WorkerTask[] = [
  {
    id: 'pick-1042',
    type: 'picking',
    orderNo: 'LV-ORD-1042',
    productName: 'Organik Zeytinyagi 1L',
    quantity: 8,
    locationCode: 'A-12-03',
    productBarcode: '8680001042008',
    priority: 'Acil',
    status: 'in_progress',
    customer: 'Mavi Gurme',
    packageType: 'Kirilabilir koli',
  },
  {
    id: 'pack-1045',
    type: 'packing',
    orderNo: 'LV-ORD-1045',
    productName: 'Kahve Seti',
    quantity: 3,
    locationCode: 'PK-02',
    productBarcode: '8680001045003',
    priority: 'Yuksek',
    status: 'ready',
    customer: 'Atolye Market',
    packageType: 'Standart kargo kutusu',
  },
  {
    id: 'pick-1048',
    type: 'picking',
    orderNo: 'LV-ORD-1048',
    productName: 'Pamuklu Havlu Seti',
    quantity: 12,
    locationCode: 'C-04-11',
    productBarcode: '8680001048012',
    priority: 'Normal',
    status: 'blocked',
    customer: 'Otel Tedarik',
    packageType: 'Buyuk koli',
  },
];

const statusTone: Record<TaskStatus, 'neutral' | 'success' | 'warning' | 'danger' | 'info'> = {
  ready: 'info',
  in_progress: 'warning',
  blocked: 'danger',
  done: 'success',
};

const statusLabel: Record<TaskStatus, string> = {
  ready: 'Hazir',
  in_progress: 'Devam ediyor',
  blocked: 'Sorunlu',
  done: 'Tamamlandi',
};

function taskTypeLabel(type: TaskType) {
  return type === 'picking' ? 'Toplama' : 'Paketleme';
}

function TaskCard({
  task,
  selected,
  onSelect,
}: {
  task: WorkerTask;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      onClick={onSelect}
      className={cn(
        'w-full rounded-lg border bg-white p-4 text-left shadow-sm transition',
        selected ? 'border-ink ring-2 ring-ink/10' : 'border-line hover:border-moss',
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <StatusBadge tone={task.type === 'picking' ? 'info' : 'neutral'}>{taskTypeLabel(task.type)}</StatusBadge>
            <StatusBadge tone={task.priority === 'Acil' ? 'danger' : task.priority === 'Yuksek' ? 'warning' : 'neutral'}>
              {task.priority}
            </StatusBadge>
          </div>
          <h2 className="mt-3 text-base font-bold text-ink">{task.orderNo}</h2>
          <p className="mt-1 text-sm leading-5 text-ink/70">{task.productName}</p>
        </div>
        <StatusBadge tone={statusTone[task.status]}>{statusLabel[task.status]}</StatusBadge>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
        <div>
          <p className="text-ink/55">Miktar</p>
          <p className="font-bold">{task.quantity} adet</p>
        </div>
        <div>
          <p className="text-ink/55">Lokasyon</p>
          <p className="font-bold">{task.locationCode}</p>
        </div>
      </div>
      <div className="mt-4">
        <span className="inline-flex min-h-11 items-center justify-center rounded-lg bg-paper px-4 text-sm font-semibold text-ink">
          Basla
        </span>
      </div>
    </button>
  );
}

function ScanPanel({
  task,
  scanState,
  onScan,
}: {
  task: WorkerTask;
  scanState: ScanState;
  onScan: (state: ScanState) => void;
}) {
  const locationOk = scanState === 'correct_location' || scanState === 'correct_product';
  const productOk = scanState === 'correct_product';
  const isWrong = scanState === 'wrong_location' || scanState === 'wrong_product';

  return (
    <DataCard className="space-y-4">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-xs font-bold uppercase text-moss">Barkod dogrulama</p>
          <h2 className="text-lg font-bold">Lokasyon ve urun okut</h2>
        </div>
        <Barcode className="h-7 w-7 text-clay" />
      </div>

      {isWrong ? (
        <div className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-800">
          <div className="flex items-start gap-2">
            <TriangleAlert className="mt-0.5 h-5 w-5 shrink-0" />
            <p>
              Okutulan barkod gorevle eslesmedi. Dogru lokasyon {task.locationCode} ve urun barkodu{' '}
              {task.productBarcode}.
            </p>
          </div>
        </div>
      ) : null}

      <div className="grid gap-3 sm:grid-cols-2">
        <div className={cn('rounded-lg border p-3', locationOk ? 'border-green-200 bg-green-50' : 'border-line bg-paper')}>
          <p className="text-sm text-ink/60">Beklenen lokasyon</p>
          <p className="mt-1 text-xl font-bold">{task.locationCode}</p>
          {locationOk ? <p className="mt-2 text-sm font-semibold text-green-800">Lokasyon dogrulandi</p> : null}
        </div>
        <div className={cn('rounded-lg border p-3', productOk ? 'border-green-200 bg-green-50' : 'border-line bg-paper')}>
          <p className="text-sm text-ink/60">Urun barkodu</p>
          <p className="mt-1 text-xl font-bold">{task.productBarcode}</p>
          {productOk ? <p className="mt-2 text-sm font-semibold text-green-800">Urun dogrulandi</p> : null}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <ActionButton icon={<ScanLine className="h-5 w-5" />} onClick={() => onScan('correct_location')}>
          Lokasyon okut
        </ActionButton>
        <ActionButton icon={<Barcode className="h-5 w-5" />} onClick={() => onScan(locationOk ? 'correct_product' : 'wrong_product')}>
          Urun okut
        </ActionButton>
        <ActionButton variant="secondary" onClick={() => onScan('wrong_location')}>
          Yanlis lokasyon
        </ActionButton>
        <ActionButton variant="secondary" onClick={() => onScan('wrong_product')}>
          Yanlis urun
        </ActionButton>
      </div>
    </DataCard>
  );
}

function QuantityPanel({
  task,
  confirmedQuantity,
  onChange,
  productReady,
}: {
  task: WorkerTask;
  confirmedQuantity: number;
  onChange: (value: number) => void;
  productReady: boolean;
}) {
  return (
    <DataCard className="space-y-4">
      <div>
        <p className="text-xs font-bold uppercase text-moss">Miktar onayi</p>
        <h2 className="text-lg font-bold">{task.quantity} adet bekleniyor</h2>
      </div>
      <div className="flex items-center justify-between rounded-lg bg-paper p-2">
        <ActionButton variant="secondary" disabled={!productReady} onClick={() => onChange(Math.max(0, confirmedQuantity - 1))}>
          Azalt
        </ActionButton>
        <div className="min-w-20 text-center">
          <p className="text-3xl font-bold">{confirmedQuantity}</p>
          <p className="text-xs text-ink/60">adet</p>
        </div>
        <ActionButton variant="secondary" disabled={!productReady} onClick={() => onChange(Math.min(task.quantity, confirmedQuantity + 1))}>
          Artir
        </ActionButton>
      </div>
      {!productReady ? <p className="text-sm text-ink/65">Miktar onayi icin once urun barkodunu dogrula.</p> : null}
    </DataCard>
  );
}

function IssuePanel({ issue, onIssue }: { issue: string | null; onIssue: (value: string | null) => void }) {
  return (
    <DataCard className="space-y-3">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-xs font-bold uppercase text-moss">Hasar / eksik stok</p>
          <h2 className="text-lg font-bold">Durum bildir</h2>
        </div>
        <AlertTriangle className="h-6 w-6 text-saffron" />
      </div>
      <div className="grid grid-cols-2 gap-2">
        <ActionButton variant={issue === 'Eksik stok' ? 'danger' : 'secondary'} onClick={() => onIssue(issue === 'Eksik stok' ? null : 'Eksik stok')}>
          Eksik stok
        </ActionButton>
        <ActionButton variant={issue === 'Hasarli urun' ? 'danger' : 'secondary'} onClick={() => onIssue(issue === 'Hasarli urun' ? null : 'Hasarli urun')}>
          Hasarli urun
        </ActionButton>
      </div>
      {issue ? <p className="rounded-lg bg-red-50 p-3 text-sm font-semibold text-red-800">{issue} bildirimi kayda hazir.</p> : null}
    </DataCard>
  );
}

function PackingPanel({ task }: { task: WorkerTask }) {
  return (
    <DataCard className="space-y-4">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-xs font-bold uppercase text-moss">Paketleme</p>
          <h2 className="text-lg font-bold">{task.packageType}</h2>
        </div>
        <PackageCheck className="h-7 w-7 text-moss" />
      </div>
      <div className="grid gap-3 sm:grid-cols-3">
        <div className="rounded-lg bg-paper p-3">
          <p className="text-sm text-ink/60">Siparis</p>
          <p className="font-bold">{task.orderNo}</p>
        </div>
        <div className="rounded-lg bg-paper p-3">
          <p className="text-sm text-ink/60">Musteri</p>
          <p className="font-bold">{task.customer}</p>
        </div>
        <div className="rounded-lg bg-paper p-3">
          <p className="text-sm text-ink/60">Kontrol</p>
          <p className="font-bold">Etiket + koli</p>
        </div>
      </div>
    </DataCard>
  );
}

export default function WorkerPage() {
  const [selectedTaskId, setSelectedTaskId] = useState(tasks[0].id);
  const [scanState, setScanState] = useState<ScanState>('idle');
  const [confirmedQuantity, setConfirmedQuantity] = useState(0);
  const [issue, setIssue] = useState<string | null>(null);
  const [scenario, setScenario] = useState<'normal' | 'loading' | 'empty'>('normal');
  const [completed, setCompleted] = useState(false);

  const selectedTask = useMemo(
    () => tasks.find((task) => task.id === selectedTaskId) ?? tasks[0],
    [selectedTaskId],
  );

  const productReady = scanState === 'correct_product';
  const quantityReady = productReady && confirmedQuantity === selectedTask.quantity;

  function selectTask(task: WorkerTask) {
    setSelectedTaskId(task.id);
    setScanState('idle');
    setConfirmedQuantity(0);
    setIssue(null);
    setCompleted(false);
  }

  if (scenario === 'loading') {
    return (
      <AppLayout>
        <div className="space-y-5">
          <PageHeader eyebrow="Depo calisani" title="Gorevler" />
          <LoadingState label="Gorevler yukleniyor" />
          <ActionButton variant="secondary" onClick={() => setScenario('normal')}>Mock veriye don</ActionButton>
        </div>
      </AppLayout>
    );
  }

  if (scenario === 'empty') {
    return (
      <AppLayout>
        <div className="space-y-5">
          <PageHeader eyebrow="Depo calisani" title="Gorevler" />
          <EmptyState
            title="Atanmis gorev yok"
            description="Yeni toplama veya paketleme gorevi geldigi anda bu ekranda gorunecek."
            action={<ActionButton onClick={() => setScenario('normal')}>Mock gorevleri goster</ActionButton>}
          />
        </div>
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      <div className="space-y-5">
        <PageHeader
          eyebrow="Depo calisani"
          title="Mobil gorev ekrani"
          action={
            <ActionButton
              variant="secondary"
              icon={<Loader2 className="h-4 w-4" />}
              onClick={() => setScenario('loading')}
            >
              Loading
            </ActionButton>
          }
        />

        <div className="grid gap-3 sm:grid-cols-3">
          <StatCard label="Siradaki gorev" value={String(tasks.length)} icon={<ClipboardList className="h-5 w-5 text-sky" />} />
          <StatCard label="Acil" value="1" icon={<TriangleAlert className="h-5 w-5 text-clay" />} />
          <StatCard label="Tamamlanan" value={completed ? '1' : '0'} icon={<CheckCircle2 className="h-5 w-5 text-moss" />} />
        </div>

        <div className="grid gap-5 lg:grid-cols-[360px_1fr]">
          <section className="space-y-3">
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-lg font-bold">Gorev kartlari</h2>
              <button className="text-sm font-semibold text-moss" onClick={() => setScenario('empty')}>
                Empty state
              </button>
            </div>
            {tasks.map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                selected={task.id === selectedTask.id}
                onSelect={() => selectTask(task)}
              />
            ))}
          </section>

          <section className="space-y-4">
            <DataCard className="space-y-3">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-moss">{taskTypeLabel(selectedTask.type)} akisi</p>
                  <h2 className="text-xl font-bold">{selectedTask.productName}</h2>
                  <p className="mt-1 text-sm text-ink/65">{selectedTask.customer} - {selectedTask.orderNo}</p>
                </div>
                <StatusBadge tone={statusTone[selectedTask.status]}>{statusLabel[selectedTask.status]}</StatusBadge>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-lg bg-paper p-3">
                  <p className="text-sm text-ink/60">Lokasyon</p>
                  <p className="font-bold">{selectedTask.locationCode}</p>
                </div>
                <div className="rounded-lg bg-paper p-3">
                  <p className="text-sm text-ink/60">Miktar</p>
                  <p className="font-bold">{selectedTask.quantity} adet</p>
                </div>
                <div className="rounded-lg bg-paper p-3">
                  <p className="text-sm text-ink/60">Oncelik</p>
                  <p className="font-bold">{selectedTask.priority}</p>
                </div>
              </div>
            </DataCard>

            {selectedTask.type === 'picking' ? (
              <>
                <ScanPanel task={selectedTask} scanState={scanState} onScan={setScanState} />
                <QuantityPanel
                  task={selectedTask}
                  confirmedQuantity={confirmedQuantity}
                  onChange={setConfirmedQuantity}
                  productReady={productReady}
                />
                <IssuePanel issue={issue} onIssue={setIssue} />
              </>
            ) : (
              <PackingPanel task={selectedTask} />
            )}
          </section>
        </div>
      </div>

      <div className="fixed inset-x-0 bottom-[72px] z-20 border-t border-line bg-white/95 p-3 shadow-soft backdrop-blur md:bottom-0 md:left-[248px]">
        <div className="mx-auto flex max-w-6xl gap-2">
          <ActionButton
            className="flex-1"
            icon={<ScanLine className="h-5 w-5" />}
            onClick={() => setScanState(scanState === 'correct_location' ? 'correct_product' : 'correct_location')}
          >
            Barkod okut
          </ActionButton>
          <ActionButton
            className="flex-1"
            disabled={selectedTask.type === 'picking' ? !quantityReady || Boolean(issue) : false}
            icon={<ClipboardCheck className="h-5 w-5" />}
            onClick={() => setCompleted(true)}
          >
            Tamamla
          </ActionButton>
        </div>
      </div>

      {completed ? (
        <div className="fixed inset-x-4 bottom-36 z-40 mx-auto max-w-md rounded-lg border border-green-200 bg-green-50 p-4 text-green-900 shadow-soft md:bottom-20">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0" />
            <div>
              <p className="font-bold">Gorev tamamlandi</p>
              <p className="text-sm">Mock akista gorev basariyla kapatildi.</p>
            </div>
          </div>
        </div>
      ) : null}
    </AppLayout>
  );
}
