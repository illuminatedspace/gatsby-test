// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "page-component---cache-dev-404-page-js": preferDefault(require("/home/liz/Documents/gatsby-test/.cache/dev-404-page.js")),
  "page-component---src-pages-index-js": preferDefault(require("/home/liz/Documents/gatsby-test/src/pages/index.js")),
  "page-component---src-pages-my-second-gatsby-page-js": preferDefault(require("/home/liz/Documents/gatsby-test/src/pages/my-second-gatsby-page.js"))
}

exports.json = {
  "dev-404-page.json": require("/home/liz/Documents/gatsby-test/.cache/json/dev-404-page.json"),
  "index.json": require("/home/liz/Documents/gatsby-test/.cache/json/index.json"),
  "my-second-gatsby-page.json": require("/home/liz/Documents/gatsby-test/.cache/json/my-second-gatsby-page.json")
}

exports.layouts = {

}