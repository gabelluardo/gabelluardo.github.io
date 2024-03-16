import lume from "lume/mod.ts";
import jsx from "lume/plugins/jsx_preact.ts";
import sass from "lume/plugins/sass.ts";
import minifyHTML from "lume/plugins/minify_html.ts";

const site = lume({
  src: "src",
  location: new URL("https://gabelluardo.github.io"),
});

site
  .use(jsx())
  .use(sass())
  .use(minifyHTML());

site.copy("static", ".");

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
