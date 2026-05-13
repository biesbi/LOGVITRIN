# LOGVITRIN Product Requirements Document

## 1. Ürün Tanımı

LOGVITRIN; depo alanı kiralama, temel WMS ve fulfillment operasyonlarını bir araya getiren mobil öncelikli bir SaaS platformudur.

Müşteri/satıcı sisteme kayıt olur, depo alanlarını görüntüler, alan kiralar, ürünlerini ekler, stoklarını takip eder ve sipariş oluşturur. Depo çalışanı mobil ekran üzerinden ürün kabul, toplama, paketleme ve sevk görevlerini yürütür.

## 2. Ana Roller

### Admin
- Tüm sistemi yönetir.
- Firma, depo, kullanıcı, fiyat, sipariş, stok ve raporları görebilir.

### Depo Yetkilisi
- Yetkili olduğu depoları yönetir.
- Görevleri atar, ürün kabul ve sevk süreçlerini takip eder.

### Depo Çalışanı
- Kendisine atanan görevleri görür.
- Mobil ekran üzerinden ürün toplar, barkod okutur, paketleme yapar.

### Müşteri / Satıcı
- Alan kiralar.
- Ürün ekler.
- Stoklarını ve siparişlerini takip eder.

## 3. MVP Kapsamı

- Kullanıcı/firma kayıt ve giriş
- Rol ve kapsam bazlı yetki
- Admin panel
- Depo ve lokasyon yönetimi
- Alan kiralama
- Ürün/SKU/barkod yönetimi
- Ürün kabul
- Stok hareket defteri
- Stok bakiyesi
- Sipariş oluşturma
- Stok rezervasyonu
- Depo görevleri
- Mobil toplama ekranı
- Mobil paketleme ekranı
- Kargo takip numarası
- Audit log

## 4. Kapsam Dışı İlk Faz

- Tam muhasebe sistemi
- Çoklu kargo entegrasyonu
- Pazaryeri entegrasyonları
- Gelişmiş wave picking
- Otomatik e-Fatura/e-Arşiv
- Tam iade ve kalite karantina süreçleri

## 5. Kritik İş Kuralları

1. Ödeme alınmadan alan aktifleşmemelidir.
2. Ürün sayılmadan kullanılabilir stoğa geçmemelidir.
3. Stok miktarı elle yazılmamalı, inventory ledger hareketlerinden türetilmelidir.
4. Müşteri sadece kendi firma verisini görebilmelidir.
5. Depo çalışanı sadece kendisine atanmış görevleri görebilmelidir.
6. Her kritik işlem audit log’a düşmelidir.
7. Borçlu müşterinin ürün çıkışı blokelenebilmelidir.
8. Yanlış lokasyon veya yanlış ürün barkodu okutulursa görev ilerlememelidir.

## 6. Başarı Kriteri

MVP sonunda müşteri alan kiralayabilmeli, ürün ekleyebilmeli, stoklarını görebilmeli ve sipariş oluşturabilmelidir. Depo çalışanı mobil ekranda görevi alıp ürünü toplayabilmeli, paketleyebilmeli ve sevk sürecine aktarabilmelidir.
