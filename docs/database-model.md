# LOGVITRIN Database Model

## 1. Çekirdek Tablolar

- companies
- users
- roles
- memberships
- warehouses
- locations
- lease_contracts
- products
- product_barcodes
- inventory_ledger
- inventory_balances
- orders
- order_items
- reservations
- tasks
- task_events
- shipments
- payments
- invoices
- audit_logs
- files
- customer_documents

## 2. Kritik Kurallar

- Stok miktarı elle yazılmayacaktır.
- Stok hareketleri inventory_ledger üzerinden takip edilecektir.
- inventory_balances sadece performans amaçlı özet tablodur.
- Kritik müşteri verilerinde companyId bulunacaktır.
- Silme işlemleri soft delete mantığıyla yapılacaktır.
- createdAt ve updatedAt standart olacaktır.

## 3. Temel İlişki Mantığı

companies
- users ile memberships üzerinden ilişkilidir.
- products sahibidir.
- lease_contracts sahibidir.
- orders sahibidir.
- payments sahibidir.

warehouses
- locations içerir.

locations
- warehouse altında konumlanır.
- inventory_balances ile ilişkilidir.
- lease_contracts ile ilişkilendirilebilir.

products
- company sahibidir.
- product_barcodes içerir.
- inventory_ledger ile hareket görür.
- inventory_balances ile stok gösterir.

orders
- order_items içerir.
- reservations içerir.
- tasks oluşturur.
- shipments ile sevk edilir.

tasks
- task_events içerir.

## 4. Inventory Ledger Hareket Tipleri

- RECEIPT
- ISSUE
- TRANSFER_IN
- TRANSFER_OUT
- ADJUSTMENT
- RESERVATION
- RELEASE

## 5. Stok Formülü

Available Stock = Total In - Total Out - Active Reservations

## 6. Status Değerleri

### Location Status
- AVAILABLE
- RESERVED
- LEASED
- BLOCKED
- RECEIVING
- PICK_FACE
- QC

### Order Status
- DRAFT
- CREATED
- RESERVED
- RELEASED_TO_PICK
- PICKING
- PICKED
- PACKING
- PACKED
- LABELED
- DISPATCHED
- COMPLETED
- CANCELLED
- FAILED

### Task Status
- CREATED
- ASSIGNED
- STARTED
- PAUSED
- COMPLETED
- FAILED
- CANCELLED
