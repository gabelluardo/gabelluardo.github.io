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

site.copy("public", ".");

export default site;
