const colors = require('colors/safe');

/**
 * @param {String | Buffer} source 
 */
module.exports = function (source, map, meta) {
  this.async();

  setTimeout(() => {
    console.log(colors.blue(this.sourceMap));
    console.log(colors.brightGreen('this is loader-demo-1'), source);
    this.callback(null, source, map, meta);
  }, 1000);
  // assert(source instanceof Buffer);

  return;
}

// module.exports.raw = true;

// pitching
// module.exports.pitching = ???