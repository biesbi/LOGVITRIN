# LOGVITRIN

LOGVITRIN, depo alanı kiralama, temel WMS ve fulfillment süreçlerini birleştiren mobil öncelikli bir SaaS platformudur.

## Ana Hedef

Müşteriler depo alanı kiralar, ürünlerini sisteme ekler, stoklarını takip eder ve sipariş oluşturur. Depo çalışanları mobil ekranlar üzerinden ürün kabul, toplama, paketleme ve sevk görevlerini yürütür.

## Önerilen Teknoloji

### Frontend
- Next.js
- React
- TypeScript
- Tailwind CSS
- Shadcn UI
- PWA / mobile-first yapı

### Backend
- NestJS
- TypeScript
- PostgreSQL
- Prisma ORM
- JWT Auth
- Role & Scope Based Access Control

## Repo Yapısı

```text
frontend/
backend/
docs/
tasks/
```

## Backend Çalıştırma

```bash
cd backend
npm install
cp .env.example .env
npm run start:dev
```

### Backend Test

```bash
cd backend
npm run test:e2e
```

## Frontend Çalıştırma

Frontend ekranları şu anda mock data ile çalışır. Depo çalışanı mobil görev akışı `/worker` route'u üzerindedir.

```bash
cd frontend
npm install
npm run dev
```

### Frontend Build

```bash
cd frontend
npm run build
```

## Çalışma Kuralı

Her geliştirme GitHub issue üzerinden yapılır. Her issue için ayrı branch açılır ve iş tamamlanınca pull request oluşturulur. PR onaylanmadan main branch'e merge yapılmaz.
