function importAll(r) {
  r.keys().forEach(r);
}

// import all js files under src/Widgets/
importAll(require.context("./", true, /\.js$/));
import "scrivito-highlight-code";
import "scrivito-news-reader"
import "scrivito-eyecatcher"
import "scrivito-undraw"
import "scrivito-highlight-code/index.css"
import "scrivito-undraw/index.css";
