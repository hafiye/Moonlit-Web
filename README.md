# Moonlit Studios sitesi

moonlitstudios.dev için Astro ile yapılmış statik site. `main` branch'ine her push'ta GitHub Pages'e otomatik yayınlanır.

## Yerelde çalıştırmak

```powershell
npm install
npm run dev
```

Sonra tarayıcıda http://localhost:4321 adresini aç.

## Yeni devlog eklemek

1. `src/content/devlog/` içine yeni bir `.md` dosyası koy. Dosya adı URL'yi belirler: `ilk-demo.md` -> `/devlog/ilk-demo/`
2. Dosyanın en üstüne şunu yaz:

```md
---
title: 'Demo is out!'
date: 2026-11-19
description: 'Listede ve paylaşımlarda görünen tek cümlelik özet.'
cover: ../../assets/devlog/demo.jpg   # isteğe bağlı, liste kartındaki görsel
coverAlt: 'Görselin kısa tarifi'
game: witchs-binder                   # isteğe bağlı, oyun sayfasında da görünür
steamUrl: 'https://store.steampowered.com/news/app/...'   # isteğe bağlı
draft: false                          # true yaparsan yayınlanmaz
---

Yazının kendisi buraya. **Kalın**, *italik*, [link](https://...) çalışır.

![Görselin tarifi](../../assets/devlog/gorsel.jpg)
```

3. Görselleri `src/assets/devlog/` klasörüne koy. Site onları otomatik küçültüp webp'ye çevirir.

## Sık değişen yerler

- `src/data/site.ts`: slogan, iletişim e-postası, sosyal medya linkleri
- `src/data/games.ts`: oyun bilgileri, Steam linkleri, ekran görüntüleri
- `src/pages/games/witchs-binder.astro`: oyun sayfasının metni
- `public/press/`: basın kiti dosyaları
