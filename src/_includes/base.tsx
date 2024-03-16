export default ({ info, children }: Lume.Data) => (
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width" />
      <link rel="icon" type="image/svg+xml" href="/favicon.ico" />
      <meta name="generator" content={info.generator} />

      <meta http-equiv="content-type" content="text/html; charset=utf-8" />
      <meta name="robots" content="noodp" />
      <meta name="theme-color" content="#1F222A" />
      <meta name="description" content="Personal website" />

      {/* Style */}
      <link rel="stylesheet" href="main.css" />

      {/* Goatcounter */}
      <script
        async
        type="text/partytown"
        src="//gc.zgo.at/count.js"
        data-goatcounter="https://gabelluardo.goatcounter.com/count"
      ></script>

      <title>{info.site}</title>
    </head>

    <body>{children}</body>
  </html>
);
