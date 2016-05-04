module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Evaluator = __webpack_require__(1);

	var _Evaluator2 = _interopRequireDefault(_Evaluator);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Evaluator2.default;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _node = __webpack_require__(6);

	var _node2 = _interopRequireDefault(_node);

	var _functions = __webpack_require__(2);

	var functions = _interopRequireWildcard(_functions);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var grammar = __webpack_require__(8);

	var defaultContext = {
	  functions: functions
	};

	var Evaluator = function () {
	  function Evaluator() {
	    _classCallCheck(this, Evaluator);

	    this._parser = grammar;
	  }

	  _createClass(Evaluator, [{
	    key: 'evaluate',
	    value: function evaluate(expression) {
	      var context = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	      var immediately = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];

	      this.parser.context = (0, _node2.default)(true, defaultContext, context || {});
	      var res = this.parser.parse(expression);
	      return immediately ? res() : res;
	    }
	  }, {
	    key: 'parser',
	    get: function get() {
	      return this._parser;
	    }
	  }]);

	  return Evaluator;
	}();

	exports.default = Evaluator;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _logical = __webpack_require__(3);

	Object.defineProperty(exports, 'and', {
	  enumerable: true,
	  get: function get() {
	    return _logical.and;
	  }
	});
	Object.defineProperty(exports, 'not', {
	  enumerable: true,
	  get: function get() {
	    return _logical.not;
	  }
	});
	Object.defineProperty(exports, 'or', {
	  enumerable: true,
	  get: function get() {
	    return _logical.or;
	  }
	});

	var _math = __webpack_require__(4);

	Object.defineProperty(exports, 'max', {
	  enumerable: true,
	  get: function get() {
	    return _math.max;
	  }
	});
	Object.defineProperty(exports, 'min', {
	  enumerable: true,
	  get: function get() {
	    return _math.min;
	  }
	});

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.and = and;
	exports.not = not;
	exports.or = or;
	function and(a, b) {
	  return !!a && !!b;
	}

	function not(a) {
	  return !a;
	}

	function or(a, b) {
	  return !!a || !!b;
	}

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
	  max: Math.max,
	  min: Math.min
	};

/***/ },
/* 5 */
/***/ function(module, exports) {

	/* globals window, HTMLElement */
	/**!
	 * is
	 * the definitive JavaScript type testing library
	 *
	 * @copyright 2013-2014 Enrico Marino / Jordan Harband
	 * @license MIT
	 */

	var objProto = Object.prototype;
	var owns = objProto.hasOwnProperty;
	var toStr = objProto.toString;
	var symbolValueOf;
	if (typeof Symbol === 'function') {
	  symbolValueOf = Symbol.prototype.valueOf;
	}
	var isActualNaN = function (value) {
	  return value !== value;
	};
	var NON_HOST_TYPES = {
	  'boolean': 1,
	  number: 1,
	  string: 1,
	  undefined: 1
	};

	var base64Regex = /^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{4}|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==)$/;
	var hexRegex = /^[A-Fa-f0-9]+$/;

	/**
	 * Expose `is`
	 */

	var is = module.exports = {};

	/**
	 * Test general.
	 */

	/**
	 * is.type
	 * Test if `value` is a type of `type`.
	 *
	 * @param {Mixed} value value to test
	 * @param {String} type type
	 * @return {Boolean} true if `value` is a type of `type`, false otherwise
	 * @api public
	 */

	is.a = is.type = function (value, type) {
	  return typeof value === type;
	};

	/**
	 * is.defined
	 * Test if `value` is defined.
	 *
	 * @param {Mixed} value value to test
	 * @return {Boolean} true if 'value' is defined, false otherwise
	 * @api public
	 */

	is.defined = function (value) {
	  return typeof value !== 'undefined';
	};

	/**
	 * is.empty
	 * Test if `value` is empty.
	 *
	 * @param {Mixed} value value to test
	 * @return {Boolean} true if `value` is empty, false otherwise
	 * @api public
	 */

	is.empty = function (value) {
	  var type = toStr.call(value);
	  var key;

	  if (type === '[object Array]' || type === '[object Arguments]' || type === '[object String]') {
	    return value.length === 0;
	  }

	  if (type === '[object Object]') {
	    for (key in value) {
	      if (owns.call(value, key)) { return false; }
	    }
	    return true;
	  }

	  return !value;
	};

	/**
	 * is.equal
	 * Test if `value` is equal to `other`.
	 *
	 * @param {Mixed} value value to test
	 * @param {Mixed} other value to compare with
	 * @return {Boolean} true if `value` is equal to `other`, false otherwise
	 */

	is.equal = function equal(value, other) {
	  if (value === other) {
	    return true;
	  }

	  var type = toStr.call(value);
	  var key;

	  if (type !== toStr.call(other)) {
	    return false;
	  }

	  if (type === '[object Object]') {
	    for (key in value) {
	      if (!is.equal(value[key], other[key]) || !(key in other)) {
	        return false;
	      }
	    }
	    for (key in other) {
	      if (!is.equal(value[key], other[key]) || !(key in value)) {
	        return false;
	      }
	    }
	    return true;
	  }

	  if (type === '[object Array]') {
	    key = value.length;
	    if (key !== other.length) {
	      return false;
	    }
	    while (--key) {
	      if (!is.equal(value[key], other[key])) {
	        return false;
	      }
	    }
	    return true;
	  }

	  if (type === '[object Function]') {
	    return value.prototype === other.prototype;
	  }

	  if (type === '[object Date]') {
	    return value.getTime() === other.getTime();
	  }

	  return false;
	};

	/**
	 * is.hosted
	 * Test if `value` is hosted by `host`.
	 *
	 * @param {Mixed} value to test
	 * @param {Mixed} host host to test with
	 * @return {Boolean} true if `value` is hosted by `host`, false otherwise
	 * @api public
	 */

	is.hosted = function (value, host) {
	  var type = typeof host[value];
	  return type === 'object' ? !!host[value] : !NON_HOST_TYPES[type];
	};

	/**
	 * is.instance
	 * Test if `value` is an instance of `constructor`.
	 *
	 * @param {Mixed} value value to test
	 * @return {Boolean} true if `value` is an instance of `constructor`
	 * @api public
	 */

	is.instance = is['instanceof'] = function (value, constructor) {
	  return value instanceof constructor;
	};

	/**
	 * is.nil / is.null
	 * Test if `value` is null.
	 *
	 * @param {Mixed} value value to test
	 * @return {Boolean} true if `value` is null, false otherwise
	 * @api public
	 */

	is.nil = is['null'] = function (value) {
	  return value === null;
	};

	/**
	 * is.undef / is.undefined
	 * Test if `value` is undefined.
	 *
	 * @param {Mixed} value value to test
	 * @return {Boolean} true if `value` is undefined, false otherwise
	 * @api public
	 */

	is.undef = is.undefined = function (value) {
	  return typeof value === 'undefined';
	};

	/**
	 * Test arguments.
	 */

	/**
	 * is.args
	 * Test if `value` is an arguments object.
	 *
	 * @param {Mixed} value value to test
	 * @return {Boolean} true if `value` is an arguments object, false otherwise
	 * @api public
	 */

	is.args = is.arguments = function (value) {
	  var isStandardArguments = toStr.call(value) === '[object Arguments]';
	  var isOldArguments = !is.array(value) && is.arraylike(value) && is.object(value) && is.fn(value.callee);
	  return isStandardArguments || isOldArguments;
	};

	/**
	 * Test array.
	 */

	/**
	 * is.array
	 * Test if 'value' is an array.
	 *
	 * @param {Mixed} value value to test
	 * @return {Boolean} true if `value` is an array, false otherwise
	 * @api public
	 */

	is.array = Array.isArray || function (value) {
	  return toStr.call(value) === '[object Array]';
	};

	/**
	 * is.arguments.empty
	 * Test if `value` is an empty arguments object.
	 *
	 * @param {Mixed} value value to test
	 * @return {Boolean} true if `value` is an empty arguments object, false otherwise
	 * @api public
	 */
	is.args.empty = function (value) {
	  return is.args(value) && value.length === 0;
	};

	/**
	 * is.array.empty
	 * Test if `value` is an empty array.
	 *
	 * @param {Mixed} value value to test
	 * @return {Boolean} true if `value` is an empty array, false otherwise
	 * @api public
	 */
	is.array.empty = function (value) {
	  return is.array(value) && value.length === 0;
	};

	/**
	 * is.arraylike
	 * Test if `value` is an arraylike object.
	 *
	 * @param {Mixed} value value to test
	 * @return {Boolean} true if `value` is an arguments object, false otherwise
	 * @api public
	 */

	is.arraylike = function (value) {
	  return !!value && !is.bool(value)
	    && owns.call(value, 'length')
	    && isFinite(value.length)
	    && is.number(value.length)
	    && value.length >= 0;
	};

	/**
	 * Test boolean.
	 */

	/**
	 * is.bool
	 * Test if `value` is a boolean.
	 *
	 * @param {Mixed} value value to test
	 * @return {Boolean} true if `value` is a boolean, false otherwise
	 * @api public
	 */

	is.bool = is['boolean'] = function (value) {
	  return toStr.call(value) === '[object Boolean]';
	};

	/**
	 * is.false
	 * Test if `value` is false.
	 *
	 * @param {Mixed} value value to test
	 * @return {Boolean} true if `value` is false, false otherwise
	 * @api public
	 */

	is['false'] = function (value) {
	  return is.bool(value) && Boolean(Number(value)) === false;
	};

	/**
	 * is.true
	 * Test if `value` is true.
	 *
	 * @param {Mixed} value value to test
	 * @return {Boolean} true if `value` is true, false otherwise
	 * @api public
	 */

	is['true'] = function (value) {
	  return is.bool(value) && Boolean(Number(value)) === true;
	};

	/**
	 * Test date.
	 */

	/**
	 * is.date
	 * Test if `value` is a date.
	 *
	 * @param {Mixed} value value to test
	 * @return {Boolean} true if `value` is a date, false otherwise
	 * @api public
	 */

	is.date = function (value) {
	  return toStr.call(value) === '[object Date]';
	};

	/**
	 * Test element.
	 */

	/**
	 * is.element
	 * Test if `value` is an html element.
	 *
	 * @param {Mixed} value value to test
	 * @return {Boolean} true if `value` is an HTML Element, false otherwise
	 * @api public
	 */

	is.element = function (value) {
	  return value !== undefined
	    && typeof HTMLElement !== 'undefined'
	    && value instanceof HTMLElement
	    && value.nodeType === 1;
	};

	/**
	 * Test error.
	 */

	/**
	 * is.error
	 * Test if `value` is an error object.
	 *
	 * @param {Mixed} value value to test
	 * @return {Boolean} true if `value` is an error object, false otherwise
	 * @api public
	 */

	is.error = function (value) {
	  return toStr.call(value) === '[object Error]';
	};

	/**
	 * Test function.
	 */

	/**
	 * is.fn / is.function (deprecated)
	 * Test if `value` is a function.
	 *
	 * @param {Mixed} value value to test
	 * @return {Boolean} true if `value` is a function, false otherwise
	 * @api public
	 */

	is.fn = is['function'] = function (value) {
	  var isAlert = typeof window !== 'undefined' && value === window.alert;
	  return isAlert || toStr.call(value) === '[object Function]';
	};

	/**
	 * Test number.
	 */

	/**
	 * is.number
	 * Test if `value` is a number.
	 *
	 * @param {Mixed} value value to test
	 * @return {Boolean} true if `value` is a number, false otherwise
	 * @api public
	 */

	is.number = function (value) {
	  return toStr.call(value) === '[object Number]';
	};

	/**
	 * is.infinite
	 * Test if `value` is positive or negative infinity.
	 *
	 * @param {Mixed} value value to test
	 * @return {Boolean} true if `value` is positive or negative Infinity, false otherwise
	 * @api public
	 */
	is.infinite = function (value) {
	  return value === Infinity || value === -Infinity;
	};

	/**
	 * is.decimal
	 * Test if `value` is a decimal number.
	 *
	 * @param {Mixed} value value to test
	 * @return {Boolean} true if `value` is a decimal number, false otherwise
	 * @api public
	 */

	is.decimal = function (value) {
	  return is.number(value) && !isActualNaN(value) && !is.infinite(value) && value % 1 !== 0;
	};

	/**
	 * is.divisibleBy
	 * Test if `value` is divisible by `n`.
	 *
	 * @param {Number} value value to test
	 * @param {Number} n dividend
	 * @return {Boolean} true if `value` is divisible by `n`, false otherwise
	 * @api public
	 */

	is.divisibleBy = function (value, n) {
	  var isDividendInfinite = is.infinite(value);
	  var isDivisorInfinite = is.infinite(n);
	  var isNonZeroNumber = is.number(value) && !isActualNaN(value) && is.number(n) && !isActualNaN(n) && n !== 0;
	  return isDividendInfinite || isDivisorInfinite || (isNonZeroNumber && value % n === 0);
	};

	/**
	 * is.integer
	 * Test if `value` is an integer.
	 *
	 * @param value to test
	 * @return {Boolean} true if `value` is an integer, false otherwise
	 * @api public
	 */

	is.integer = is['int'] = function (value) {
	  return is.number(value) && !isActualNaN(value) && value % 1 === 0;
	};

	/**
	 * is.maximum
	 * Test if `value` is greater than 'others' values.
	 *
	 * @param {Number} value value to test
	 * @param {Array} others values to compare with
	 * @return {Boolean} true if `value` is greater than `others` values
	 * @api public
	 */

	is.maximum = function (value, others) {
	  if (isActualNaN(value)) {
	    throw new TypeError('NaN is not a valid value');
	  } else if (!is.arraylike(others)) {
	    throw new TypeError('second argument must be array-like');
	  }
	  var len = others.length;

	  while (--len >= 0) {
	    if (value < others[len]) {
	      return false;
	    }
	  }

	  return true;
	};

	/**
	 * is.minimum
	 * Test if `value` is less than `others` values.
	 *
	 * @param {Number} value value to test
	 * @param {Array} others values to compare with
	 * @return {Boolean} true if `value` is less than `others` values
	 * @api public
	 */

	is.minimum = function (value, others) {
	  if (isActualNaN(value)) {
	    throw new TypeError('NaN is not a valid value');
	  } else if (!is.arraylike(others)) {
	    throw new TypeError('second argument must be array-like');
	  }
	  var len = others.length;

	  while (--len >= 0) {
	    if (value > others[len]) {
	      return false;
	    }
	  }

	  return true;
	};

	/**
	 * is.nan
	 * Test if `value` is not a number.
	 *
	 * @param {Mixed} value value to test
	 * @return {Boolean} true if `value` is not a number, false otherwise
	 * @api public
	 */

	is.nan = function (value) {
	  return !is.number(value) || value !== value;
	};

	/**
	 * is.even
	 * Test if `value` is an even number.
	 *
	 * @param {Number} value value to test
	 * @return {Boolean} true if `value` is an even number, false otherwise
	 * @api public
	 */

	is.even = function (value) {
	  return is.infinite(value) || (is.number(value) && value === value && value % 2 === 0);
	};

	/**
	 * is.odd
	 * Test if `value` is an odd number.
	 *
	 * @param {Number} value value to test
	 * @return {Boolean} true if `value` is an odd number, false otherwise
	 * @api public
	 */

	is.odd = function (value) {
	  return is.infinite(value) || (is.number(value) && value === value && value % 2 !== 0);
	};

	/**
	 * is.ge
	 * Test if `value` is greater than or equal to `other`.
	 *
	 * @param {Number} value value to test
	 * @param {Number} other value to compare with
	 * @return {Boolean}
	 * @api public
	 */

	is.ge = function (value, other) {
	  if (isActualNaN(value) || isActualNaN(other)) {
	    throw new TypeError('NaN is not a valid value');
	  }
	  return !is.infinite(value) && !is.infinite(other) && value >= other;
	};

	/**
	 * is.gt
	 * Test if `value` is greater than `other`.
	 *
	 * @param {Number} value value to test
	 * @param {Number} other value to compare with
	 * @return {Boolean}
	 * @api public
	 */

	is.gt = function (value, other) {
	  if (isActualNaN(value) || isActualNaN(other)) {
	    throw new TypeError('NaN is not a valid value');
	  }
	  return !is.infinite(value) && !is.infinite(other) && value > other;
	};

	/**
	 * is.le
	 * Test if `value` is less than or equal to `other`.
	 *
	 * @param {Number} value value to test
	 * @param {Number} other value to compare with
	 * @return {Boolean} if 'value' is less than or equal to 'other'
	 * @api public
	 */

	is.le = function (value, other) {
	  if (isActualNaN(value) || isActualNaN(other)) {
	    throw new TypeError('NaN is not a valid value');
	  }
	  return !is.infinite(value) && !is.infinite(other) && value <= other;
	};

	/**
	 * is.lt
	 * Test if `value` is less than `other`.
	 *
	 * @param {Number} value value to test
	 * @param {Number} other value to compare with
	 * @return {Boolean} if `value` is less than `other`
	 * @api public
	 */

	is.lt = function (value, other) {
	  if (isActualNaN(value) || isActualNaN(other)) {
	    throw new TypeError('NaN is not a valid value');
	  }
	  return !is.infinite(value) && !is.infinite(other) && value < other;
	};

	/**
	 * is.within
	 * Test if `value` is within `start` and `finish`.
	 *
	 * @param {Number} value value to test
	 * @param {Number} start lower bound
	 * @param {Number} finish upper bound
	 * @return {Boolean} true if 'value' is is within 'start' and 'finish'
	 * @api public
	 */
	is.within = function (value, start, finish) {
	  if (isActualNaN(value) || isActualNaN(start) || isActualNaN(finish)) {
	    throw new TypeError('NaN is not a valid value');
	  } else if (!is.number(value) || !is.number(start) || !is.number(finish)) {
	    throw new TypeError('all arguments must be numbers');
	  }
	  var isAnyInfinite = is.infinite(value) || is.infinite(start) || is.infinite(finish);
	  return isAnyInfinite || (value >= start && value <= finish);
	};

	/**
	 * Test object.
	 */

	/**
	 * is.object
	 * Test if `value` is an object.
	 *
	 * @param {Mixed} value value to test
	 * @return {Boolean} true if `value` is an object, false otherwise
	 * @api public
	 */

	is.object = function (value) {
	  return toStr.call(value) === '[object Object]';
	};

	/**
	 * is.hash
	 * Test if `value` is a hash - a plain object literal.
	 *
	 * @param {Mixed} value value to test
	 * @return {Boolean} true if `value` is a hash, false otherwise
	 * @api public
	 */

	is.hash = function (value) {
	  return is.object(value) && value.constructor === Object && !value.nodeType && !value.setInterval;
	};

	/**
	 * Test regexp.
	 */

	/**
	 * is.regexp
	 * Test if `value` is a regular expression.
	 *
	 * @param {Mixed} value value to test
	 * @return {Boolean} true if `value` is a regexp, false otherwise
	 * @api public
	 */

	is.regexp = function (value) {
	  return toStr.call(value) === '[object RegExp]';
	};

	/**
	 * Test string.
	 */

	/**
	 * is.string
	 * Test if `value` is a string.
	 *
	 * @param {Mixed} value value to test
	 * @return {Boolean} true if 'value' is a string, false otherwise
	 * @api public
	 */

	is.string = function (value) {
	  return toStr.call(value) === '[object String]';
	};

	/**
	 * Test base64 string.
	 */

	/**
	 * is.base64
	 * Test if `value` is a valid base64 encoded string.
	 *
	 * @param {Mixed} value value to test
	 * @return {Boolean} true if 'value' is a base64 encoded string, false otherwise
	 * @api public
	 */

	is.base64 = function (value) {
	  return is.string(value) && (!value.length || base64Regex.test(value));
	};

	/**
	 * Test base64 string.
	 */

	/**
	 * is.hex
	 * Test if `value` is a valid hex encoded string.
	 *
	 * @param {Mixed} value value to test
	 * @return {Boolean} true if 'value' is a hex encoded string, false otherwise
	 * @api public
	 */

	is.hex = function (value) {
	  return is.string(value) && (!value.length || hexRegex.test(value));
	};

	/**
	 * is.symbol
	 * Test if `value` is an ES6 Symbol
	 *
	 * @param {Mixed} value value to test
	 * @return {Boolean} true if `value` is a Symbol, false otherise
	 * @api public
	 */

	is.symbol = function (value) {
	  return typeof Symbol === 'function' && toStr.call(value) === '[object Symbol]' && typeof symbolValueOf.call(value) === 'symbol';
	};


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(7);



/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * node.extend
	 * Copyright 2011, John Resig
	 * Dual licensed under the MIT or GPL Version 2 licenses.
	 * http://jquery.org/license
	 *
	 * @fileoverview
	 * Port of jQuery.extend that actually works on node.js
	 */
	var is = __webpack_require__(5);

	function extend() {
	  var target = arguments[0] || {};
	  var i = 1;
	  var length = arguments.length;
	  var deep = false;
	  var options, name, src, copy, copy_is_array, clone;

	  // Handle a deep copy situation
	  if (typeof target === 'boolean') {
	    deep = target;
	    target = arguments[1] || {};
	    // skip the boolean and the target
	    i = 2;
	  }

	  // Handle case when target is a string or something (possible in deep copy)
	  if (typeof target !== 'object' && !is.fn(target)) {
	    target = {};
	  }

	  for (; i < length; i++) {
	    // Only deal with non-null/undefined values
	    options = arguments[i]
	    if (options != null) {
	      if (typeof options === 'string') {
	          options = options.split('');
	      }
	      // Extend the base object
	      for (name in options) {
	        src = target[name];
	        copy = options[name];

	        // Prevent never-ending loop
	        if (target === copy) {
	          continue;
	        }

	        // Recurse if we're merging plain objects or arrays
	        if (deep && copy && (is.hash(copy) || (copy_is_array = is.array(copy)))) {
	          if (copy_is_array) {
	            copy_is_array = false;
	            clone = src && is.array(src) ? src : [];
	          } else {
	            clone = src && is.hash(src) ? src : {};
	          }

	          // Never move original objects, clone them
	          target[name] = extend(deep, clone, copy);

	        // Don't bring in undefined values
	        } else if (typeof copy !== 'undefined') {
	          target[name] = copy;
	        }
	      }
	    }
	  }

	  // Return the modified object
	  return target;
	};

	/**
	 * @public
	 */
	extend.version = '1.1.3';

	/**
	 * Exports module.
	 */
	module.exports = extend;



/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = (function() {
	  "use strict";

	  /*
	   * Generated by PEG.js 0.9.0.
	   *
	   * http://pegjs.org/
	   */

	  function peg$subclass(child, parent) {
	    function ctor() { this.constructor = child; }
	    ctor.prototype = parent.prototype;
	    child.prototype = new ctor();
	  }

	  function peg$SyntaxError(message, expected, found, location) {
	    this.message  = message;
	    this.expected = expected;
	    this.found    = found;
	    this.location = location;
	    this.name     = "SyntaxError";

	    if (typeof Error.captureStackTrace === "function") {
	      Error.captureStackTrace(this, peg$SyntaxError);
	    }
	  }

	  peg$subclass(peg$SyntaxError, Error);

	  function peg$parse(input) {
	    var options = arguments.length > 1 ? arguments[1] : {},
	        parser  = this,

	        peg$FAILED = {},

	        peg$startRuleFunctions = { root: peg$parseroot },
	        peg$startRuleFunction  = peg$parseroot,

	        peg$c0 = function(re) {
	          return function(context) {
	            return re([parser.context, context]);
	          }
	        },
	        peg$c1 = function(l) {
	        	return function(context) {
	        	  return getVariable(l, context);
	        	}
	        },
	        peg$c2 = "$",
	        peg$c3 = { type: "literal", value: "$", description: "\"$\"" },
	        peg$c4 = /^[ \t\r\n]/,
	        peg$c5 = { type: "class", value: "[ \\t\\r\\n]", description: "[ \\t\\r\\n]" },
	        peg$c6 = "(",
	        peg$c7 = { type: "literal", value: "(", description: "\"(\"" },
	        peg$c8 = ")",
	        peg$c9 = { type: "literal", value: ")", description: "\")\"" },
	        peg$c10 = function(name, params) {
	          return function(context) {
	            const fn = getFunction(name, context);
	            return fn(...params(context));
	          }
	        },
	        peg$c11 = /^[a-zA-Z0-9]/,
	        peg$c12 = { type: "class", value: "[a-zA-Z0-9]", description: "[a-zA-Z0-9]" },
	        peg$c13 = function(l, rest) {
	          return function(context) {
	           return l.concat(makeString(rest));
	          }
	        },
	        peg$c14 = /^[0-9]/,
	        peg$c15 = { type: "class", value: "[0-9]", description: "[0-9]" },
	        peg$c16 = function(val) {
	        	return function(context) {
	            return makeNumber(val);
	          }
	        },
	        peg$c17 = /^[a-zA-Z]/,
	        peg$c18 = { type: "class", value: "[a-zA-Z]", description: "[a-zA-Z]" },
	        peg$c19 = function(val) {
	        	return function(context) {
	            return makeString(val);
	          }
	        },
	        peg$c20 = ",",
	        peg$c21 = { type: "literal", value: ",", description: "\",\"" },
	        peg$c22 = function(head, tail) {
	        	return function(context) {
	        	  return buildList(head, tail, 3).map((i) => i(context));
	        	}
	        },
	        peg$c23 = /^[\n\r\u2028\u2029]/,
	        peg$c24 = { type: "class", value: "[\\n\\r\\u2028\\u2029]", description: "[\\n\\r\\u2028\\u2029]" },
	        peg$c25 = { type: "other", description: "end of line" },
	        peg$c26 = "\n",
	        peg$c27 = { type: "literal", value: "\n", description: "\"\\n\"" },
	        peg$c28 = "\r\n",
	        peg$c29 = { type: "literal", value: "\r\n", description: "\"\\r\\n\"" },
	        peg$c30 = "\r",
	        peg$c31 = { type: "literal", value: "\r", description: "\"\\r\"" },
	        peg$c32 = "\u2028",
	        peg$c33 = { type: "literal", value: "\u2028", description: "\"\\u2028\"" },
	        peg$c34 = "\u2029",
	        peg$c35 = { type: "literal", value: "\u2029", description: "\"\\u2029\"" },

	        peg$currPos          = 0,
	        peg$savedPos         = 0,
	        peg$posDetailsCache  = [{ line: 1, column: 1, seenCR: false }],
	        peg$maxFailPos       = 0,
	        peg$maxFailExpected  = [],
	        peg$silentFails      = 0,

	        peg$result;

	    if ("startRule" in options) {
	      if (!(options.startRule in peg$startRuleFunctions)) {
	        throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
	      }

	      peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
	    }

	    function text() {
	      return input.substring(peg$savedPos, peg$currPos);
	    }

	    function location() {
	      return peg$computeLocation(peg$savedPos, peg$currPos);
	    }

	    function expected(description) {
	      throw peg$buildException(
	        null,
	        [{ type: "other", description: description }],
	        input.substring(peg$savedPos, peg$currPos),
	        peg$computeLocation(peg$savedPos, peg$currPos)
	      );
	    }

	    function error(message) {
	      throw peg$buildException(
	        message,
	        null,
	        input.substring(peg$savedPos, peg$currPos),
	        peg$computeLocation(peg$savedPos, peg$currPos)
	      );
	    }

	    function peg$computePosDetails(pos) {
	      var details = peg$posDetailsCache[pos],
	          p, ch;

	      if (details) {
	        return details;
	      } else {
	        p = pos - 1;
	        while (!peg$posDetailsCache[p]) {
	          p--;
	        }

	        details = peg$posDetailsCache[p];
	        details = {
	          line:   details.line,
	          column: details.column,
	          seenCR: details.seenCR
	        };

	        while (p < pos) {
	          ch = input.charAt(p);
	          if (ch === "\n") {
	            if (!details.seenCR) { details.line++; }
	            details.column = 1;
	            details.seenCR = false;
	          } else if (ch === "\r" || ch === "\u2028" || ch === "\u2029") {
	            details.line++;
	            details.column = 1;
	            details.seenCR = true;
	          } else {
	            details.column++;
	            details.seenCR = false;
	          }

	          p++;
	        }

	        peg$posDetailsCache[pos] = details;
	        return details;
	      }
	    }

	    function peg$computeLocation(startPos, endPos) {
	      var startPosDetails = peg$computePosDetails(startPos),
	          endPosDetails   = peg$computePosDetails(endPos);

	      return {
	        start: {
	          offset: startPos,
	          line:   startPosDetails.line,
	          column: startPosDetails.column
	        },
	        end: {
	          offset: endPos,
	          line:   endPosDetails.line,
	          column: endPosDetails.column
	        }
	      };
	    }

	    function peg$fail(expected) {
	      if (peg$currPos < peg$maxFailPos) { return; }

	      if (peg$currPos > peg$maxFailPos) {
	        peg$maxFailPos = peg$currPos;
	        peg$maxFailExpected = [];
	      }

	      peg$maxFailExpected.push(expected);
	    }

	    function peg$buildException(message, expected, found, location) {
	      function cleanupExpected(expected) {
	        var i = 1;

	        expected.sort(function(a, b) {
	          if (a.description < b.description) {
	            return -1;
	          } else if (a.description > b.description) {
	            return 1;
	          } else {
	            return 0;
	          }
	        });

	        while (i < expected.length) {
	          if (expected[i - 1] === expected[i]) {
	            expected.splice(i, 1);
	          } else {
	            i++;
	          }
	        }
	      }

	      function buildMessage(expected, found) {
	        function stringEscape(s) {
	          function hex(ch) { return ch.charCodeAt(0).toString(16).toUpperCase(); }

	          return s
	            .replace(/\\/g,   '\\\\')
	            .replace(/"/g,    '\\"')
	            .replace(/\x08/g, '\\b')
	            .replace(/\t/g,   '\\t')
	            .replace(/\n/g,   '\\n')
	            .replace(/\f/g,   '\\f')
	            .replace(/\r/g,   '\\r')
	            .replace(/[\x00-\x07\x0B\x0E\x0F]/g, function(ch) { return '\\x0' + hex(ch); })
	            .replace(/[\x10-\x1F\x80-\xFF]/g,    function(ch) { return '\\x'  + hex(ch); })
	            .replace(/[\u0100-\u0FFF]/g,         function(ch) { return '\\u0' + hex(ch); })
	            .replace(/[\u1000-\uFFFF]/g,         function(ch) { return '\\u'  + hex(ch); });
	        }

	        var expectedDescs = new Array(expected.length),
	            expectedDesc, foundDesc, i;

	        for (i = 0; i < expected.length; i++) {
	          expectedDescs[i] = expected[i].description;
	        }

	        expectedDesc = expected.length > 1
	          ? expectedDescs.slice(0, -1).join(", ")
	              + " or "
	              + expectedDescs[expected.length - 1]
	          : expectedDescs[0];

	        foundDesc = found ? "\"" + stringEscape(found) + "\"" : "end of input";

	        return "Expected " + expectedDesc + " but " + foundDesc + " found.";
	      }

	      if (expected !== null) {
	        cleanupExpected(expected);
	      }

	      return new peg$SyntaxError(
	        message !== null ? message : buildMessage(expected, found),
	        expected,
	        found,
	        location
	      );
	    }

	    function peg$parseroot() {
	      var s0, s1;

	      s0 = peg$currPos;
	      s1 = peg$parseroot_elements();
	      if (s1 !== peg$FAILED) {
	        peg$savedPos = s0;
	        s1 = peg$c0(s1);
	      }
	      s0 = s1;

	      return s0;
	    }

	    function peg$parsevariable() {
	      var s0, s1, s2;

	      s0 = peg$currPos;
	      s1 = peg$parsedollar();
	      if (s1 !== peg$FAILED) {
	        s2 = peg$parsestring();
	        if (s2 !== peg$FAILED) {
	          peg$savedPos = s0;
	          s1 = peg$c1(s2);
	          s0 = s1;
	        } else {
	          peg$currPos = s0;
	          s0 = peg$FAILED;
	        }
	      } else {
	        peg$currPos = s0;
	        s0 = peg$FAILED;
	      }

	      return s0;
	    }

	    function peg$parsedollar() {
	      var s0;

	      if (input.charCodeAt(peg$currPos) === 36) {
	        s0 = peg$c2;
	        peg$currPos++;
	      } else {
	        s0 = peg$FAILED;
	        if (peg$silentFails === 0) { peg$fail(peg$c3); }
	      }

	      return s0;
	    }

	    function peg$parsewhitespace() {
	      var s0;

	      if (peg$c4.test(input.charAt(peg$currPos))) {
	        s0 = input.charAt(peg$currPos);
	        peg$currPos++;
	      } else {
	        s0 = peg$FAILED;
	        if (peg$silentFails === 0) { peg$fail(peg$c5); }
	      }

	      return s0;
	    }

	    function peg$parsewhitespaces() {
	      var s0, s1;

	      s0 = [];
	      s1 = peg$parsewhitespace();
	      if (s1 !== peg$FAILED) {
	        while (s1 !== peg$FAILED) {
	          s0.push(s1);
	          s1 = peg$parsewhitespace();
	        }
	      } else {
	        s0 = peg$FAILED;
	      }

	      return s0;
	    }

	    function peg$parseroot_elements() {
	      var s0;

	      s0 = peg$parsefunction();
	      if (s0 === peg$FAILED) {
	        s0 = peg$parsevariable();
	        if (s0 === peg$FAILED) {
	          s0 = peg$parseidentifier();
	          if (s0 === peg$FAILED) {
	            s0 = peg$parsenumber();
	            if (s0 === peg$FAILED) {
	              s0 = peg$parsestring();
	            }
	          }
	        }
	      }

	      return s0;
	    }

	    function peg$parsefunction() {
	      var s0, s1, s2, s3, s4;

	      s0 = peg$currPos;
	      s1 = peg$parseidentifier();
	      if (s1 !== peg$FAILED) {
	        if (input.charCodeAt(peg$currPos) === 40) {
	          s2 = peg$c6;
	          peg$currPos++;
	        } else {
	          s2 = peg$FAILED;
	          if (peg$silentFails === 0) { peg$fail(peg$c7); }
	        }
	        if (s2 !== peg$FAILED) {
	          s3 = peg$parseformal_parameter_list();
	          if (s3 === peg$FAILED) {
	            s3 = null;
	          }
	          if (s3 !== peg$FAILED) {
	            if (input.charCodeAt(peg$currPos) === 41) {
	              s4 = peg$c8;
	              peg$currPos++;
	            } else {
	              s4 = peg$FAILED;
	              if (peg$silentFails === 0) { peg$fail(peg$c9); }
	            }
	            if (s4 !== peg$FAILED) {
	              peg$savedPos = s0;
	              s1 = peg$c10(s1, s3);
	              s0 = s1;
	            } else {
	              peg$currPos = s0;
	              s0 = peg$FAILED;
	            }
	          } else {
	            peg$currPos = s0;
	            s0 = peg$FAILED;
	          }
	        } else {
	          peg$currPos = s0;
	          s0 = peg$FAILED;
	        }
	      } else {
	        peg$currPos = s0;
	        s0 = peg$FAILED;
	      }

	      return s0;
	    }

	    function peg$parseidentifier() {
	      var s0, s1, s2, s3;

	      s0 = peg$currPos;
	      s1 = peg$parseletter();
	      if (s1 !== peg$FAILED) {
	        s2 = [];
	        if (peg$c11.test(input.charAt(peg$currPos))) {
	          s3 = input.charAt(peg$currPos);
	          peg$currPos++;
	        } else {
	          s3 = peg$FAILED;
	          if (peg$silentFails === 0) { peg$fail(peg$c12); }
	        }
	        while (s3 !== peg$FAILED) {
	          s2.push(s3);
	          if (peg$c11.test(input.charAt(peg$currPos))) {
	            s3 = input.charAt(peg$currPos);
	            peg$currPos++;
	          } else {
	            s3 = peg$FAILED;
	            if (peg$silentFails === 0) { peg$fail(peg$c12); }
	          }
	        }
	        if (s2 !== peg$FAILED) {
	          peg$savedPos = s0;
	          s1 = peg$c13(s1, s2);
	          s0 = s1;
	        } else {
	          peg$currPos = s0;
	          s0 = peg$FAILED;
	        }
	      } else {
	        peg$currPos = s0;
	        s0 = peg$FAILED;
	      }

	      return s0;
	    }

	    function peg$parsedigit() {
	      var s0;

	      if (peg$c14.test(input.charAt(peg$currPos))) {
	        s0 = input.charAt(peg$currPos);
	        peg$currPos++;
	      } else {
	        s0 = peg$FAILED;
	        if (peg$silentFails === 0) { peg$fail(peg$c15); }
	      }

	      return s0;
	    }

	    function peg$parsenumber() {
	      var s0, s1, s2;

	      s0 = peg$currPos;
	      s1 = [];
	      s2 = peg$parsedigit();
	      if (s2 !== peg$FAILED) {
	        while (s2 !== peg$FAILED) {
	          s1.push(s2);
	          s2 = peg$parsedigit();
	        }
	      } else {
	        s1 = peg$FAILED;
	      }
	      if (s1 !== peg$FAILED) {
	        peg$savedPos = s0;
	        s1 = peg$c16(s1);
	      }
	      s0 = s1;

	      return s0;
	    }

	    function peg$parseletter() {
	      var s0;

	      if (peg$c17.test(input.charAt(peg$currPos))) {
	        s0 = input.charAt(peg$currPos);
	        peg$currPos++;
	      } else {
	        s0 = peg$FAILED;
	        if (peg$silentFails === 0) { peg$fail(peg$c18); }
	      }

	      return s0;
	    }

	    function peg$parsestring() {
	      var s0, s1, s2;

	      s0 = peg$currPos;
	      s1 = [];
	      s2 = peg$parseletter();
	      if (s2 !== peg$FAILED) {
	        while (s2 !== peg$FAILED) {
	          s1.push(s2);
	          s2 = peg$parseletter();
	        }
	      } else {
	        s1 = peg$FAILED;
	      }
	      if (s1 !== peg$FAILED) {
	        peg$savedPos = s0;
	        s1 = peg$c19(s1);
	      }
	      s0 = s1;

	      return s0;
	    }

	    function peg$parseformal_parameter_list() {
	      var s0, s1, s2, s3, s4, s5, s6, s7;

	      s0 = peg$currPos;
	      s1 = peg$parseroot_elements();
	      if (s1 !== peg$FAILED) {
	        s2 = [];
	        s3 = peg$currPos;
	        s4 = peg$parse__();
	        if (s4 !== peg$FAILED) {
	          if (input.charCodeAt(peg$currPos) === 44) {
	            s5 = peg$c20;
	            peg$currPos++;
	          } else {
	            s5 = peg$FAILED;
	            if (peg$silentFails === 0) { peg$fail(peg$c21); }
	          }
	          if (s5 !== peg$FAILED) {
	            s6 = peg$parse__();
	            if (s6 !== peg$FAILED) {
	              s7 = peg$parseroot_elements();
	              if (s7 !== peg$FAILED) {
	                s4 = [s4, s5, s6, s7];
	                s3 = s4;
	              } else {
	                peg$currPos = s3;
	                s3 = peg$FAILED;
	              }
	            } else {
	              peg$currPos = s3;
	              s3 = peg$FAILED;
	            }
	          } else {
	            peg$currPos = s3;
	            s3 = peg$FAILED;
	          }
	        } else {
	          peg$currPos = s3;
	          s3 = peg$FAILED;
	        }
	        while (s3 !== peg$FAILED) {
	          s2.push(s3);
	          s3 = peg$currPos;
	          s4 = peg$parse__();
	          if (s4 !== peg$FAILED) {
	            if (input.charCodeAt(peg$currPos) === 44) {
	              s5 = peg$c20;
	              peg$currPos++;
	            } else {
	              s5 = peg$FAILED;
	              if (peg$silentFails === 0) { peg$fail(peg$c21); }
	            }
	            if (s5 !== peg$FAILED) {
	              s6 = peg$parse__();
	              if (s6 !== peg$FAILED) {
	                s7 = peg$parseroot_elements();
	                if (s7 !== peg$FAILED) {
	                  s4 = [s4, s5, s6, s7];
	                  s3 = s4;
	                } else {
	                  peg$currPos = s3;
	                  s3 = peg$FAILED;
	                }
	              } else {
	                peg$currPos = s3;
	                s3 = peg$FAILED;
	              }
	            } else {
	              peg$currPos = s3;
	              s3 = peg$FAILED;
	            }
	          } else {
	            peg$currPos = s3;
	            s3 = peg$FAILED;
	          }
	        }
	        if (s2 !== peg$FAILED) {
	          peg$savedPos = s0;
	          s1 = peg$c22(s1, s2);
	          s0 = s1;
	        } else {
	          peg$currPos = s0;
	          s0 = peg$FAILED;
	        }
	      } else {
	        peg$currPos = s0;
	        s0 = peg$FAILED;
	      }

	      return s0;
	    }

	    function peg$parse__() {
	      var s0, s1;

	      s0 = [];
	      s1 = peg$parsewhitespace();
	      if (s1 === peg$FAILED) {
	        s1 = peg$parseline_terminator();
	      }
	      while (s1 !== peg$FAILED) {
	        s0.push(s1);
	        s1 = peg$parsewhitespace();
	        if (s1 === peg$FAILED) {
	          s1 = peg$parseline_terminator();
	        }
	      }

	      return s0;
	    }

	    function peg$parseline_terminator() {
	      var s0;

	      if (peg$c23.test(input.charAt(peg$currPos))) {
	        s0 = input.charAt(peg$currPos);
	        peg$currPos++;
	      } else {
	        s0 = peg$FAILED;
	        if (peg$silentFails === 0) { peg$fail(peg$c24); }
	      }

	      return s0;
	    }

	    function peg$parseline_terminator_sequence() {
	      var s0, s1;

	      peg$silentFails++;
	      if (input.charCodeAt(peg$currPos) === 10) {
	        s0 = peg$c26;
	        peg$currPos++;
	      } else {
	        s0 = peg$FAILED;
	        if (peg$silentFails === 0) { peg$fail(peg$c27); }
	      }
	      if (s0 === peg$FAILED) {
	        if (input.substr(peg$currPos, 2) === peg$c28) {
	          s0 = peg$c28;
	          peg$currPos += 2;
	        } else {
	          s0 = peg$FAILED;
	          if (peg$silentFails === 0) { peg$fail(peg$c29); }
	        }
	        if (s0 === peg$FAILED) {
	          if (input.charCodeAt(peg$currPos) === 13) {
	            s0 = peg$c30;
	            peg$currPos++;
	          } else {
	            s0 = peg$FAILED;
	            if (peg$silentFails === 0) { peg$fail(peg$c31); }
	          }
	          if (s0 === peg$FAILED) {
	            if (input.charCodeAt(peg$currPos) === 8232) {
	              s0 = peg$c32;
	              peg$currPos++;
	            } else {
	              s0 = peg$FAILED;
	              if (peg$silentFails === 0) { peg$fail(peg$c33); }
	            }
	            if (s0 === peg$FAILED) {
	              if (input.charCodeAt(peg$currPos) === 8233) {
	                s0 = peg$c34;
	                peg$currPos++;
	              } else {
	                s0 = peg$FAILED;
	                if (peg$silentFails === 0) { peg$fail(peg$c35); }
	              }
	            }
	          }
	        }
	      }
	      peg$silentFails--;
	      if (s0 === peg$FAILED) {
	        s1 = peg$FAILED;
	        if (peg$silentFails === 0) { peg$fail(peg$c25); }
	      }

	      return s0;
	    }


	     function extractList(list, index) {
	        var result = new Array(list.length), i;

	        for (i = 0; i < list.length; i++) {
	          result[i] = list[i][index];
	        }

	        return result;
	      }

	      function buildList(head, tail, index) {
	        return [head].concat(extractList(tail, index));
	      }

	      function getVariable(name, context) {
	        const variableName = name();

	        tmp = context[1] && context[1].variables && context[1].variables[variableName];
	        if (tmp) {
	          return tmp;
	        }

	        var tmp = context[0].variables && context[0].variables[variableName];
	        if (tmp) {
	          return tmp;
	        }

	        return null;
	      }

	      function getFunction(name, context) {
	          const functionName = name(context);

	          tmp = context[1] && context[1].functions && context[1].functions[functionName];
	          if (tmp) {
	            return tmp;
	          }

	          var tmp = context[0].functions && context[0].functions[functionName];
	          if (tmp) {
	            return tmp;
	          }

	          return null;
	        }

	    	function makeString(val) {
	        	return val.join('');
	        }

	        function makeNumber(val) {
	        	return parseInt(val.join(''), 10);
	       }


	    peg$result = peg$startRuleFunction();

	    if (peg$result !== peg$FAILED && peg$currPos === input.length) {
	      return peg$result;
	    } else {
	      if (peg$result !== peg$FAILED && peg$currPos < input.length) {
	        peg$fail({ type: "end", description: "end of input" });
	      }

	      throw peg$buildException(
	        null,
	        peg$maxFailExpected,
	        peg$maxFailPos < input.length ? input.charAt(peg$maxFailPos) : null,
	        peg$maxFailPos < input.length
	          ? peg$computeLocation(peg$maxFailPos, peg$maxFailPos + 1)
	          : peg$computeLocation(peg$maxFailPos, peg$maxFailPos)
	      );
	    }
	  }

	  return {
	    SyntaxError: peg$SyntaxError,
	    parse:       peg$parse
	  };
	})()

/***/ }
/******/ ]);