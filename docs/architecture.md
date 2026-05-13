# LOGVITRIN Architecture

## 1. Mimari Yaklaşım

LOGVITRIN ilk fazda modüler monolith mimarisiyle geliştirilecektir. Mikroservis mimarisine ilk aşamada geçilmeyecektir.

Amaç, tek veritabanı ve net ayrılmış modüllerle hızlı, güvenli ve bakımı kolay bir MVP geliştirmektir.

## 2. Önerilen Teknoloji

### Backend
- NestJS
- TypeScript
- PostgreSQL
- Prisma ORM
- JWT Authentication
- Role Based Access Control
- Scope Based Access Control

### Frontend
- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Shadcn UI
- PWA support

## 3. Backend Modülleri

- auth
- users
- companies
- roles
- memberships
- warehouses
- locations
- leases
- products
- inventory
- orders
- reservations
- tasks
- shipments
- payments
- audit-logs
- files

## 4. Frontend Alanları

- Auth ekranları
- Admin web panel
- Müşteri web/mobil panel
- Depo yetkilisi panel
- Depo çalışanı mobil panel

## 5. Veri İzolasyonu

Sistem çok kiracılı SaaS mantığında çalışacaktır. Kritik tüm müşteri verilerinde companyId bulunacaktır.

Müşteri rolündeki kullanıcılar sadece kendi companyId verilerine erişebilir.

## 6. Yetki Modeli

Yetki iki katmanlıdır:

1. Role Based Access Control
2. Scope Based Access Control

Örnek:
- Admin tüm verilere erişebilir.
- Müşteri sadece kendi firma verilerine erişebilir.
- Depo yetkilisi sadece yetkili olduğu depo verilerine erişebilir.
- Depo çalışanı sadece kendisine atanmış görevleri görebilir.

## 7. Stok Mimarisi

Stok miktarı doğrudan elle tutulmayacaktır. Asıl kaynak inventory_ledger tablosudur.

inventory_balances tablosu performans için özet tablo olarak kullanılacaktır.

## 8. Sipariş ve Görev Durum Makineleri

Sipariş süreci durum makinesi ile yönetilecektir:

created → reserved → released_to_pick → picking → picked → packing → packed → labeled → dispatched → completed

Görev süreci:

created → assigned → started → completed

## 9. Mobil Öncelik

Depo çalışanı ekranları mobil-first tasarlanacaktır. Büyük butonlar, bottom navigation, barkod okutma ve tek elle kullanım kritik kabul kriteridir.
