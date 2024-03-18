import { getCurrentVersion } from "lume/core/utils/lume_version.ts";

export default ({ info, children }: Lume.Data) => (
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width" />
      <link rel="icon" type="image/svg+xml" href="/favicon.ico" />
      <link rel="icon" href="/favicon.svg" sizes="any" type="image/svg+xml" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <meta name="generator" content={`🔥lume ${getCurrentVersion()}`} />

      <meta http-equiv="content-type" content="text/html; charset=utf-8" />
      <meta name="robots" content="noodp" />
      <meta name="theme-color" content="#1F222A" />
      <meta name="description" content="Personal website" />

      {/* Style */}
      <link rel="stylesheet" href="/main.css" />

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
