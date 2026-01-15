Harmony Archive
PWA – Dönem Sonu Projesi
Proje Açıklaması

Harmony Archive, MusicBrainz API kullanılarak geliştirilmiş,
bir müzik stüdyosu / sanatçı ajansı için tasarlanmış
çok sayfalı, kurulabilir ve offline çalışabilen bir web uygulamasıdır.
Proje, Web Tabanlı Mobil Uygulama Geliştirme dersi kapsamında hazırlanmıştır.

Kullanılan API
MusicBrainz API
https://musicbrainz.org/doc/MusicBrainz_API

Örnek Endpointler
Sanatçı arama
https://musicbrainz.org/ws/2/artist/?query=rock&fmt=json

Sanatçı albümleri
https://musicbrainz.org/ws/2/release?artist={artistId}&fmt=json

Sayfa Yapısı (Multi-Page)
index.html → Ana sayfa
artists.html → Sanatçı listesi
detail.html → Sanatçı detay / albümler
about.html → Hakkımızda
contact.html → İletişim formu
offline.html → Offline ekranı
Her sayfa ayrı bir HTML dosyasıdır.

CSS Framework
Bootstrap 5 (CDN)
https://getbootstrap.com/
Bootstrap grid sistemi ve bileşenleri kullanılmıştır.
Ek olarak css/style.css dosyasında özel stiller yazılmıştır.

PWA Özellikleri
Manifest dosyası (manifest.json)
Service Worker
Offline çalışma (offline.html)
App Shell cache
Install edilebilir (standalone)

Offline Senaryosu
İnternet bağlantısı yoksa offline.html gösterilir
API erişilemezse /data/sample.json üzerinden örnek veri kullanılır
Kullanıcı bilgilendirilir

Videoda:
API’den veri çekilmesi
Arama özelliği
Detay sayfası
Offline çalışma
Install edilebilirlik
gösterilmektedir.

Geliştirici

İlayda Koçer
Üniversite 2. Sınıf – Ön Yüz (Front-End) Yazılım Geliştirme