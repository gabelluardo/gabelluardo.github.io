+++
title="ElisaBot il bot Telegram simpatico"
date=2020-11-01
lang="it"

draft = true

[taxonomies]
tags=["telegram", "bot", "rust", "telgram-bot"]
+++

Dopo la [prima avventura](../twitter-bot/) nel mondo dei bot in Rust, ho deciso di cimentarmi in
una nuova impresa, stavolta con una grossa libreria chiamata [teloxide] che offre delle api interessanti,
sia per i dialoghi che per i comandi.

[teloxide]: https://github.com/teloxide/teloxide

<!-- more -->

Stavolta la parte difficile è stata, più che altro, riuscire a trovare l'approccio ottimale per scrivere codice
chiaro e legibile anche per chi dovrà mantenere il progetto in futuro.

## Specifiche
