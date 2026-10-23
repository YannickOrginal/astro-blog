---
title: 'Markdown-Style-Guide'
description: 'Hier ist ein Beispiel für grundlegende Markdown-Syntax, die beim Schreiben von Markdown-Inhalten in Astro verwendet werden kann.'
pubDate: 'Jun 19 2024'
heroImage: '../../assets/blog-placeholder-1.jpg'
---

Hier ist ein Beispiel für grundlegende Markdown-Syntax, die beim Schreiben von Markdown-Inhalten in Astro verwendet werden kann.

## Überschriften

Die folgenden HTML-Elemente `<h1>` bis `<h6>` stellen sechs Ebenen von Abschnittsüberschriften dar. `<h1>` ist die höchste Ebene, während `<h6>` die niedrigste ist.

# H1

## H2

### H3

#### H4

##### H5

###### H6

## Absatz

Xerum, quo qui aut unt expliquam qui dolut labo. Aque venitatiusda cum, voluptionse latur sitiae dolessi aut parist aut dollo enim qui voluptate ma dolestendit peritin re plis aut quas inctum laceat est volestemque commosa as cus endigna tectur, offic to cor sequas etum rerum idem sintibus eiur? Quianimin porecus evelectur, cum que nis nust voloribus ratem aut omnimi, sitatur? Quiatem. Nam, omnis sum am facea corem alique molestrunt et eos evelece arcillit ut aut eos eos nus, sin conecerem erum fuga. Ri oditatquam, ad quibus unda veliamenimin cusam et facea ipsamus es exerum sitate dolores editium rerore eost, temped molorro ratiae volorro te reribus dolorer sperchicium faceata tiustia prat.

Itatur? Quiatae cullecum rem ent aut odis in re eossequodi nonsequ idebis ne sapicia is sinveli squiatum, core et que aut hariosam ex eat.

## Bilder

### Syntax

```markdown
![Alt-Text](./voll/oder/relativer/pfad/zum/bild)
```

### Ausgabe

![blog placeholder](../../assets/blog-placeholder-about.jpg)

## Blockzitate

Das Blockzitat-Element repräsentiert Inhalt, der aus einer anderen Quelle zitiert wird, optional mit einer Zitierweise, die sich in einem `footer` oder `cite`-Element befinden muss, und optional mit Inline-Änderungen wie Anmerkungen und Abkürzungen.

### Blockzitat ohne Quellenangabe

#### Syntax

```markdown
> Tiam, ad mint andaepu dandae nostion secatur sequo quae.  
> **Hinweis:** Sie können _Markdown-Syntax_ innerhalb eines Blockzitats verwenden.
```

#### Ausgabe

> Tiam, ad mint andaepu dandae nostion secatur sequo quae.  
> **Hinweis:** Sie können _Markdown-Syntax_ innerhalb eines Blockzitats verwenden.

### Blockzitat mit Quellenangabe

#### Syntax

```markdown
> Don't communicate by sharing memory, share memory by communicating.<br>
> — <cite>Rob Pike[^1]</cite>
```

#### Ausgabe

> Don't communicate by sharing memory, share memory by communicating.<br>
> — <cite>Rob Pike[^1]</cite>

[^1]: Das obige Zitat ist aus Rob Pikes [Talk](https://www.youtube.com/watch?v=PAAkCSZUG1c) während Gopherfest am 18. November 2015 entnommen.

## Tabellen

### Syntax

```markdown
| Kursiv | Fett | Code |
| --------- | -------- | ------ |
| _kursiv_ | **fett** | `code` |
```

### Ausgabe

| Kursiv | Fett | Code |
| --------- | -------- | ------ |
| _kursiv_ | **fett** | `code` |

## Code-Blöcke

### Syntax

Wir können 3 Backticks ``` in einer neuen Zeile verwenden, um einen Code-Ausschnitt zu schreiben, und mit 3 Backticks in einer neuen Zeile schließen. Um die sprachspezifische Syntax hervorzuheben, geben Sie nach den ersten 3 Backticks den Namen der Sprache an, z. B. html, javascript, css, markdown, typescript, txt, bash.

````markdown
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Example HTML5 Document</title>
  </head>
  <body>
    <p>Test</p>
  </body>
</html>
```
````

### Ausgabe

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Example HTML5 Document</title>
  </head>
  <body>
    <p>Test</p>
  </body>
</html>
```

## Listentypen

### Geordnete Liste

#### Syntax

```markdown
1. Erster Punkt
2. Zweiter Punkt
3. Dritter Punkt
```

#### Ausgabe

1. Erster Punkt
2. Zweiter Punkt
3. Dritter Punkt

### Ungerordnete Liste

#### Syntax

```markdown
- Listenelement
- Ein weiteres Element
- Und ein weiteres Element
```

#### Ausgabe

- Listenelement
- Ein weiteres Element
- Und ein weiteres Element

### Verschachtelte Liste

#### Syntax

```markdown
- Obst
  - Apfel
  - Orange
  - Banane
- Milchprodukte
  - Milch
  - Käse
```

#### Ausgabe

- Obst
  - Apfel
  - Orange
  - Banane
- Milchprodukte
  - Milch
  - Käse

## Andere Elemente — abbr, sub, sup, kbd, mark

### Syntax

```markdown
<abbr title="Graphics Interchange Format">GIF</abbr> ist ein Bitmap-Bildformat.

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

Drücken Sie <kbd>CTRL</kbd> + <kbd>ALT</kbd> + <kbd>Delete</kbd>, um die Sitzung zu beenden.

Die meisten <mark>Salamander</mark> sind nachtaktiv und jagen Insekten, Würmer und andere kleine Kreaturen.
```

### Ausgabe

<abbr title="Graphics Interchange Format">GIF</abbr> ist ein Bitmap-Bildformat.

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

Drücken Sie <kbd>CTRL</kbd> + <kbd>ALT</kbd> + <kbd>Delete</kbd>, um die Sitzung zu beenden.

Die meisten <mark>Salamander</mark> sind nachtaktiv und jagen Insekten, Würmer und andere kleine Kreaturen.
