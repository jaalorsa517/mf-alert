const concat = require("concat");

(async function build() {
  const files = [
    "./dist/wc-alert/runtime.js",
    "./dist/wc-alert/polyfills.js",
    "./dist/wc-alert/main.js",
  ];

  await concat(files, "./dist/wc-alert/wc-alert.js");
})();
