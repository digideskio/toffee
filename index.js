// Generated by CoffeeScript 1.7.1
(function() {
  var e, engine, getCommonHeaders, getCommonHeadersJs, to_express, view, __express, _ref;

  engine = require('./lib/engine').engine;

  _ref = require('./lib/view'), view = _ref.view, getCommonHeaders = _ref.getCommonHeaders, getCommonHeadersJs = _ref.getCommonHeadersJs;

  exports.engine = engine;

  exports.view = view;

  exports.getCommonHeaders = getCommonHeaders;

  exports.getCommonHeadersJs = getCommonHeadersJs;

  exports.expressEngine = e = new engine({
    verbose: false,
    prettyPrintErrors: true
  });

  exports.render = e.run;

  exports.compileStr = function(template_str, options) {
    var v;
    v = new view(template_str, options);
    return function(x) {
      return v.run(x);
    };
  };

  to_express = exports.toExpress = function(eng) {
    return function(filename, options, cb) {
      return eng.run(filename, options, function(err, res) {
        if (err) {
          if (typeof err === "string") {
            err = new Error(err);
          }
          return cb(err);
        } else {
          return cb(null, res);
        }
      });
    };
  };

  __express = exports.__express = to_express(e);

  exports.__consolidate_engine_render = function(filename, options, cb) {
    var eng;
    if ((options.cache != null) && options.cache) {
      eng = e;
    } else {
      eng = new engine({
        verbose: false,
        prettyPrintErrors: true
      });
    }
    return eng.run(filename, options, function(err, res) {
      if (err) {
        if (typeof err === "string") {
          err = new Error(err);
        }
        return cb(err);
      } else {
        return cb(null, res);
      }
    });
  };

  exports.str_render = exports.strRender = function(template_str, options, cb) {
    var err, res, v, _ref1;
    v = new view(template_str, options);
    _ref1 = v.run(options), err = _ref1[0], res = _ref1[1];
    return cb(err, res);
  };

  exports.compile = require('./lib/view').expressCompile;

}).call(this);
