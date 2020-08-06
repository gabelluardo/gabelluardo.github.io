+++
title="Bot twitter in Rust"
date=2020-08-06

[taxonomies]
tags=["twitter", "bot", "rust", "async", "tokio"]
+++

Ho iniziato a studiare [Rust][1] a tempo perso qualche mese fa, tra un esame e l'altro.
È oggettivamente un linguaggio difficile da usare e senza un IDE o dei plug-in 
per l'editor può diventare un incubo anche scrivere programmi basilari.
<!-- more -->
Piuttosto che Rust avrebbero dovuto chiamarlo Doom...

<img class="media" src="https://media.giphy.com/media/1xNApQKoX1uW2vhVE9/giphy.gif">

Squallore a parte, dopo aver letto molteplici libri e guide e dopo essere stato seviziato dal compilatore innumerevoli volte, ho deciso di sperimentare un po' con un'applicazione di reale utilità: mi serviva un bot twittasse in automatico ogni volta che veniva pubblicato un nuovo blog post.

Niente di troppo difficile: esiste già un ottimo [crate][2] per le api di twitter e un altro per il parsing del [feed rss][3].  
Il grosso del lavoro è quindi procurarsi le credenziali da sviluppatore di [twitter][4] e salvarle come variabili d'ambiente in un file `.env`, che ci serviranno per generare il token per accedere alle api di twitter.

Dato che con Rust ci viene fornito anche il comodissimo [cargo][5] che si occupa della struttura, della compilazione e della pubblicazione su [crate.io][6] del progetto, quello che otteniamo lanciando `cargo new twitter-bot` è questo:

```sh
twitter-bot
  ├── Cargo.lock
  ├── Cargo.toml
  ├── LICENSE
  ├── README.md
  └── src
      └── main.rs
```

Sempre con spirito di intraprendenza, ho voluto sperimentare anche [tokio][7]: un runtime per programmazione asincrona, praticamente lo standard de facto in Rust dall'introduzione dell'async/await di qualche anno fa. Per impostarlo basta aggiungerlo come dipendenza in `Cargo.toml` e usare le macro a disposizione:

```toml
[dependencies.tokio]
 version = "0.2"
 features = ["macros"]
```
oppure
```toml
tokio = {version = "0.2", features = ["macros"]}
```

Nel main in `main.rs`, che useremo come entry point:

```rust
#[tokio::main]
 async fn main() {}
```

Il runtime async ci servirà soprattuto per le richieste http non bloccanti che fanno risparmiare risorse di sistema. In particolare, usando [reqwest][8], che supporta tokio, possiamo scrivere:

```rust
reqwest::get(url).await?.bytes().await?
```

Il `?` è zucchero sintattico per il try-catch di Rust che propaga l'errore, una scrittura equivalente sarebbe:

```rust
match request::get(url).await {
  Ok(response) => match response.byte().await {
    Ok(response) => response,
    Err(e) => return Err(e),
  },
  Err(e) => return Err(e),
}
```

Non c'è nemmeno bisogno di dire quale sia la più leggibile, però bisogna ricordarsi che per propagare gli errori si deve usare l'enum generico `Result<T, E>`, quindi il main deve essere leggermente modificato: 

```rust 
use std::error::Error;
use std::result::Result;

#[tokio::main]
async fn main() -> Result<(), Box<dyn Error>> {}
```

Un'altra funzione comoda di Rust è `loop`, che fornisce di defalut un ciclo infinito in cui possiamo:
1. ricavare le informazioni dell'ultimo post del blog
2. ricavare la data dell'ultimo tweet del nostro account
3. controllare che il post sia più recente dell'ultimo tweet, quindi pubblicarlo
4. sleep per x secondi prima di ripetere il ciclo

```rust 
loop {  
    let post = last_post(...).await?;
    let last_tweet_date = last_tweet(...).await?;

    if post.date > last_tweet_date {
        publish(...).await?;
    }

    tokio::time::delay_for(Duration::from_secs(...)).await
  }
```

Penso che le parti interessanti siano su per giù queste, il repository completo è comunque su [github][9]

<img class="media" src="/assets/ferris.gif">


[1]: https://www.rust-lang.org/it
[2]: https://github.com/egg-mode-rs/egg-mode
[3]: https://github.com/rust-syndication/rss
[4]: https://developer.twitter.com
[5]: https://github.com/rust-lang/cargo
[6]: https://crates.io
[7]: https://tokio.rs
[8]: https://github.com/seanmonstar/reqwest
[9]: https://github.com/gabelluardo/twitter-bot
