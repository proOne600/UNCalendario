(function() {
  var exports, iferr, printerr, throwerr, tiferr,
    slice = [].slice;

  iferr = function(fail, succ) {
    return function() {
      var a, err;
      err = arguments[0], a = 2 <= arguments.length ? slice.call(arguments, 1) : [];
      if (err != null) {
        return fail(err);
      } else {
        return typeof succ === "function" ? succ.apply(null, a) : void 0;
      }
    };
  };

  tiferr = function(fail, succ) {
    return iferr(fail, function() {
      var a, err;
      a = 1 <= arguments.length ? slice.call(arguments, 0) : [];
      try {
        return succ.apply(null, a);
      } catch (error) {
        err = error;
        return fail(err);
      }
    });
  };

  throwerr = iferr.bind(null, function(err) {
    throw err;
  });

  printerr = iferr(function(err) {
    return console.error(err.stack || err);
  });

  module.exports = exports = iferr;

  exports.iferr = iferr;

  exports.tiferr = tiferr;

  exports.throwerr = throwerr;

  exports.printerr = printerr;

}).call(this);
