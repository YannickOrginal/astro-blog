---
import Header from '../components/Header.astro';
import '../styles/global.css';
---

<!doctype html>
<html lang="de">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Über mich | Yannick Derouaux</title>
  </head>
  <body>
    <Header />
    <main class="container">
      <h1>Über mich &amp; Systemansatz</h1>
      <p class="intro">
        Hier entsteht die detaillierte Dokumentation zu technischen Projekten, Systemarchitektur und Werdegang.
      </p>
    </main>
  </body>
</html>

<style>
  .container {
    max-width: 800px;
    margin: 40px auto;
    padding: 0 24px;
    color: var(--text-main, #f8fafc);
  }
  h1 {
    font-size: 2.2rem;
    font-weight: 800;
    margin-bottom: 1rem;
  }
  .intro {
    font-size: 1.1rem;
    line-height: 1.6;
    color: var(--text-muted, #94a3b8);
  }
</style>
