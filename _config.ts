import lume from "lume/mod.ts";
import mdx from "lume/plugins/mdx.ts";
import sass from "lume/plugins/sass.ts";
import metas from "lume/plugins/metas.ts";
import robots from "lume/plugins/robots.ts";
import jsx from "lume/plugins/jsx_preact.ts";
import favicon from "lume/plugins/favicon.ts";
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
  .use(jsx())
  .use(mdx())
  .use(sass())
  .use(metas())
  .use(favicon())
  .use(minifyHTML())
  .use(lightningCss())
  .use(
    robots(
      { allow: ["Googlebot", "Bingbot", "DuckDuckBot"], disallow: ["*"] },
    ),
  );

site.copy("site.webmanifest");

// tranform all links to open in a new tab
site.process([".html"], (pages) => {
  pages.forEach((page) => {
    const document = page.document!;

    document.querySelectorAll('a[href^="http"]').forEach((link) => {
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noreferer noopener");
    });
  });
});

export default site;
