# Webanalyse mit GoatCounter

Diese Website nutzt [GoatCounter](https://www.goatcounter.com) für eine datenschutzfreundliche Webanalyse.
Dashboard: **https://marionschaefers.goatcounter.com**

GoatCounter setzt keine Cookies, verwendet keine geräteübergreifenden Kennungen und speichert keine
vollständigen IP-Adressen. Das Tracking-Skript (`//gc.zgo.at/count.js`) ist auf allen Seiten eingebunden,
lädt asynchron (`async`) und hat keinen spürbaren Einfluss auf Ladezeit oder SEO.

## Was automatisch erfasst wird (ohne zusätzlichen Code)

| Frage | Wo im Dashboard? |
|---|---|
| Seitenaufrufe pro Blogartikel | **Pages** – jede Artikel-URL wird einzeln gezählt |
| Besucherquellen (z. B. Pinterest) | **Referrers** – zeigt externe Domains, von denen Besucher kommen |
| Beliebteste Artikel insgesamt | **Pages**, sortiert nach Aufrufen |

Für die Pinterest-Auswertung: Wenn Besucher direkt aus der Pinterest-App kommen, wird der Referrer manchmal
nicht mitgeschickt (technische Einschränkung von Pinterest, nicht von GoatCounter). Falls du exaktere Zahlen
willst, kannst du deinen Pin-Links UTM-Parameter geben, z. B.:
`https://marionschaefers.com/blog-pinterest-50-ideen.html?utm_source=pinterest`
GoatCounter zeigt solche Parameter unter **Campaigns** an.

## Eigens eingerichtete Klick-Events

Jeder Button/Link zu einem Tentary-Produkt oder Freebie hat ein `data-goatcounter-click`-Attribut bekommen.
GoatCounter zählt einen Klick automatisch als eigenes "Page"-Event, sobald jemand draufklickt – ganz ohne
dass die Seite neu geladen wird. Du findest diese Events ebenfalls unter **Pages** (sie sind mit einem
Event-Symbol markiert).

| Event-Name | Produkt |
|---|---|
| `click-starter-set` | Pinterest Starter Set (Hauptprodukt/Bundle) |
| `click-erfolgsbundle` | Pinterest Erfolgsbundle (Content Kit + Logbuch) |
| `click-logbuch` | Pinterest Logbuch (einzeln) |
| `click-content-kit` | Pinterest Content Kit (einzeln) |
| `click-pin-vorlagen` | Pin mit Stil – Canva-Vorlagen |
| `click-minikurs-digital-starten` | Minikurs "Digital starten ohne Druck" |
| `click-freebie-pin-fehler` | Gratis-Guide "8 Pin-Fehler" |
| `click-freebie-produktidee` | Gratis-Guide "Produktidee prüfen" |

## Welcher Artikel bringt die meisten Produktklicks?

1. Im Dashboard auf **Pages** gehen.
2. Auf ein Event klicken (z. B. `click-starter-set`).
3. Dort öffnet sich eine Detailansicht mit **Referrer**-Aufschlüsselung – das zeigt dir, von welcher Seite
   (welchem Blogartikel) der Klick jeweils ausgelöst wurde. Standardmäßig setzt GoatCounter bei Klick-Events
   den Referrer auf die aktuelle Seite, nicht auf die vorherige externe Quelle – genau das, was du brauchst.

Damit lässt sich der komplette Weg nachvollziehen:
**Pinterest (Referrers) → Blogartikel (Pages) → Produktklick (Event, mit Referrer = Artikel) → Tentary.**

Der eigentliche Kauf passiert danach bei Tentary selbst – das liegt außerhalb dieser Website und wird von
GoatCounter naturgemäß nicht erfasst.

## Vorlage: UTM-Parameter für neue Pinterest-Pins

Damit du künftig pro einzelnem Pin sehen kannst, wie viele Besuche und Produktklicks er bringt (nicht nur
"kam von Pinterest" allgemein), gib jedem neuen Pin beim Erstellen eine eigene Ziel-URL nach diesem Schema:

```
https://marionschaefers.com/<artikel-datei>.html?utm_source=pinterest&utm_medium=pin&utm_campaign=<artikel-kurzname>-pin<nummer>
```

- `utm_source=pinterest` – bleibt für alle Pinterest-Pins immer gleich
- `utm_medium=pin` – bleibt immer gleich
- `utm_campaign` – ein kurzer, eindeutiger Name pro Pin, Schema: `<artikel-kurzname>-pin<laufende-nummer>`

**Beispiel** (6 Pins zum Artikel "50 Ideen"):

| Pin | Ziel-URL |
|---|---|
| Pin 1 | `https://marionschaefers.com/blog-pinterest-50-ideen.html?utm_source=pinterest&utm_medium=pin&utm_campaign=50ideen-pin1` |
| Pin 2 | `https://marionschaefers.com/blog-pinterest-50-ideen.html?utm_source=pinterest&utm_medium=pin&utm_campaign=50ideen-pin2` |
| Pin 3 | `https://marionschaefers.com/blog-pinterest-50-ideen.html?utm_source=pinterest&utm_medium=pin&utm_campaign=50ideen-pin3` |
| Pin 4 | `https://marionschaefers.com/blog-pinterest-50-ideen.html?utm_source=pinterest&utm_medium=pin&utm_campaign=50ideen-pin4` |
| Pin 5 | `https://marionschaefers.com/blog-pinterest-50-ideen.html?utm_source=pinterest&utm_medium=pin&utm_campaign=50ideen-pin5` |
| Pin 6 | `https://marionschaefers.com/blog-pinterest-50-ideen.html?utm_source=pinterest&utm_medium=pin&utm_campaign=50ideen-pin6` |

Die Auswertung findest du im Dashboard unter **Campaigns** – dort erscheint jeder `utm_campaign`-Wert als
eigene Zeile mit eigener Besucherzahl. Kein Code muss dafür angepasst werden, das funktioniert automatisch
für jede neue URL mit diesen Parametern.

## Technische Umsetzung

- Tracking-Skript in `<head>` jeder Seite: `<script data-goatcounter="..." async src="//gc.zgo.at/count.js"></script>`
- Klick-Events per `data-goatcounter-click="..."`-Attribut direkt an den jeweiligen `<a>`-Tags
- Keine Änderung an Design, Layout oder Ladeverhalten der Seiten
