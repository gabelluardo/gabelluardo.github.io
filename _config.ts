import lume from "lume/mod.ts";
import mdx from "lume/plugins/mdx.ts";
import jsx from "lume/plugins/jsx.ts";
import sass from "lume/plugins/sass.ts";
import metas from "lume/plugins/metas.ts";
import robots from "lume/plugins/robots.ts";
import brotli from "lume/plugins/brotli.ts";
import favicon from "lume/plugins/favicon.ts";
import purgecss from "lume/plugins/purgecss.ts";
import minifyHTML from "lume/plugins/minify_html.ts";
import lightningCss from "lume/plugins/lightningcss.ts";

const site = lume({
  src: "src",
  location: new URL("https://gabelluardo.github.io"),
  prettyUrls: true,
  watcher: {
    debounce: 10,
  },
});

site
  .use(mdx())
  .use(sass())
  .use(metas())
  .use(brotli())
  .use(favicon())
  .use(purgecss())
  .use(minifyHTML())
  .use(lightningCss())
  .use(
    robots(
      { allow: ["Googlebot", "Bingbot", "DuckDuckBot"], disallow: ["*"] },
    ),
  ).use(jsx({
    pageSubExtension: "", // Reverts to Lume 2 behavior
  }));

site
  .add("main.scss")
  .add("site.webmanifest");

// tranform all links to open in a new tab
site.process([".html"], (pages) => {
  for (const page of pages) {
    const document = page.document || page.data.document;

    for (const link of document.querySelectorAll('a[href^="http"]')) {
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "me noreferer noopener");
    }
  }
});

export default site;
