var PEG = require("pegjs");

/*
 MIT License http://www.opensource.org/licenses/mit-license.php
 Author Tomas Korcak <korczis@gmail.com>
 */
module.exports = function (content) {
  this.cacheable && this.cacheable();
  this.value = content;

  const input = content;
  const output = PEG.buildParser(content.toString(), {
    output: "source"
  });

  return "module.exports = " + output;
}