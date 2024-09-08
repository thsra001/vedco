import lume from "lume/mod.ts";
import nunjucks from "lume/plugins/nunjucks.ts";
import sass from "lume/plugins/sass.ts";

const site = lume();
site.copy("assets")
site.copy("favicon.ico")
site.use(nunjucks())
site.use(sass())

export default site;
