const colors = require('colors/safe');
const schema = require('./options.json');

/**
 * @param {String | Buffer} source 
 */
module.exports = function (source, map, meta) {
  this.async();

  setTimeout(() => {
    console.log(colors.bgBlue(this.sourceMap));
    // this.getOptions接受一个 schema-util 库定义的参数，表示loader options的模版
    // 在调用getOptions时会按schema的模式校验传入的loader options
    console.log(colors.bgCyan(this.getOptions(schema)));
    console.log(colors.bgWhite(this.query));
    console.log(colors.brightGreen('this is loader-demo-1'), source);
    this.callback(null, source, map, meta);
  }, 1000);
  // assert(source instanceof Buffer);

  return;
}

// module.exports.raw = true;

// pitching
// module.exports.pitching = ???