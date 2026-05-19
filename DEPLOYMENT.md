# Deployment-Anleitung

## Schritt 1 — GitHub Repository anlegen

1. Geh auf github.com → "New repository"
2. Repository-Name: `welcome-back-queen-dajenne`
3. Visibility: **Public** (GitHub Pages braucht das bei Free-Accounts)
4. Kein README, keine .gitignore — einfach leer

## Schritt 2 — Dateien hochladen

Option A: Über die GitHub-Weboberfläche
- "Add file" → "Upload files"
- Alle Dateien aus diesem Ordner hochladen (inkl. `data/`-Unterordner)

Option B: Per Git (wenn du Git installiert hast)
```bash
cd "c:/Claude Projekte/Ex on the Beach"
git init
git add .
git commit -m "Welcome Back Queen Dajenne 👑"
git remote add origin https://github.com/DEIN-USERNAME/welcome-back-queen-dajenne.git
git push -u origin main
```

## Schritt 3 — GitHub Pages aktivieren

1. Im Repository → Settings → Pages
2. Source: "Deploy from a branch"
3. Branch: `main` / `(root)`
4. Speichern

Nach 1-2 Minuten ist die Seite live unter:
**https://DEIN-USERNAME.github.io/welcome-back-queen-dajenne/**

## Schritt 4 — Karikatur-Bild hinzufügen (optional)

1. DALL-E-Prompt von der Startseite kopieren (Details-Bereich)
2. Bild mit ChatGPT/DALL-E oder Midjourney generieren
3. Als `img/dajenne.png` in den Projektordner speichern
4. In `index.html` den Platzhalter-Kommentar ersetzen:
   ```html
   <img src="img/dajenne.png" alt="Dajenne Karikatur">
   ```

## Schritt 5 — Liebesbriefe vorbereiten

- Link an alle Freundinnen schicken: `https://...github.io/.../liebesbriefe.html`
- Passwort (`girlsnight2025`) mitteilen
- Jede gibt vorher ihren Satz ein
- Auf der Party: Tab "Slideshow starten"

## Passwort ändern

In `auth.js`, Zeile 1:
```js
const AUTH_PASSWORD = "girlsnight2025"; // ← hier ändern
```

## Spiele-Reihenfolge auf der Party

1. 🚩 Red Flag Roulette — zum Warmwerden, lustig und gemeinsam
2. 🎱 Toxic Bingo — während Storys erzählt werden
3. ✨ Glow-Up Wall — Karten vorlesen, emotional
4. 💌 Liebesbriefe-Slideshow — tief, berührend
5. 🌟 Goldene Zukunft — perfekter Abschluss
