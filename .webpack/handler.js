(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
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
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.emotioncheck = exports.emotioncheckByGoogle = exports.translationByGoogle = exports.echo = undefined;

	var _stringify = __webpack_require__(2);

	var _stringify2 = _interopRequireDefault(_stringify);

	var _aigaomoiService = __webpack_require__(5);

	var _aigaomoiService2 = _interopRequireDefault(_aigaomoiService);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var service = new _aigaomoiService2.default();

	var errorHandler = function errorHandler(error) {
	  console.error(error, 'hohgohoge');

	  return {
	    statusCode: error,
	    body: (0, _stringify2.default)({ message: 'Failed', error: error })
	  };
	};

	var echo = exports.echo = function echo(event, context, callback) {
	  console.log(event.queryStringParameters);

	  callback(null, {
	    statusCode: 200,
	    body: (0, _stringify2.default)({
	      result: event.queryStringParameters
	    })
	  });
	};

	var translationByGoogle = exports.translationByGoogle = function translationByGoogle(event, context, callback) {
	  var text = event.body.text;

	  service.translationByGoogle(text).then(function (result) {
	    callback(null, {
	      statusCode: 200,
	      body: (0, _stringify2.default)({
	        translated: result
	      })
	    });
	  }).catch(function (error) {
	    callback(null, errorHandler(error));
	  });
	};

	var emotioncheckByGoogle = exports.emotioncheckByGoogle = function emotioncheckByGoogle(event, context, callback) {
	  var text = event.body.text;

	  service.emotioncheckByGoogle(text).then(function (result) {
	    callback(null, {
	      statusCode: 200,
	      body: (0, _stringify2.default)({
	        magnitude: result.magnitude,
	        score: result.score
	      })
	    });
	  }).catch(function (error) {
	    callback(null, errorHandler(error));
	  });
	};

	var emotioncheck = exports.emotioncheck = function emotioncheck(event, context, callback) {
	  var text = event.body.text;
	  // TODO dummy
	  /*
	  let score = Math.random() * (1 - (-1)) + (-1)
	   score *= 100
	  score = Math.round(score)
	  score /= 100
	   callback(null, {
	    statusCode: 200,
	    body: JSON.stringify({
	      magnitude: score,
	      score: score
	    })
	  })
	  */

	  service.emotioncheck(text).then(function (result) {
	    callback(null, {
	      statusCode: 200,
	      body: (0, _stringify2.default)({
	        magnitude: result.magnitude,
	        score: result.score
	      })
	    });
	  }).catch(function (error) {
	    callback(null, errorHandler(error));
	  });
	};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(3), __esModule: true };

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	var core  = __webpack_require__(4)
	  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
	module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
	  return $JSON.stringify.apply($JSON, arguments);
	};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _stringify = __webpack_require__(2);

	var _stringify2 = _interopRequireDefault(_stringify);

	var _promise = __webpack_require__(6);

	var _promise2 = _interopRequireDefault(_promise);

	var _assign = __webpack_require__(70);

	var _assign2 = _interopRequireDefault(_assign);

	var _classCallCheck2 = __webpack_require__(76);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(77);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _nodeRestClient = __webpack_require__(81);

	var _config = __webpack_require__(268);

	var _config2 = _interopRequireDefault(_config);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var config = new _config2.default();

	var AigaomoiService = function () {
	  function AigaomoiService() {
	    (0, _classCallCheck3.default)(this, AigaomoiService);
	  }

	  (0, _createClass3.default)(AigaomoiService, [{
	    key: '_callApi',
	    value: function _callApi() {
	      var method = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'get';
	      var url = arguments[1];
	      var originalArgs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
	      var extractor = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

	      var client = new _nodeRestClient.Client();

	      if (originalArgs !== null && originalArgs.hasOwnProperty('parameters')) {
	        originalArgs.parameters['key'] = config.apiKey();
	      } else {
	        originalArgs['parameters'] = {
	          key: config.apiKey()
	        };
	      }

	      var args = (0, _assign2.default)(originalArgs, {
	        headers: {
	          'Content-type': 'application/json'
	        }
	      });

	      var promise = new _promise2.default(function (resolve, reject) {
	        var req = null;

	        switch (method) {
	          case 'get':
	            req = client.get(url, args, function (data, res) {
	              if (res.statusCode !== 200) {
	                reject(res.statusCode);

	                return;
	              }
	              var result = extractor !== null ? extractor(data) : data;
	              resolve(result);
	            });
	            break;
	          case 'post':
	            req = client.post(url, args, function (data, res) {
	              if (res.statusCode !== 200) {
	                reject(res.statusCode);

	                return;
	              }
	              var result = extractor !== null ? extractor(data) : data;
	              resolve(result);
	            });
	            break;
	        }
	        if (req) {
	          req.on('error', function (error) {
	            return reject(error);
	          });
	        }
	      });

	      return promise;
	    }
	  }, {
	    key: 'translationByGoogle',
	    value: function translationByGoogle(text) {
	      var url = 'https://www.googleapis.com/language/translate/v2';
	      var args = {
	        parameters: {
	          q: text,
	          target: 'en'
	        }
	      };
	      var extractor = function extractor(data) {
	        return data.data.translations[0].translatedText;
	      };

	      return this._callApi('get', url, args, extractor);
	    }
	  }, {
	    key: 'emotioncheckByGoogle',
	    value: function emotioncheckByGoogle(text) {
	      var url = 'https://language.googleapis.com/v1/documents:analyzeSentiment';
	      var args = {
	        data: (0, _stringify2.default)({
	          document: {
	            language: 'en',
	            type: 'PLAIN_TEXT',
	            content: text
	          }
	        })
	      };
	      var extractor = function extractor(data) {
	        var doc = data.documentSentiment;
	        return {
	          magnitude: doc.magnitude,
	          score: doc.score
	        };
	      };

	      return this._callApi('post', url, args, extractor);
	    }
	  }, {
	    key: 'emotioncheck',
	    value: function emotioncheck(text) {
	      var _this = this;

	      return this.translationByGoogle(text).then(function (translatedText) {
	        return _this.emotioncheckByGoogle(translatedText);
	      });
	    }
	  }]);
	  return AigaomoiService;
	}();

	exports.default = AigaomoiService;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(7), __esModule: true };

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(8);
	__webpack_require__(9);
	__webpack_require__(52);
	__webpack_require__(56);
	module.exports = __webpack_require__(4).Promise;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(10)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(13)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(11)
	  , defined   = __webpack_require__(12);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(14)
	  , $export        = __webpack_require__(15)
	  , redefine       = __webpack_require__(29)
	  , hide           = __webpack_require__(19)
	  , has            = __webpack_require__(30)
	  , Iterators      = __webpack_require__(31)
	  , $iterCreate    = __webpack_require__(32)
	  , setToStringTag = __webpack_require__(48)
	  , getPrototypeOf = __webpack_require__(50)
	  , ITERATOR       = __webpack_require__(49)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';

	var returnThis = function(){ return this; };

	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	module.exports = true;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(16)
	  , core      = __webpack_require__(4)
	  , ctx       = __webpack_require__(17)
	  , hide      = __webpack_require__(19)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(18);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ }),
/* 18 */
/***/ (function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(20)
	  , createDesc = __webpack_require__(28);
	module.exports = __webpack_require__(24) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(21)
	  , IE8_DOM_DEFINE = __webpack_require__(23)
	  , toPrimitive    = __webpack_require__(27)
	  , dP             = Object.defineProperty;

	exports.f = __webpack_require__(24) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(22);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ }),
/* 22 */
/***/ (function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(24) && !__webpack_require__(25)(function(){
	  return Object.defineProperty(__webpack_require__(26)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(25)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ }),
/* 25 */
/***/ (function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(22)
	  , document = __webpack_require__(16).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(22);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ }),
/* 28 */
/***/ (function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(19);

/***/ }),
/* 30 */
/***/ (function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ }),
/* 31 */
/***/ (function(module, exports) {

	module.exports = {};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(33)
	  , descriptor     = __webpack_require__(28)
	  , setToStringTag = __webpack_require__(48)
	  , IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(19)(IteratorPrototype, __webpack_require__(49)('iterator'), function(){ return this; });

	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(21)
	  , dPs         = __webpack_require__(34)
	  , enumBugKeys = __webpack_require__(46)
	  , IE_PROTO    = __webpack_require__(43)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(26)('iframe')
	    , i      = enumBugKeys.length
	    , lt     = '<'
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(47).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};

	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(20)
	  , anObject = __webpack_require__(21)
	  , getKeys  = __webpack_require__(35);

	module.exports = __webpack_require__(24) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(36)
	  , enumBugKeys = __webpack_require__(46);

	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(30)
	  , toIObject    = __webpack_require__(37)
	  , arrayIndexOf = __webpack_require__(40)(false)
	  , IE_PROTO     = __webpack_require__(43)('IE_PROTO');

	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(38)
	  , defined = __webpack_require__(12);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(39);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ }),
/* 39 */
/***/ (function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(37)
	  , toLength  = __webpack_require__(41)
	  , toIndex   = __webpack_require__(42);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(11)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(11)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(44)('keys')
	  , uid    = __webpack_require__(45);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(16)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ }),
/* 45 */
/***/ (function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ }),
/* 46 */
/***/ (function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(16).document && document.documentElement;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

	var def = __webpack_require__(20).f
	  , has = __webpack_require__(30)
	  , TAG = __webpack_require__(49)('toStringTag');

	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(44)('wks')
	  , uid        = __webpack_require__(45)
	  , Symbol     = __webpack_require__(16).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';

	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};

	$exports.store = store;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(30)
	  , toObject    = __webpack_require__(51)
	  , IE_PROTO    = __webpack_require__(43)('IE_PROTO')
	  , ObjectProto = Object.prototype;

	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(12);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(53);
	var global        = __webpack_require__(16)
	  , hide          = __webpack_require__(19)
	  , Iterators     = __webpack_require__(31)
	  , TO_STRING_TAG = __webpack_require__(49)('toStringTag');

	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype;
	  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(54)
	  , step             = __webpack_require__(55)
	  , Iterators        = __webpack_require__(31)
	  , toIObject        = __webpack_require__(37);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(13)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;

	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ }),
/* 54 */
/***/ (function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ }),
/* 55 */
/***/ (function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY            = __webpack_require__(14)
	  , global             = __webpack_require__(16)
	  , ctx                = __webpack_require__(17)
	  , classof            = __webpack_require__(57)
	  , $export            = __webpack_require__(15)
	  , isObject           = __webpack_require__(22)
	  , aFunction          = __webpack_require__(18)
	  , anInstance         = __webpack_require__(58)
	  , forOf              = __webpack_require__(59)
	  , speciesConstructor = __webpack_require__(63)
	  , task               = __webpack_require__(64).set
	  , microtask          = __webpack_require__(66)()
	  , PROMISE            = 'Promise'
	  , TypeError          = global.TypeError
	  , process            = global.process
	  , $Promise           = global[PROMISE]
	  , process            = global.process
	  , isNode             = classof(process) == 'process'
	  , empty              = function(){ /* empty */ }
	  , Internal, GenericPromiseCapability, Wrapper;

	var USE_NATIVE = !!function(){
	  try {
	    // correct subclassing with @@species support
	    var promise     = $Promise.resolve(1)
	      , FakePromise = (promise.constructor = {})[__webpack_require__(49)('species')] = function(exec){ exec(empty, empty); };
	    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
	    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
	  } catch(e){ /* empty */ }
	}();

	// helpers
	var sameConstructor = function(a, b){
	  // with library wrapper special case
	  return a === b || a === $Promise && b === Wrapper;
	};
	var isThenable = function(it){
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var newPromiseCapability = function(C){
	  return sameConstructor($Promise, C)
	    ? new PromiseCapability(C)
	    : new GenericPromiseCapability(C);
	};
	var PromiseCapability = GenericPromiseCapability = function(C){
	  var resolve, reject;
	  this.promise = new C(function($$resolve, $$reject){
	    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject  = $$reject;
	  });
	  this.resolve = aFunction(resolve);
	  this.reject  = aFunction(reject);
	};
	var perform = function(exec){
	  try {
	    exec();
	  } catch(e){
	    return {error: e};
	  }
	};
	var notify = function(promise, isReject){
	  if(promise._n)return;
	  promise._n = true;
	  var chain = promise._c;
	  microtask(function(){
	    var value = promise._v
	      , ok    = promise._s == 1
	      , i     = 0;
	    var run = function(reaction){
	      var handler = ok ? reaction.ok : reaction.fail
	        , resolve = reaction.resolve
	        , reject  = reaction.reject
	        , domain  = reaction.domain
	        , result, then;
	      try {
	        if(handler){
	          if(!ok){
	            if(promise._h == 2)onHandleUnhandled(promise);
	            promise._h = 1;
	          }
	          if(handler === true)result = value;
	          else {
	            if(domain)domain.enter();
	            result = handler(value);
	            if(domain)domain.exit();
	          }
	          if(result === reaction.promise){
	            reject(TypeError('Promise-chain cycle'));
	          } else if(then = isThenable(result)){
	            then.call(result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch(e){
	        reject(e);
	      }
	    };
	    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
	    promise._c = [];
	    promise._n = false;
	    if(isReject && !promise._h)onUnhandled(promise);
	  });
	};
	var onUnhandled = function(promise){
	  task.call(global, function(){
	    var value = promise._v
	      , abrupt, handler, console;
	    if(isUnhandled(promise)){
	      abrupt = perform(function(){
	        if(isNode){
	          process.emit('unhandledRejection', value, promise);
	        } else if(handler = global.onunhandledrejection){
	          handler({promise: promise, reason: value});
	        } else if((console = global.console) && console.error){
	          console.error('Unhandled promise rejection', value);
	        }
	      });
	      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
	      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
	    } promise._a = undefined;
	    if(abrupt)throw abrupt.error;
	  });
	};
	var isUnhandled = function(promise){
	  if(promise._h == 1)return false;
	  var chain = promise._a || promise._c
	    , i     = 0
	    , reaction;
	  while(chain.length > i){
	    reaction = chain[i++];
	    if(reaction.fail || !isUnhandled(reaction.promise))return false;
	  } return true;
	};
	var onHandleUnhandled = function(promise){
	  task.call(global, function(){
	    var handler;
	    if(isNode){
	      process.emit('rejectionHandled', promise);
	    } else if(handler = global.onrejectionhandled){
	      handler({promise: promise, reason: promise._v});
	    }
	  });
	};
	var $reject = function(value){
	  var promise = this;
	  if(promise._d)return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  promise._v = value;
	  promise._s = 2;
	  if(!promise._a)promise._a = promise._c.slice();
	  notify(promise, true);
	};
	var $resolve = function(value){
	  var promise = this
	    , then;
	  if(promise._d)return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  try {
	    if(promise === value)throw TypeError("Promise can't be resolved itself");
	    if(then = isThenable(value)){
	      microtask(function(){
	        var wrapper = {_w: promise, _d: false}; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch(e){
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      promise._v = value;
	      promise._s = 1;
	      notify(promise, false);
	    }
	  } catch(e){
	    $reject.call({_w: promise, _d: false}, e); // wrap
	  }
	};

	// constructor polyfill
	if(!USE_NATIVE){
	  // 25.4.3.1 Promise(executor)
	  $Promise = function Promise(executor){
	    anInstance(this, $Promise, PROMISE, '_h');
	    aFunction(executor);
	    Internal.call(this);
	    try {
	      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
	    } catch(err){
	      $reject.call(this, err);
	    }
	  };
	  Internal = function Promise(executor){
	    this._c = [];             // <- awaiting reactions
	    this._a = undefined;      // <- checked in isUnhandled reactions
	    this._s = 0;              // <- state
	    this._d = false;          // <- done
	    this._v = undefined;      // <- value
	    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
	    this._n = false;          // <- notify
	  };
	  Internal.prototype = __webpack_require__(67)($Promise.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected){
	      var reaction    = newPromiseCapability(speciesConstructor(this, $Promise));
	      reaction.ok     = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail   = typeof onRejected == 'function' && onRejected;
	      reaction.domain = isNode ? process.domain : undefined;
	      this._c.push(reaction);
	      if(this._a)this._a.push(reaction);
	      if(this._s)notify(this, false);
	      return reaction.promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function(onRejected){
	      return this.then(undefined, onRejected);
	    }
	  });
	  PromiseCapability = function(){
	    var promise  = new Internal;
	    this.promise = promise;
	    this.resolve = ctx($resolve, promise, 1);
	    this.reject  = ctx($reject, promise, 1);
	  };
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: $Promise});
	__webpack_require__(48)($Promise, PROMISE);
	__webpack_require__(68)(PROMISE);
	Wrapper = __webpack_require__(4)[PROMISE];

	// statics
	$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r){
	    var capability = newPromiseCapability(this)
	      , $$reject   = capability.reject;
	    $$reject(r);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x){
	    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
	    if(x instanceof $Promise && sameConstructor(x.constructor, this))return x;
	    var capability = newPromiseCapability(this)
	      , $$resolve  = capability.resolve;
	    $$resolve(x);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(69)(function(iter){
	  $Promise.all(iter)['catch'](empty);
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable){
	    var C          = this
	      , capability = newPromiseCapability(C)
	      , resolve    = capability.resolve
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      var values    = []
	        , index     = 0
	        , remaining = 1;
	      forOf(iterable, false, function(promise){
	        var $index        = index++
	          , alreadyCalled = false;
	        values.push(undefined);
	        remaining++;
	        C.resolve(promise).then(function(value){
	          if(alreadyCalled)return;
	          alreadyCalled  = true;
	          values[$index] = value;
	          --remaining || resolve(values);
	        }, reject);
	      });
	      --remaining || resolve(values);
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable){
	    var C          = this
	      , capability = newPromiseCapability(C)
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      forOf(iterable, false, function(promise){
	        C.resolve(promise).then(capability.resolve, reject);
	      });
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  }
	});

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(39)
	  , TAG = __webpack_require__(49)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

	// fallback for IE11 Script Access Denied error
	var tryGet = function(it, key){
	  try {
	    return it[key];
	  } catch(e){ /* empty */ }
	};

	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ }),
/* 58 */
/***/ (function(module, exports) {

	module.exports = function(it, Constructor, name, forbiddenField){
	  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
	    throw TypeError(name + ': incorrect invocation!');
	  } return it;
	};

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(17)
	  , call        = __webpack_require__(60)
	  , isArrayIter = __webpack_require__(61)
	  , anObject    = __webpack_require__(21)
	  , toLength    = __webpack_require__(41)
	  , getIterFn   = __webpack_require__(62)
	  , BREAK       = {}
	  , RETURN      = {};
	var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
	  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
	    , f      = ctx(fn, that, entries ? 2 : 1)
	    , index  = 0
	    , length, step, iterator, result;
	  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
	    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	    if(result === BREAK || result === RETURN)return result;
	  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
	    result = call(iterator, f, step.value, entries);
	    if(result === BREAK || result === RETURN)return result;
	  }
	};
	exports.BREAK  = BREAK;
	exports.RETURN = RETURN;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(21);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(31)
	  , ITERATOR   = __webpack_require__(49)('iterator')
	  , ArrayProto = Array.prototype;

	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(57)
	  , ITERATOR  = __webpack_require__(49)('iterator')
	  , Iterators = __webpack_require__(31);
	module.exports = __webpack_require__(4).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject  = __webpack_require__(21)
	  , aFunction = __webpack_require__(18)
	  , SPECIES   = __webpack_require__(49)('species');
	module.exports = function(O, D){
	  var C = anObject(O).constructor, S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

	var ctx                = __webpack_require__(17)
	  , invoke             = __webpack_require__(65)
	  , html               = __webpack_require__(47)
	  , cel                = __webpack_require__(26)
	  , global             = __webpack_require__(16)
	  , process            = global.process
	  , setTask            = global.setImmediate
	  , clearTask          = global.clearImmediate
	  , MessageChannel     = global.MessageChannel
	  , counter            = 0
	  , queue              = {}
	  , ONREADYSTATECHANGE = 'onreadystatechange'
	  , defer, channel, port;
	var run = function(){
	  var id = +this;
	  if(queue.hasOwnProperty(id)){
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listener = function(event){
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if(!setTask || !clearTask){
	  setTask = function setImmediate(fn){
	    var args = [], i = 1;
	    while(arguments.length > i)args.push(arguments[i++]);
	    queue[++counter] = function(){
	      invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id){
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if(__webpack_require__(39)(process) == 'process'){
	    defer = function(id){
	      process.nextTick(ctx(run, id, 1));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  } else if(MessageChannel){
	    channel = new MessageChannel;
	    port    = channel.port2;
	    channel.port1.onmessage = listener;
	    defer = ctx(port.postMessage, port, 1);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
	    defer = function(id){
	      global.postMessage(id + '', '*');
	    };
	    global.addEventListener('message', listener, false);
	  // IE8-
	  } else if(ONREADYSTATECHANGE in cel('script')){
	    defer = function(id){
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function(id){
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
	}
	module.exports = {
	  set:   setTask,
	  clear: clearTask
	};

/***/ }),
/* 65 */
/***/ (function(module, exports) {

	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	module.exports = function(fn, args, that){
	  var un = that === undefined;
	  switch(args.length){
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	  } return              fn.apply(that, args);
	};

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(16)
	  , macrotask = __webpack_require__(64).set
	  , Observer  = global.MutationObserver || global.WebKitMutationObserver
	  , process   = global.process
	  , Promise   = global.Promise
	  , isNode    = __webpack_require__(39)(process) == 'process';

	module.exports = function(){
	  var head, last, notify;

	  var flush = function(){
	    var parent, fn;
	    if(isNode && (parent = process.domain))parent.exit();
	    while(head){
	      fn   = head.fn;
	      head = head.next;
	      try {
	        fn();
	      } catch(e){
	        if(head)notify();
	        else last = undefined;
	        throw e;
	      }
	    } last = undefined;
	    if(parent)parent.enter();
	  };

	  // Node.js
	  if(isNode){
	    notify = function(){
	      process.nextTick(flush);
	    };
	  // browsers with MutationObserver
	  } else if(Observer){
	    var toggle = true
	      , node   = document.createTextNode('');
	    new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
	    notify = function(){
	      node.data = toggle = !toggle;
	    };
	  // environments with maybe non-completely correct, but existent Promise
	  } else if(Promise && Promise.resolve){
	    var promise = Promise.resolve();
	    notify = function(){
	      promise.then(flush);
	    };
	  // for other environments - macrotask based on:
	  // - setImmediate
	  // - MessageChannel
	  // - window.postMessag
	  // - onreadystatechange
	  // - setTimeout
	  } else {
	    notify = function(){
	      // strange IE + webpack dev server bug - use .call(global)
	      macrotask.call(global, flush);
	    };
	  }

	  return function(fn){
	    var task = {fn: fn, next: undefined};
	    if(last)last.next = task;
	    if(!head){
	      head = task;
	      notify();
	    } last = task;
	  };
	};

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

	var hide = __webpack_require__(19);
	module.exports = function(target, src, safe){
	  for(var key in src){
	    if(safe && target[key])target[key] = src[key];
	    else hide(target, key, src[key]);
	  } return target;
	};

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var global      = __webpack_require__(16)
	  , core        = __webpack_require__(4)
	  , dP          = __webpack_require__(20)
	  , DESCRIPTORS = __webpack_require__(24)
	  , SPECIES     = __webpack_require__(49)('species');

	module.exports = function(KEY){
	  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
	  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(49)('iterator')
	  , SAFE_CLOSING = false;

	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }

	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ return {done: safe = true}; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(71), __esModule: true };

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(72);
	module.exports = __webpack_require__(4).Object.assign;

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(15);

	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(73)});

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(35)
	  , gOPS     = __webpack_require__(74)
	  , pIE      = __webpack_require__(75)
	  , toObject = __webpack_require__(51)
	  , IObject  = __webpack_require__(38)
	  , $assign  = Object.assign;

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(25)(function(){
	  var A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , aLen  = arguments.length
	    , index = 1
	    , getSymbols = gOPS.f
	    , isEnum     = pIE.f;
	  while(aLen > index){
	    var S      = IObject(arguments[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  } return T;
	} : $assign;

/***/ }),
/* 74 */
/***/ (function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ }),
/* 75 */
/***/ (function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ }),
/* 76 */
/***/ (function(module, exports) {

	"use strict";

	exports.__esModule = true;

	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _defineProperty = __webpack_require__(78);

	var _defineProperty2 = _interopRequireDefault(_defineProperty);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
	    }
	  }

	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(79), __esModule: true };

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(80);
	var $Object = __webpack_require__(4).Object;
	module.exports = function defineProperty(it, key, desc){
	  return $Object.defineProperty(it, key, desc);
	};

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(15);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(24), 'Object', {defineProperty: __webpack_require__(20).f});

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

	var http = __webpack_require__(82).http,
	https = __webpack_require__(82).https,
	urlParser = __webpack_require__(83),
	util = __webpack_require__(94),
	events = __webpack_require__(97),
	zlib = __webpack_require__(98),
	node_debug = __webpack_require__(99)("NRC");

	exports.Client = function (options){
	    var self = this,
	     // parser response manager
	     parserManager = __webpack_require__(102)(),
	     serializerManager = __webpack_require__(267)(),
	    // connection manager
	    connectManager = new ConnectManager(this, parserManager),
	    // io facade to parsers and serailiazers
	    ioFacade = function(parserManager, serializerManager){
	        // error execution context
	        var  errorContext = function(logic){
	            return function(){
	                try{
	                    return logic.apply(this, arguments);
	                }catch(err){
	                    self.emit('error',err);
	                }
	              };
	        },
	        result={"parsers":{}, "serializers":{}};

	    // parsers facade
	    result.parsers.add = errorContext(parserManager.add);
	    result.parsers.remove = errorContext(parserManager.remove);
	    result.parsers.find = errorContext(parserManager.find);
	    result.parsers.getAll = errorContext(parserManager.getAll);
	    result.parsers.getDefault = errorContext(parserManager.getDefault);
	    result.parsers.clean = errorContext(parserManager.clean);
	    
	    // serializers facade
	    result.serializers.add = errorContext(serializerManager.add);
	    result.serializers.remove = errorContext(serializerManager.remove);
	    result.serializers.find = errorContext(serializerManager.find);
	    result.serializers.getAll = errorContext(serializerManager.getAll);
	    result.serializers.getDefault = errorContext(serializerManager.getDefault);
	    result.serializers.clean = errorContext(serializerManager.clean);

	    return result;
	    
	    }(parserManager,serializerManager),
	    // declare util constants
	    CONSTANTS={
	        HEADER_CONTENT_LENGTH:"Content-Length"
	    };


	    self.options = options || {},
	    self.useProxy = (self.options.proxy || false)?true:false,
	    self.useProxyTunnel = (!self.useProxy || self.options.proxy.tunnel===undefined)?false:self.options.proxy.tunnel,
	    self.proxy = self.options.proxy,
	    self.connection = self.options.connection || {},
	    self.mimetypes = self.options.mimetypes || {},
	    self.requestConfig = self.options.requestConfig || {},
	    self.responseConfig = self.options.responseConfig || {};

	    // namespaces for methods, parsers y serializers
	    this.methods={};
	    this.parsers={};
	    this.serializers={};

	    // Client Request to be passed to ConnectManager and returned
	    // for each REST method invocation
	    var ClientRequest =function(){
	        events.EventEmitter.call(this);
	    };


	    util.inherits(ClientRequest, events.EventEmitter);
	    

	    ClientRequest.prototype.end = function(){
	        if(this._httpRequest) {
	            this._httpRequest.end();
	        }
	    };

	    ClientRequest.prototype.setHttpRequest=function(req){
	        this._httpRequest = req;
	    };



	    var Util = {
	       createProxyPath:function(url){
	        var result = url.host;
	         // check url protocol to set path in request options
	         if (url.protocol === "https:"){
	            // port is set, leave it, otherwise use default https 443
	            result = (url.host.indexOf(":") == -1?url.hostname + ":443":url.host);
	        }

	        return result;
	    },
	    createProxyHeaders:function(url){
	        var result ={};
	        // if proxy requires authentication, create Proxy-Authorization headers
	        if (self.proxy.user && self.proxy.password){
	            result["Proxy-Authorization"] = "Basic " + new Buffer([self.proxy.user,self.proxy.password].join(":")).toString("base64");
	        }
	        // no tunnel proxy connection, we add the host to the headers
	        if(!self.useProxyTunnel)
	            result["host"] = url.host;

	        return result;
	    },
	    createConnectOptions:function(connectURL, connectMethod){
	        debug("connect URL = ", connectURL);
	        var url = urlParser.parse(connectURL),
	        path,
	        result={},
	        protocol = url.protocol.indexOf(":") == -1?url.protocol:url.protocol.substring(0,url.protocol.indexOf(":")),
	        defaultPort = protocol === 'http'?80:443;

	        result ={
	            host: url.host.indexOf(":") == -1?url.host:url.host.substring(0,url.host.indexOf(":")),
	            port: url.port === undefined?defaultPort:url.port,
	            path: url.path,
	            protocol:protocol,
	            href:url.href
	        };

	             if (self.useProxy) result.agent = false; // cannot use default
															// agent in proxy mode

	             if (self.options.user && self.options.password){
	                result.auth = [self.options.user,self.options.password].join(":");

	            } else if (self.options.user && !self.options.password){
	                 // some sites only needs user with no password to
						// authenticate
	                 result.auth = self.options.user + ":";
	             }

	            // configure proxy connection to establish a tunnel
	            if (self.useProxy){

	                result.proxy ={
	                    host: self.proxy.host,
	                    port: self.proxy.port,
	                    method: self.useProxyTunnel?'CONNECT':connectMethod,// if
																			// proxy
																			// tunnel
																			// use
																			// 'CONNECT'
																			// method,
																			// else
																			// get
																			// method
																			// from
																			// request,
	                    path: self.useProxyTunnel?this.createProxyPath(url):connectURL, // if
																						// proxy
																						// tunnel
																						// set
																						// proxy
																						// path
																						// else
																						// get
																						// request
																						// path,
	                    headers: this.createProxyHeaders(url) // createProxyHeaders
																// add correct
																// headers depending
																// of proxy
																// connection type
	                };
	            }

	            if(self.connection && typeof self.connection === 'object'){
	                for(var option in self.connection){
	                    result[option] = self.connection[option];
	                }
	            }

	            // don't use tunnel to connect to proxy, direct request
	            // and delete proxy options
	            if (!self.useProxyTunnel){
	                for (var proxyOption in result.proxy){
	                    result[proxyOption] = result.proxy[proxyOption];
	                }

	                delete result.proxy;
	            }

	            // add general request and response config to connect options

	            result.requestConfig = self.requestConfig;
	            result.responseConfig = self.responseConfig;


	            return result;
	        },
	        decodeQueryFromURL: function(connectURL){
	            var url = urlParser.parse(connectURL),
	            query = url.query.substring(1).split("&"),
	            keyValue,
	            result={};

	            // create decoded args from key value elements in query+
	            for (var i=0;i<query.length;i++){
	                keyValue = query[i].split("=");
	                result[keyValue[0]] = decodeURIComponent(keyValue[1]);
	            }

	            return result;

	        },
	        serializeEncodeQueryFromArgs:function(args){

	            function serialize(obj, parent) {
	              var tokens = [], propertyName;
	              // iterate over all properties
	              for(propertyName in obj) {
	                  // if object has property (it's not an array iteration)
	                  if (obj.hasOwnProperty(propertyName)) {
	                  // if property has parent, add nested reference
	                  var parsedProperty = parent ? parent + "[" + propertyName + "]" : propertyName, propertyValue = obj[propertyName];

	                  // if property has value and is object (we must iterate
						// again, not final leaf)
	                  // iterate over object property passing current parsed
						// property as parent
	                  // else add encoded parsed property and value to result
						// array
	                  tokens.push((propertyValue !== null && typeof propertyValue === "object") ?
	                    serialize(propertyValue, parsedProperty) :
	                    encodeURIComponent(parsedProperty) + "=" + encodeURIComponent(propertyValue));
	                    }
	                }
	                    return tokens.join("&");
	            }

	          debug("args is", args);
	                // check args consistency
	                if (args && typeof args !== 'object' )
	                    self.emit('error','cannot serialize parameters: invalid type ' + (typeof  args) + ' should be an object type');

	                return serialize(args);
	        },
	        parsePathParameters:function(args,url){
	            var result = url;
	            if (!args || !args.path) return url;

	            for (var placeholder in args.path){
	                var regex = new RegExp("\\$\\{" + placeholder + "\\}","i");
	                result = result.replace(regex,args.path[placeholder]);
	                
	            }
	            
	            return result;

	        },
	        overrideClientConfig:function(connectOptions,methodOptions){
	            function validateReqResOptions(reqResOption){
	                return (reqResOption && typeof reqResOption === 'object');
	            }
	            // check if we have particular request or response config set on
				// this method invocation
	            // and override general request/response config
	            if (validateReqResOptions(methodOptions.requestConfig)){
	                util._extend(connectOptions.requestConfig,methodOptions.requestConfig);
	            }

	            if (validateReqResOptions(methodOptions.responseConfig)){
	                util._extend(connectOptions.responseConfig,methodOptions.responseConfig);
	            }


	        },
	        connect : function(method, url, args, callback, clientRequest){
	            //wrapper for emit function on client
	            var clientEmitterWrapper = function (client){
	                    var client = client;
	                    return function(type, event){client.emit(type, event);};
	                };

	            // check args type if we use it
	            if (callback && args && typeof args !== 'object')self.emit('error','args should be and object');

	            // configure connect options based on url parameter parse
	            var options = this.createConnectOptions(this.parsePathParameters(args,url), method);
	            debug("options pre connect",options);
	            options.method = method,
	            clientRequest.href=options.href,
	            options.clientRequest = clientRequest,
	            options.headers= options.headers || {};
	            
	            debug("args = ", args);
	            debug("args.data = ", args !== undefined?args.data:undefined);
	            // no args passed
	            if (typeof args === 'function'){
	                callback = args;
	                // add Content-length to POST/PUT/DELETE/PATCH methods
	                if (method === 'POST' || method === 'PUT' || method === 'DELETE' || method === 'PATCH'){
	                    options.headers[CONSTANTS.HEADER_CONTENT_LENGTH] = 0;
	                }
	            } else if (typeof args === 'object') {
	                // add headers and POST/PUT/DELETE/PATCH data to connect options
					// to be passed
	                // with request, but without deleting other headers like
					// non-tunnel proxy headers
	                if (args.headers){
	                    for (var headerName in args.headers){
	                        if (args.headers.hasOwnProperty(headerName)) {
	                            options.headers[headerName] = args.headers[headerName];
	                        }
	                    }
	                    
	                }
	                
	 
	                // we have args, go and check if we have parameters
	                if (args.parameters && Object.keys(args.parameters).length > 0){
	                  // validate URL consistency, and fix it adding query
						// parameter separation char

	                  // check if URL already has '?' path parameter separator
						// char in any position that is not final
	                  // if true throw error
	                  var pathLength = options.path.length,
	                  pathParameterSepCharPos = options.path.indexOf("?");

	                  if (pathParameterSepCharPos >= 0 && pathParameterSepCharPos!== pathLength -1 )
	                   self.emit('error','parameters argument cannot be used if parameters are already defined in URL ' + options.path);

	               options.path +=(options.path.charAt(pathLength-1) === '?'?"":"?");
	                  // check if we have serializable parameter container, that
						// must be serialized and encoded
	                  // directly, as javascript object
	                  options.path = options.path.concat(Util.serializeEncodeQueryFromArgs(args.parameters));
	                  debug("options.path after request parameters = ", options.path);
	              }

	                // override client config, by the moment just for request
					// response config
	                this.overrideClientConfig(options,args);

	               // always set Content-length header if not set previously
	                // set Content lentgh for some servers to work (nginx, apache)
	                if (args.data !== undefined && !options.headers.hasOwnProperty(CONSTANTS.HEADER_CONTENT_LENGTH)){                    
	                    serializerManager.get(options).serialize(args.data, clientEmitterWrapper(self), function(serializedData){
	                        options.data = serializedData;
	                        options.headers[CONSTANTS.HEADER_CONTENT_LENGTH] = Buffer.byteLength(options.data, 'utf8');
	                    });                    
	                }else{
	                    options.headers[CONSTANTS.HEADER_CONTENT_LENGTH] = 0;
	                }


	            }
	            

	            debug("options post connect",options);
	            debug("FINAL SELF object  ====>", self);

	            if (self.useProxy && self.useProxyTunnel){
	                connectManager.proxy(options,callback);
	            }else{
	                // normal connection and direct proxy connections (no tunneling)
	                connectManager.normal(options,callback);
	            }
	        },
	        mergeMimeTypes:function(mimetypes){
	        	// this function is left for backward compatibility, but will be
	        	// deleted in future releases
	        	var parser = null;
	            // merge mime-types passed as options to parsers
	            if (mimetypes && typeof mimetypes === "object"){
		            try{
		            	if (mimetypes.json && mimetypes.json instanceof Array && mimetypes.json.length > 0){                	
	                		parser = parserManager.find("JSON");
	                		parser.contentTypes = mimetypes.json;                    
		                }else if (mimetypes.xml && mimetypes.xml instanceof Array && mimetypes.xml.length > 0){
		                	parser = parserManager.find("XML");
		            		parser.contentTypes = mimetypes.xml;                    
		                }
		        	}catch(err){
		        		self.emit('error', 'cannot assign custom content types to parser, cause: ' + err);
		        	}
	            }
	        },
	        createHttpMethod:function(methodName){
	            return function(url, args, callback){
	                var clientRequest = new ClientRequest();
	                Util.connect(methodName.toUpperCase(), url, args, callback, clientRequest);
	                return clientRequest;
	            };
	        }
	    },
	    Method = function(url, method){
	        var httpMethod = self[method.toLowerCase()];
	        
	        return  function(args,callback){
	            var completeURL = url;
	                    // no args
	                    if (typeof args === 'function'){
	                        callback = args;
	                        args = {};
	                    }

	                    return httpMethod(completeURL, args , callback);
	                };
	            };




	            this.get = Util.createHttpMethod("get");

	            this.post = Util.createHttpMethod("post");
	            
	            this.put = Util.createHttpMethod("put");

	            this.delete = Util.createHttpMethod("delete");

	            this.patch = Util.createHttpMethod("patch");


	            this.registerMethod = function(name, url, method){
	        // create method in method registry with preconfigured REST invocation
	        // method
	        this.methods[name] = new Method(url,method);
	    };

	    this.unregisterMethod = function(name){
	        delete this.methods[name];
	    };

	    this.addCustomHttpMethod=function(methodName){
	        self[methodName.toLowerCase()] = Util.createHttpMethod(methodName);
	    };

	    this.parsers = ioFacade.parsers;

	    this.serializers = ioFacade.serializers;
	   
	    // merge mime types with connect manager
	    Util.mergeMimeTypes(self.mimetypes);
	    debug("ConnectManager", connectManager);

	};


	var ConnectManager = function(client, parserManager) {
	   
	    var client = client,
	    clientEmitterWrapper = function (client){
	                    var client = client;
	                    return function(type, event){client.emit(type, event);};
	                };
	    
	  

	    this.configureRequest = function(req, config, clientRequest){

	        if (config.timeout){
	            req.setTimeout(config.timeout, function(){
	                clientRequest.emit('requestTimeout',req);
	            });
	        }
	        

	        if(config.noDelay)
	            req.setNoDelay(config.noDelay);

	        if(config.keepAlive)
	            req.setSocketKeepAlive(config.noDelay,config.keepAliveDelay || 0);
	        
	    };

	    this.configureResponse = function(res,config, clientRequest){
	        if (config.timeout){
	            res.setTimeout(config.timeout, function(){
	                clientRequest.emit('responseTimeout',res);
	                res.close();
	            });
	        }
	    };

	    this.configureOptions = function(options){
	        var followRedirectsProps =["followRedirects", "maxRedirects"];
	        function configureProps(propsArray, optionsElement){
	            for (var index in propsArray){
	                if (optionsElement.hasOwnProperty(propsArray[index]))
	                    options[propsArray[index]] = optionsElement[propsArray[index]];        
	            }    
	        }
	        
	        //add follows-redirects config
	        configureProps(followRedirectsProps, options.requestConfig);
	        

	        // remove "protocol" and "clientRequest" option from options,
	        // cos is not allowed by http/hppts node objects
	        delete options.protocol;
	        delete options.clientRequest;
	        delete options.requestConfig;
	        delete options.responseConfig;
	        debug("options pre connect", options);
	    };

	    this.handleEnd = function(res,buffer,callback){

	        var self = this,
	        content = res.headers["content-type"],
	        encoding = res.headers["content-encoding"];
	        
	        debug("content-type: ", content);
	        debug("content-encoding: ",encoding);

	        if(encoding !== undefined && encoding.indexOf("gzip") >= 0){
	            debug("gunzip");
	            zlib.gunzip(Buffer.concat(buffer),function(er,gunzipped){
	                self.handleResponse(res,gunzipped,callback);
	            });
	        }else if(encoding !== undefined && encoding.indexOf("deflate") >= 0){
	            debug("inflate");
	            zlib.inflate(Buffer.concat(buffer),function(er,inflated){
	                self.handleResponse(res,inflated,callback);
	            });
	        }else {
	            debug("not compressed");
	            self.handleResponse(res,Buffer.concat(buffer),callback);
	        }
	    };

	    this.handleResponse = function(res,data,callback){
	        // find valid parser to be used with response content type, first one
			// found
	        parserManager.get(res).parse(data, clientEmitterWrapper(client), function(parsedData){
	            callback(parsedData,res);
	        });
	    };

	    this.prepareData = function(data){
	        var result;
	        if ((data instanceof Buffer) || (typeof data !== 'object')){
	            result = data;
	        }else{
	            result = JSON.stringify(data);
	        }
	        return result;
	    };

	    this.proxy = function(options, callback){

	        debug("proxy options",options.proxy);

	            // creare a new proxy tunnel, and use to connect to API URL
	            var proxyTunnel = http.request(options.proxy),
	            self = this;
	            
	            
	            proxyTunnel.on('connect',function(res, socket, head){
	                debug("proxy connected",socket);

	                // set tunnel socket in request options, that's the tunnel
					// itself
	                options.socket = socket;

	                var buffer=[],
	                protocol = (options.protocol =="http")?http:https,
	                clientRequest = options.clientRequest,
	                requestConfig = options.requestConfig,
	                responseConfig = options.responseConfig;
	                
	                self.configureOptions(options);

	                // add request options to request returned to calling method
	                clientRequest.options = options;

	                var request = protocol.request(options, function(res){
	                        // configure response
	                        self.configureResponse(res,responseConfig, clientRequest);

	                        // concurrent data chunk handler
	                        res.on('data',function(chunk){
	                            buffer.push(new Buffer(chunk));
	                        });

	                        res.on('end',function(){
	                            self.handleEnd(res,buffer,callback);
	                        });


	                        // handler response errors
	                        res.on('error',function(err){
	                            if (clientRequest !== undefined && typeof clientRequest === 'object'){
	                                // add request as property of error
	                                err.request = clientRequest;
	                                err.response =  res;
	                                // request error handler
	                                clientRequest.emit('error',err);
	                            }else{
	                                // general error handler
	                                client.emit('error',err);
	                            }
	                        });
	                    });



	                // configure request and add it to clientRequest
	                // and add it to request returned
	                self.configureRequest(request,requestConfig, clientRequest);
	                clientRequest.setHttpRequest(request);


	                // write POST/PUT data to request body;
	                // find valid serializer to be used to serialize request data,
					// first one found
	                // is the one to be used.if none found for match condition,
					// default serializer is used

	               if(options.data)request.write(options.data);

	                request.end();
	                
	               
	               // handle request errors and handle them by request or general
					// error handler
	               request.on('error',function(err){
	                   if (clientRequest !== undefined && typeof clientRequest === 'object'){
	                       // add request as property of error
	                       err.request = clientRequest;
	                       
	                       // request error handler
	                       clientRequest.emit('error',err);
	                   }else{
	                       // general error handler
	                       client.emit('error',err);
	                   }
	               });
	            });

	            // proxy tunnel error are only handled by general error handler
	            proxyTunnel.on('error',function(e){
	                client.emit('error',e);
	            });

	            proxyTunnel.end();
	            
	        };

	        this.normal = function(options, callback){

	            var buffer = [],
	            protocol = (options.protocol === "http")?http:https,
	            clientRequest = options.clientRequest,
	            requestConfig = options.requestConfig,
	            responseConfig = options.responseConfig,
	            self = this;
	            
	                self.configureOptions(options);

	                // add request options to request returned to calling method
	                clientRequest.options = options;

	                var request = protocol.request(options, function(res){
	                        // configure response
	                        self.configureResponse(res,responseConfig, clientRequest);

	                        // concurrent data chunk handler
	                        res.on('data',function(chunk){
	                            buffer.push(new Buffer(chunk));
	                        });

	                        res.on('end',function(){

	                            self.handleEnd(res,buffer,callback);

	                        });

	                        // handler response errors
	                        res.on('error',function(err){
	                            if (clientRequest !== undefined && typeof clientRequest === 'object'){
	                            	// add request as property of error
	                                err.request = clientRequest;
	                                err.response = res;
	                                // request error handler
	                                clientRequest.emit('error',err);
	                            }else{
	                                // general error handler
	                                client.emit('error',err);
	                            }
	                        });
	                    });

	                // configure request and add it to clientRequest
	                // and add it to request returned
	                self.configureRequest(request,requestConfig, clientRequest);
	                debug("clientRequest",clientRequest);

	                clientRequest.setHttpRequest(request);

	                debug("options data", options.data);
	                // write POST/PUT data to request body;
	                // find valid serializer to be used to serialize request data,
					// first one found
	                // is the one to be used.if none found for match condition,
					// default serializer is used
	                if(options.data)request.write(options.data);
	                request.end(); // end request when data is written

	                // handle request errors and handle them by request or general
					// error handler
	                request.on('error',function(err){
	                    if (clientRequest !== undefined && typeof clientRequest === 'object'){
	                        // add request as property of error
	                        err.request = clientRequest;
	                        
	                        // request error handler
	                        clientRequest.emit('error',err);
	                    }else{
	                        // general error handler
	                        client.emit('error',err);
	                    }
	                });            
	        };
	    };


	    // event handlers for client and ConnectManager
	    util.inherits(exports.Client, events.EventEmitter);   


	    var debug = function(){
	        if (!process.env.DEBUG) return;

	        var now = new Date(),
	        header =now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds() +  " [NRC CLIENT]" + arguments.callee.caller.name + " -> ",
	        args = Array.prototype.slice.call(arguments);
	        args.splice(0,0,header);
	        node_debug.apply(console,args);


	    };


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var url = __webpack_require__(83);
	var assert = __webpack_require__(84);
	var http = __webpack_require__(85);
	var https = __webpack_require__(86);
	var Writable = __webpack_require__(87).Writable;
	var debug = __webpack_require__(88)('follow-redirects');

	var nativeProtocols = {'http:': http, 'https:': https};
	var schemes = {};
	var exports = module.exports = {
		maxRedirects: 21
	};
	// RFC7231§4.2.1: Of the request methods defined by this specification,
	// the GET, HEAD, OPTIONS, and TRACE methods are defined to be safe.
	var safeMethods = {GET: true, HEAD: true, OPTIONS: true, TRACE: true};

	// Create handlers that pass events from native requests
	var eventHandlers = Object.create(null);
	['abort', 'aborted', 'error', 'socket'].forEach(function (event) {
		eventHandlers[event] = function (arg) {
			this._redirectable.emit(event, arg);
		};
	});

	// An HTTP(S) request that can be redirected
	function RedirectableRequest(options, responseCallback) {
		// Initialize the request
		Writable.call(this);
		this._options = options;
		this._redirectCount = 0;
		this._bufferedWrites = [];

		// Attach a callback if passed
		if (responseCallback) {
			this.on('response', responseCallback);
		}

		// React to responses of native requests
		var self = this;
		this._onNativeResponse = function (response) {
			self._processResponse(response);
		};

		// Perform the first request
		this._performRequest();
	}
	RedirectableRequest.prototype = Object.create(Writable.prototype);

	// Executes the next native request (initial or redirect)
	RedirectableRequest.prototype._performRequest = function () {
		// If specified, use the agent corresponding to the protocol
		// (HTTP and HTTPS use different types of agents)
		var protocol = this._options.protocol;
		if (this._options.agents) {
			this._options.agent = this._options.agents[schemes[protocol]];
		}

		// Create the native request
		var nativeProtocol = nativeProtocols[this._options.protocol];
		var request = this._currentRequest =
					nativeProtocol.request(this._options, this._onNativeResponse);
		this._currentUrl = url.format(this._options);

		// Set up event handlers
		request._redirectable = this;
		for (var event in eventHandlers) {
			/* istanbul ignore else */
			if (event) {
				request.on(event, eventHandlers[event]);
			}
		}

		// End a redirected request
		// (The first request must be ended explicitly with RedirectableRequest#end)
		if (this._isRedirect) {
			// If the request doesn't have en entity, end directly.
			var bufferedWrites = this._bufferedWrites;
			if (bufferedWrites.length === 0) {
				request.end();
			// Otherwise, write the request entity and end afterwards.
			} else {
				var i = 0;
				(function writeNext() {
					if (i < bufferedWrites.length) {
						var bufferedWrite = bufferedWrites[i++];
						request.write(bufferedWrite.data, bufferedWrite.encoding, writeNext);
					} else {
						request.end();
					}
				})();
			}
		}
	};

	// Processes a response from the current native request
	RedirectableRequest.prototype._processResponse = function (response) {
		// RFC7231§6.4: The 3xx (Redirection) class of status code indicates
		// that further action needs to be taken by the user agent in order to
		// fulfill the request. If a Location header field is provided,
		// the user agent MAY automatically redirect its request to the URI
		// referenced by the Location field value,
		// even if the specific status code is not understood.
		var location = response.headers.location;
		if (location && this._options.followRedirects !== false &&
				response.statusCode >= 300 && response.statusCode < 400) {
			// RFC7231§6.4: A client SHOULD detect and intervene
			// in cyclical redirections (i.e., "infinite" redirection loops).
			if (++this._redirectCount > this._options.maxRedirects) {
				return this.emit('error', new Error('Max redirects exceeded.'));
			}

			// RFC7231§6.4: Automatic redirection needs to done with
			// care for methods not known to be safe […],
			// since the user might not wish to redirect an unsafe request.
			// RFC7231§6.4.7: The 307 (Temporary Redirect) status code indicates
			// that the target resource resides temporarily under a different URI
			// and the user agent MUST NOT change the request method
			// if it performs an automatic redirection to that URI.
			var header;
			var headers = this._options.headers;
			if (response.statusCode !== 307 && !(this._options.method in safeMethods)) {
				this._options.method = 'GET';
				// Drop a possible entity and headers related to it
				this._bufferedWrites = [];
				for (header in headers) {
					if (/^content-/i.test(header)) {
						delete headers[header];
					}
				}
			}

			// Drop the Host header, as the redirect might lead to a different host
			if (!this._isRedirect) {
				for (header in headers) {
					if (/^host$/i.test(header)) {
						delete headers[header];
					}
				}
			}

			// Perform the redirected request
			var redirectUrl = url.resolve(this._currentUrl, location);
			debug('redirecting to', redirectUrl);
			Object.assign(this._options, url.parse(redirectUrl));
			this._isRedirect = true;
			this._performRequest();
		} else {
			// The response is not a redirect; return it as-is
			response.responseUrl = this._currentUrl;
			this.emit('response', response);

			// Clean up
			delete this._options;
			delete this._bufferedWrites;
		}
	};

	// Aborts the current native request
	RedirectableRequest.prototype.abort = function () {
		this._currentRequest.abort();
	};

	// Flushes the headers of the current native request
	RedirectableRequest.prototype.flushHeaders = function () {
		this._currentRequest.flushHeaders();
	};

	// Sets the noDelay option of the current native request
	RedirectableRequest.prototype.setNoDelay = function (noDelay) {
		this._currentRequest.setNoDelay(noDelay);
	};

	// Sets the socketKeepAlive option of the current native request
	RedirectableRequest.prototype.setSocketKeepAlive = function (enable, initialDelay) {
		this._currentRequest.setSocketKeepAlive(enable, initialDelay);
	};

	// Sets the timeout option of the current native request
	RedirectableRequest.prototype.setTimeout = function (timeout, callback) {
		this._currentRequest.setTimeout(timeout, callback);
	};

	// Writes buffered data to the current native request
	RedirectableRequest.prototype._write = function (data, encoding, callback) {
		this._currentRequest.write(data, encoding, callback);
		this._bufferedWrites.push({data: data, encoding: encoding});
	};

	// Ends the current native request
	RedirectableRequest.prototype.end = function (data, encoding, callback) {
		this._currentRequest.end(data, encoding, callback);
		if (data) {
			this._bufferedWrites.push({data: data, encoding: encoding});
		}
	};

	// Export a redirecting wrapper for each native protocol
	Object.keys(nativeProtocols).forEach(function (protocol) {
		var scheme = schemes[protocol] = protocol.substr(0, protocol.length - 1);
		var nativeProtocol = nativeProtocols[protocol];
		var wrappedProtocol = exports[scheme] = Object.create(nativeProtocol);

		// Executes an HTTP request, following redirects
		wrappedProtocol.request = function (options, callback) {
			if (typeof options === 'string') {
				options = url.parse(options);
				options.maxRedirects = exports.maxRedirects;
			} else {
				options = Object.assign({
					maxRedirects: exports.maxRedirects,
					protocol: protocol
				}, options);
			}
			assert.equal(options.protocol, protocol, 'protocol mismatch');
			debug('options', options);

			return new RedirectableRequest(options, callback);
		};

		// Executes a GET request, following redirects
		wrappedProtocol.get = function (options, callback) {
			var request = wrappedProtocol.request(options, callback);
			request.end();
			return request;
		};
	});


/***/ }),
/* 83 */
/***/ (function(module, exports) {

	module.exports = require("url");

/***/ }),
/* 84 */
/***/ (function(module, exports) {

	module.exports = require("assert");

/***/ }),
/* 85 */
/***/ (function(module, exports) {

	module.exports = require("http");

/***/ }),
/* 86 */
/***/ (function(module, exports) {

	module.exports = require("https");

/***/ }),
/* 87 */
/***/ (function(module, exports) {

	module.exports = require("stream");

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Detect Electron renderer process, which is node, but we should
	 * treat as a browser.
	 */

	if (typeof process !== 'undefined' && process.type === 'renderer') {
	  module.exports = __webpack_require__(89);
	} else {
	  module.exports = __webpack_require__(92);
	}


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * This is the web browser implementation of `debug()`.
	 *
	 * Expose `debug()` as the module.
	 */

	exports = module.exports = __webpack_require__(90);
	exports.log = log;
	exports.formatArgs = formatArgs;
	exports.save = save;
	exports.load = load;
	exports.useColors = useColors;
	exports.storage = 'undefined' != typeof chrome
	               && 'undefined' != typeof chrome.storage
	                  ? chrome.storage.local
	                  : localstorage();

	/**
	 * Colors.
	 */

	exports.colors = [
	  'lightseagreen',
	  'forestgreen',
	  'goldenrod',
	  'dodgerblue',
	  'darkorchid',
	  'crimson'
	];

	/**
	 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
	 * and the Firebug extension (any Firefox version) are known
	 * to support "%c" CSS customizations.
	 *
	 * TODO: add a `localStorage` variable to explicitly enable/disable colors
	 */

	function useColors() {
	  // NB: In an Electron preload script, document will be defined but not fully
	  // initialized. Since we know we're in Chrome, we'll just detect this case
	  // explicitly
	  if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
	    return true;
	  }

	  // is webkit? http://stackoverflow.com/a/16459606/376773
	  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
	  return (typeof document !== 'undefined' && document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
	    // is firebug? http://stackoverflow.com/a/398120/376773
	    (typeof window !== 'undefined' && window && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
	    // is firefox >= v31?
	    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
	    (typeof navigator !== 'undefined' && navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
	    // double check webkit in userAgent just in case we are in a worker
	    (typeof navigator !== 'undefined' && navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
	}

	/**
	 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
	 */

	exports.formatters.j = function(v) {
	  try {
	    return JSON.stringify(v);
	  } catch (err) {
	    return '[UnexpectedJSONParseError]: ' + err.message;
	  }
	};


	/**
	 * Colorize log arguments if enabled.
	 *
	 * @api public
	 */

	function formatArgs(args) {
	  var useColors = this.useColors;

	  args[0] = (useColors ? '%c' : '')
	    + this.namespace
	    + (useColors ? ' %c' : ' ')
	    + args[0]
	    + (useColors ? '%c ' : ' ')
	    + '+' + exports.humanize(this.diff);

	  if (!useColors) return;

	  var c = 'color: ' + this.color;
	  args.splice(1, 0, c, 'color: inherit')

	  // the final "%c" is somewhat tricky, because there could be other
	  // arguments passed either before or after the %c, so we need to
	  // figure out the correct index to insert the CSS into
	  var index = 0;
	  var lastC = 0;
	  args[0].replace(/%[a-zA-Z%]/g, function(match) {
	    if ('%%' === match) return;
	    index++;
	    if ('%c' === match) {
	      // we only are interested in the *last* %c
	      // (the user may have provided their own)
	      lastC = index;
	    }
	  });

	  args.splice(lastC, 0, c);
	}

	/**
	 * Invokes `console.log()` when available.
	 * No-op when `console.log` is not a "function".
	 *
	 * @api public
	 */

	function log() {
	  // this hackery is required for IE8/9, where
	  // the `console.log` function doesn't have 'apply'
	  return 'object' === typeof console
	    && console.log
	    && Function.prototype.apply.call(console.log, console, arguments);
	}

	/**
	 * Save `namespaces`.
	 *
	 * @param {String} namespaces
	 * @api private
	 */

	function save(namespaces) {
	  try {
	    if (null == namespaces) {
	      exports.storage.removeItem('debug');
	    } else {
	      exports.storage.debug = namespaces;
	    }
	  } catch(e) {}
	}

	/**
	 * Load `namespaces`.
	 *
	 * @return {String} returns the previously persisted debug modes
	 * @api private
	 */

	function load() {
	  var r;
	  try {
	    r = exports.storage.debug;
	  } catch(e) {}

	  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
	  if (!r && typeof process !== 'undefined' && 'env' in process) {
	    r = process.env.DEBUG;
	  }

	  return r;
	}

	/**
	 * Enable namespaces listed in `localStorage.debug` initially.
	 */

	exports.enable(load());

	/**
	 * Localstorage attempts to return the localstorage.
	 *
	 * This is necessary because safari throws
	 * when a user disables cookies/localstorage
	 * and you attempt to access it.
	 *
	 * @return {LocalStorage}
	 * @api private
	 */

	function localstorage() {
	  try {
	    return window.localStorage;
	  } catch (e) {}
	}


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

	
	/**
	 * This is the common logic for both the Node.js and web browser
	 * implementations of `debug()`.
	 *
	 * Expose `debug()` as the module.
	 */

	exports = module.exports = createDebug.debug = createDebug['default'] = createDebug;
	exports.coerce = coerce;
	exports.disable = disable;
	exports.enable = enable;
	exports.enabled = enabled;
	exports.humanize = __webpack_require__(91);

	/**
	 * The currently active debug mode names, and names to skip.
	 */

	exports.names = [];
	exports.skips = [];

	/**
	 * Map of special "%n" handling functions, for the debug "format" argument.
	 *
	 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
	 */

	exports.formatters = {};

	/**
	 * Previous log timestamp.
	 */

	var prevTime;

	/**
	 * Select a color.
	 * @param {String} namespace
	 * @return {Number}
	 * @api private
	 */

	function selectColor(namespace) {
	  var hash = 0, i;

	  for (i in namespace) {
	    hash  = ((hash << 5) - hash) + namespace.charCodeAt(i);
	    hash |= 0; // Convert to 32bit integer
	  }

	  return exports.colors[Math.abs(hash) % exports.colors.length];
	}

	/**
	 * Create a debugger with the given `namespace`.
	 *
	 * @param {String} namespace
	 * @return {Function}
	 * @api public
	 */

	function createDebug(namespace) {

	  function debug() {
	    // disabled?
	    if (!debug.enabled) return;

	    var self = debug;

	    // set `diff` timestamp
	    var curr = +new Date();
	    var ms = curr - (prevTime || curr);
	    self.diff = ms;
	    self.prev = prevTime;
	    self.curr = curr;
	    prevTime = curr;

	    // turn the `arguments` into a proper Array
	    var args = new Array(arguments.length);
	    for (var i = 0; i < args.length; i++) {
	      args[i] = arguments[i];
	    }

	    args[0] = exports.coerce(args[0]);

	    if ('string' !== typeof args[0]) {
	      // anything else let's inspect with %O
	      args.unshift('%O');
	    }

	    // apply any `formatters` transformations
	    var index = 0;
	    args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
	      // if we encounter an escaped % then don't increase the array index
	      if (match === '%%') return match;
	      index++;
	      var formatter = exports.formatters[format];
	      if ('function' === typeof formatter) {
	        var val = args[index];
	        match = formatter.call(self, val);

	        // now we need to remove `args[index]` since it's inlined in the `format`
	        args.splice(index, 1);
	        index--;
	      }
	      return match;
	    });

	    // apply env-specific formatting (colors, etc.)
	    exports.formatArgs.call(self, args);

	    var logFn = debug.log || exports.log || console.log.bind(console);
	    logFn.apply(self, args);
	  }

	  debug.namespace = namespace;
	  debug.enabled = exports.enabled(namespace);
	  debug.useColors = exports.useColors();
	  debug.color = selectColor(namespace);

	  // env-specific initialization logic for debug instances
	  if ('function' === typeof exports.init) {
	    exports.init(debug);
	  }

	  return debug;
	}

	/**
	 * Enables a debug mode by namespaces. This can include modes
	 * separated by a colon and wildcards.
	 *
	 * @param {String} namespaces
	 * @api public
	 */

	function enable(namespaces) {
	  exports.save(namespaces);

	  exports.names = [];
	  exports.skips = [];

	  var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
	  var len = split.length;

	  for (var i = 0; i < len; i++) {
	    if (!split[i]) continue; // ignore empty strings
	    namespaces = split[i].replace(/\*/g, '.*?');
	    if (namespaces[0] === '-') {
	      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
	    } else {
	      exports.names.push(new RegExp('^' + namespaces + '$'));
	    }
	  }
	}

	/**
	 * Disable debug output.
	 *
	 * @api public
	 */

	function disable() {
	  exports.enable('');
	}

	/**
	 * Returns true if the given mode name is enabled, false otherwise.
	 *
	 * @param {String} name
	 * @return {Boolean}
	 * @api public
	 */

	function enabled(name) {
	  var i, len;
	  for (i = 0, len = exports.skips.length; i < len; i++) {
	    if (exports.skips[i].test(name)) {
	      return false;
	    }
	  }
	  for (i = 0, len = exports.names.length; i < len; i++) {
	    if (exports.names[i].test(name)) {
	      return true;
	    }
	  }
	  return false;
	}

	/**
	 * Coerce `val`.
	 *
	 * @param {Mixed} val
	 * @return {Mixed}
	 * @api private
	 */

	function coerce(val) {
	  if (val instanceof Error) return val.stack || val.message;
	  return val;
	}


/***/ }),
/* 91 */
/***/ (function(module, exports) {

	/**
	 * Helpers.
	 */

	var s = 1000
	var m = s * 60
	var h = m * 60
	var d = h * 24
	var y = d * 365.25

	/**
	 * Parse or format the given `val`.
	 *
	 * Options:
	 *
	 *  - `long` verbose formatting [false]
	 *
	 * @param {String|Number} val
	 * @param {Object} [options]
	 * @throws {Error} throw an error if val is not a non-empty string or a number
	 * @return {String|Number}
	 * @api public
	 */

	module.exports = function (val, options) {
	  options = options || {}
	  var type = typeof val
	  if (type === 'string' && val.length > 0) {
	    return parse(val)
	  } else if (type === 'number' && isNaN(val) === false) {
	    return options.long ?
				fmtLong(val) :
				fmtShort(val)
	  }
	  throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(val))
	}

	/**
	 * Parse the given `str` and return milliseconds.
	 *
	 * @param {String} str
	 * @return {Number}
	 * @api private
	 */

	function parse(str) {
	  str = String(str)
	  if (str.length > 10000) {
	    return
	  }
	  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str)
	  if (!match) {
	    return
	  }
	  var n = parseFloat(match[1])
	  var type = (match[2] || 'ms').toLowerCase()
	  switch (type) {
	    case 'years':
	    case 'year':
	    case 'yrs':
	    case 'yr':
	    case 'y':
	      return n * y
	    case 'days':
	    case 'day':
	    case 'd':
	      return n * d
	    case 'hours':
	    case 'hour':
	    case 'hrs':
	    case 'hr':
	    case 'h':
	      return n * h
	    case 'minutes':
	    case 'minute':
	    case 'mins':
	    case 'min':
	    case 'm':
	      return n * m
	    case 'seconds':
	    case 'second':
	    case 'secs':
	    case 'sec':
	    case 's':
	      return n * s
	    case 'milliseconds':
	    case 'millisecond':
	    case 'msecs':
	    case 'msec':
	    case 'ms':
	      return n
	    default:
	      return undefined
	  }
	}

	/**
	 * Short format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */

	function fmtShort(ms) {
	  if (ms >= d) {
	    return Math.round(ms / d) + 'd'
	  }
	  if (ms >= h) {
	    return Math.round(ms / h) + 'h'
	  }
	  if (ms >= m) {
	    return Math.round(ms / m) + 'm'
	  }
	  if (ms >= s) {
	    return Math.round(ms / s) + 's'
	  }
	  return ms + 'ms'
	}

	/**
	 * Long format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */

	function fmtLong(ms) {
	  return plural(ms, d, 'day') ||
	    plural(ms, h, 'hour') ||
	    plural(ms, m, 'minute') ||
	    plural(ms, s, 'second') ||
	    ms + ' ms'
	}

	/**
	 * Pluralization helper.
	 */

	function plural(ms, n, name) {
	  if (ms < n) {
	    return
	  }
	  if (ms < n * 1.5) {
	    return Math.floor(ms / n) + ' ' + name
	  }
	  return Math.ceil(ms / n) + ' ' + name + 's'
	}


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies.
	 */

	var tty = __webpack_require__(93);
	var util = __webpack_require__(94);

	/**
	 * This is the Node.js implementation of `debug()`.
	 *
	 * Expose `debug()` as the module.
	 */

	exports = module.exports = __webpack_require__(90);
	exports.init = init;
	exports.log = log;
	exports.formatArgs = formatArgs;
	exports.save = save;
	exports.load = load;
	exports.useColors = useColors;

	/**
	 * Colors.
	 */

	exports.colors = [6, 2, 3, 4, 5, 1];

	/**
	 * Build up the default `inspectOpts` object from the environment variables.
	 *
	 *   $ DEBUG_COLORS=no DEBUG_DEPTH=10 DEBUG_SHOW_HIDDEN=enabled node script.js
	 */

	exports.inspectOpts = Object.keys(process.env).filter(function (key) {
	  return /^debug_/i.test(key);
	}).reduce(function (obj, key) {
	  // camel-case
	  var prop = key
	    .substring(6)
	    .toLowerCase()
	    .replace(/_([a-z])/g, function (_, k) { return k.toUpperCase() });

	  // coerce string value into JS value
	  var val = process.env[key];
	  if (/^(yes|on|true|enabled)$/i.test(val)) val = true;
	  else if (/^(no|off|false|disabled)$/i.test(val)) val = false;
	  else if (val === 'null') val = null;
	  else val = Number(val);

	  obj[prop] = val;
	  return obj;
	}, {});

	/**
	 * The file descriptor to write the `debug()` calls to.
	 * Set the `DEBUG_FD` env variable to override with another value. i.e.:
	 *
	 *   $ DEBUG_FD=3 node script.js 3>debug.log
	 */

	var fd = parseInt(process.env.DEBUG_FD, 10) || 2;

	if (1 !== fd && 2 !== fd) {
	  util.deprecate(function(){}, 'except for stderr(2) and stdout(1), any other usage of DEBUG_FD is deprecated. Override debug.log if you want to use a different log function (https://git.io/debug_fd)')()
	}

	var stream = 1 === fd ? process.stdout :
	             2 === fd ? process.stderr :
	             createWritableStdioStream(fd);

	/**
	 * Is stdout a TTY? Colored output is enabled when `true`.
	 */

	function useColors() {
	  return 'colors' in exports.inspectOpts
	    ? Boolean(exports.inspectOpts.colors)
	    : tty.isatty(fd);
	}

	/**
	 * Map %o to `util.inspect()`, all on a single line.
	 */

	exports.formatters.o = function(v) {
	  this.inspectOpts.colors = this.useColors;
	  return util.inspect(v, this.inspectOpts)
	    .replace(/\s*\n\s*/g, ' ');
	};

	/**
	 * Map %o to `util.inspect()`, allowing multiple lines if needed.
	 */

	exports.formatters.O = function(v) {
	  this.inspectOpts.colors = this.useColors;
	  return util.inspect(v, this.inspectOpts);
	};

	/**
	 * Adds ANSI color escape codes if enabled.
	 *
	 * @api public
	 */

	function formatArgs(args) {
	  var name = this.namespace;
	  var useColors = this.useColors;

	  if (useColors) {
	    var c = this.color;
	    var prefix = '  \u001b[3' + c + ';1m' + name + ' ' + '\u001b[0m';

	    args[0] = prefix + args[0].split('\n').join('\n' + prefix);
	    args.push('\u001b[3' + c + 'm+' + exports.humanize(this.diff) + '\u001b[0m');
	  } else {
	    args[0] = new Date().toUTCString()
	      + ' ' + name + ' ' + args[0];
	  }
	}

	/**
	 * Invokes `util.format()` with the specified arguments and writes to `stream`.
	 */

	function log() {
	  return stream.write(util.format.apply(util, arguments) + '\n');
	}

	/**
	 * Save `namespaces`.
	 *
	 * @param {String} namespaces
	 * @api private
	 */

	function save(namespaces) {
	  if (null == namespaces) {
	    // If you set a process.env field to null or undefined, it gets cast to the
	    // string 'null' or 'undefined'. Just delete instead.
	    delete process.env.DEBUG;
	  } else {
	    process.env.DEBUG = namespaces;
	  }
	}

	/**
	 * Load `namespaces`.
	 *
	 * @return {String} returns the previously persisted debug modes
	 * @api private
	 */

	function load() {
	  return process.env.DEBUG;
	}

	/**
	 * Copied from `node/src/node.js`.
	 *
	 * XXX: It's lame that node doesn't expose this API out-of-the-box. It also
	 * relies on the undocumented `tty_wrap.guessHandleType()` which is also lame.
	 */

	function createWritableStdioStream (fd) {
	  var stream;
	  var tty_wrap = process.binding('tty_wrap');

	  // Note stream._type is used for test-module-load-list.js

	  switch (tty_wrap.guessHandleType(fd)) {
	    case 'TTY':
	      stream = new tty.WriteStream(fd);
	      stream._type = 'tty';

	      // Hack to have stream not keep the event loop alive.
	      // See https://github.com/joyent/node/issues/1726
	      if (stream._handle && stream._handle.unref) {
	        stream._handle.unref();
	      }
	      break;

	    case 'FILE':
	      var fs = __webpack_require__(95);
	      stream = new fs.SyncWriteStream(fd, { autoClose: false });
	      stream._type = 'fs';
	      break;

	    case 'PIPE':
	    case 'TCP':
	      var net = __webpack_require__(96);
	      stream = new net.Socket({
	        fd: fd,
	        readable: false,
	        writable: true
	      });

	      // FIXME Should probably have an option in net.Socket to create a
	      // stream from an existing fd which is writable only. But for now
	      // we'll just add this hack and set the `readable` member to false.
	      // Test: ./node test/fixtures/echo.js < /etc/passwd
	      stream.readable = false;
	      stream.read = null;
	      stream._type = 'pipe';

	      // FIXME Hack to have stream not keep the event loop alive.
	      // See https://github.com/joyent/node/issues/1726
	      if (stream._handle && stream._handle.unref) {
	        stream._handle.unref();
	      }
	      break;

	    default:
	      // Probably an error on in uv_guess_handle()
	      throw new Error('Implement me. Unknown stream file type!');
	  }

	  // For supporting legacy API we put the FD here.
	  stream.fd = fd;

	  stream._isStdio = true;

	  return stream;
	}

	/**
	 * Init logic for `debug` instances.
	 *
	 * Create a new `inspectOpts` object in case `useColors` is set
	 * differently for a particular `debug` instance.
	 */

	function init (debug) {
	  debug.inspectOpts = util._extend({}, exports.inspectOpts);
	}

	/**
	 * Enable namespaces listed in `process.env.DEBUG` initially.
	 */

	exports.enable(load());


/***/ }),
/* 93 */
/***/ (function(module, exports) {

	module.exports = require("tty");

/***/ }),
/* 94 */
/***/ (function(module, exports) {

	module.exports = require("util");

/***/ }),
/* 95 */
/***/ (function(module, exports) {

	module.exports = require("fs");

/***/ }),
/* 96 */
/***/ (function(module, exports) {

	module.exports = require("net");

/***/ }),
/* 97 */
/***/ (function(module, exports) {

	module.exports = require("events");

/***/ }),
/* 98 */
/***/ (function(module, exports) {

	module.exports = require("zlib");

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

	
	/**
	 * Module dependencies.
	 */

	var tty = __webpack_require__(93);
	var util = __webpack_require__(94);

	/**
	 * This is the Node.js implementation of `debug()`.
	 *
	 * Expose `debug()` as the module.
	 */

	exports = module.exports = __webpack_require__(100);
	exports.log = log;
	exports.formatArgs = formatArgs;
	exports.save = save;
	exports.load = load;
	exports.useColors = useColors;

	/**
	 * Colors.
	 */

	exports.colors = [6, 2, 3, 4, 5, 1];

	/**
	 * The file descriptor to write the `debug()` calls to.
	 * Set the `DEBUG_FD` env variable to override with another value. i.e.:
	 *
	 *   $ DEBUG_FD=3 node script.js 3>debug.log
	 */

	var fd = parseInt(process.env.DEBUG_FD, 10) || 2;
	var stream = 1 === fd ? process.stdout :
	             2 === fd ? process.stderr :
	             createWritableStdioStream(fd);

	/**
	 * Is stdout a TTY? Colored output is enabled when `true`.
	 */

	function useColors() {
	  var debugColors = (process.env.DEBUG_COLORS || '').trim().toLowerCase();
	  if (0 === debugColors.length) {
	    return tty.isatty(fd);
	  } else {
	    return '0' !== debugColors
	        && 'no' !== debugColors
	        && 'false' !== debugColors
	        && 'disabled' !== debugColors;
	  }
	}

	/**
	 * Map %o to `util.inspect()`, since Node doesn't do that out of the box.
	 */

	var inspect = (4 === util.inspect.length ?
	  // node <= 0.8.x
	  function (v, colors) {
	    return util.inspect(v, void 0, void 0, colors);
	  } :
	  // node > 0.8.x
	  function (v, colors) {
	    return util.inspect(v, { colors: colors });
	  }
	);

	exports.formatters.o = function(v) {
	  return inspect(v, this.useColors)
	    .replace(/\s*\n\s*/g, ' ');
	};

	/**
	 * Adds ANSI color escape codes if enabled.
	 *
	 * @api public
	 */

	function formatArgs() {
	  var args = arguments;
	  var useColors = this.useColors;
	  var name = this.namespace;

	  if (useColors) {
	    var c = this.color;

	    args[0] = '  \u001b[3' + c + ';1m' + name + ' '
	      + '\u001b[0m'
	      + args[0] + '\u001b[3' + c + 'm'
	      + ' +' + exports.humanize(this.diff) + '\u001b[0m';
	  } else {
	    args[0] = new Date().toUTCString()
	      + ' ' + name + ' ' + args[0];
	  }
	  return args;
	}

	/**
	 * Invokes `console.error()` with the specified arguments.
	 */

	function log() {
	  return stream.write(util.format.apply(this, arguments) + '\n');
	}

	/**
	 * Save `namespaces`.
	 *
	 * @param {String} namespaces
	 * @api private
	 */

	function save(namespaces) {
	  if (null == namespaces) {
	    // If you set a process.env field to null or undefined, it gets cast to the
	    // string 'null' or 'undefined'. Just delete instead.
	    delete process.env.DEBUG;
	  } else {
	    process.env.DEBUG = namespaces;
	  }
	}

	/**
	 * Load `namespaces`.
	 *
	 * @return {String} returns the previously persisted debug modes
	 * @api private
	 */

	function load() {
	  return process.env.DEBUG;
	}

	/**
	 * Copied from `node/src/node.js`.
	 *
	 * XXX: It's lame that node doesn't expose this API out-of-the-box. It also
	 * relies on the undocumented `tty_wrap.guessHandleType()` which is also lame.
	 */

	function createWritableStdioStream (fd) {
	  var stream;
	  var tty_wrap = process.binding('tty_wrap');

	  // Note stream._type is used for test-module-load-list.js

	  switch (tty_wrap.guessHandleType(fd)) {
	    case 'TTY':
	      stream = new tty.WriteStream(fd);
	      stream._type = 'tty';

	      // Hack to have stream not keep the event loop alive.
	      // See https://github.com/joyent/node/issues/1726
	      if (stream._handle && stream._handle.unref) {
	        stream._handle.unref();
	      }
	      break;

	    case 'FILE':
	      var fs = __webpack_require__(95);
	      stream = new fs.SyncWriteStream(fd, { autoClose: false });
	      stream._type = 'fs';
	      break;

	    case 'PIPE':
	    case 'TCP':
	      var net = __webpack_require__(96);
	      stream = new net.Socket({
	        fd: fd,
	        readable: false,
	        writable: true
	      });

	      // FIXME Should probably have an option in net.Socket to create a
	      // stream from an existing fd which is writable only. But for now
	      // we'll just add this hack and set the `readable` member to false.
	      // Test: ./node test/fixtures/echo.js < /etc/passwd
	      stream.readable = false;
	      stream.read = null;
	      stream._type = 'pipe';

	      // FIXME Hack to have stream not keep the event loop alive.
	      // See https://github.com/joyent/node/issues/1726
	      if (stream._handle && stream._handle.unref) {
	        stream._handle.unref();
	      }
	      break;

	    default:
	      // Probably an error on in uv_guess_handle()
	      throw new Error('Implement me. Unknown stream file type!');
	  }

	  // For supporting legacy API we put the FD here.
	  stream.fd = fd;

	  stream._isStdio = true;

	  return stream;
	}

	/**
	 * Enable namespaces listed in `process.env.DEBUG` initially.
	 */

	exports.enable(load());


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

	
	/**
	 * This is the common logic for both the Node.js and web browser
	 * implementations of `debug()`.
	 *
	 * Expose `debug()` as the module.
	 */

	exports = module.exports = debug;
	exports.coerce = coerce;
	exports.disable = disable;
	exports.enable = enable;
	exports.enabled = enabled;
	exports.humanize = __webpack_require__(101);

	/**
	 * The currently active debug mode names, and names to skip.
	 */

	exports.names = [];
	exports.skips = [];

	/**
	 * Map of special "%n" handling functions, for the debug "format" argument.
	 *
	 * Valid key names are a single, lowercased letter, i.e. "n".
	 */

	exports.formatters = {};

	/**
	 * Previously assigned color.
	 */

	var prevColor = 0;

	/**
	 * Previous log timestamp.
	 */

	var prevTime;

	/**
	 * Select a color.
	 *
	 * @return {Number}
	 * @api private
	 */

	function selectColor() {
	  return exports.colors[prevColor++ % exports.colors.length];
	}

	/**
	 * Create a debugger with the given `namespace`.
	 *
	 * @param {String} namespace
	 * @return {Function}
	 * @api public
	 */

	function debug(namespace) {

	  // define the `disabled` version
	  function disabled() {
	  }
	  disabled.enabled = false;

	  // define the `enabled` version
	  function enabled() {

	    var self = enabled;

	    // set `diff` timestamp
	    var curr = +new Date();
	    var ms = curr - (prevTime || curr);
	    self.diff = ms;
	    self.prev = prevTime;
	    self.curr = curr;
	    prevTime = curr;

	    // add the `color` if not set
	    if (null == self.useColors) self.useColors = exports.useColors();
	    if (null == self.color && self.useColors) self.color = selectColor();

	    var args = Array.prototype.slice.call(arguments);

	    args[0] = exports.coerce(args[0]);

	    if ('string' !== typeof args[0]) {
	      // anything else let's inspect with %o
	      args = ['%o'].concat(args);
	    }

	    // apply any `formatters` transformations
	    var index = 0;
	    args[0] = args[0].replace(/%([a-z%])/g, function(match, format) {
	      // if we encounter an escaped % then don't increase the array index
	      if (match === '%%') return match;
	      index++;
	      var formatter = exports.formatters[format];
	      if ('function' === typeof formatter) {
	        var val = args[index];
	        match = formatter.call(self, val);

	        // now we need to remove `args[index]` since it's inlined in the `format`
	        args.splice(index, 1);
	        index--;
	      }
	      return match;
	    });

	    if ('function' === typeof exports.formatArgs) {
	      args = exports.formatArgs.apply(self, args);
	    }
	    var logFn = enabled.log || exports.log || console.log.bind(console);
	    logFn.apply(self, args);
	  }
	  enabled.enabled = true;

	  var fn = exports.enabled(namespace) ? enabled : disabled;

	  fn.namespace = namespace;

	  return fn;
	}

	/**
	 * Enables a debug mode by namespaces. This can include modes
	 * separated by a colon and wildcards.
	 *
	 * @param {String} namespaces
	 * @api public
	 */

	function enable(namespaces) {
	  exports.save(namespaces);

	  var split = (namespaces || '').split(/[\s,]+/);
	  var len = split.length;

	  for (var i = 0; i < len; i++) {
	    if (!split[i]) continue; // ignore empty strings
	    namespaces = split[i].replace(/\*/g, '.*?');
	    if (namespaces[0] === '-') {
	      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
	    } else {
	      exports.names.push(new RegExp('^' + namespaces + '$'));
	    }
	  }
	}

	/**
	 * Disable debug output.
	 *
	 * @api public
	 */

	function disable() {
	  exports.enable('');
	}

	/**
	 * Returns true if the given mode name is enabled, false otherwise.
	 *
	 * @param {String} name
	 * @return {Boolean}
	 * @api public
	 */

	function enabled(name) {
	  var i, len;
	  for (i = 0, len = exports.skips.length; i < len; i++) {
	    if (exports.skips[i].test(name)) {
	      return false;
	    }
	  }
	  for (i = 0, len = exports.names.length; i < len; i++) {
	    if (exports.names[i].test(name)) {
	      return true;
	    }
	  }
	  return false;
	}

	/**
	 * Coerce `val`.
	 *
	 * @param {Mixed} val
	 * @return {Mixed}
	 * @api private
	 */

	function coerce(val) {
	  if (val instanceof Error) return val.stack || val.message;
	  return val;
	}


/***/ }),
/* 101 */
/***/ (function(module, exports) {

	/**
	 * Helpers.
	 */

	var s = 1000;
	var m = s * 60;
	var h = m * 60;
	var d = h * 24;
	var y = d * 365.25;

	/**
	 * Parse or format the given `val`.
	 *
	 * Options:
	 *
	 *  - `long` verbose formatting [false]
	 *
	 * @param {String|Number} val
	 * @param {Object} options
	 * @return {String|Number}
	 * @api public
	 */

	module.exports = function(val, options){
	  options = options || {};
	  if ('string' == typeof val) return parse(val);
	  return options.long
	    ? long(val)
	    : short(val);
	};

	/**
	 * Parse the given `str` and return milliseconds.
	 *
	 * @param {String} str
	 * @return {Number}
	 * @api private
	 */

	function parse(str) {
	  str = '' + str;
	  if (str.length > 10000) return;
	  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);
	  if (!match) return;
	  var n = parseFloat(match[1]);
	  var type = (match[2] || 'ms').toLowerCase();
	  switch (type) {
	    case 'years':
	    case 'year':
	    case 'yrs':
	    case 'yr':
	    case 'y':
	      return n * y;
	    case 'days':
	    case 'day':
	    case 'd':
	      return n * d;
	    case 'hours':
	    case 'hour':
	    case 'hrs':
	    case 'hr':
	    case 'h':
	      return n * h;
	    case 'minutes':
	    case 'minute':
	    case 'mins':
	    case 'min':
	    case 'm':
	      return n * m;
	    case 'seconds':
	    case 'second':
	    case 'secs':
	    case 'sec':
	    case 's':
	      return n * s;
	    case 'milliseconds':
	    case 'millisecond':
	    case 'msecs':
	    case 'msec':
	    case 'ms':
	      return n;
	  }
	}

	/**
	 * Short format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */

	function short(ms) {
	  if (ms >= d) return Math.round(ms / d) + 'd';
	  if (ms >= h) return Math.round(ms / h) + 'h';
	  if (ms >= m) return Math.round(ms / m) + 'm';
	  if (ms >= s) return Math.round(ms / s) + 's';
	  return ms + 'ms';
	}

	/**
	 * Long format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */

	function long(ms) {
	  return plural(ms, d, 'day')
	    || plural(ms, h, 'hour')
	    || plural(ms, m, 'minute')
	    || plural(ms, s, 'second')
	    || ms + ' ms';
	}

	/**
	 * Pluralization helper.
	 */

	function plural(ms, n, name) {
	  if (ms < n) return;
	  if (ms < n * 1.5) return Math.floor(ms / n) + ' ' + name;
	  return Math.ceil(ms / n) + ' ' + name + 's';
	}


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

	var ParserManager = function(){
		var registry={}, defaultParser = null;

		var _private={
			"validate":function(parser){

				function validateProperties(parser, props){
					var result = true;
					for (var propIndex in props){
						var propType  = props[propIndex].split(":");
						if (!parser.hasOwnProperty([propType[0]]) || typeof parser[propType[0]] !== propType[1]){
							result = false;
							break;
						}
					}

					return result;
				}


				result = validateProperties(parser,["name:string","parse:function","isDefault:boolean"]);

				// valid  parser, check if its not default response parser, to validate non
				// default parser props
				if (result && !parser.isDefault)
					result = validateProperties(parser,["match:function"]);
				

				return result;
			}
		};

		this.add = function(parser){
			if (!_private.validate(parser))
				throw "parser cannot be added: invalid parser definition";

			if (parser.isDefault){
				defaultParser = parser;
			}else{
				registry[parser.name] = parser;
			}
		};

		this.remove = function(parserName){
			var result = registry[parserName];
			if (!result)
				throw "cannot remove parser: " + parserName +" doesn't exists";

			delete registry[parserName];
		};

		this.clean = function(){
			registry={};
		};

		this.find = function(parserName){
			var result = registry[parserName];
			if (!result)
				throw "cannot find parser: " + parserName + " doesn't exists ";

			return result;
		};

		this.getDefault = function(){
			return defaultParser;
		};
		
		this.get = function(response){
			var result = null;
			for (var parserName in registry){
				if (registry[parserName].match(response)){
					result = registry[parserName];
					break;
				}
			}
			// if parser not found return default parser, else parser found
			return (result === null)?defaultParser:result;
		};

		this.getAll=function(){
			var result=[];		
			for (var parserName in registry){
				result.push(registry[parserName]);
			}
			return result;
		}
	};


	module.exports = function(){

	var parserManager = new ParserManager();

	var BaseParser = {
		"isDefault":false,	
		"match":function(response){
			var result = false,
			contentType = response.headers["content-type"] && response.headers["content-type"].replace(/ /g, '');

			if (!contentType) return result;

			for (var i=0; i<this.contentTypes.length;i++){
				result = this.contentTypes[i].trim().toLowerCase() === contentType.trim().toLowerCase();
				if (result) break;
			}

			return result;
		}
	};

	//add default parser managers: JSON,XML and unknown content/type
	parserManager.add(Object.assign({
		"name":"XML",
		"options":{"explicitArray":false},	
		"contentTypes":["application/xml","application/xml;charset=utf-8","text/xml","text/xml;charset=utf-8"],
		"parseString":__webpack_require__(103).parseString,
		"parse":function(byteBuffer,nrcEventEmitter,parsedCallback){
			this.parseString(byteBuffer.toString(),this.options, function (err, result) {
				parsedCallback(result);
			});
		}
	}, BaseParser));

	parserManager.add(Object.assign({
		"name":"JSON",	
		"contentTypes":["application/json","application/json;charset=utf-8"],
		"isValidData":function(data){
			return data !== undefined && (data.length !== undefined && data.length > 0);
		},	
		"parse":function(byteBuffer,nrcEventEmitter,parsedCallback){
			var jsonData,
			data = byteBuffer.toString();

			try {
				jsonData = this.isValidData(data)?JSON.parse(data):data;
			} catch (err) {
	                // Something went wrong when parsing json. This can happen
	                // for many reasons, including a bad implementation on the
	                // server.
	                nrcEventEmitter('error','Error parsing response. response: [' +data + '], error: [' + err + ']');
	            }
	            parsedCallback(jsonData);
	        }
	    },BaseParser));


	parserManager.add({
		"name":"DEFAULT",
		"isDefault":true,
		"parse":function(byteBuffer,nrcEventEmitter,parsedCallback){
			parsedCallback(byteBuffer);
		}
	});

	return parserManager;
	}


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.10.0
	(function() {
	  "use strict";
	  var bom, builder, escapeCDATA, events, isEmpty, processName, processors, requiresCDATA, sax, setImmediate, wrapCDATA,
	    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	    hasProp = {}.hasOwnProperty,
	    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

	  sax = __webpack_require__(104);

	  events = __webpack_require__(97);

	  builder = __webpack_require__(106);

	  bom = __webpack_require__(264);

	  processors = __webpack_require__(265);

	  setImmediate = __webpack_require__(266).setImmediate;

	  isEmpty = function(thing) {
	    return typeof thing === "object" && (thing != null) && Object.keys(thing).length === 0;
	  };

	  processName = function(processors, processedName) {
	    var i, len, process;
	    for (i = 0, len = processors.length; i < len; i++) {
	      process = processors[i];
	      processedName = process(processedName);
	    }
	    return processedName;
	  };

	  requiresCDATA = function(entry) {
	    return entry.indexOf('&') >= 0 || entry.indexOf('>') >= 0 || entry.indexOf('<') >= 0;
	  };

	  wrapCDATA = function(entry) {
	    return "<![CDATA[" + (escapeCDATA(entry)) + "]]>";
	  };

	  escapeCDATA = function(entry) {
	    return entry.replace(']]>', ']]]]><![CDATA[>');
	  };

	  exports.processors = processors;

	  exports.defaults = {
	    "0.1": {
	      explicitCharkey: false,
	      trim: true,
	      normalize: true,
	      normalizeTags: false,
	      attrkey: "@",
	      charkey: "#",
	      explicitArray: false,
	      ignoreAttrs: false,
	      mergeAttrs: false,
	      explicitRoot: false,
	      validator: null,
	      xmlns: false,
	      explicitChildren: false,
	      childkey: '@@',
	      charsAsChildren: false,
	      includeWhiteChars: false,
	      async: false,
	      strict: true,
	      attrNameProcessors: null,
	      attrValueProcessors: null,
	      tagNameProcessors: null,
	      valueProcessors: null,
	      emptyTag: ''
	    },
	    "0.2": {
	      explicitCharkey: false,
	      trim: false,
	      normalize: false,
	      normalizeTags: false,
	      attrkey: "$",
	      charkey: "_",
	      explicitArray: true,
	      ignoreAttrs: false,
	      mergeAttrs: false,
	      explicitRoot: true,
	      validator: null,
	      xmlns: false,
	      explicitChildren: false,
	      preserveChildrenOrder: false,
	      childkey: '$$',
	      charsAsChildren: false,
	      includeWhiteChars: false,
	      async: false,
	      strict: true,
	      attrNameProcessors: null,
	      attrValueProcessors: null,
	      tagNameProcessors: null,
	      valueProcessors: null,
	      rootName: 'root',
	      xmldec: {
	        'version': '1.0',
	        'encoding': 'UTF-8',
	        'standalone': true
	      },
	      doctype: null,
	      renderOpts: {
	        'pretty': true,
	        'indent': '  ',
	        'newline': '\n'
	      },
	      headless: false,
	      chunkSize: 10000,
	      emptyTag: '',
	      cdata: false
	    }
	  };

	  exports.ValidationError = (function(superClass) {
	    extend(ValidationError, superClass);

	    function ValidationError(message) {
	      this.message = message;
	    }

	    return ValidationError;

	  })(Error);

	  exports.Builder = (function() {
	    function Builder(opts) {
	      var key, ref, value;
	      this.options = {};
	      ref = exports.defaults["0.2"];
	      for (key in ref) {
	        if (!hasProp.call(ref, key)) continue;
	        value = ref[key];
	        this.options[key] = value;
	      }
	      for (key in opts) {
	        if (!hasProp.call(opts, key)) continue;
	        value = opts[key];
	        this.options[key] = value;
	      }
	    }

	    Builder.prototype.buildObject = function(rootObj) {
	      var attrkey, charkey, render, rootElement, rootName;
	      attrkey = this.options.attrkey;
	      charkey = this.options.charkey;
	      if ((Object.keys(rootObj).length === 1) && (this.options.rootName === exports.defaults['0.2'].rootName)) {
	        rootName = Object.keys(rootObj)[0];
	        rootObj = rootObj[rootName];
	      } else {
	        rootName = this.options.rootName;
	      }
	      render = (function(_this) {
	        return function(element, obj) {
	          var attr, child, entry, index, key, value;
	          if (typeof obj !== 'object') {
	            if (_this.options.cdata && requiresCDATA(obj)) {
	              element.raw(wrapCDATA(obj));
	            } else {
	              element.txt(obj);
	            }
	          } else {
	            for (key in obj) {
	              if (!hasProp.call(obj, key)) continue;
	              child = obj[key];
	              if (key === attrkey) {
	                if (typeof child === "object") {
	                  for (attr in child) {
	                    value = child[attr];
	                    element = element.att(attr, value);
	                  }
	                }
	              } else if (key === charkey) {
	                if (_this.options.cdata && requiresCDATA(child)) {
	                  element = element.raw(wrapCDATA(child));
	                } else {
	                  element = element.txt(child);
	                }
	              } else if (Array.isArray(child)) {
	                for (index in child) {
	                  if (!hasProp.call(child, index)) continue;
	                  entry = child[index];
	                  if (typeof entry === 'string') {
	                    if (_this.options.cdata && requiresCDATA(entry)) {
	                      element = element.ele(key).raw(wrapCDATA(entry)).up();
	                    } else {
	                      element = element.ele(key, entry).up();
	                    }
	                  } else {
	                    element = render(element.ele(key), entry).up();
	                  }
	                }
	              } else if (typeof child === "object") {
	                element = render(element.ele(key), child).up();
	              } else {
	                if (typeof child === 'string' && _this.options.cdata && requiresCDATA(child)) {
	                  element = element.ele(key).raw(wrapCDATA(child)).up();
	                } else {
	                  if (child == null) {
	                    child = '';
	                  }
	                  element = element.ele(key, child.toString()).up();
	                }
	              }
	            }
	          }
	          return element;
	        };
	      })(this);
	      rootElement = builder.create(rootName, this.options.xmldec, this.options.doctype, {
	        headless: this.options.headless,
	        allowSurrogateChars: this.options.allowSurrogateChars
	      });
	      return render(rootElement, rootObj).end(this.options.renderOpts);
	    };

	    return Builder;

	  })();

	  exports.Parser = (function(superClass) {
	    extend(Parser, superClass);

	    function Parser(opts) {
	      this.parseString = bind(this.parseString, this);
	      this.reset = bind(this.reset, this);
	      this.assignOrPush = bind(this.assignOrPush, this);
	      this.processAsync = bind(this.processAsync, this);
	      var key, ref, value;
	      if (!(this instanceof exports.Parser)) {
	        return new exports.Parser(opts);
	      }
	      this.options = {};
	      ref = exports.defaults["0.2"];
	      for (key in ref) {
	        if (!hasProp.call(ref, key)) continue;
	        value = ref[key];
	        this.options[key] = value;
	      }
	      for (key in opts) {
	        if (!hasProp.call(opts, key)) continue;
	        value = opts[key];
	        this.options[key] = value;
	      }
	      if (this.options.xmlns) {
	        this.options.xmlnskey = this.options.attrkey + "ns";
	      }
	      if (this.options.normalizeTags) {
	        if (!this.options.tagNameProcessors) {
	          this.options.tagNameProcessors = [];
	        }
	        this.options.tagNameProcessors.unshift(processors.normalize);
	      }
	      this.reset();
	    }

	    Parser.prototype.processAsync = function() {
	      var chunk, err, error1;
	      try {
	        if (this.remaining.length <= this.options.chunkSize) {
	          chunk = this.remaining;
	          this.remaining = '';
	          this.saxParser = this.saxParser.write(chunk);
	          return this.saxParser.close();
	        } else {
	          chunk = this.remaining.substr(0, this.options.chunkSize);
	          this.remaining = this.remaining.substr(this.options.chunkSize, this.remaining.length);
	          this.saxParser = this.saxParser.write(chunk);
	          return setImmediate(this.processAsync);
	        }
	      } catch (error1) {
	        err = error1;
	        if (!this.saxParser.errThrown) {
	          this.saxParser.errThrown = true;
	          return this.emit(err);
	        }
	      }
	    };

	    Parser.prototype.assignOrPush = function(obj, key, newValue) {
	      if (!(key in obj)) {
	        if (!this.options.explicitArray) {
	          return obj[key] = newValue;
	        } else {
	          return obj[key] = [newValue];
	        }
	      } else {
	        if (!(obj[key] instanceof Array)) {
	          obj[key] = [obj[key]];
	        }
	        return obj[key].push(newValue);
	      }
	    };

	    Parser.prototype.reset = function() {
	      var attrkey, charkey, ontext, stack;
	      this.removeAllListeners();
	      this.saxParser = sax.parser(this.options.strict, {
	        trim: false,
	        normalize: false,
	        xmlns: this.options.xmlns
	      });
	      this.saxParser.errThrown = false;
	      this.saxParser.onerror = (function(_this) {
	        return function(error) {
	          _this.saxParser.resume();
	          if (!_this.saxParser.errThrown) {
	            _this.saxParser.errThrown = true;
	            return _this.emit("error", error);
	          }
	        };
	      })(this);
	      this.saxParser.onend = (function(_this) {
	        return function() {
	          if (!_this.saxParser.ended) {
	            _this.saxParser.ended = true;
	            return _this.emit("end", _this.resultObject);
	          }
	        };
	      })(this);
	      this.saxParser.ended = false;
	      this.EXPLICIT_CHARKEY = this.options.explicitCharkey;
	      this.resultObject = null;
	      stack = [];
	      attrkey = this.options.attrkey;
	      charkey = this.options.charkey;
	      this.saxParser.onopentag = (function(_this) {
	        return function(node) {
	          var key, newValue, obj, processedKey, ref;
	          obj = {};
	          obj[charkey] = "";
	          if (!_this.options.ignoreAttrs) {
	            ref = node.attributes;
	            for (key in ref) {
	              if (!hasProp.call(ref, key)) continue;
	              if (!(attrkey in obj) && !_this.options.mergeAttrs) {
	                obj[attrkey] = {};
	              }
	              newValue = _this.options.attrValueProcessors ? processName(_this.options.attrValueProcessors, node.attributes[key]) : node.attributes[key];
	              processedKey = _this.options.attrNameProcessors ? processName(_this.options.attrNameProcessors, key) : key;
	              if (_this.options.mergeAttrs) {
	                _this.assignOrPush(obj, processedKey, newValue);
	              } else {
	                obj[attrkey][processedKey] = newValue;
	              }
	            }
	          }
	          obj["#name"] = _this.options.tagNameProcessors ? processName(_this.options.tagNameProcessors, node.name) : node.name;
	          if (_this.options.xmlns) {
	            obj[_this.options.xmlnskey] = {
	              uri: node.uri,
	              local: node.local
	            };
	          }
	          return stack.push(obj);
	        };
	      })(this);
	      this.saxParser.onclosetag = (function(_this) {
	        return function() {
	          var cdata, emptyStr, err, error1, key, node, nodeName, obj, objClone, old, s, xpath;
	          obj = stack.pop();
	          nodeName = obj["#name"];
	          if (!_this.options.explicitChildren || !_this.options.preserveChildrenOrder) {
	            delete obj["#name"];
	          }
	          if (obj.cdata === true) {
	            cdata = obj.cdata;
	            delete obj.cdata;
	          }
	          s = stack[stack.length - 1];
	          if (obj[charkey].match(/^\s*$/) && !cdata) {
	            emptyStr = obj[charkey];
	            delete obj[charkey];
	          } else {
	            if (_this.options.trim) {
	              obj[charkey] = obj[charkey].trim();
	            }
	            if (_this.options.normalize) {
	              obj[charkey] = obj[charkey].replace(/\s{2,}/g, " ").trim();
	            }
	            obj[charkey] = _this.options.valueProcessors ? processName(_this.options.valueProcessors, obj[charkey]) : obj[charkey];
	            if (Object.keys(obj).length === 1 && charkey in obj && !_this.EXPLICIT_CHARKEY) {
	              obj = obj[charkey];
	            }
	          }
	          if (isEmpty(obj)) {
	            obj = _this.options.emptyTag !== '' ? _this.options.emptyTag : emptyStr;
	          }
	          if (_this.options.validator != null) {
	            xpath = "/" + ((function() {
	              var i, len, results;
	              results = [];
	              for (i = 0, len = stack.length; i < len; i++) {
	                node = stack[i];
	                results.push(node["#name"]);
	              }
	              return results;
	            })()).concat(nodeName).join("/");
	            try {
	              obj = _this.options.validator(xpath, s && s[nodeName], obj);
	            } catch (error1) {
	              err = error1;
	              _this.emit("error", err);
	            }
	          }
	          if (_this.options.explicitChildren && !_this.options.mergeAttrs && typeof obj === 'object') {
	            if (!_this.options.preserveChildrenOrder) {
	              node = {};
	              if (_this.options.attrkey in obj) {
	                node[_this.options.attrkey] = obj[_this.options.attrkey];
	                delete obj[_this.options.attrkey];
	              }
	              if (!_this.options.charsAsChildren && _this.options.charkey in obj) {
	                node[_this.options.charkey] = obj[_this.options.charkey];
	                delete obj[_this.options.charkey];
	              }
	              if (Object.getOwnPropertyNames(obj).length > 0) {
	                node[_this.options.childkey] = obj;
	              }
	              obj = node;
	            } else if (s) {
	              s[_this.options.childkey] = s[_this.options.childkey] || [];
	              objClone = {};
	              for (key in obj) {
	                if (!hasProp.call(obj, key)) continue;
	                objClone[key] = obj[key];
	              }
	              s[_this.options.childkey].push(objClone);
	              delete obj["#name"];
	              if (Object.keys(obj).length === 1 && charkey in obj && !_this.EXPLICIT_CHARKEY) {
	                obj = obj[charkey];
	              }
	            }
	          }
	          if (stack.length > 0) {
	            return _this.assignOrPush(s, nodeName, obj);
	          } else {
	            if (_this.options.explicitRoot) {
	              old = obj;
	              obj = {};
	              obj[nodeName] = old;
	            }
	            _this.resultObject = obj;
	            _this.saxParser.ended = true;
	            return _this.emit("end", _this.resultObject);
	          }
	        };
	      })(this);
	      ontext = (function(_this) {
	        return function(text) {
	          var charChild, s;
	          s = stack[stack.length - 1];
	          if (s) {
	            s[charkey] += text;
	            if (_this.options.explicitChildren && _this.options.preserveChildrenOrder && _this.options.charsAsChildren && (_this.options.includeWhiteChars || text.replace(/\\n/g, '').trim() !== '')) {
	              s[_this.options.childkey] = s[_this.options.childkey] || [];
	              charChild = {
	                '#name': '__text__'
	              };
	              charChild[charkey] = text;
	              if (_this.options.normalize) {
	                charChild[charkey] = charChild[charkey].replace(/\s{2,}/g, " ").trim();
	              }
	              s[_this.options.childkey].push(charChild);
	            }
	            return s;
	          }
	        };
	      })(this);
	      this.saxParser.ontext = ontext;
	      return this.saxParser.oncdata = (function(_this) {
	        return function(text) {
	          var s;
	          s = ontext(text);
	          if (s) {
	            return s.cdata = true;
	          }
	        };
	      })(this);
	    };

	    Parser.prototype.parseString = function(str, cb) {
	      var err, error1;
	      if ((cb != null) && typeof cb === "function") {
	        this.on("end", function(result) {
	          this.reset();
	          return cb(null, result);
	        });
	        this.on("error", function(err) {
	          this.reset();
	          return cb(err);
	        });
	      }
	      try {
	        str = str.toString();
	        if (str.trim() === '') {
	          this.emit("end", null);
	          return true;
	        }
	        str = bom.stripBOM(str);
	        if (this.options.async) {
	          this.remaining = str;
	          setImmediate(this.processAsync);
	          return this.saxParser;
	        }
	        return this.saxParser.write(str).close();
	      } catch (error1) {
	        err = error1;
	        if (!(this.saxParser.errThrown || this.saxParser.ended)) {
	          this.emit('error', err);
	          return this.saxParser.errThrown = true;
	        } else if (this.saxParser.ended) {
	          throw err;
	        }
	      }
	    };

	    return Parser;

	  })(events.EventEmitter);

	  exports.parseString = function(str, a, b) {
	    var cb, options, parser;
	    if (b != null) {
	      if (typeof b === 'function') {
	        cb = b;
	      }
	      if (typeof a === 'object') {
	        options = a;
	      }
	    } else {
	      if (typeof a === 'function') {
	        cb = a;
	      }
	      options = {};
	    }
	    parser = new exports.Parser(options);
	    return parser.parseString(str, cb);
	  };

	}).call(this);


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

	;(function (sax) { // wrapper for non-node envs
	  sax.parser = function (strict, opt) { return new SAXParser(strict, opt) }
	  sax.SAXParser = SAXParser
	  sax.SAXStream = SAXStream
	  sax.createStream = createStream

	  // When we pass the MAX_BUFFER_LENGTH position, start checking for buffer overruns.
	  // When we check, schedule the next check for MAX_BUFFER_LENGTH - (max(buffer lengths)),
	  // since that's the earliest that a buffer overrun could occur.  This way, checks are
	  // as rare as required, but as often as necessary to ensure never crossing this bound.
	  // Furthermore, buffers are only tested at most once per write(), so passing a very
	  // large string into write() might have undesirable effects, but this is manageable by
	  // the caller, so it is assumed to be safe.  Thus, a call to write() may, in the extreme
	  // edge case, result in creating at most one complete copy of the string passed in.
	  // Set to Infinity to have unlimited buffers.
	  sax.MAX_BUFFER_LENGTH = 64 * 1024

	  var buffers = [
	    'comment', 'sgmlDecl', 'textNode', 'tagName', 'doctype',
	    'procInstName', 'procInstBody', 'entity', 'attribName',
	    'attribValue', 'cdata', 'script'
	  ]

	  sax.EVENTS = [
	    'text',
	    'processinginstruction',
	    'sgmldeclaration',
	    'doctype',
	    'comment',
	    'opentagstart',
	    'attribute',
	    'opentag',
	    'closetag',
	    'opencdata',
	    'cdata',
	    'closecdata',
	    'error',
	    'end',
	    'ready',
	    'script',
	    'opennamespace',
	    'closenamespace'
	  ]

	  function SAXParser (strict, opt) {
	    if (!(this instanceof SAXParser)) {
	      return new SAXParser(strict, opt)
	    }

	    var parser = this
	    clearBuffers(parser)
	    parser.q = parser.c = ''
	    parser.bufferCheckPosition = sax.MAX_BUFFER_LENGTH
	    parser.opt = opt || {}
	    parser.opt.lowercase = parser.opt.lowercase || parser.opt.lowercasetags
	    parser.looseCase = parser.opt.lowercase ? 'toLowerCase' : 'toUpperCase'
	    parser.tags = []
	    parser.closed = parser.closedRoot = parser.sawRoot = false
	    parser.tag = parser.error = null
	    parser.strict = !!strict
	    parser.noscript = !!(strict || parser.opt.noscript)
	    parser.state = S.BEGIN
	    parser.strictEntities = parser.opt.strictEntities
	    parser.ENTITIES = parser.strictEntities ? Object.create(sax.XML_ENTITIES) : Object.create(sax.ENTITIES)
	    parser.attribList = []

	    // namespaces form a prototype chain.
	    // it always points at the current tag,
	    // which protos to its parent tag.
	    if (parser.opt.xmlns) {
	      parser.ns = Object.create(rootNS)
	    }

	    // mostly just for error reporting
	    parser.trackPosition = parser.opt.position !== false
	    if (parser.trackPosition) {
	      parser.position = parser.line = parser.column = 0
	    }
	    emit(parser, 'onready')
	  }

	  if (!Object.create) {
	    Object.create = function (o) {
	      function F () {}
	      F.prototype = o
	      var newf = new F()
	      return newf
	    }
	  }

	  if (!Object.keys) {
	    Object.keys = function (o) {
	      var a = []
	      for (var i in o) if (o.hasOwnProperty(i)) a.push(i)
	      return a
	    }
	  }

	  function checkBufferLength (parser) {
	    var maxAllowed = Math.max(sax.MAX_BUFFER_LENGTH, 10)
	    var maxActual = 0
	    for (var i = 0, l = buffers.length; i < l; i++) {
	      var len = parser[buffers[i]].length
	      if (len > maxAllowed) {
	        // Text/cdata nodes can get big, and since they're buffered,
	        // we can get here under normal conditions.
	        // Avoid issues by emitting the text node now,
	        // so at least it won't get any bigger.
	        switch (buffers[i]) {
	          case 'textNode':
	            closeText(parser)
	            break

	          case 'cdata':
	            emitNode(parser, 'oncdata', parser.cdata)
	            parser.cdata = ''
	            break

	          case 'script':
	            emitNode(parser, 'onscript', parser.script)
	            parser.script = ''
	            break

	          default:
	            error(parser, 'Max buffer length exceeded: ' + buffers[i])
	        }
	      }
	      maxActual = Math.max(maxActual, len)
	    }
	    // schedule the next check for the earliest possible buffer overrun.
	    var m = sax.MAX_BUFFER_LENGTH - maxActual
	    parser.bufferCheckPosition = m + parser.position
	  }

	  function clearBuffers (parser) {
	    for (var i = 0, l = buffers.length; i < l; i++) {
	      parser[buffers[i]] = ''
	    }
	  }

	  function flushBuffers (parser) {
	    closeText(parser)
	    if (parser.cdata !== '') {
	      emitNode(parser, 'oncdata', parser.cdata)
	      parser.cdata = ''
	    }
	    if (parser.script !== '') {
	      emitNode(parser, 'onscript', parser.script)
	      parser.script = ''
	    }
	  }

	  SAXParser.prototype = {
	    end: function () { end(this) },
	    write: write,
	    resume: function () { this.error = null; return this },
	    close: function () { return this.write(null) },
	    flush: function () { flushBuffers(this) }
	  }

	  var Stream
	  try {
	    Stream = __webpack_require__(87).Stream
	  } catch (ex) {
	    Stream = function () {}
	  }

	  var streamWraps = sax.EVENTS.filter(function (ev) {
	    return ev !== 'error' && ev !== 'end'
	  })

	  function createStream (strict, opt) {
	    return new SAXStream(strict, opt)
	  }

	  function SAXStream (strict, opt) {
	    if (!(this instanceof SAXStream)) {
	      return new SAXStream(strict, opt)
	    }

	    Stream.apply(this)

	    this._parser = new SAXParser(strict, opt)
	    this.writable = true
	    this.readable = true

	    var me = this

	    this._parser.onend = function () {
	      me.emit('end')
	    }

	    this._parser.onerror = function (er) {
	      me.emit('error', er)

	      // if didn't throw, then means error was handled.
	      // go ahead and clear error, so we can write again.
	      me._parser.error = null
	    }

	    this._decoder = null

	    streamWraps.forEach(function (ev) {
	      Object.defineProperty(me, 'on' + ev, {
	        get: function () {
	          return me._parser['on' + ev]
	        },
	        set: function (h) {
	          if (!h) {
	            me.removeAllListeners(ev)
	            me._parser['on' + ev] = h
	            return h
	          }
	          me.on(ev, h)
	        },
	        enumerable: true,
	        configurable: false
	      })
	    })
	  }

	  SAXStream.prototype = Object.create(Stream.prototype, {
	    constructor: {
	      value: SAXStream
	    }
	  })

	  SAXStream.prototype.write = function (data) {
	    if (typeof Buffer === 'function' &&
	      typeof Buffer.isBuffer === 'function' &&
	      Buffer.isBuffer(data)) {
	      if (!this._decoder) {
	        var SD = __webpack_require__(105).StringDecoder
	        this._decoder = new SD('utf8')
	      }
	      data = this._decoder.write(data)
	    }

	    this._parser.write(data.toString())
	    this.emit('data', data)
	    return true
	  }

	  SAXStream.prototype.end = function (chunk) {
	    if (chunk && chunk.length) {
	      this.write(chunk)
	    }
	    this._parser.end()
	    return true
	  }

	  SAXStream.prototype.on = function (ev, handler) {
	    var me = this
	    if (!me._parser['on' + ev] && streamWraps.indexOf(ev) !== -1) {
	      me._parser['on' + ev] = function () {
	        var args = arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments)
	        args.splice(0, 0, ev)
	        me.emit.apply(me, args)
	      }
	    }

	    return Stream.prototype.on.call(me, ev, handler)
	  }

	  // character classes and tokens
	  var whitespace = '\r\n\t '

	  // this really needs to be replaced with character classes.
	  // XML allows all manner of ridiculous numbers and digits.

	  // (Letter | "_" | ":")
	  var quote = '\'"'
	  var attribEnd = whitespace + '>'
	  var CDATA = '[CDATA['
	  var DOCTYPE = 'DOCTYPE'
	  var XML_NAMESPACE = 'http://www.w3.org/XML/1998/namespace'
	  var XMLNS_NAMESPACE = 'http://www.w3.org/2000/xmlns/'
	  var rootNS = { xml: XML_NAMESPACE, xmlns: XMLNS_NAMESPACE }

	  // turn all the string character sets into character class objects.
	  whitespace = charClass(whitespace)

	  // http://www.w3.org/TR/REC-xml/#NT-NameStartChar
	  // This implementation works on strings, a single character at a time
	  // as such, it cannot ever support astral-plane characters (10000-EFFFF)
	  // without a significant breaking change to either this  parser, or the
	  // JavaScript language.  Implementation of an emoji-capable xml parser
	  // is left as an exercise for the reader.
	  var nameStart = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/

	  var nameBody = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/

	  var entityStart = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/
	  var entityBody = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/

	  quote = charClass(quote)
	  attribEnd = charClass(attribEnd)

	  function charClass (str) {
	    return str.split('').reduce(function (s, c) {
	      s[c] = true
	      return s
	    }, {})
	  }

	  function isMatch (regex, c) {
	    return regex.test(c)
	  }

	  function is (charclass, c) {
	    return charclass[c]
	  }

	  function notMatch (regex, c) {
	    return !isMatch(regex, c)
	  }

	  function not (charclass, c) {
	    return !is(charclass, c)
	  }

	  var S = 0
	  sax.STATE = {
	    BEGIN: S++, // leading byte order mark or whitespace
	    BEGIN_WHITESPACE: S++, // leading whitespace
	    TEXT: S++, // general stuff
	    TEXT_ENTITY: S++, // &amp and such.
	    OPEN_WAKA: S++, // <
	    SGML_DECL: S++, // <!BLARG
	    SGML_DECL_QUOTED: S++, // <!BLARG foo "bar
	    DOCTYPE: S++, // <!DOCTYPE
	    DOCTYPE_QUOTED: S++, // <!DOCTYPE "//blah
	    DOCTYPE_DTD: S++, // <!DOCTYPE "//blah" [ ...
	    DOCTYPE_DTD_QUOTED: S++, // <!DOCTYPE "//blah" [ "foo
	    COMMENT_STARTING: S++, // <!-
	    COMMENT: S++, // <!--
	    COMMENT_ENDING: S++, // <!-- blah -
	    COMMENT_ENDED: S++, // <!-- blah --
	    CDATA: S++, // <![CDATA[ something
	    CDATA_ENDING: S++, // ]
	    CDATA_ENDING_2: S++, // ]]
	    PROC_INST: S++, // <?hi
	    PROC_INST_BODY: S++, // <?hi there
	    PROC_INST_ENDING: S++, // <?hi "there" ?
	    OPEN_TAG: S++, // <strong
	    OPEN_TAG_SLASH: S++, // <strong /
	    ATTRIB: S++, // <a
	    ATTRIB_NAME: S++, // <a foo
	    ATTRIB_NAME_SAW_WHITE: S++, // <a foo _
	    ATTRIB_VALUE: S++, // <a foo=
	    ATTRIB_VALUE_QUOTED: S++, // <a foo="bar
	    ATTRIB_VALUE_CLOSED: S++, // <a foo="bar"
	    ATTRIB_VALUE_UNQUOTED: S++, // <a foo=bar
	    ATTRIB_VALUE_ENTITY_Q: S++, // <foo bar="&quot;"
	    ATTRIB_VALUE_ENTITY_U: S++, // <foo bar=&quot
	    CLOSE_TAG: S++, // </a
	    CLOSE_TAG_SAW_WHITE: S++, // </a   >
	    SCRIPT: S++, // <script> ...
	    SCRIPT_ENDING: S++ // <script> ... <
	  }

	  sax.XML_ENTITIES = {
	    'amp': '&',
	    'gt': '>',
	    'lt': '<',
	    'quot': '"',
	    'apos': "'"
	  }

	  sax.ENTITIES = {
	    'amp': '&',
	    'gt': '>',
	    'lt': '<',
	    'quot': '"',
	    'apos': "'",
	    'AElig': 198,
	    'Aacute': 193,
	    'Acirc': 194,
	    'Agrave': 192,
	    'Aring': 197,
	    'Atilde': 195,
	    'Auml': 196,
	    'Ccedil': 199,
	    'ETH': 208,
	    'Eacute': 201,
	    'Ecirc': 202,
	    'Egrave': 200,
	    'Euml': 203,
	    'Iacute': 205,
	    'Icirc': 206,
	    'Igrave': 204,
	    'Iuml': 207,
	    'Ntilde': 209,
	    'Oacute': 211,
	    'Ocirc': 212,
	    'Ograve': 210,
	    'Oslash': 216,
	    'Otilde': 213,
	    'Ouml': 214,
	    'THORN': 222,
	    'Uacute': 218,
	    'Ucirc': 219,
	    'Ugrave': 217,
	    'Uuml': 220,
	    'Yacute': 221,
	    'aacute': 225,
	    'acirc': 226,
	    'aelig': 230,
	    'agrave': 224,
	    'aring': 229,
	    'atilde': 227,
	    'auml': 228,
	    'ccedil': 231,
	    'eacute': 233,
	    'ecirc': 234,
	    'egrave': 232,
	    'eth': 240,
	    'euml': 235,
	    'iacute': 237,
	    'icirc': 238,
	    'igrave': 236,
	    'iuml': 239,
	    'ntilde': 241,
	    'oacute': 243,
	    'ocirc': 244,
	    'ograve': 242,
	    'oslash': 248,
	    'otilde': 245,
	    'ouml': 246,
	    'szlig': 223,
	    'thorn': 254,
	    'uacute': 250,
	    'ucirc': 251,
	    'ugrave': 249,
	    'uuml': 252,
	    'yacute': 253,
	    'yuml': 255,
	    'copy': 169,
	    'reg': 174,
	    'nbsp': 160,
	    'iexcl': 161,
	    'cent': 162,
	    'pound': 163,
	    'curren': 164,
	    'yen': 165,
	    'brvbar': 166,
	    'sect': 167,
	    'uml': 168,
	    'ordf': 170,
	    'laquo': 171,
	    'not': 172,
	    'shy': 173,
	    'macr': 175,
	    'deg': 176,
	    'plusmn': 177,
	    'sup1': 185,
	    'sup2': 178,
	    'sup3': 179,
	    'acute': 180,
	    'micro': 181,
	    'para': 182,
	    'middot': 183,
	    'cedil': 184,
	    'ordm': 186,
	    'raquo': 187,
	    'frac14': 188,
	    'frac12': 189,
	    'frac34': 190,
	    'iquest': 191,
	    'times': 215,
	    'divide': 247,
	    'OElig': 338,
	    'oelig': 339,
	    'Scaron': 352,
	    'scaron': 353,
	    'Yuml': 376,
	    'fnof': 402,
	    'circ': 710,
	    'tilde': 732,
	    'Alpha': 913,
	    'Beta': 914,
	    'Gamma': 915,
	    'Delta': 916,
	    'Epsilon': 917,
	    'Zeta': 918,
	    'Eta': 919,
	    'Theta': 920,
	    'Iota': 921,
	    'Kappa': 922,
	    'Lambda': 923,
	    'Mu': 924,
	    'Nu': 925,
	    'Xi': 926,
	    'Omicron': 927,
	    'Pi': 928,
	    'Rho': 929,
	    'Sigma': 931,
	    'Tau': 932,
	    'Upsilon': 933,
	    'Phi': 934,
	    'Chi': 935,
	    'Psi': 936,
	    'Omega': 937,
	    'alpha': 945,
	    'beta': 946,
	    'gamma': 947,
	    'delta': 948,
	    'epsilon': 949,
	    'zeta': 950,
	    'eta': 951,
	    'theta': 952,
	    'iota': 953,
	    'kappa': 954,
	    'lambda': 955,
	    'mu': 956,
	    'nu': 957,
	    'xi': 958,
	    'omicron': 959,
	    'pi': 960,
	    'rho': 961,
	    'sigmaf': 962,
	    'sigma': 963,
	    'tau': 964,
	    'upsilon': 965,
	    'phi': 966,
	    'chi': 967,
	    'psi': 968,
	    'omega': 969,
	    'thetasym': 977,
	    'upsih': 978,
	    'piv': 982,
	    'ensp': 8194,
	    'emsp': 8195,
	    'thinsp': 8201,
	    'zwnj': 8204,
	    'zwj': 8205,
	    'lrm': 8206,
	    'rlm': 8207,
	    'ndash': 8211,
	    'mdash': 8212,
	    'lsquo': 8216,
	    'rsquo': 8217,
	    'sbquo': 8218,
	    'ldquo': 8220,
	    'rdquo': 8221,
	    'bdquo': 8222,
	    'dagger': 8224,
	    'Dagger': 8225,
	    'bull': 8226,
	    'hellip': 8230,
	    'permil': 8240,
	    'prime': 8242,
	    'Prime': 8243,
	    'lsaquo': 8249,
	    'rsaquo': 8250,
	    'oline': 8254,
	    'frasl': 8260,
	    'euro': 8364,
	    'image': 8465,
	    'weierp': 8472,
	    'real': 8476,
	    'trade': 8482,
	    'alefsym': 8501,
	    'larr': 8592,
	    'uarr': 8593,
	    'rarr': 8594,
	    'darr': 8595,
	    'harr': 8596,
	    'crarr': 8629,
	    'lArr': 8656,
	    'uArr': 8657,
	    'rArr': 8658,
	    'dArr': 8659,
	    'hArr': 8660,
	    'forall': 8704,
	    'part': 8706,
	    'exist': 8707,
	    'empty': 8709,
	    'nabla': 8711,
	    'isin': 8712,
	    'notin': 8713,
	    'ni': 8715,
	    'prod': 8719,
	    'sum': 8721,
	    'minus': 8722,
	    'lowast': 8727,
	    'radic': 8730,
	    'prop': 8733,
	    'infin': 8734,
	    'ang': 8736,
	    'and': 8743,
	    'or': 8744,
	    'cap': 8745,
	    'cup': 8746,
	    'int': 8747,
	    'there4': 8756,
	    'sim': 8764,
	    'cong': 8773,
	    'asymp': 8776,
	    'ne': 8800,
	    'equiv': 8801,
	    'le': 8804,
	    'ge': 8805,
	    'sub': 8834,
	    'sup': 8835,
	    'nsub': 8836,
	    'sube': 8838,
	    'supe': 8839,
	    'oplus': 8853,
	    'otimes': 8855,
	    'perp': 8869,
	    'sdot': 8901,
	    'lceil': 8968,
	    'rceil': 8969,
	    'lfloor': 8970,
	    'rfloor': 8971,
	    'lang': 9001,
	    'rang': 9002,
	    'loz': 9674,
	    'spades': 9824,
	    'clubs': 9827,
	    'hearts': 9829,
	    'diams': 9830
	  }

	  Object.keys(sax.ENTITIES).forEach(function (key) {
	    var e = sax.ENTITIES[key]
	    var s = typeof e === 'number' ? String.fromCharCode(e) : e
	    sax.ENTITIES[key] = s
	  })

	  for (var s in sax.STATE) {
	    sax.STATE[sax.STATE[s]] = s
	  }

	  // shorthand
	  S = sax.STATE

	  function emit (parser, event, data) {
	    parser[event] && parser[event](data)
	  }

	  function emitNode (parser, nodeType, data) {
	    if (parser.textNode) closeText(parser)
	    emit(parser, nodeType, data)
	  }

	  function closeText (parser) {
	    parser.textNode = textopts(parser.opt, parser.textNode)
	    if (parser.textNode) emit(parser, 'ontext', parser.textNode)
	    parser.textNode = ''
	  }

	  function textopts (opt, text) {
	    if (opt.trim) text = text.trim()
	    if (opt.normalize) text = text.replace(/\s+/g, ' ')
	    return text
	  }

	  function error (parser, er) {
	    closeText(parser)
	    if (parser.trackPosition) {
	      er += '\nLine: ' + parser.line +
	        '\nColumn: ' + parser.column +
	        '\nChar: ' + parser.c
	    }
	    er = new Error(er)
	    parser.error = er
	    emit(parser, 'onerror', er)
	    return parser
	  }

	  function end (parser) {
	    if (parser.sawRoot && !parser.closedRoot) strictFail(parser, 'Unclosed root tag')
	    if ((parser.state !== S.BEGIN) &&
	      (parser.state !== S.BEGIN_WHITESPACE) &&
	      (parser.state !== S.TEXT)) {
	      error(parser, 'Unexpected end')
	    }
	    closeText(parser)
	    parser.c = ''
	    parser.closed = true
	    emit(parser, 'onend')
	    SAXParser.call(parser, parser.strict, parser.opt)
	    return parser
	  }

	  function strictFail (parser, message) {
	    if (typeof parser !== 'object' || !(parser instanceof SAXParser)) {
	      throw new Error('bad call to strictFail')
	    }
	    if (parser.strict) {
	      error(parser, message)
	    }
	  }

	  function newTag (parser) {
	    if (!parser.strict) parser.tagName = parser.tagName[parser.looseCase]()
	    var parent = parser.tags[parser.tags.length - 1] || parser
	    var tag = parser.tag = { name: parser.tagName, attributes: {} }

	    // will be overridden if tag contails an xmlns="foo" or xmlns:foo="bar"
	    if (parser.opt.xmlns) {
	      tag.ns = parent.ns
	    }
	    parser.attribList.length = 0
	    emitNode(parser, 'onopentagstart', tag)
	  }

	  function qname (name, attribute) {
	    var i = name.indexOf(':')
	    var qualName = i < 0 ? [ '', name ] : name.split(':')
	    var prefix = qualName[0]
	    var local = qualName[1]

	    // <x "xmlns"="http://foo">
	    if (attribute && name === 'xmlns') {
	      prefix = 'xmlns'
	      local = ''
	    }

	    return { prefix: prefix, local: local }
	  }

	  function attrib (parser) {
	    if (!parser.strict) {
	      parser.attribName = parser.attribName[parser.looseCase]()
	    }

	    if (parser.attribList.indexOf(parser.attribName) !== -1 ||
	      parser.tag.attributes.hasOwnProperty(parser.attribName)) {
	      parser.attribName = parser.attribValue = ''
	      return
	    }

	    if (parser.opt.xmlns) {
	      var qn = qname(parser.attribName, true)
	      var prefix = qn.prefix
	      var local = qn.local

	      if (prefix === 'xmlns') {
	        // namespace binding attribute. push the binding into scope
	        if (local === 'xml' && parser.attribValue !== XML_NAMESPACE) {
	          strictFail(parser,
	            'xml: prefix must be bound to ' + XML_NAMESPACE + '\n' +
	            'Actual: ' + parser.attribValue)
	        } else if (local === 'xmlns' && parser.attribValue !== XMLNS_NAMESPACE) {
	          strictFail(parser,
	            'xmlns: prefix must be bound to ' + XMLNS_NAMESPACE + '\n' +
	            'Actual: ' + parser.attribValue)
	        } else {
	          var tag = parser.tag
	          var parent = parser.tags[parser.tags.length - 1] || parser
	          if (tag.ns === parent.ns) {
	            tag.ns = Object.create(parent.ns)
	          }
	          tag.ns[local] = parser.attribValue
	        }
	      }

	      // defer onattribute events until all attributes have been seen
	      // so any new bindings can take effect. preserve attribute order
	      // so deferred events can be emitted in document order
	      parser.attribList.push([parser.attribName, parser.attribValue])
	    } else {
	      // in non-xmlns mode, we can emit the event right away
	      parser.tag.attributes[parser.attribName] = parser.attribValue
	      emitNode(parser, 'onattribute', {
	        name: parser.attribName,
	        value: parser.attribValue
	      })
	    }

	    parser.attribName = parser.attribValue = ''
	  }

	  function openTag (parser, selfClosing) {
	    if (parser.opt.xmlns) {
	      // emit namespace binding events
	      var tag = parser.tag

	      // add namespace info to tag
	      var qn = qname(parser.tagName)
	      tag.prefix = qn.prefix
	      tag.local = qn.local
	      tag.uri = tag.ns[qn.prefix] || ''

	      if (tag.prefix && !tag.uri) {
	        strictFail(parser, 'Unbound namespace prefix: ' +
	          JSON.stringify(parser.tagName))
	        tag.uri = qn.prefix
	      }

	      var parent = parser.tags[parser.tags.length - 1] || parser
	      if (tag.ns && parent.ns !== tag.ns) {
	        Object.keys(tag.ns).forEach(function (p) {
	          emitNode(parser, 'onopennamespace', {
	            prefix: p,
	            uri: tag.ns[p]
	          })
	        })
	      }

	      // handle deferred onattribute events
	      // Note: do not apply default ns to attributes:
	      //   http://www.w3.org/TR/REC-xml-names/#defaulting
	      for (var i = 0, l = parser.attribList.length; i < l; i++) {
	        var nv = parser.attribList[i]
	        var name = nv[0]
	        var value = nv[1]
	        var qualName = qname(name, true)
	        var prefix = qualName.prefix
	        var local = qualName.local
	        var uri = prefix === '' ? '' : (tag.ns[prefix] || '')
	        var a = {
	          name: name,
	          value: value,
	          prefix: prefix,
	          local: local,
	          uri: uri
	        }

	        // if there's any attributes with an undefined namespace,
	        // then fail on them now.
	        if (prefix && prefix !== 'xmlns' && !uri) {
	          strictFail(parser, 'Unbound namespace prefix: ' +
	            JSON.stringify(prefix))
	          a.uri = prefix
	        }
	        parser.tag.attributes[name] = a
	        emitNode(parser, 'onattribute', a)
	      }
	      parser.attribList.length = 0
	    }

	    parser.tag.isSelfClosing = !!selfClosing

	    // process the tag
	    parser.sawRoot = true
	    parser.tags.push(parser.tag)
	    emitNode(parser, 'onopentag', parser.tag)
	    if (!selfClosing) {
	      // special case for <script> in non-strict mode.
	      if (!parser.noscript && parser.tagName.toLowerCase() === 'script') {
	        parser.state = S.SCRIPT
	      } else {
	        parser.state = S.TEXT
	      }
	      parser.tag = null
	      parser.tagName = ''
	    }
	    parser.attribName = parser.attribValue = ''
	    parser.attribList.length = 0
	  }

	  function closeTag (parser) {
	    if (!parser.tagName) {
	      strictFail(parser, 'Weird empty close tag.')
	      parser.textNode += '</>'
	      parser.state = S.TEXT
	      return
	    }

	    if (parser.script) {
	      if (parser.tagName !== 'script') {
	        parser.script += '</' + parser.tagName + '>'
	        parser.tagName = ''
	        parser.state = S.SCRIPT
	        return
	      }
	      emitNode(parser, 'onscript', parser.script)
	      parser.script = ''
	    }

	    // first make sure that the closing tag actually exists.
	    // <a><b></c></b></a> will close everything, otherwise.
	    var t = parser.tags.length
	    var tagName = parser.tagName
	    if (!parser.strict) {
	      tagName = tagName[parser.looseCase]()
	    }
	    var closeTo = tagName
	    while (t--) {
	      var close = parser.tags[t]
	      if (close.name !== closeTo) {
	        // fail the first time in strict mode
	        strictFail(parser, 'Unexpected close tag')
	      } else {
	        break
	      }
	    }

	    // didn't find it.  we already failed for strict, so just abort.
	    if (t < 0) {
	      strictFail(parser, 'Unmatched closing tag: ' + parser.tagName)
	      parser.textNode += '</' + parser.tagName + '>'
	      parser.state = S.TEXT
	      return
	    }
	    parser.tagName = tagName
	    var s = parser.tags.length
	    while (s-- > t) {
	      var tag = parser.tag = parser.tags.pop()
	      parser.tagName = parser.tag.name
	      emitNode(parser, 'onclosetag', parser.tagName)

	      var x = {}
	      for (var i in tag.ns) {
	        x[i] = tag.ns[i]
	      }

	      var parent = parser.tags[parser.tags.length - 1] || parser
	      if (parser.opt.xmlns && tag.ns !== parent.ns) {
	        // remove namespace bindings introduced by tag
	        Object.keys(tag.ns).forEach(function (p) {
	          var n = tag.ns[p]
	          emitNode(parser, 'onclosenamespace', { prefix: p, uri: n })
	        })
	      }
	    }
	    if (t === 0) parser.closedRoot = true
	    parser.tagName = parser.attribValue = parser.attribName = ''
	    parser.attribList.length = 0
	    parser.state = S.TEXT
	  }

	  function parseEntity (parser) {
	    var entity = parser.entity
	    var entityLC = entity.toLowerCase()
	    var num
	    var numStr = ''

	    if (parser.ENTITIES[entity]) {
	      return parser.ENTITIES[entity]
	    }
	    if (parser.ENTITIES[entityLC]) {
	      return parser.ENTITIES[entityLC]
	    }
	    entity = entityLC
	    if (entity.charAt(0) === '#') {
	      if (entity.charAt(1) === 'x') {
	        entity = entity.slice(2)
	        num = parseInt(entity, 16)
	        numStr = num.toString(16)
	      } else {
	        entity = entity.slice(1)
	        num = parseInt(entity, 10)
	        numStr = num.toString(10)
	      }
	    }
	    entity = entity.replace(/^0+/, '')
	    if (numStr.toLowerCase() !== entity) {
	      strictFail(parser, 'Invalid character entity')
	      return '&' + parser.entity + ';'
	    }

	    return String.fromCodePoint(num)
	  }

	  function beginWhiteSpace (parser, c) {
	    if (c === '<') {
	      parser.state = S.OPEN_WAKA
	      parser.startTagPosition = parser.position
	    } else if (not(whitespace, c)) {
	      // have to process this as a text node.
	      // weird, but happens.
	      strictFail(parser, 'Non-whitespace before first tag.')
	      parser.textNode = c
	      parser.state = S.TEXT
	    }
	  }

	  function charAt (chunk, i) {
	    var result = ''
	    if (i < chunk.length) {
	      result = chunk.charAt(i)
	    }
	    return result
	  }

	  function write (chunk) {
	    var parser = this
	    if (this.error) {
	      throw this.error
	    }
	    if (parser.closed) {
	      return error(parser,
	        'Cannot write after close. Assign an onready handler.')
	    }
	    if (chunk === null) {
	      return end(parser)
	    }
	    if (typeof chunk === 'object') {
	      chunk = chunk.toString()
	    }
	    var i = 0
	    var c = ''
	    while (true) {
	      c = charAt(chunk, i++)
	      parser.c = c

	      if (!c) {
	        break
	      }

	      if (parser.trackPosition) {
	        parser.position++
	        if (c === '\n') {
	          parser.line++
	          parser.column = 0
	        } else {
	          parser.column++
	        }
	      }

	      switch (parser.state) {
	        case S.BEGIN:
	          parser.state = S.BEGIN_WHITESPACE
	          if (c === '\uFEFF') {
	            continue
	          }
	          beginWhiteSpace(parser, c)
	          continue

	        case S.BEGIN_WHITESPACE:
	          beginWhiteSpace(parser, c)
	          continue

	        case S.TEXT:
	          if (parser.sawRoot && !parser.closedRoot) {
	            var starti = i - 1
	            while (c && c !== '<' && c !== '&') {
	              c = charAt(chunk, i++)
	              if (c && parser.trackPosition) {
	                parser.position++
	                if (c === '\n') {
	                  parser.line++
	                  parser.column = 0
	                } else {
	                  parser.column++
	                }
	              }
	            }
	            parser.textNode += chunk.substring(starti, i - 1)
	          }
	          if (c === '<' && !(parser.sawRoot && parser.closedRoot && !parser.strict)) {
	            parser.state = S.OPEN_WAKA
	            parser.startTagPosition = parser.position
	          } else {
	            if (not(whitespace, c) && (!parser.sawRoot || parser.closedRoot)) {
	              strictFail(parser, 'Text data outside of root node.')
	            }
	            if (c === '&') {
	              parser.state = S.TEXT_ENTITY
	            } else {
	              parser.textNode += c
	            }
	          }
	          continue

	        case S.SCRIPT:
	          // only non-strict
	          if (c === '<') {
	            parser.state = S.SCRIPT_ENDING
	          } else {
	            parser.script += c
	          }
	          continue

	        case S.SCRIPT_ENDING:
	          if (c === '/') {
	            parser.state = S.CLOSE_TAG
	          } else {
	            parser.script += '<' + c
	            parser.state = S.SCRIPT
	          }
	          continue

	        case S.OPEN_WAKA:
	          // either a /, ?, !, or text is coming next.
	          if (c === '!') {
	            parser.state = S.SGML_DECL
	            parser.sgmlDecl = ''
	          } else if (is(whitespace, c)) {
	            // wait for it...
	          } else if (isMatch(nameStart, c)) {
	            parser.state = S.OPEN_TAG
	            parser.tagName = c
	          } else if (c === '/') {
	            parser.state = S.CLOSE_TAG
	            parser.tagName = ''
	          } else if (c === '?') {
	            parser.state = S.PROC_INST
	            parser.procInstName = parser.procInstBody = ''
	          } else {
	            strictFail(parser, 'Unencoded <')
	            // if there was some whitespace, then add that in.
	            if (parser.startTagPosition + 1 < parser.position) {
	              var pad = parser.position - parser.startTagPosition
	              c = new Array(pad).join(' ') + c
	            }
	            parser.textNode += '<' + c
	            parser.state = S.TEXT
	          }
	          continue

	        case S.SGML_DECL:
	          if ((parser.sgmlDecl + c).toUpperCase() === CDATA) {
	            emitNode(parser, 'onopencdata')
	            parser.state = S.CDATA
	            parser.sgmlDecl = ''
	            parser.cdata = ''
	          } else if (parser.sgmlDecl + c === '--') {
	            parser.state = S.COMMENT
	            parser.comment = ''
	            parser.sgmlDecl = ''
	          } else if ((parser.sgmlDecl + c).toUpperCase() === DOCTYPE) {
	            parser.state = S.DOCTYPE
	            if (parser.doctype || parser.sawRoot) {
	              strictFail(parser,
	                'Inappropriately located doctype declaration')
	            }
	            parser.doctype = ''
	            parser.sgmlDecl = ''
	          } else if (c === '>') {
	            emitNode(parser, 'onsgmldeclaration', parser.sgmlDecl)
	            parser.sgmlDecl = ''
	            parser.state = S.TEXT
	          } else if (is(quote, c)) {
	            parser.state = S.SGML_DECL_QUOTED
	            parser.sgmlDecl += c
	          } else {
	            parser.sgmlDecl += c
	          }
	          continue

	        case S.SGML_DECL_QUOTED:
	          if (c === parser.q) {
	            parser.state = S.SGML_DECL
	            parser.q = ''
	          }
	          parser.sgmlDecl += c
	          continue

	        case S.DOCTYPE:
	          if (c === '>') {
	            parser.state = S.TEXT
	            emitNode(parser, 'ondoctype', parser.doctype)
	            parser.doctype = true // just remember that we saw it.
	          } else {
	            parser.doctype += c
	            if (c === '[') {
	              parser.state = S.DOCTYPE_DTD
	            } else if (is(quote, c)) {
	              parser.state = S.DOCTYPE_QUOTED
	              parser.q = c
	            }
	          }
	          continue

	        case S.DOCTYPE_QUOTED:
	          parser.doctype += c
	          if (c === parser.q) {
	            parser.q = ''
	            parser.state = S.DOCTYPE
	          }
	          continue

	        case S.DOCTYPE_DTD:
	          parser.doctype += c
	          if (c === ']') {
	            parser.state = S.DOCTYPE
	          } else if (is(quote, c)) {
	            parser.state = S.DOCTYPE_DTD_QUOTED
	            parser.q = c
	          }
	          continue

	        case S.DOCTYPE_DTD_QUOTED:
	          parser.doctype += c
	          if (c === parser.q) {
	            parser.state = S.DOCTYPE_DTD
	            parser.q = ''
	          }
	          continue

	        case S.COMMENT:
	          if (c === '-') {
	            parser.state = S.COMMENT_ENDING
	          } else {
	            parser.comment += c
	          }
	          continue

	        case S.COMMENT_ENDING:
	          if (c === '-') {
	            parser.state = S.COMMENT_ENDED
	            parser.comment = textopts(parser.opt, parser.comment)
	            if (parser.comment) {
	              emitNode(parser, 'oncomment', parser.comment)
	            }
	            parser.comment = ''
	          } else {
	            parser.comment += '-' + c
	            parser.state = S.COMMENT
	          }
	          continue

	        case S.COMMENT_ENDED:
	          if (c !== '>') {
	            strictFail(parser, 'Malformed comment')
	            // allow <!-- blah -- bloo --> in non-strict mode,
	            // which is a comment of " blah -- bloo "
	            parser.comment += '--' + c
	            parser.state = S.COMMENT
	          } else {
	            parser.state = S.TEXT
	          }
	          continue

	        case S.CDATA:
	          if (c === ']') {
	            parser.state = S.CDATA_ENDING
	          } else {
	            parser.cdata += c
	          }
	          continue

	        case S.CDATA_ENDING:
	          if (c === ']') {
	            parser.state = S.CDATA_ENDING_2
	          } else {
	            parser.cdata += ']' + c
	            parser.state = S.CDATA
	          }
	          continue

	        case S.CDATA_ENDING_2:
	          if (c === '>') {
	            if (parser.cdata) {
	              emitNode(parser, 'oncdata', parser.cdata)
	            }
	            emitNode(parser, 'onclosecdata')
	            parser.cdata = ''
	            parser.state = S.TEXT
	          } else if (c === ']') {
	            parser.cdata += ']'
	          } else {
	            parser.cdata += ']]' + c
	            parser.state = S.CDATA
	          }
	          continue

	        case S.PROC_INST:
	          if (c === '?') {
	            parser.state = S.PROC_INST_ENDING
	          } else if (is(whitespace, c)) {
	            parser.state = S.PROC_INST_BODY
	          } else {
	            parser.procInstName += c
	          }
	          continue

	        case S.PROC_INST_BODY:
	          if (!parser.procInstBody && is(whitespace, c)) {
	            continue
	          } else if (c === '?') {
	            parser.state = S.PROC_INST_ENDING
	          } else {
	            parser.procInstBody += c
	          }
	          continue

	        case S.PROC_INST_ENDING:
	          if (c === '>') {
	            emitNode(parser, 'onprocessinginstruction', {
	              name: parser.procInstName,
	              body: parser.procInstBody
	            })
	            parser.procInstName = parser.procInstBody = ''
	            parser.state = S.TEXT
	          } else {
	            parser.procInstBody += '?' + c
	            parser.state = S.PROC_INST_BODY
	          }
	          continue

	        case S.OPEN_TAG:
	          if (isMatch(nameBody, c)) {
	            parser.tagName += c
	          } else {
	            newTag(parser)
	            if (c === '>') {
	              openTag(parser)
	            } else if (c === '/') {
	              parser.state = S.OPEN_TAG_SLASH
	            } else {
	              if (not(whitespace, c)) {
	                strictFail(parser, 'Invalid character in tag name')
	              }
	              parser.state = S.ATTRIB
	            }
	          }
	          continue

	        case S.OPEN_TAG_SLASH:
	          if (c === '>') {
	            openTag(parser, true)
	            closeTag(parser)
	          } else {
	            strictFail(parser, 'Forward-slash in opening tag not followed by >')
	            parser.state = S.ATTRIB
	          }
	          continue

	        case S.ATTRIB:
	          // haven't read the attribute name yet.
	          if (is(whitespace, c)) {
	            continue
	          } else if (c === '>') {
	            openTag(parser)
	          } else if (c === '/') {
	            parser.state = S.OPEN_TAG_SLASH
	          } else if (isMatch(nameStart, c)) {
	            parser.attribName = c
	            parser.attribValue = ''
	            parser.state = S.ATTRIB_NAME
	          } else {
	            strictFail(parser, 'Invalid attribute name')
	          }
	          continue

	        case S.ATTRIB_NAME:
	          if (c === '=') {
	            parser.state = S.ATTRIB_VALUE
	          } else if (c === '>') {
	            strictFail(parser, 'Attribute without value')
	            parser.attribValue = parser.attribName
	            attrib(parser)
	            openTag(parser)
	          } else if (is(whitespace, c)) {
	            parser.state = S.ATTRIB_NAME_SAW_WHITE
	          } else if (isMatch(nameBody, c)) {
	            parser.attribName += c
	          } else {
	            strictFail(parser, 'Invalid attribute name')
	          }
	          continue

	        case S.ATTRIB_NAME_SAW_WHITE:
	          if (c === '=') {
	            parser.state = S.ATTRIB_VALUE
	          } else if (is(whitespace, c)) {
	            continue
	          } else {
	            strictFail(parser, 'Attribute without value')
	            parser.tag.attributes[parser.attribName] = ''
	            parser.attribValue = ''
	            emitNode(parser, 'onattribute', {
	              name: parser.attribName,
	              value: ''
	            })
	            parser.attribName = ''
	            if (c === '>') {
	              openTag(parser)
	            } else if (isMatch(nameStart, c)) {
	              parser.attribName = c
	              parser.state = S.ATTRIB_NAME
	            } else {
	              strictFail(parser, 'Invalid attribute name')
	              parser.state = S.ATTRIB
	            }
	          }
	          continue

	        case S.ATTRIB_VALUE:
	          if (is(whitespace, c)) {
	            continue
	          } else if (is(quote, c)) {
	            parser.q = c
	            parser.state = S.ATTRIB_VALUE_QUOTED
	          } else {
	            strictFail(parser, 'Unquoted attribute value')
	            parser.state = S.ATTRIB_VALUE_UNQUOTED
	            parser.attribValue = c
	          }
	          continue

	        case S.ATTRIB_VALUE_QUOTED:
	          if (c !== parser.q) {
	            if (c === '&') {
	              parser.state = S.ATTRIB_VALUE_ENTITY_Q
	            } else {
	              parser.attribValue += c
	            }
	            continue
	          }
	          attrib(parser)
	          parser.q = ''
	          parser.state = S.ATTRIB_VALUE_CLOSED
	          continue

	        case S.ATTRIB_VALUE_CLOSED:
	          if (is(whitespace, c)) {
	            parser.state = S.ATTRIB
	          } else if (c === '>') {
	            openTag(parser)
	          } else if (c === '/') {
	            parser.state = S.OPEN_TAG_SLASH
	          } else if (isMatch(nameStart, c)) {
	            strictFail(parser, 'No whitespace between attributes')
	            parser.attribName = c
	            parser.attribValue = ''
	            parser.state = S.ATTRIB_NAME
	          } else {
	            strictFail(parser, 'Invalid attribute name')
	          }
	          continue

	        case S.ATTRIB_VALUE_UNQUOTED:
	          if (not(attribEnd, c)) {
	            if (c === '&') {
	              parser.state = S.ATTRIB_VALUE_ENTITY_U
	            } else {
	              parser.attribValue += c
	            }
	            continue
	          }
	          attrib(parser)
	          if (c === '>') {
	            openTag(parser)
	          } else {
	            parser.state = S.ATTRIB
	          }
	          continue

	        case S.CLOSE_TAG:
	          if (!parser.tagName) {
	            if (is(whitespace, c)) {
	              continue
	            } else if (notMatch(nameStart, c)) {
	              if (parser.script) {
	                parser.script += '</' + c
	                parser.state = S.SCRIPT
	              } else {
	                strictFail(parser, 'Invalid tagname in closing tag.')
	              }
	            } else {
	              parser.tagName = c
	            }
	          } else if (c === '>') {
	            closeTag(parser)
	          } else if (isMatch(nameBody, c)) {
	            parser.tagName += c
	          } else if (parser.script) {
	            parser.script += '</' + parser.tagName
	            parser.tagName = ''
	            parser.state = S.SCRIPT
	          } else {
	            if (not(whitespace, c)) {
	              strictFail(parser, 'Invalid tagname in closing tag')
	            }
	            parser.state = S.CLOSE_TAG_SAW_WHITE
	          }
	          continue

	        case S.CLOSE_TAG_SAW_WHITE:
	          if (is(whitespace, c)) {
	            continue
	          }
	          if (c === '>') {
	            closeTag(parser)
	          } else {
	            strictFail(parser, 'Invalid characters in closing tag')
	          }
	          continue

	        case S.TEXT_ENTITY:
	        case S.ATTRIB_VALUE_ENTITY_Q:
	        case S.ATTRIB_VALUE_ENTITY_U:
	          var returnState
	          var buffer
	          switch (parser.state) {
	            case S.TEXT_ENTITY:
	              returnState = S.TEXT
	              buffer = 'textNode'
	              break

	            case S.ATTRIB_VALUE_ENTITY_Q:
	              returnState = S.ATTRIB_VALUE_QUOTED
	              buffer = 'attribValue'
	              break

	            case S.ATTRIB_VALUE_ENTITY_U:
	              returnState = S.ATTRIB_VALUE_UNQUOTED
	              buffer = 'attribValue'
	              break
	          }

	          if (c === ';') {
	            parser[buffer] += parseEntity(parser)
	            parser.entity = ''
	            parser.state = returnState
	          } else if (isMatch(parser.entity.length ? entityBody : entityStart, c)) {
	            parser.entity += c
	          } else {
	            strictFail(parser, 'Invalid character in entity name')
	            parser[buffer] += '&' + parser.entity + c
	            parser.entity = ''
	            parser.state = returnState
	          }

	          continue

	        default:
	          throw new Error(parser, 'Unknown state: ' + parser.state)
	      }
	    } // while

	    if (parser.position >= parser.bufferCheckPosition) {
	      checkBufferLength(parser)
	    }
	    return parser
	  }

	  /*! http://mths.be/fromcodepoint v0.1.0 by @mathias */
	  /* istanbul ignore next */
	  if (!String.fromCodePoint) {
	    (function () {
	      var stringFromCharCode = String.fromCharCode
	      var floor = Math.floor
	      var fromCodePoint = function () {
	        var MAX_SIZE = 0x4000
	        var codeUnits = []
	        var highSurrogate
	        var lowSurrogate
	        var index = -1
	        var length = arguments.length
	        if (!length) {
	          return ''
	        }
	        var result = ''
	        while (++index < length) {
	          var codePoint = Number(arguments[index])
	          if (
	            !isFinite(codePoint) || // `NaN`, `+Infinity`, or `-Infinity`
	            codePoint < 0 || // not a valid Unicode code point
	            codePoint > 0x10FFFF || // not a valid Unicode code point
	            floor(codePoint) !== codePoint // not an integer
	          ) {
	            throw RangeError('Invalid code point: ' + codePoint)
	          }
	          if (codePoint <= 0xFFFF) { // BMP code point
	            codeUnits.push(codePoint)
	          } else { // Astral code point; split in surrogate halves
	            // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
	            codePoint -= 0x10000
	            highSurrogate = (codePoint >> 10) + 0xD800
	            lowSurrogate = (codePoint % 0x400) + 0xDC00
	            codeUnits.push(highSurrogate, lowSurrogate)
	          }
	          if (index + 1 === length || codeUnits.length > MAX_SIZE) {
	            result += stringFromCharCode.apply(null, codeUnits)
	            codeUnits.length = 0
	          }
	        }
	        return result
	      }
	      /* istanbul ignore next */
	      if (Object.defineProperty) {
	        Object.defineProperty(String, 'fromCodePoint', {
	          value: fromCodePoint,
	          configurable: true,
	          writable: true
	        })
	      } else {
	        String.fromCodePoint = fromCodePoint
	      }
	    }())
	  }
	})( false ? this.sax = {} : exports)


/***/ }),
/* 105 */
/***/ (function(module, exports) {

	module.exports = require("string_decoder");

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.9.1
	(function() {
	  var XMLBuilder, assign;

	  assign = __webpack_require__(107);

	  XMLBuilder = __webpack_require__(158);

	  module.exports.create = function(name, xmldec, doctype, options) {
	    options = assign({}, xmldec, doctype, options);
	    return new XMLBuilder(name, options).root();
	  };

	}).call(this);


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

	var assignValue = __webpack_require__(108),
	    copyObject = __webpack_require__(126),
	    createAssigner = __webpack_require__(127),
	    isArrayLike = __webpack_require__(137),
	    isPrototype = __webpack_require__(140),
	    keys = __webpack_require__(141);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Assigns own enumerable string keyed properties of source objects to the
	 * destination object. Source objects are applied from left to right.
	 * Subsequent sources overwrite property assignments of previous sources.
	 *
	 * **Note:** This method mutates `object` and is loosely based on
	 * [`Object.assign`](https://mdn.io/Object/assign).
	 *
	 * @static
	 * @memberOf _
	 * @since 0.10.0
	 * @category Object
	 * @param {Object} object The destination object.
	 * @param {...Object} [sources] The source objects.
	 * @returns {Object} Returns `object`.
	 * @see _.assignIn
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * function Bar() {
	 *   this.c = 3;
	 * }
	 *
	 * Foo.prototype.b = 2;
	 * Bar.prototype.d = 4;
	 *
	 * _.assign({ 'a': 0 }, new Foo, new Bar);
	 * // => { 'a': 1, 'c': 3 }
	 */
	var assign = createAssigner(function(object, source) {
	  if (isPrototype(source) || isArrayLike(source)) {
	    copyObject(source, keys(source), object);
	    return;
	  }
	  for (var key in source) {
	    if (hasOwnProperty.call(source, key)) {
	      assignValue(object, key, source[key]);
	    }
	  }
	});

	module.exports = assign;


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

	var baseAssignValue = __webpack_require__(109),
	    eq = __webpack_require__(125);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Assigns `value` to `key` of `object` if the existing value is not equivalent
	 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function assignValue(object, key, value) {
	  var objValue = object[key];
	  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
	      (value === undefined && !(key in object))) {
	    baseAssignValue(object, key, value);
	  }
	}

	module.exports = assignValue;


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

	var defineProperty = __webpack_require__(110);

	/**
	 * The base implementation of `assignValue` and `assignMergeValue` without
	 * value checks.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function baseAssignValue(object, key, value) {
	  if (key == '__proto__' && defineProperty) {
	    defineProperty(object, key, {
	      'configurable': true,
	      'enumerable': true,
	      'value': value,
	      'writable': true
	    });
	  } else {
	    object[key] = value;
	  }
	}

	module.exports = baseAssignValue;


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(111);

	var defineProperty = (function() {
	  try {
	    var func = getNative(Object, 'defineProperty');
	    func({}, '', {});
	    return func;
	  } catch (e) {}
	}());

	module.exports = defineProperty;


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

	var baseIsNative = __webpack_require__(112),
	    getValue = __webpack_require__(124);

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = getValue(object, key);
	  return baseIsNative(value) ? value : undefined;
	}

	module.exports = getNative;


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(113),
	    isMasked = __webpack_require__(121),
	    isObject = __webpack_require__(120),
	    toSource = __webpack_require__(123);

	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);

	/**
	 * The base implementation of `_.isNative` without bad shim checks.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 */
	function baseIsNative(value) {
	  if (!isObject(value) || isMasked(value)) {
	    return false;
	  }
	  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
	  return pattern.test(toSource(value));
	}

	module.exports = baseIsNative;


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(114),
	    isObject = __webpack_require__(120);

	/** `Object#toString` result references. */
	var asyncTag = '[object AsyncFunction]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    proxyTag = '[object Proxy]';

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  if (!isObject(value)) {
	    return false;
	  }
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 9 which returns 'object' for typed arrays and other constructors.
	  var tag = baseGetTag(value);
	  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
	}

	module.exports = isFunction;


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(115),
	    getRawTag = __webpack_require__(118),
	    objectToString = __webpack_require__(119);

	/** `Object#toString` result references. */
	var nullTag = '[object Null]',
	    undefinedTag = '[object Undefined]';

	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

	/**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  if (value == null) {
	    return value === undefined ? undefinedTag : nullTag;
	  }
	  return (symToStringTag && symToStringTag in Object(value))
	    ? getRawTag(value)
	    : objectToString(value);
	}

	module.exports = baseGetTag;


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

	var root = __webpack_require__(116);

	/** Built-in value references. */
	var Symbol = root.Symbol;

	module.exports = Symbol;


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

	var freeGlobal = __webpack_require__(117);

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();

	module.exports = root;


/***/ }),
/* 117 */
/***/ (function(module, exports) {

	/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

	module.exports = freeGlobal;


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(115);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;

	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

	/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */
	function getRawTag(value) {
	  var isOwn = hasOwnProperty.call(value, symToStringTag),
	      tag = value[symToStringTag];

	  try {
	    value[symToStringTag] = undefined;
	    var unmasked = true;
	  } catch (e) {}

	  var result = nativeObjectToString.call(value);
	  if (unmasked) {
	    if (isOwn) {
	      value[symToStringTag] = tag;
	    } else {
	      delete value[symToStringTag];
	    }
	  }
	  return result;
	}

	module.exports = getRawTag;


/***/ }),
/* 119 */
/***/ (function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;

	/**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */
	function objectToString(value) {
	  return nativeObjectToString.call(value);
	}

	module.exports = objectToString;


/***/ }),
/* 120 */
/***/ (function(module, exports) {

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return value != null && (type == 'object' || type == 'function');
	}

	module.exports = isObject;


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

	var coreJsData = __webpack_require__(122);

	/** Used to detect methods masquerading as native. */
	var maskSrcKey = (function() {
	  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
	  return uid ? ('Symbol(src)_1.' + uid) : '';
	}());

	/**
	 * Checks if `func` has its source masked.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	 */
	function isMasked(func) {
	  return !!maskSrcKey && (maskSrcKey in func);
	}

	module.exports = isMasked;


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

	var root = __webpack_require__(116);

	/** Used to detect overreaching core-js shims. */
	var coreJsData = root['__core-js_shared__'];

	module.exports = coreJsData;


/***/ }),
/* 123 */
/***/ (function(module, exports) {

	/** Used for built-in method references. */
	var funcProto = Function.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to convert.
	 * @returns {string} Returns the source code.
	 */
	function toSource(func) {
	  if (func != null) {
	    try {
	      return funcToString.call(func);
	    } catch (e) {}
	    try {
	      return (func + '');
	    } catch (e) {}
	  }
	  return '';
	}

	module.exports = toSource;


/***/ }),
/* 124 */
/***/ (function(module, exports) {

	/**
	 * Gets the value at `key` of `object`.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */
	function getValue(object, key) {
	  return object == null ? undefined : object[key];
	}

	module.exports = getValue;


/***/ }),
/* 125 */
/***/ (function(module, exports) {

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}

	module.exports = eq;


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

	var assignValue = __webpack_require__(108),
	    baseAssignValue = __webpack_require__(109);

	/**
	 * Copies properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy properties from.
	 * @param {Array} props The property identifiers to copy.
	 * @param {Object} [object={}] The object to copy properties to.
	 * @param {Function} [customizer] The function to customize copied values.
	 * @returns {Object} Returns `object`.
	 */
	function copyObject(source, props, object, customizer) {
	  var isNew = !object;
	  object || (object = {});

	  var index = -1,
	      length = props.length;

	  while (++index < length) {
	    var key = props[index];

	    var newValue = customizer
	      ? customizer(object[key], source[key], key, object, source)
	      : undefined;

	    if (newValue === undefined) {
	      newValue = source[key];
	    }
	    if (isNew) {
	      baseAssignValue(object, key, newValue);
	    } else {
	      assignValue(object, key, newValue);
	    }
	  }
	  return object;
	}

	module.exports = copyObject;


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

	var baseRest = __webpack_require__(128),
	    isIterateeCall = __webpack_require__(136);

	/**
	 * Creates a function like `_.assign`.
	 *
	 * @private
	 * @param {Function} assigner The function to assign values.
	 * @returns {Function} Returns the new assigner function.
	 */
	function createAssigner(assigner) {
	  return baseRest(function(object, sources) {
	    var index = -1,
	        length = sources.length,
	        customizer = length > 1 ? sources[length - 1] : undefined,
	        guard = length > 2 ? sources[2] : undefined;

	    customizer = (assigner.length > 3 && typeof customizer == 'function')
	      ? (length--, customizer)
	      : undefined;

	    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
	      customizer = length < 3 ? undefined : customizer;
	      length = 1;
	    }
	    object = Object(object);
	    while (++index < length) {
	      var source = sources[index];
	      if (source) {
	        assigner(object, source, index, customizer);
	      }
	    }
	    return object;
	  });
	}

	module.exports = createAssigner;


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

	var identity = __webpack_require__(129),
	    overRest = __webpack_require__(130),
	    setToString = __webpack_require__(132);

	/**
	 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @returns {Function} Returns the new function.
	 */
	function baseRest(func, start) {
	  return setToString(overRest(func, start, identity), func + '');
	}

	module.exports = baseRest;


/***/ }),
/* 129 */
/***/ (function(module, exports) {

	/**
	 * This method returns the first argument it receives.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 *
	 * console.log(_.identity(object) === object);
	 * // => true
	 */
	function identity(value) {
	  return value;
	}

	module.exports = identity;


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

	var apply = __webpack_require__(131);

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;

	/**
	 * A specialized version of `baseRest` which transforms the rest array.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @param {Function} transform The rest array transform.
	 * @returns {Function} Returns the new function.
	 */
	function overRest(func, start, transform) {
	  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
	  return function() {
	    var args = arguments,
	        index = -1,
	        length = nativeMax(args.length - start, 0),
	        array = Array(length);

	    while (++index < length) {
	      array[index] = args[start + index];
	    }
	    index = -1;
	    var otherArgs = Array(start + 1);
	    while (++index < start) {
	      otherArgs[index] = args[index];
	    }
	    otherArgs[start] = transform(array);
	    return apply(func, this, otherArgs);
	  };
	}

	module.exports = overRest;


/***/ }),
/* 131 */
/***/ (function(module, exports) {

	/**
	 * A faster alternative to `Function#apply`, this function invokes `func`
	 * with the `this` binding of `thisArg` and the arguments of `args`.
	 *
	 * @private
	 * @param {Function} func The function to invoke.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {Array} args The arguments to invoke `func` with.
	 * @returns {*} Returns the result of `func`.
	 */
	function apply(func, thisArg, args) {
	  switch (args.length) {
	    case 0: return func.call(thisArg);
	    case 1: return func.call(thisArg, args[0]);
	    case 2: return func.call(thisArg, args[0], args[1]);
	    case 3: return func.call(thisArg, args[0], args[1], args[2]);
	  }
	  return func.apply(thisArg, args);
	}

	module.exports = apply;


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

	var baseSetToString = __webpack_require__(133),
	    shortOut = __webpack_require__(135);

	/**
	 * Sets the `toString` method of `func` to return `string`.
	 *
	 * @private
	 * @param {Function} func The function to modify.
	 * @param {Function} string The `toString` result.
	 * @returns {Function} Returns `func`.
	 */
	var setToString = shortOut(baseSetToString);

	module.exports = setToString;


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

	var constant = __webpack_require__(134),
	    defineProperty = __webpack_require__(110),
	    identity = __webpack_require__(129);

	/**
	 * The base implementation of `setToString` without support for hot loop shorting.
	 *
	 * @private
	 * @param {Function} func The function to modify.
	 * @param {Function} string The `toString` result.
	 * @returns {Function} Returns `func`.
	 */
	var baseSetToString = !defineProperty ? identity : function(func, string) {
	  return defineProperty(func, 'toString', {
	    'configurable': true,
	    'enumerable': false,
	    'value': constant(string),
	    'writable': true
	  });
	};

	module.exports = baseSetToString;


/***/ }),
/* 134 */
/***/ (function(module, exports) {

	/**
	 * Creates a function that returns `value`.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Util
	 * @param {*} value The value to return from the new function.
	 * @returns {Function} Returns the new constant function.
	 * @example
	 *
	 * var objects = _.times(2, _.constant({ 'a': 1 }));
	 *
	 * console.log(objects);
	 * // => [{ 'a': 1 }, { 'a': 1 }]
	 *
	 * console.log(objects[0] === objects[1]);
	 * // => true
	 */
	function constant(value) {
	  return function() {
	    return value;
	  };
	}

	module.exports = constant;


/***/ }),
/* 135 */
/***/ (function(module, exports) {

	/** Used to detect hot functions by number of calls within a span of milliseconds. */
	var HOT_COUNT = 800,
	    HOT_SPAN = 16;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeNow = Date.now;

	/**
	 * Creates a function that'll short out and invoke `identity` instead
	 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
	 * milliseconds.
	 *
	 * @private
	 * @param {Function} func The function to restrict.
	 * @returns {Function} Returns the new shortable function.
	 */
	function shortOut(func) {
	  var count = 0,
	      lastCalled = 0;

	  return function() {
	    var stamp = nativeNow(),
	        remaining = HOT_SPAN - (stamp - lastCalled);

	    lastCalled = stamp;
	    if (remaining > 0) {
	      if (++count >= HOT_COUNT) {
	        return arguments[0];
	      }
	    } else {
	      count = 0;
	    }
	    return func.apply(undefined, arguments);
	  };
	}

	module.exports = shortOut;


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(125),
	    isArrayLike = __webpack_require__(137),
	    isIndex = __webpack_require__(139),
	    isObject = __webpack_require__(120);

	/**
	 * Checks if the given arguments are from an iteratee call.
	 *
	 * @private
	 * @param {*} value The potential iteratee value argument.
	 * @param {*} index The potential iteratee index or key argument.
	 * @param {*} object The potential iteratee object argument.
	 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
	 *  else `false`.
	 */
	function isIterateeCall(value, index, object) {
	  if (!isObject(object)) {
	    return false;
	  }
	  var type = typeof index;
	  if (type == 'number'
	        ? (isArrayLike(object) && isIndex(index, object.length))
	        : (type == 'string' && index in object)
	      ) {
	    return eq(object[index], value);
	  }
	  return false;
	}

	module.exports = isIterateeCall;


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(113),
	    isLength = __webpack_require__(138);

	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(value.length) && !isFunction(value);
	}

	module.exports = isArrayLike;


/***/ }),
/* 138 */
/***/ (function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	module.exports = isLength;


/***/ }),
/* 139 */
/***/ (function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;

	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return !!length &&
	    (typeof value == 'number' || reIsUint.test(value)) &&
	    (value > -1 && value % 1 == 0 && value < length);
	}

	module.exports = isIndex;


/***/ }),
/* 140 */
/***/ (function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

	  return value === proto;
	}

	module.exports = isPrototype;


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

	var arrayLikeKeys = __webpack_require__(142),
	    baseKeys = __webpack_require__(155),
	    isArrayLike = __webpack_require__(137);

	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	function keys(object) {
	  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
	}

	module.exports = keys;


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

	var baseTimes = __webpack_require__(143),
	    isArguments = __webpack_require__(144),
	    isArray = __webpack_require__(147),
	    isBuffer = __webpack_require__(148),
	    isIndex = __webpack_require__(139),
	    isTypedArray = __webpack_require__(151);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Creates an array of the enumerable property names of the array-like `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @param {boolean} inherited Specify returning inherited property names.
	 * @returns {Array} Returns the array of property names.
	 */
	function arrayLikeKeys(value, inherited) {
	  var isArr = isArray(value),
	      isArg = !isArr && isArguments(value),
	      isBuff = !isArr && !isArg && isBuffer(value),
	      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
	      skipIndexes = isArr || isArg || isBuff || isType,
	      result = skipIndexes ? baseTimes(value.length, String) : [],
	      length = result.length;

	  for (var key in value) {
	    if ((inherited || hasOwnProperty.call(value, key)) &&
	        !(skipIndexes && (
	           // Safari 9 has enumerable `arguments.length` in strict mode.
	           key == 'length' ||
	           // Node.js 0.10 has enumerable non-index properties on buffers.
	           (isBuff && (key == 'offset' || key == 'parent')) ||
	           // PhantomJS 2 has enumerable non-index properties on typed arrays.
	           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
	           // Skip index properties.
	           isIndex(key, length)
	        ))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = arrayLikeKeys;


/***/ }),
/* 143 */
/***/ (function(module, exports) {

	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);

	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}

	module.exports = baseTimes;


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

	var baseIsArguments = __webpack_require__(145),
	    isObjectLike = __webpack_require__(146);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;

	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
	  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
	    !propertyIsEnumerable.call(value, 'callee');
	};

	module.exports = isArguments;


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(114),
	    isObjectLike = __webpack_require__(146);

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]';

	/**
	 * The base implementation of `_.isArguments`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 */
	function baseIsArguments(value) {
	  return isObjectLike(value) && baseGetTag(value) == argsTag;
	}

	module.exports = baseIsArguments;


/***/ }),
/* 146 */
/***/ (function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return value != null && typeof value == 'object';
	}

	module.exports = isObjectLike;


/***/ }),
/* 147 */
/***/ (function(module, exports) {

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;

	module.exports = isArray;


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(116),
	    stubFalse = __webpack_require__(150);

	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Built-in value references. */
	var Buffer = moduleExports ? root.Buffer : undefined;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

	/**
	 * Checks if `value` is a buffer.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
	 * @example
	 *
	 * _.isBuffer(new Buffer(2));
	 * // => true
	 *
	 * _.isBuffer(new Uint8Array(2));
	 * // => false
	 */
	var isBuffer = nativeIsBuffer || stubFalse;

	module.exports = isBuffer;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(149)(module)))

/***/ }),
/* 149 */
/***/ (function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ }),
/* 150 */
/***/ (function(module, exports) {

	/**
	 * This method returns `false`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {boolean} Returns `false`.
	 * @example
	 *
	 * _.times(2, _.stubFalse);
	 * // => [false, false]
	 */
	function stubFalse() {
	  return false;
	}

	module.exports = stubFalse;


/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

	var baseIsTypedArray = __webpack_require__(152),
	    baseUnary = __webpack_require__(153),
	    nodeUtil = __webpack_require__(154);

	/* Node.js helper references. */
	var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

	module.exports = isTypedArray;


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(114),
	    isLength = __webpack_require__(138),
	    isObjectLike = __webpack_require__(146);

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    weakMapTag = '[object WeakMap]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';

	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
	typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
	typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
	typedArrayTags[errorTag] = typedArrayTags[funcTag] =
	typedArrayTags[mapTag] = typedArrayTags[numberTag] =
	typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
	typedArrayTags[setTag] = typedArrayTags[stringTag] =
	typedArrayTags[weakMapTag] = false;

	/**
	 * The base implementation of `_.isTypedArray` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 */
	function baseIsTypedArray(value) {
	  return isObjectLike(value) &&
	    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
	}

	module.exports = baseIsTypedArray;


/***/ }),
/* 153 */
/***/ (function(module, exports) {

	/**
	 * The base implementation of `_.unary` without support for storing metadata.
	 *
	 * @private
	 * @param {Function} func The function to cap arguments for.
	 * @returns {Function} Returns the new capped function.
	 */
	function baseUnary(func) {
	  return function(value) {
	    return func(value);
	  };
	}

	module.exports = baseUnary;


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(117);

	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Detect free variable `process` from Node.js. */
	var freeProcess = moduleExports && freeGlobal.process;

	/** Used to access faster Node.js helpers. */
	var nodeUtil = (function() {
	  try {
	    return freeProcess && freeProcess.binding && freeProcess.binding('util');
	  } catch (e) {}
	}());

	module.exports = nodeUtil;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(149)(module)))

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

	var isPrototype = __webpack_require__(140),
	    nativeKeys = __webpack_require__(156);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeys(object) {
	  if (!isPrototype(object)) {
	    return nativeKeys(object);
	  }
	  var result = [];
	  for (var key in Object(object)) {
	    if (hasOwnProperty.call(object, key) && key != 'constructor') {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = baseKeys;


/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(157);

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeKeys = overArg(Object.keys, Object);

	module.exports = nativeKeys;


/***/ }),
/* 157 */
/***/ (function(module, exports) {

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}

	module.exports = overArg;


/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.9.1
	(function() {
	  var XMLBuilder, XMLDeclaration, XMLDocType, XMLElement, XMLStringifier;

	  XMLStringifier = __webpack_require__(159);

	  XMLDeclaration = __webpack_require__(160);

	  XMLDocType = __webpack_require__(257);

	  XMLElement = __webpack_require__(172);

	  module.exports = XMLBuilder = (function() {
	    function XMLBuilder(name, options) {
	      var root, temp;
	      if (name == null) {
	        throw new Error("Root element needs a name");
	      }
	      if (options == null) {
	        options = {};
	      }
	      this.options = options;
	      this.stringify = new XMLStringifier(options);
	      temp = new XMLElement(this, 'doc');
	      root = temp.element(name);
	      root.isRoot = true;
	      root.documentObject = this;
	      this.rootObject = root;
	      if (!options.headless) {
	        root.declaration(options);
	        if ((options.pubID != null) || (options.sysID != null)) {
	          root.doctype(options);
	        }
	      }
	    }

	    XMLBuilder.prototype.root = function() {
	      return this.rootObject;
	    };

	    XMLBuilder.prototype.end = function(options) {
	      return this.toString(options);
	    };

	    XMLBuilder.prototype.toString = function(options) {
	      var indent, newline, offset, pretty, r, ref, ref1, ref2;
	      pretty = (options != null ? options.pretty : void 0) || false;
	      indent = (ref = options != null ? options.indent : void 0) != null ? ref : '  ';
	      offset = (ref1 = options != null ? options.offset : void 0) != null ? ref1 : 0;
	      newline = (ref2 = options != null ? options.newline : void 0) != null ? ref2 : '\n';
	      r = '';
	      if (this.xmldec != null) {
	        r += this.xmldec.toString(options);
	      }
	      if (this.doctype != null) {
	        r += this.doctype.toString(options);
	      }
	      r += this.rootObject.toString(options);
	      if (pretty && r.slice(-newline.length) === newline) {
	        r = r.slice(0, -newline.length);
	      }
	      return r;
	    };

	    return XMLBuilder;

	  })();

	}).call(this);


/***/ }),
/* 159 */
/***/ (function(module, exports) {

	// Generated by CoffeeScript 1.9.1
	(function() {
	  var XMLStringifier,
	    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
	    hasProp = {}.hasOwnProperty;

	  module.exports = XMLStringifier = (function() {
	    function XMLStringifier(options) {
	      this.assertLegalChar = bind(this.assertLegalChar, this);
	      var key, ref, value;
	      this.allowSurrogateChars = options != null ? options.allowSurrogateChars : void 0;
	      this.noDoubleEncoding = options != null ? options.noDoubleEncoding : void 0;
	      ref = (options != null ? options.stringify : void 0) || {};
	      for (key in ref) {
	        if (!hasProp.call(ref, key)) continue;
	        value = ref[key];
	        this[key] = value;
	      }
	    }

	    XMLStringifier.prototype.eleName = function(val) {
	      val = '' + val || '';
	      return this.assertLegalChar(val);
	    };

	    XMLStringifier.prototype.eleText = function(val) {
	      val = '' + val || '';
	      return this.assertLegalChar(this.elEscape(val));
	    };

	    XMLStringifier.prototype.cdata = function(val) {
	      val = '' + val || '';
	      if (val.match(/]]>/)) {
	        throw new Error("Invalid CDATA text: " + val);
	      }
	      return this.assertLegalChar(val);
	    };

	    XMLStringifier.prototype.comment = function(val) {
	      val = '' + val || '';
	      if (val.match(/--/)) {
	        throw new Error("Comment text cannot contain double-hypen: " + val);
	      }
	      return this.assertLegalChar(val);
	    };

	    XMLStringifier.prototype.raw = function(val) {
	      return '' + val || '';
	    };

	    XMLStringifier.prototype.attName = function(val) {
	      return '' + val || '';
	    };

	    XMLStringifier.prototype.attValue = function(val) {
	      val = '' + val || '';
	      return this.attEscape(val);
	    };

	    XMLStringifier.prototype.insTarget = function(val) {
	      return '' + val || '';
	    };

	    XMLStringifier.prototype.insValue = function(val) {
	      val = '' + val || '';
	      if (val.match(/\?>/)) {
	        throw new Error("Invalid processing instruction value: " + val);
	      }
	      return val;
	    };

	    XMLStringifier.prototype.xmlVersion = function(val) {
	      val = '' + val || '';
	      if (!val.match(/1\.[0-9]+/)) {
	        throw new Error("Invalid version number: " + val);
	      }
	      return val;
	    };

	    XMLStringifier.prototype.xmlEncoding = function(val) {
	      val = '' + val || '';
	      if (!val.match(/^[A-Za-z](?:[A-Za-z0-9._-]|-)*$/)) {
	        throw new Error("Invalid encoding: " + val);
	      }
	      return val;
	    };

	    XMLStringifier.prototype.xmlStandalone = function(val) {
	      if (val) {
	        return "yes";
	      } else {
	        return "no";
	      }
	    };

	    XMLStringifier.prototype.dtdPubID = function(val) {
	      return '' + val || '';
	    };

	    XMLStringifier.prototype.dtdSysID = function(val) {
	      return '' + val || '';
	    };

	    XMLStringifier.prototype.dtdElementValue = function(val) {
	      return '' + val || '';
	    };

	    XMLStringifier.prototype.dtdAttType = function(val) {
	      return '' + val || '';
	    };

	    XMLStringifier.prototype.dtdAttDefault = function(val) {
	      if (val != null) {
	        return '' + val || '';
	      } else {
	        return val;
	      }
	    };

	    XMLStringifier.prototype.dtdEntityValue = function(val) {
	      return '' + val || '';
	    };

	    XMLStringifier.prototype.dtdNData = function(val) {
	      return '' + val || '';
	    };

	    XMLStringifier.prototype.convertAttKey = '@';

	    XMLStringifier.prototype.convertPIKey = '?';

	    XMLStringifier.prototype.convertTextKey = '#text';

	    XMLStringifier.prototype.convertCDataKey = '#cdata';

	    XMLStringifier.prototype.convertCommentKey = '#comment';

	    XMLStringifier.prototype.convertRawKey = '#raw';

	    XMLStringifier.prototype.assertLegalChar = function(str) {
	      var chars, chr;
	      if (this.allowSurrogateChars) {
	        chars = /[\u0000-\u0008\u000B-\u000C\u000E-\u001F\uFFFE-\uFFFF]/;
	      } else {
	        chars = /[\u0000-\u0008\u000B-\u000C\u000E-\u001F\uD800-\uDFFF\uFFFE-\uFFFF]/;
	      }
	      chr = str.match(chars);
	      if (chr) {
	        throw new Error("Invalid character (" + chr + ") in string: " + str + " at index " + chr.index);
	      }
	      return str;
	    };

	    XMLStringifier.prototype.elEscape = function(str) {
	      var ampregex;
	      ampregex = this.noDoubleEncoding ? /(?!&\S+;)&/g : /&/g;
	      return str.replace(ampregex, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\r/g, '&#xD;');
	    };

	    XMLStringifier.prototype.attEscape = function(str) {
	      var ampregex;
	      ampregex = this.noDoubleEncoding ? /(?!&\S+;)&/g : /&/g;
	      return str.replace(ampregex, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
	    };

	    return XMLStringifier;

	  })();

	}).call(this);


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.9.1
	(function() {
	  var XMLDeclaration, XMLNode, create, isObject,
	    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	    hasProp = {}.hasOwnProperty;

	  create = __webpack_require__(161);

	  isObject = __webpack_require__(120);

	  XMLNode = __webpack_require__(164);

	  module.exports = XMLDeclaration = (function(superClass) {
	    extend(XMLDeclaration, superClass);

	    function XMLDeclaration(parent, version, encoding, standalone) {
	      var ref;
	      XMLDeclaration.__super__.constructor.call(this, parent);
	      if (isObject(version)) {
	        ref = version, version = ref.version, encoding = ref.encoding, standalone = ref.standalone;
	      }
	      if (!version) {
	        version = '1.0';
	      }
	      this.version = this.stringify.xmlVersion(version);
	      if (encoding != null) {
	        this.encoding = this.stringify.xmlEncoding(encoding);
	      }
	      if (standalone != null) {
	        this.standalone = this.stringify.xmlStandalone(standalone);
	      }
	    }

	    XMLDeclaration.prototype.toString = function(options, level) {
	      var indent, newline, offset, pretty, r, ref, ref1, ref2, space;
	      pretty = (options != null ? options.pretty : void 0) || false;
	      indent = (ref = options != null ? options.indent : void 0) != null ? ref : '  ';
	      offset = (ref1 = options != null ? options.offset : void 0) != null ? ref1 : 0;
	      newline = (ref2 = options != null ? options.newline : void 0) != null ? ref2 : '\n';
	      level || (level = 0);
	      space = new Array(level + offset + 1).join(indent);
	      r = '';
	      if (pretty) {
	        r += space;
	      }
	      r += '<?xml';
	      r += ' version="' + this.version + '"';
	      if (this.encoding != null) {
	        r += ' encoding="' + this.encoding + '"';
	      }
	      if (this.standalone != null) {
	        r += ' standalone="' + this.standalone + '"';
	      }
	      r += '?>';
	      if (pretty) {
	        r += newline;
	      }
	      return r;
	    };

	    return XMLDeclaration;

	  })(XMLNode);

	}).call(this);


/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

	var baseAssign = __webpack_require__(162),
	    baseCreate = __webpack_require__(163);

	/**
	 * Creates an object that inherits from the `prototype` object. If a
	 * `properties` object is given, its own enumerable string keyed properties
	 * are assigned to the created object.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.3.0
	 * @category Object
	 * @param {Object} prototype The object to inherit from.
	 * @param {Object} [properties] The properties to assign to the object.
	 * @returns {Object} Returns the new object.
	 * @example
	 *
	 * function Shape() {
	 *   this.x = 0;
	 *   this.y = 0;
	 * }
	 *
	 * function Circle() {
	 *   Shape.call(this);
	 * }
	 *
	 * Circle.prototype = _.create(Shape.prototype, {
	 *   'constructor': Circle
	 * });
	 *
	 * var circle = new Circle;
	 * circle instanceof Circle;
	 * // => true
	 *
	 * circle instanceof Shape;
	 * // => true
	 */
	function create(prototype, properties) {
	  var result = baseCreate(prototype);
	  return properties == null ? result : baseAssign(result, properties);
	}

	module.exports = create;


/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

	var copyObject = __webpack_require__(126),
	    keys = __webpack_require__(141);

	/**
	 * The base implementation of `_.assign` without support for multiple sources
	 * or `customizer` functions.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @returns {Object} Returns `object`.
	 */
	function baseAssign(object, source) {
	  return object && copyObject(source, keys(source), object);
	}

	module.exports = baseAssign;


/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(120);

	/** Built-in value references. */
	var objectCreate = Object.create;

	/**
	 * The base implementation of `_.create` without support for assigning
	 * properties to the created object.
	 *
	 * @private
	 * @param {Object} proto The object to inherit from.
	 * @returns {Object} Returns the new object.
	 */
	var baseCreate = (function() {
	  function object() {}
	  return function(proto) {
	    if (!isObject(proto)) {
	      return {};
	    }
	    if (objectCreate) {
	      return objectCreate(proto);
	    }
	    object.prototype = proto;
	    var result = new object;
	    object.prototype = undefined;
	    return result;
	  };
	}());

	module.exports = baseCreate;


/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.9.1
	(function() {
	  var XMLCData, XMLComment, XMLDeclaration, XMLDocType, XMLElement, XMLNode, XMLRaw, XMLText, isEmpty, isFunction, isObject,
	    hasProp = {}.hasOwnProperty;

	  isObject = __webpack_require__(120);

	  isFunction = __webpack_require__(113);

	  isEmpty = __webpack_require__(165);

	  XMLElement = null;

	  XMLCData = null;

	  XMLComment = null;

	  XMLDeclaration = null;

	  XMLDocType = null;

	  XMLRaw = null;

	  XMLText = null;

	  module.exports = XMLNode = (function() {
	    function XMLNode(parent) {
	      this.parent = parent;
	      this.options = this.parent.options;
	      this.stringify = this.parent.stringify;
	      if (XMLElement === null) {
	        XMLElement = __webpack_require__(172);
	        XMLCData = __webpack_require__(255);
	        XMLComment = __webpack_require__(256);
	        XMLDeclaration = __webpack_require__(160);
	        XMLDocType = __webpack_require__(257);
	        XMLRaw = __webpack_require__(262);
	        XMLText = __webpack_require__(263);
	      }
	    }

	    XMLNode.prototype.element = function(name, attributes, text) {
	      var childNode, item, j, k, key, lastChild, len, len1, ref, val;
	      lastChild = null;
	      if (attributes == null) {
	        attributes = {};
	      }
	      attributes = attributes.valueOf();
	      if (!isObject(attributes)) {
	        ref = [attributes, text], text = ref[0], attributes = ref[1];
	      }
	      if (name != null) {
	        name = name.valueOf();
	      }
	      if (Array.isArray(name)) {
	        for (j = 0, len = name.length; j < len; j++) {
	          item = name[j];
	          lastChild = this.element(item);
	        }
	      } else if (isFunction(name)) {
	        lastChild = this.element(name.apply());
	      } else if (isObject(name)) {
	        for (key in name) {
	          if (!hasProp.call(name, key)) continue;
	          val = name[key];
	          if (isFunction(val)) {
	            val = val.apply();
	          }
	          if ((isObject(val)) && (isEmpty(val))) {
	            val = null;
	          }
	          if (!this.options.ignoreDecorators && this.stringify.convertAttKey && key.indexOf(this.stringify.convertAttKey) === 0) {
	            lastChild = this.attribute(key.substr(this.stringify.convertAttKey.length), val);
	          } else if (!this.options.ignoreDecorators && this.stringify.convertPIKey && key.indexOf(this.stringify.convertPIKey) === 0) {
	            lastChild = this.instruction(key.substr(this.stringify.convertPIKey.length), val);
	          } else if (!this.options.separateArrayItems && Array.isArray(val)) {
	            for (k = 0, len1 = val.length; k < len1; k++) {
	              item = val[k];
	              childNode = {};
	              childNode[key] = item;
	              lastChild = this.element(childNode);
	            }
	          } else if (isObject(val)) {
	            lastChild = this.element(key);
	            lastChild.element(val);
	          } else {
	            lastChild = this.element(key, val);
	          }
	        }
	      } else {
	        if (!this.options.ignoreDecorators && this.stringify.convertTextKey && name.indexOf(this.stringify.convertTextKey) === 0) {
	          lastChild = this.text(text);
	        } else if (!this.options.ignoreDecorators && this.stringify.convertCDataKey && name.indexOf(this.stringify.convertCDataKey) === 0) {
	          lastChild = this.cdata(text);
	        } else if (!this.options.ignoreDecorators && this.stringify.convertCommentKey && name.indexOf(this.stringify.convertCommentKey) === 0) {
	          lastChild = this.comment(text);
	        } else if (!this.options.ignoreDecorators && this.stringify.convertRawKey && name.indexOf(this.stringify.convertRawKey) === 0) {
	          lastChild = this.raw(text);
	        } else {
	          lastChild = this.node(name, attributes, text);
	        }
	      }
	      if (lastChild == null) {
	        throw new Error("Could not create any elements with: " + name);
	      }
	      return lastChild;
	    };

	    XMLNode.prototype.insertBefore = function(name, attributes, text) {
	      var child, i, removed;
	      if (this.isRoot) {
	        throw new Error("Cannot insert elements at root level");
	      }
	      i = this.parent.children.indexOf(this);
	      removed = this.parent.children.splice(i);
	      child = this.parent.element(name, attributes, text);
	      Array.prototype.push.apply(this.parent.children, removed);
	      return child;
	    };

	    XMLNode.prototype.insertAfter = function(name, attributes, text) {
	      var child, i, removed;
	      if (this.isRoot) {
	        throw new Error("Cannot insert elements at root level");
	      }
	      i = this.parent.children.indexOf(this);
	      removed = this.parent.children.splice(i + 1);
	      child = this.parent.element(name, attributes, text);
	      Array.prototype.push.apply(this.parent.children, removed);
	      return child;
	    };

	    XMLNode.prototype.remove = function() {
	      var i, ref;
	      if (this.isRoot) {
	        throw new Error("Cannot remove the root element");
	      }
	      i = this.parent.children.indexOf(this);
	      [].splice.apply(this.parent.children, [i, i - i + 1].concat(ref = [])), ref;
	      return this.parent;
	    };

	    XMLNode.prototype.node = function(name, attributes, text) {
	      var child, ref;
	      if (name != null) {
	        name = name.valueOf();
	      }
	      if (attributes == null) {
	        attributes = {};
	      }
	      attributes = attributes.valueOf();
	      if (!isObject(attributes)) {
	        ref = [attributes, text], text = ref[0], attributes = ref[1];
	      }
	      child = new XMLElement(this, name, attributes);
	      if (text != null) {
	        child.text(text);
	      }
	      this.children.push(child);
	      return child;
	    };

	    XMLNode.prototype.text = function(value) {
	      var child;
	      child = new XMLText(this, value);
	      this.children.push(child);
	      return this;
	    };

	    XMLNode.prototype.cdata = function(value) {
	      var child;
	      child = new XMLCData(this, value);
	      this.children.push(child);
	      return this;
	    };

	    XMLNode.prototype.comment = function(value) {
	      var child;
	      child = new XMLComment(this, value);
	      this.children.push(child);
	      return this;
	    };

	    XMLNode.prototype.raw = function(value) {
	      var child;
	      child = new XMLRaw(this, value);
	      this.children.push(child);
	      return this;
	    };

	    XMLNode.prototype.declaration = function(version, encoding, standalone) {
	      var doc, xmldec;
	      doc = this.document();
	      xmldec = new XMLDeclaration(doc, version, encoding, standalone);
	      doc.xmldec = xmldec;
	      return doc.root();
	    };

	    XMLNode.prototype.doctype = function(pubID, sysID) {
	      var doc, doctype;
	      doc = this.document();
	      doctype = new XMLDocType(doc, pubID, sysID);
	      doc.doctype = doctype;
	      return doctype;
	    };

	    XMLNode.prototype.up = function() {
	      if (this.isRoot) {
	        throw new Error("The root node has no parent. Use doc() if you need to get the document object.");
	      }
	      return this.parent;
	    };

	    XMLNode.prototype.root = function() {
	      var child;
	      if (this.isRoot) {
	        return this;
	      }
	      child = this.parent;
	      while (!child.isRoot) {
	        child = child.parent;
	      }
	      return child;
	    };

	    XMLNode.prototype.document = function() {
	      return this.root().documentObject;
	    };

	    XMLNode.prototype.end = function(options) {
	      return this.document().toString(options);
	    };

	    XMLNode.prototype.prev = function() {
	      var i;
	      if (this.isRoot) {
	        throw new Error("Root node has no siblings");
	      }
	      i = this.parent.children.indexOf(this);
	      if (i < 1) {
	        throw new Error("Already at the first node");
	      }
	      return this.parent.children[i - 1];
	    };

	    XMLNode.prototype.next = function() {
	      var i;
	      if (this.isRoot) {
	        throw new Error("Root node has no siblings");
	      }
	      i = this.parent.children.indexOf(this);
	      if (i === -1 || i === this.parent.children.length - 1) {
	        throw new Error("Already at the last node");
	      }
	      return this.parent.children[i + 1];
	    };

	    XMLNode.prototype.importXMLBuilder = function(xmlbuilder) {
	      var clonedRoot;
	      clonedRoot = xmlbuilder.root().clone();
	      clonedRoot.parent = this;
	      clonedRoot.isRoot = false;
	      this.children.push(clonedRoot);
	      return this;
	    };

	    XMLNode.prototype.ele = function(name, attributes, text) {
	      return this.element(name, attributes, text);
	    };

	    XMLNode.prototype.nod = function(name, attributes, text) {
	      return this.node(name, attributes, text);
	    };

	    XMLNode.prototype.txt = function(value) {
	      return this.text(value);
	    };

	    XMLNode.prototype.dat = function(value) {
	      return this.cdata(value);
	    };

	    XMLNode.prototype.com = function(value) {
	      return this.comment(value);
	    };

	    XMLNode.prototype.doc = function() {
	      return this.document();
	    };

	    XMLNode.prototype.dec = function(version, encoding, standalone) {
	      return this.declaration(version, encoding, standalone);
	    };

	    XMLNode.prototype.dtd = function(pubID, sysID) {
	      return this.doctype(pubID, sysID);
	    };

	    XMLNode.prototype.e = function(name, attributes, text) {
	      return this.element(name, attributes, text);
	    };

	    XMLNode.prototype.n = function(name, attributes, text) {
	      return this.node(name, attributes, text);
	    };

	    XMLNode.prototype.t = function(value) {
	      return this.text(value);
	    };

	    XMLNode.prototype.d = function(value) {
	      return this.cdata(value);
	    };

	    XMLNode.prototype.c = function(value) {
	      return this.comment(value);
	    };

	    XMLNode.prototype.r = function(value) {
	      return this.raw(value);
	    };

	    XMLNode.prototype.u = function() {
	      return this.up();
	    };

	    return XMLNode;

	  })();

	}).call(this);


/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

	var baseKeys = __webpack_require__(155),
	    getTag = __webpack_require__(166),
	    isArguments = __webpack_require__(144),
	    isArray = __webpack_require__(147),
	    isArrayLike = __webpack_require__(137),
	    isBuffer = __webpack_require__(148),
	    isPrototype = __webpack_require__(140),
	    isTypedArray = __webpack_require__(151);

	/** `Object#toString` result references. */
	var mapTag = '[object Map]',
	    setTag = '[object Set]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Checks if `value` is an empty object, collection, map, or set.
	 *
	 * Objects are considered empty if they have no own enumerable string keyed
	 * properties.
	 *
	 * Array-like values such as `arguments` objects, arrays, buffers, strings, or
	 * jQuery-like collections are considered empty if they have a `length` of `0`.
	 * Similarly, maps and sets are considered empty if they have a `size` of `0`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
	 * @example
	 *
	 * _.isEmpty(null);
	 * // => true
	 *
	 * _.isEmpty(true);
	 * // => true
	 *
	 * _.isEmpty(1);
	 * // => true
	 *
	 * _.isEmpty([1, 2, 3]);
	 * // => false
	 *
	 * _.isEmpty({ 'a': 1 });
	 * // => false
	 */
	function isEmpty(value) {
	  if (value == null) {
	    return true;
	  }
	  if (isArrayLike(value) &&
	      (isArray(value) || typeof value == 'string' || typeof value.splice == 'function' ||
	        isBuffer(value) || isTypedArray(value) || isArguments(value))) {
	    return !value.length;
	  }
	  var tag = getTag(value);
	  if (tag == mapTag || tag == setTag) {
	    return !value.size;
	  }
	  if (isPrototype(value)) {
	    return !baseKeys(value).length;
	  }
	  for (var key in value) {
	    if (hasOwnProperty.call(value, key)) {
	      return false;
	    }
	  }
	  return true;
	}

	module.exports = isEmpty;


/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

	var DataView = __webpack_require__(167),
	    Map = __webpack_require__(168),
	    Promise = __webpack_require__(169),
	    Set = __webpack_require__(170),
	    WeakMap = __webpack_require__(171),
	    baseGetTag = __webpack_require__(114),
	    toSource = __webpack_require__(123);

	/** `Object#toString` result references. */
	var mapTag = '[object Map]',
	    objectTag = '[object Object]',
	    promiseTag = '[object Promise]',
	    setTag = '[object Set]',
	    weakMapTag = '[object WeakMap]';

	var dataViewTag = '[object DataView]';

	/** Used to detect maps, sets, and weakmaps. */
	var dataViewCtorString = toSource(DataView),
	    mapCtorString = toSource(Map),
	    promiseCtorString = toSource(Promise),
	    setCtorString = toSource(Set),
	    weakMapCtorString = toSource(WeakMap);

	/**
	 * Gets the `toStringTag` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	var getTag = baseGetTag;

	// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
	if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
	    (Map && getTag(new Map) != mapTag) ||
	    (Promise && getTag(Promise.resolve()) != promiseTag) ||
	    (Set && getTag(new Set) != setTag) ||
	    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
	  getTag = function(value) {
	    var result = baseGetTag(value),
	        Ctor = result == objectTag ? value.constructor : undefined,
	        ctorString = Ctor ? toSource(Ctor) : '';

	    if (ctorString) {
	      switch (ctorString) {
	        case dataViewCtorString: return dataViewTag;
	        case mapCtorString: return mapTag;
	        case promiseCtorString: return promiseTag;
	        case setCtorString: return setTag;
	        case weakMapCtorString: return weakMapTag;
	      }
	    }
	    return result;
	  };
	}

	module.exports = getTag;


/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(111),
	    root = __webpack_require__(116);

	/* Built-in method references that are verified to be native. */
	var DataView = getNative(root, 'DataView');

	module.exports = DataView;


/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(111),
	    root = __webpack_require__(116);

	/* Built-in method references that are verified to be native. */
	var Map = getNative(root, 'Map');

	module.exports = Map;


/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(111),
	    root = __webpack_require__(116);

	/* Built-in method references that are verified to be native. */
	var Promise = getNative(root, 'Promise');

	module.exports = Promise;


/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(111),
	    root = __webpack_require__(116);

	/* Built-in method references that are verified to be native. */
	var Set = getNative(root, 'Set');

	module.exports = Set;


/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(111),
	    root = __webpack_require__(116);

	/* Built-in method references that are verified to be native. */
	var WeakMap = getNative(root, 'WeakMap');

	module.exports = WeakMap;


/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.9.1
	(function() {
	  var XMLAttribute, XMLElement, XMLNode, XMLProcessingInstruction, create, every, isFunction, isObject,
	    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	    hasProp = {}.hasOwnProperty;

	  create = __webpack_require__(161);

	  isObject = __webpack_require__(120);

	  isFunction = __webpack_require__(113);

	  every = __webpack_require__(173);

	  XMLNode = __webpack_require__(164);

	  XMLAttribute = __webpack_require__(253);

	  XMLProcessingInstruction = __webpack_require__(254);

	  module.exports = XMLElement = (function(superClass) {
	    extend(XMLElement, superClass);

	    function XMLElement(parent, name, attributes) {
	      XMLElement.__super__.constructor.call(this, parent);
	      if (name == null) {
	        throw new Error("Missing element name");
	      }
	      this.name = this.stringify.eleName(name);
	      this.children = [];
	      this.instructions = [];
	      this.attributes = {};
	      if (attributes != null) {
	        this.attribute(attributes);
	      }
	    }

	    XMLElement.prototype.clone = function() {
	      var att, attName, clonedSelf, i, len, pi, ref, ref1;
	      clonedSelf = create(XMLElement.prototype, this);
	      if (clonedSelf.isRoot) {
	        clonedSelf.documentObject = null;
	      }
	      clonedSelf.attributes = {};
	      ref = this.attributes;
	      for (attName in ref) {
	        if (!hasProp.call(ref, attName)) continue;
	        att = ref[attName];
	        clonedSelf.attributes[attName] = att.clone();
	      }
	      clonedSelf.instructions = [];
	      ref1 = this.instructions;
	      for (i = 0, len = ref1.length; i < len; i++) {
	        pi = ref1[i];
	        clonedSelf.instructions.push(pi.clone());
	      }
	      clonedSelf.children = [];
	      this.children.forEach(function(child) {
	        var clonedChild;
	        clonedChild = child.clone();
	        clonedChild.parent = clonedSelf;
	        return clonedSelf.children.push(clonedChild);
	      });
	      return clonedSelf;
	    };

	    XMLElement.prototype.attribute = function(name, value) {
	      var attName, attValue;
	      if (name != null) {
	        name = name.valueOf();
	      }
	      if (isObject(name)) {
	        for (attName in name) {
	          if (!hasProp.call(name, attName)) continue;
	          attValue = name[attName];
	          this.attribute(attName, attValue);
	        }
	      } else {
	        if (isFunction(value)) {
	          value = value.apply();
	        }
	        if (!this.options.skipNullAttributes || (value != null)) {
	          this.attributes[name] = new XMLAttribute(this, name, value);
	        }
	      }
	      return this;
	    };

	    XMLElement.prototype.removeAttribute = function(name) {
	      var attName, i, len;
	      if (name == null) {
	        throw new Error("Missing attribute name");
	      }
	      name = name.valueOf();
	      if (Array.isArray(name)) {
	        for (i = 0, len = name.length; i < len; i++) {
	          attName = name[i];
	          delete this.attributes[attName];
	        }
	      } else {
	        delete this.attributes[name];
	      }
	      return this;
	    };

	    XMLElement.prototype.instruction = function(target, value) {
	      var i, insTarget, insValue, instruction, len;
	      if (target != null) {
	        target = target.valueOf();
	      }
	      if (value != null) {
	        value = value.valueOf();
	      }
	      if (Array.isArray(target)) {
	        for (i = 0, len = target.length; i < len; i++) {
	          insTarget = target[i];
	          this.instruction(insTarget);
	        }
	      } else if (isObject(target)) {
	        for (insTarget in target) {
	          if (!hasProp.call(target, insTarget)) continue;
	          insValue = target[insTarget];
	          this.instruction(insTarget, insValue);
	        }
	      } else {
	        if (isFunction(value)) {
	          value = value.apply();
	        }
	        instruction = new XMLProcessingInstruction(this, target, value);
	        this.instructions.push(instruction);
	      }
	      return this;
	    };

	    XMLElement.prototype.toString = function(options, level) {
	      var att, child, i, indent, instruction, j, len, len1, name, newline, offset, pretty, r, ref, ref1, ref2, ref3, ref4, ref5, space;
	      pretty = (options != null ? options.pretty : void 0) || false;
	      indent = (ref = options != null ? options.indent : void 0) != null ? ref : '  ';
	      offset = (ref1 = options != null ? options.offset : void 0) != null ? ref1 : 0;
	      newline = (ref2 = options != null ? options.newline : void 0) != null ? ref2 : '\n';
	      level || (level = 0);
	      space = new Array(level + offset + 1).join(indent);
	      r = '';
	      ref3 = this.instructions;
	      for (i = 0, len = ref3.length; i < len; i++) {
	        instruction = ref3[i];
	        r += instruction.toString(options, level);
	      }
	      if (pretty) {
	        r += space;
	      }
	      r += '<' + this.name;
	      ref4 = this.attributes;
	      for (name in ref4) {
	        if (!hasProp.call(ref4, name)) continue;
	        att = ref4[name];
	        r += att.toString(options);
	      }
	      if (this.children.length === 0 || every(this.children, function(e) {
	        return e.value === '';
	      })) {
	        r += '/>';
	        if (pretty) {
	          r += newline;
	        }
	      } else if (pretty && this.children.length === 1 && (this.children[0].value != null)) {
	        r += '>';
	        r += this.children[0].value;
	        r += '</' + this.name + '>';
	        r += newline;
	      } else {
	        r += '>';
	        if (pretty) {
	          r += newline;
	        }
	        ref5 = this.children;
	        for (j = 0, len1 = ref5.length; j < len1; j++) {
	          child = ref5[j];
	          r += child.toString(options, level + 1);
	        }
	        if (pretty) {
	          r += space;
	        }
	        r += '</' + this.name + '>';
	        if (pretty) {
	          r += newline;
	        }
	      }
	      return r;
	    };

	    XMLElement.prototype.att = function(name, value) {
	      return this.attribute(name, value);
	    };

	    XMLElement.prototype.ins = function(target, value) {
	      return this.instruction(target, value);
	    };

	    XMLElement.prototype.a = function(name, value) {
	      return this.attribute(name, value);
	    };

	    XMLElement.prototype.i = function(target, value) {
	      return this.instruction(target, value);
	    };

	    return XMLElement;

	  })(XMLNode);

	}).call(this);


/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

	var arrayEvery = __webpack_require__(174),
	    baseEvery = __webpack_require__(175),
	    baseIteratee = __webpack_require__(181),
	    isArray = __webpack_require__(147),
	    isIterateeCall = __webpack_require__(136);

	/**
	 * Checks if `predicate` returns truthy for **all** elements of `collection`.
	 * Iteration is stopped once `predicate` returns falsey. The predicate is
	 * invoked with three arguments: (value, index|key, collection).
	 *
	 * **Note:** This method returns `true` for
	 * [empty collections](https://en.wikipedia.org/wiki/Empty_set) because
	 * [everything is true](https://en.wikipedia.org/wiki/Vacuous_truth) of
	 * elements of empty collections.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Collection
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} [predicate=_.identity] The function invoked per iteration.
	 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	 * @returns {boolean} Returns `true` if all elements pass the predicate check,
	 *  else `false`.
	 * @example
	 *
	 * _.every([true, 1, null, 'yes'], Boolean);
	 * // => false
	 *
	 * var users = [
	 *   { 'user': 'barney', 'age': 36, 'active': false },
	 *   { 'user': 'fred',   'age': 40, 'active': false }
	 * ];
	 *
	 * // The `_.matches` iteratee shorthand.
	 * _.every(users, { 'user': 'barney', 'active': false });
	 * // => false
	 *
	 * // The `_.matchesProperty` iteratee shorthand.
	 * _.every(users, ['active', false]);
	 * // => true
	 *
	 * // The `_.property` iteratee shorthand.
	 * _.every(users, 'active');
	 * // => false
	 */
	function every(collection, predicate, guard) {
	  var func = isArray(collection) ? arrayEvery : baseEvery;
	  if (guard && isIterateeCall(collection, predicate, guard)) {
	    predicate = undefined;
	  }
	  return func(collection, baseIteratee(predicate, 3));
	}

	module.exports = every;


/***/ }),
/* 174 */
/***/ (function(module, exports) {

	/**
	 * A specialized version of `_.every` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {boolean} Returns `true` if all elements pass the predicate check,
	 *  else `false`.
	 */
	function arrayEvery(array, predicate) {
	  var index = -1,
	      length = array == null ? 0 : array.length;

	  while (++index < length) {
	    if (!predicate(array[index], index, array)) {
	      return false;
	    }
	  }
	  return true;
	}

	module.exports = arrayEvery;


/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

	var baseEach = __webpack_require__(176);

	/**
	 * The base implementation of `_.every` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {boolean} Returns `true` if all elements pass the predicate check,
	 *  else `false`
	 */
	function baseEvery(collection, predicate) {
	  var result = true;
	  baseEach(collection, function(value, index, collection) {
	    result = !!predicate(value, index, collection);
	    return result;
	  });
	  return result;
	}

	module.exports = baseEvery;


/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

	var baseForOwn = __webpack_require__(177),
	    createBaseEach = __webpack_require__(180);

	/**
	 * The base implementation of `_.forEach` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array|Object} Returns `collection`.
	 */
	var baseEach = createBaseEach(baseForOwn);

	module.exports = baseEach;


/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

	var baseFor = __webpack_require__(178),
	    keys = __webpack_require__(141);

	/**
	 * The base implementation of `_.forOwn` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Object} Returns `object`.
	 */
	function baseForOwn(object, iteratee) {
	  return object && baseFor(object, iteratee, keys);
	}

	module.exports = baseForOwn;


/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

	var createBaseFor = __webpack_require__(179);

	/**
	 * The base implementation of `baseForOwn` which iterates over `object`
	 * properties returned by `keysFunc` and invokes `iteratee` for each property.
	 * Iteratee functions may exit iteration early by explicitly returning `false`.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @returns {Object} Returns `object`.
	 */
	var baseFor = createBaseFor();

	module.exports = baseFor;


/***/ }),
/* 179 */
/***/ (function(module, exports) {

	/**
	 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
	 *
	 * @private
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseFor(fromRight) {
	  return function(object, iteratee, keysFunc) {
	    var index = -1,
	        iterable = Object(object),
	        props = keysFunc(object),
	        length = props.length;

	    while (length--) {
	      var key = props[fromRight ? length : ++index];
	      if (iteratee(iterable[key], key, iterable) === false) {
	        break;
	      }
	    }
	    return object;
	  };
	}

	module.exports = createBaseFor;


/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

	var isArrayLike = __webpack_require__(137);

	/**
	 * Creates a `baseEach` or `baseEachRight` function.
	 *
	 * @private
	 * @param {Function} eachFunc The function to iterate over a collection.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseEach(eachFunc, fromRight) {
	  return function(collection, iteratee) {
	    if (collection == null) {
	      return collection;
	    }
	    if (!isArrayLike(collection)) {
	      return eachFunc(collection, iteratee);
	    }
	    var length = collection.length,
	        index = fromRight ? length : -1,
	        iterable = Object(collection);

	    while ((fromRight ? index-- : ++index < length)) {
	      if (iteratee(iterable[index], index, iterable) === false) {
	        break;
	      }
	    }
	    return collection;
	  };
	}

	module.exports = createBaseEach;


/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

	var baseMatches = __webpack_require__(182),
	    baseMatchesProperty = __webpack_require__(234),
	    identity = __webpack_require__(129),
	    isArray = __webpack_require__(147),
	    property = __webpack_require__(250);

	/**
	 * The base implementation of `_.iteratee`.
	 *
	 * @private
	 * @param {*} [value=_.identity] The value to convert to an iteratee.
	 * @returns {Function} Returns the iteratee.
	 */
	function baseIteratee(value) {
	  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
	  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
	  if (typeof value == 'function') {
	    return value;
	  }
	  if (value == null) {
	    return identity;
	  }
	  if (typeof value == 'object') {
	    return isArray(value)
	      ? baseMatchesProperty(value[0], value[1])
	      : baseMatches(value);
	  }
	  return property(value);
	}

	module.exports = baseIteratee;


/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

	var baseIsMatch = __webpack_require__(183),
	    getMatchData = __webpack_require__(231),
	    matchesStrictComparable = __webpack_require__(233);

	/**
	 * The base implementation of `_.matches` which doesn't clone `source`.
	 *
	 * @private
	 * @param {Object} source The object of property values to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function baseMatches(source) {
	  var matchData = getMatchData(source);
	  if (matchData.length == 1 && matchData[0][2]) {
	    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
	  }
	  return function(object) {
	    return object === source || baseIsMatch(object, source, matchData);
	  };
	}

	module.exports = baseMatches;


/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

	var Stack = __webpack_require__(184),
	    baseIsEqual = __webpack_require__(212);

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1,
	    COMPARE_UNORDERED_FLAG = 2;

	/**
	 * The base implementation of `_.isMatch` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Object} object The object to inspect.
	 * @param {Object} source The object of property values to match.
	 * @param {Array} matchData The property names, values, and compare flags to match.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
	 */
	function baseIsMatch(object, source, matchData, customizer) {
	  var index = matchData.length,
	      length = index,
	      noCustomizer = !customizer;

	  if (object == null) {
	    return !length;
	  }
	  object = Object(object);
	  while (index--) {
	    var data = matchData[index];
	    if ((noCustomizer && data[2])
	          ? data[1] !== object[data[0]]
	          : !(data[0] in object)
	        ) {
	      return false;
	    }
	  }
	  while (++index < length) {
	    data = matchData[index];
	    var key = data[0],
	        objValue = object[key],
	        srcValue = data[1];

	    if (noCustomizer && data[2]) {
	      if (objValue === undefined && !(key in object)) {
	        return false;
	      }
	    } else {
	      var stack = new Stack;
	      if (customizer) {
	        var result = customizer(objValue, srcValue, key, object, source, stack);
	      }
	      if (!(result === undefined
	            ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
	            : result
	          )) {
	        return false;
	      }
	    }
	  }
	  return true;
	}

	module.exports = baseIsMatch;


/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

	var ListCache = __webpack_require__(185),
	    stackClear = __webpack_require__(192),
	    stackDelete = __webpack_require__(193),
	    stackGet = __webpack_require__(194),
	    stackHas = __webpack_require__(195),
	    stackSet = __webpack_require__(196);

	/**
	 * Creates a stack cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Stack(entries) {
	  var data = this.__data__ = new ListCache(entries);
	  this.size = data.size;
	}

	// Add methods to `Stack`.
	Stack.prototype.clear = stackClear;
	Stack.prototype['delete'] = stackDelete;
	Stack.prototype.get = stackGet;
	Stack.prototype.has = stackHas;
	Stack.prototype.set = stackSet;

	module.exports = Stack;


/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

	var listCacheClear = __webpack_require__(186),
	    listCacheDelete = __webpack_require__(187),
	    listCacheGet = __webpack_require__(189),
	    listCacheHas = __webpack_require__(190),
	    listCacheSet = __webpack_require__(191);

	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `ListCache`.
	ListCache.prototype.clear = listCacheClear;
	ListCache.prototype['delete'] = listCacheDelete;
	ListCache.prototype.get = listCacheGet;
	ListCache.prototype.has = listCacheHas;
	ListCache.prototype.set = listCacheSet;

	module.exports = ListCache;


/***/ }),
/* 186 */
/***/ (function(module, exports) {

	/**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */
	function listCacheClear() {
	  this.__data__ = [];
	  this.size = 0;
	}

	module.exports = listCacheClear;


/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(188);

	/** Used for built-in method references. */
	var arrayProto = Array.prototype;

	/** Built-in value references. */
	var splice = arrayProto.splice;

	/**
	 * Removes `key` and its value from the list cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf ListCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function listCacheDelete(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = data.length - 1;
	  if (index == lastIndex) {
	    data.pop();
	  } else {
	    splice.call(data, index, 1);
	  }
	  --this.size;
	  return true;
	}

	module.exports = listCacheDelete;


/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(125);

	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}

	module.exports = assocIndexOf;


/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(188);

	/**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function listCacheGet(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  return index < 0 ? undefined : data[index][1];
	}

	module.exports = listCacheGet;


/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(188);

	/**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function listCacheHas(key) {
	  return assocIndexOf(this.__data__, key) > -1;
	}

	module.exports = listCacheHas;


/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(188);

	/**
	 * Sets the list cache `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf ListCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the list cache instance.
	 */
	function listCacheSet(key, value) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    ++this.size;
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }
	  return this;
	}

	module.exports = listCacheSet;


/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

	var ListCache = __webpack_require__(185);

	/**
	 * Removes all key-value entries from the stack.
	 *
	 * @private
	 * @name clear
	 * @memberOf Stack
	 */
	function stackClear() {
	  this.__data__ = new ListCache;
	  this.size = 0;
	}

	module.exports = stackClear;


/***/ }),
/* 193 */
/***/ (function(module, exports) {

	/**
	 * Removes `key` and its value from the stack.
	 *
	 * @private
	 * @name delete
	 * @memberOf Stack
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function stackDelete(key) {
	  var data = this.__data__,
	      result = data['delete'](key);

	  this.size = data.size;
	  return result;
	}

	module.exports = stackDelete;


/***/ }),
/* 194 */
/***/ (function(module, exports) {

	/**
	 * Gets the stack value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Stack
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function stackGet(key) {
	  return this.__data__.get(key);
	}

	module.exports = stackGet;


/***/ }),
/* 195 */
/***/ (function(module, exports) {

	/**
	 * Checks if a stack value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Stack
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function stackHas(key) {
	  return this.__data__.has(key);
	}

	module.exports = stackHas;


/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

	var ListCache = __webpack_require__(185),
	    Map = __webpack_require__(168),
	    MapCache = __webpack_require__(197);

	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;

	/**
	 * Sets the stack `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Stack
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the stack cache instance.
	 */
	function stackSet(key, value) {
	  var data = this.__data__;
	  if (data instanceof ListCache) {
	    var pairs = data.__data__;
	    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
	      pairs.push([key, value]);
	      this.size = ++data.size;
	      return this;
	    }
	    data = this.__data__ = new MapCache(pairs);
	  }
	  data.set(key, value);
	  this.size = data.size;
	  return this;
	}

	module.exports = stackSet;


/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

	var mapCacheClear = __webpack_require__(198),
	    mapCacheDelete = __webpack_require__(206),
	    mapCacheGet = __webpack_require__(209),
	    mapCacheHas = __webpack_require__(210),
	    mapCacheSet = __webpack_require__(211);

	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function MapCache(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `MapCache`.
	MapCache.prototype.clear = mapCacheClear;
	MapCache.prototype['delete'] = mapCacheDelete;
	MapCache.prototype.get = mapCacheGet;
	MapCache.prototype.has = mapCacheHas;
	MapCache.prototype.set = mapCacheSet;

	module.exports = MapCache;


/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

	var Hash = __webpack_require__(199),
	    ListCache = __webpack_require__(185),
	    Map = __webpack_require__(168);

	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapCacheClear() {
	  this.size = 0;
	  this.__data__ = {
	    'hash': new Hash,
	    'map': new (Map || ListCache),
	    'string': new Hash
	  };
	}

	module.exports = mapCacheClear;


/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

	var hashClear = __webpack_require__(200),
	    hashDelete = __webpack_require__(202),
	    hashGet = __webpack_require__(203),
	    hashHas = __webpack_require__(204),
	    hashSet = __webpack_require__(205);

	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Hash(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `Hash`.
	Hash.prototype.clear = hashClear;
	Hash.prototype['delete'] = hashDelete;
	Hash.prototype.get = hashGet;
	Hash.prototype.has = hashHas;
	Hash.prototype.set = hashSet;

	module.exports = Hash;


/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(201);

	/**
	 * Removes all key-value entries from the hash.
	 *
	 * @private
	 * @name clear
	 * @memberOf Hash
	 */
	function hashClear() {
	  this.__data__ = nativeCreate ? nativeCreate(null) : {};
	  this.size = 0;
	}

	module.exports = hashClear;


/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(111);

	/* Built-in method references that are verified to be native. */
	var nativeCreate = getNative(Object, 'create');

	module.exports = nativeCreate;


/***/ }),
/* 202 */
/***/ (function(module, exports) {

	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @name delete
	 * @memberOf Hash
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function hashDelete(key) {
	  var result = this.has(key) && delete this.__data__[key];
	  this.size -= result ? 1 : 0;
	  return result;
	}

	module.exports = hashDelete;


/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(201);

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Hash
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function hashGet(key) {
	  var data = this.__data__;
	  if (nativeCreate) {
	    var result = data[key];
	    return result === HASH_UNDEFINED ? undefined : result;
	  }
	  return hasOwnProperty.call(data, key) ? data[key] : undefined;
	}

	module.exports = hashGet;


/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(201);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Hash
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function hashHas(key) {
	  var data = this.__data__;
	  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
	}

	module.exports = hashHas;


/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(201);

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Hash
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the hash instance.
	 */
	function hashSet(key, value) {
	  var data = this.__data__;
	  this.size += this.has(key) ? 0 : 1;
	  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
	  return this;
	}

	module.exports = hashSet;


/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(207);

	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapCacheDelete(key) {
	  var result = getMapData(this, key)['delete'](key);
	  this.size -= result ? 1 : 0;
	  return result;
	}

	module.exports = mapCacheDelete;


/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

	var isKeyable = __webpack_require__(208);

	/**
	 * Gets the data for `map`.
	 *
	 * @private
	 * @param {Object} map The map to query.
	 * @param {string} key The reference key.
	 * @returns {*} Returns the map data.
	 */
	function getMapData(map, key) {
	  var data = map.__data__;
	  return isKeyable(key)
	    ? data[typeof key == 'string' ? 'string' : 'hash']
	    : data.map;
	}

	module.exports = getMapData;


/***/ }),
/* 208 */
/***/ (function(module, exports) {

	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
	function isKeyable(value) {
	  var type = typeof value;
	  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
	    ? (value !== '__proto__')
	    : (value === null);
	}

	module.exports = isKeyable;


/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(207);

	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapCacheGet(key) {
	  return getMapData(this, key).get(key);
	}

	module.exports = mapCacheGet;


/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(207);

	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapCacheHas(key) {
	  return getMapData(this, key).has(key);
	}

	module.exports = mapCacheHas;


/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(207);

	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache instance.
	 */
	function mapCacheSet(key, value) {
	  var data = getMapData(this, key),
	      size = data.size;

	  data.set(key, value);
	  this.size += data.size == size ? 0 : 1;
	  return this;
	}

	module.exports = mapCacheSet;


/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

	var baseIsEqualDeep = __webpack_require__(213),
	    isObjectLike = __webpack_require__(146);

	/**
	 * The base implementation of `_.isEqual` which supports partial comparisons
	 * and tracks traversed objects.
	 *
	 * @private
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @param {boolean} bitmask The bitmask flags.
	 *  1 - Unordered comparison
	 *  2 - Partial comparison
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 */
	function baseIsEqual(value, other, bitmask, customizer, stack) {
	  if (value === other) {
	    return true;
	  }
	  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
	    return value !== value && other !== other;
	  }
	  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
	}

	module.exports = baseIsEqual;


/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

	var Stack = __webpack_require__(184),
	    equalArrays = __webpack_require__(214),
	    equalByTag = __webpack_require__(220),
	    equalObjects = __webpack_require__(224),
	    getTag = __webpack_require__(166),
	    isArray = __webpack_require__(147),
	    isBuffer = __webpack_require__(148),
	    isTypedArray = __webpack_require__(151);

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1;

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    objectTag = '[object Object]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * A specialized version of `baseIsEqual` for arrays and objects which performs
	 * deep comparisons and tracks traversed objects enabling objects with circular
	 * references to be compared.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
	  var objIsArr = isArray(object),
	      othIsArr = isArray(other),
	      objTag = objIsArr ? arrayTag : getTag(object),
	      othTag = othIsArr ? arrayTag : getTag(other);

	  objTag = objTag == argsTag ? objectTag : objTag;
	  othTag = othTag == argsTag ? objectTag : othTag;

	  var objIsObj = objTag == objectTag,
	      othIsObj = othTag == objectTag,
	      isSameTag = objTag == othTag;

	  if (isSameTag && isBuffer(object)) {
	    if (!isBuffer(other)) {
	      return false;
	    }
	    objIsArr = true;
	    objIsObj = false;
	  }
	  if (isSameTag && !objIsObj) {
	    stack || (stack = new Stack);
	    return (objIsArr || isTypedArray(object))
	      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
	      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
	  }
	  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
	    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
	        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

	    if (objIsWrapped || othIsWrapped) {
	      var objUnwrapped = objIsWrapped ? object.value() : object,
	          othUnwrapped = othIsWrapped ? other.value() : other;

	      stack || (stack = new Stack);
	      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
	    }
	  }
	  if (!isSameTag) {
	    return false;
	  }
	  stack || (stack = new Stack);
	  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
	}

	module.exports = baseIsEqualDeep;


/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

	var SetCache = __webpack_require__(215),
	    arraySome = __webpack_require__(218),
	    cacheHas = __webpack_require__(219);

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1,
	    COMPARE_UNORDERED_FLAG = 2;

	/**
	 * A specialized version of `baseIsEqualDeep` for arrays with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Array} array The array to compare.
	 * @param {Array} other The other array to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} stack Tracks traversed `array` and `other` objects.
	 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
	 */
	function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
	  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
	      arrLength = array.length,
	      othLength = other.length;

	  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
	    return false;
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(array);
	  if (stacked && stack.get(other)) {
	    return stacked == other;
	  }
	  var index = -1,
	      result = true,
	      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

	  stack.set(array, other);
	  stack.set(other, array);

	  // Ignore non-index properties.
	  while (++index < arrLength) {
	    var arrValue = array[index],
	        othValue = other[index];

	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, arrValue, index, other, array, stack)
	        : customizer(arrValue, othValue, index, array, other, stack);
	    }
	    if (compared !== undefined) {
	      if (compared) {
	        continue;
	      }
	      result = false;
	      break;
	    }
	    // Recursively compare arrays (susceptible to call stack limits).
	    if (seen) {
	      if (!arraySome(other, function(othValue, othIndex) {
	            if (!cacheHas(seen, othIndex) &&
	                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
	              return seen.push(othIndex);
	            }
	          })) {
	        result = false;
	        break;
	      }
	    } else if (!(
	          arrValue === othValue ||
	            equalFunc(arrValue, othValue, bitmask, customizer, stack)
	        )) {
	      result = false;
	      break;
	    }
	  }
	  stack['delete'](array);
	  stack['delete'](other);
	  return result;
	}

	module.exports = equalArrays;


/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

	var MapCache = __webpack_require__(197),
	    setCacheAdd = __webpack_require__(216),
	    setCacheHas = __webpack_require__(217);

	/**
	 *
	 * Creates an array cache object to store unique values.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [values] The values to cache.
	 */
	function SetCache(values) {
	  var index = -1,
	      length = values == null ? 0 : values.length;

	  this.__data__ = new MapCache;
	  while (++index < length) {
	    this.add(values[index]);
	  }
	}

	// Add methods to `SetCache`.
	SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
	SetCache.prototype.has = setCacheHas;

	module.exports = SetCache;


/***/ }),
/* 216 */
/***/ (function(module, exports) {

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/**
	 * Adds `value` to the array cache.
	 *
	 * @private
	 * @name add
	 * @memberOf SetCache
	 * @alias push
	 * @param {*} value The value to cache.
	 * @returns {Object} Returns the cache instance.
	 */
	function setCacheAdd(value) {
	  this.__data__.set(value, HASH_UNDEFINED);
	  return this;
	}

	module.exports = setCacheAdd;


/***/ }),
/* 217 */
/***/ (function(module, exports) {

	/**
	 * Checks if `value` is in the array cache.
	 *
	 * @private
	 * @name has
	 * @memberOf SetCache
	 * @param {*} value The value to search for.
	 * @returns {number} Returns `true` if `value` is found, else `false`.
	 */
	function setCacheHas(value) {
	  return this.__data__.has(value);
	}

	module.exports = setCacheHas;


/***/ }),
/* 218 */
/***/ (function(module, exports) {

	/**
	 * A specialized version of `_.some` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {boolean} Returns `true` if any element passes the predicate check,
	 *  else `false`.
	 */
	function arraySome(array, predicate) {
	  var index = -1,
	      length = array == null ? 0 : array.length;

	  while (++index < length) {
	    if (predicate(array[index], index, array)) {
	      return true;
	    }
	  }
	  return false;
	}

	module.exports = arraySome;


/***/ }),
/* 219 */
/***/ (function(module, exports) {

	/**
	 * Checks if a `cache` value for `key` exists.
	 *
	 * @private
	 * @param {Object} cache The cache to query.
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function cacheHas(cache, key) {
	  return cache.has(key);
	}

	module.exports = cacheHas;


/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(115),
	    Uint8Array = __webpack_require__(221),
	    eq = __webpack_require__(125),
	    equalArrays = __webpack_require__(214),
	    mapToArray = __webpack_require__(222),
	    setToArray = __webpack_require__(223);

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1,
	    COMPARE_UNORDERED_FLAG = 2;

	/** `Object#toString` result references. */
	var boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    symbolTag = '[object Symbol]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]';

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

	/**
	 * A specialized version of `baseIsEqualDeep` for comparing objects of
	 * the same `toStringTag`.
	 *
	 * **Note:** This function only supports comparing values with tags of
	 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {string} tag The `toStringTag` of the objects to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
	  switch (tag) {
	    case dataViewTag:
	      if ((object.byteLength != other.byteLength) ||
	          (object.byteOffset != other.byteOffset)) {
	        return false;
	      }
	      object = object.buffer;
	      other = other.buffer;

	    case arrayBufferTag:
	      if ((object.byteLength != other.byteLength) ||
	          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
	        return false;
	      }
	      return true;

	    case boolTag:
	    case dateTag:
	    case numberTag:
	      // Coerce booleans to `1` or `0` and dates to milliseconds.
	      // Invalid dates are coerced to `NaN`.
	      return eq(+object, +other);

	    case errorTag:
	      return object.name == other.name && object.message == other.message;

	    case regexpTag:
	    case stringTag:
	      // Coerce regexes to strings and treat strings, primitives and objects,
	      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
	      // for more details.
	      return object == (other + '');

	    case mapTag:
	      var convert = mapToArray;

	    case setTag:
	      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
	      convert || (convert = setToArray);

	      if (object.size != other.size && !isPartial) {
	        return false;
	      }
	      // Assume cyclic values are equal.
	      var stacked = stack.get(object);
	      if (stacked) {
	        return stacked == other;
	      }
	      bitmask |= COMPARE_UNORDERED_FLAG;

	      // Recursively compare objects (susceptible to call stack limits).
	      stack.set(object, other);
	      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
	      stack['delete'](object);
	      return result;

	    case symbolTag:
	      if (symbolValueOf) {
	        return symbolValueOf.call(object) == symbolValueOf.call(other);
	      }
	  }
	  return false;
	}

	module.exports = equalByTag;


/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

	var root = __webpack_require__(116);

	/** Built-in value references. */
	var Uint8Array = root.Uint8Array;

	module.exports = Uint8Array;


/***/ }),
/* 222 */
/***/ (function(module, exports) {

	/**
	 * Converts `map` to its key-value pairs.
	 *
	 * @private
	 * @param {Object} map The map to convert.
	 * @returns {Array} Returns the key-value pairs.
	 */
	function mapToArray(map) {
	  var index = -1,
	      result = Array(map.size);

	  map.forEach(function(value, key) {
	    result[++index] = [key, value];
	  });
	  return result;
	}

	module.exports = mapToArray;


/***/ }),
/* 223 */
/***/ (function(module, exports) {

	/**
	 * Converts `set` to an array of its values.
	 *
	 * @private
	 * @param {Object} set The set to convert.
	 * @returns {Array} Returns the values.
	 */
	function setToArray(set) {
	  var index = -1,
	      result = Array(set.size);

	  set.forEach(function(value) {
	    result[++index] = value;
	  });
	  return result;
	}

	module.exports = setToArray;


/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

	var getAllKeys = __webpack_require__(225);

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1;

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * A specialized version of `baseIsEqualDeep` for objects with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
	  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
	      objProps = getAllKeys(object),
	      objLength = objProps.length,
	      othProps = getAllKeys(other),
	      othLength = othProps.length;

	  if (objLength != othLength && !isPartial) {
	    return false;
	  }
	  var index = objLength;
	  while (index--) {
	    var key = objProps[index];
	    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
	      return false;
	    }
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(object);
	  if (stacked && stack.get(other)) {
	    return stacked == other;
	  }
	  var result = true;
	  stack.set(object, other);
	  stack.set(other, object);

	  var skipCtor = isPartial;
	  while (++index < objLength) {
	    key = objProps[index];
	    var objValue = object[key],
	        othValue = other[key];

	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, objValue, key, other, object, stack)
	        : customizer(objValue, othValue, key, object, other, stack);
	    }
	    // Recursively compare objects (susceptible to call stack limits).
	    if (!(compared === undefined
	          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
	          : compared
	        )) {
	      result = false;
	      break;
	    }
	    skipCtor || (skipCtor = key == 'constructor');
	  }
	  if (result && !skipCtor) {
	    var objCtor = object.constructor,
	        othCtor = other.constructor;

	    // Non `Object` object instances with different constructors are not equal.
	    if (objCtor != othCtor &&
	        ('constructor' in object && 'constructor' in other) &&
	        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
	          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
	      result = false;
	    }
	  }
	  stack['delete'](object);
	  stack['delete'](other);
	  return result;
	}

	module.exports = equalObjects;


/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGetAllKeys = __webpack_require__(226),
	    getSymbols = __webpack_require__(228),
	    keys = __webpack_require__(141);

	/**
	 * Creates an array of own enumerable property names and symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function getAllKeys(object) {
	  return baseGetAllKeys(object, keys, getSymbols);
	}

	module.exports = getAllKeys;


/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

	var arrayPush = __webpack_require__(227),
	    isArray = __webpack_require__(147);

	/**
	 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
	 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
	 * symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @param {Function} symbolsFunc The function to get the symbols of `object`.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function baseGetAllKeys(object, keysFunc, symbolsFunc) {
	  var result = keysFunc(object);
	  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
	}

	module.exports = baseGetAllKeys;


/***/ }),
/* 227 */
/***/ (function(module, exports) {

	/**
	 * Appends the elements of `values` to `array`.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to append.
	 * @returns {Array} Returns `array`.
	 */
	function arrayPush(array, values) {
	  var index = -1,
	      length = values.length,
	      offset = array.length;

	  while (++index < length) {
	    array[offset + index] = values[index];
	  }
	  return array;
	}

	module.exports = arrayPush;


/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

	var arrayFilter = __webpack_require__(229),
	    stubArray = __webpack_require__(230);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeGetSymbols = Object.getOwnPropertySymbols;

	/**
	 * Creates an array of the own enumerable symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of symbols.
	 */
	var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
	  if (object == null) {
	    return [];
	  }
	  object = Object(object);
	  return arrayFilter(nativeGetSymbols(object), function(symbol) {
	    return propertyIsEnumerable.call(object, symbol);
	  });
	};

	module.exports = getSymbols;


/***/ }),
/* 229 */
/***/ (function(module, exports) {

	/**
	 * A specialized version of `_.filter` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {Array} Returns the new filtered array.
	 */
	function arrayFilter(array, predicate) {
	  var index = -1,
	      length = array == null ? 0 : array.length,
	      resIndex = 0,
	      result = [];

	  while (++index < length) {
	    var value = array[index];
	    if (predicate(value, index, array)) {
	      result[resIndex++] = value;
	    }
	  }
	  return result;
	}

	module.exports = arrayFilter;


/***/ }),
/* 230 */
/***/ (function(module, exports) {

	/**
	 * This method returns a new empty array.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {Array} Returns the new empty array.
	 * @example
	 *
	 * var arrays = _.times(2, _.stubArray);
	 *
	 * console.log(arrays);
	 * // => [[], []]
	 *
	 * console.log(arrays[0] === arrays[1]);
	 * // => false
	 */
	function stubArray() {
	  return [];
	}

	module.exports = stubArray;


/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

	var isStrictComparable = __webpack_require__(232),
	    keys = __webpack_require__(141);

	/**
	 * Gets the property names, values, and compare flags of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the match data of `object`.
	 */
	function getMatchData(object) {
	  var result = keys(object),
	      length = result.length;

	  while (length--) {
	    var key = result[length],
	        value = object[key];

	    result[length] = [key, value, isStrictComparable(value)];
	  }
	  return result;
	}

	module.exports = getMatchData;


/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(120);

	/**
	 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` if suitable for strict
	 *  equality comparisons, else `false`.
	 */
	function isStrictComparable(value) {
	  return value === value && !isObject(value);
	}

	module.exports = isStrictComparable;


/***/ }),
/* 233 */
/***/ (function(module, exports) {

	/**
	 * A specialized version of `matchesProperty` for source values suitable
	 * for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @param {*} srcValue The value to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function matchesStrictComparable(key, srcValue) {
	  return function(object) {
	    if (object == null) {
	      return false;
	    }
	    return object[key] === srcValue &&
	      (srcValue !== undefined || (key in Object(object)));
	  };
	}

	module.exports = matchesStrictComparable;


/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

	var baseIsEqual = __webpack_require__(212),
	    get = __webpack_require__(235),
	    hasIn = __webpack_require__(247),
	    isKey = __webpack_require__(238),
	    isStrictComparable = __webpack_require__(232),
	    matchesStrictComparable = __webpack_require__(233),
	    toKey = __webpack_require__(246);

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1,
	    COMPARE_UNORDERED_FLAG = 2;

	/**
	 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
	 *
	 * @private
	 * @param {string} path The path of the property to get.
	 * @param {*} srcValue The value to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function baseMatchesProperty(path, srcValue) {
	  if (isKey(path) && isStrictComparable(srcValue)) {
	    return matchesStrictComparable(toKey(path), srcValue);
	  }
	  return function(object) {
	    var objValue = get(object, path);
	    return (objValue === undefined && objValue === srcValue)
	      ? hasIn(object, path)
	      : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
	  };
	}

	module.exports = baseMatchesProperty;


/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGet = __webpack_require__(236);

	/**
	 * Gets the value at `path` of `object`. If the resolved value is
	 * `undefined`, the `defaultValue` is returned in its place.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.7.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
	 * @returns {*} Returns the resolved value.
	 * @example
	 *
	 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	 *
	 * _.get(object, 'a[0].b.c');
	 * // => 3
	 *
	 * _.get(object, ['a', '0', 'b', 'c']);
	 * // => 3
	 *
	 * _.get(object, 'a.b.c', 'default');
	 * // => 'default'
	 */
	function get(object, path, defaultValue) {
	  var result = object == null ? undefined : baseGet(object, path);
	  return result === undefined ? defaultValue : result;
	}

	module.exports = get;


/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

	var castPath = __webpack_require__(237),
	    toKey = __webpack_require__(246);

	/**
	 * The base implementation of `_.get` without support for default values.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @returns {*} Returns the resolved value.
	 */
	function baseGet(object, path) {
	  path = castPath(path, object);

	  var index = 0,
	      length = path.length;

	  while (object != null && index < length) {
	    object = object[toKey(path[index++])];
	  }
	  return (index && index == length) ? object : undefined;
	}

	module.exports = baseGet;


/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(147),
	    isKey = __webpack_require__(238),
	    stringToPath = __webpack_require__(240),
	    toString = __webpack_require__(243);

	/**
	 * Casts `value` to a path array if it's not one.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {Array} Returns the cast property path array.
	 */
	function castPath(value, object) {
	  if (isArray(value)) {
	    return value;
	  }
	  return isKey(value, object) ? [value] : stringToPath(toString(value));
	}

	module.exports = castPath;


/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(147),
	    isSymbol = __webpack_require__(239);

	/** Used to match property names within property paths. */
	var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
	    reIsPlainProp = /^\w*$/;

	/**
	 * Checks if `value` is a property name and not a property path.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
	 */
	function isKey(value, object) {
	  if (isArray(value)) {
	    return false;
	  }
	  var type = typeof value;
	  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
	      value == null || isSymbol(value)) {
	    return true;
	  }
	  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
	    (object != null && value in Object(object));
	}

	module.exports = isKey;


/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(114),
	    isObjectLike = __webpack_require__(146);

	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';

	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && baseGetTag(value) == symbolTag);
	}

	module.exports = isSymbol;


/***/ }),
/* 240 */
/***/ (function(module, exports, __webpack_require__) {

	var memoizeCapped = __webpack_require__(241);

	/** Used to match property names within property paths. */
	var reLeadingDot = /^\./,
	    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

	/** Used to match backslashes in property paths. */
	var reEscapeChar = /\\(\\)?/g;

	/**
	 * Converts `string` to a property path array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the property path array.
	 */
	var stringToPath = memoizeCapped(function(string) {
	  var result = [];
	  if (reLeadingDot.test(string)) {
	    result.push('');
	  }
	  string.replace(rePropName, function(match, number, quote, string) {
	    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
	  });
	  return result;
	});

	module.exports = stringToPath;


/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

	var memoize = __webpack_require__(242);

	/** Used as the maximum memoize cache size. */
	var MAX_MEMOIZE_SIZE = 500;

	/**
	 * A specialized version of `_.memoize` which clears the memoized function's
	 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
	 *
	 * @private
	 * @param {Function} func The function to have its output memoized.
	 * @returns {Function} Returns the new memoized function.
	 */
	function memoizeCapped(func) {
	  var result = memoize(func, function(key) {
	    if (cache.size === MAX_MEMOIZE_SIZE) {
	      cache.clear();
	    }
	    return key;
	  });

	  var cache = result.cache;
	  return result;
	}

	module.exports = memoizeCapped;


/***/ }),
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

	var MapCache = __webpack_require__(197);

	/** Error message constants. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/**
	 * Creates a function that memoizes the result of `func`. If `resolver` is
	 * provided, it determines the cache key for storing the result based on the
	 * arguments provided to the memoized function. By default, the first argument
	 * provided to the memoized function is used as the map cache key. The `func`
	 * is invoked with the `this` binding of the memoized function.
	 *
	 * **Note:** The cache is exposed as the `cache` property on the memoized
	 * function. Its creation may be customized by replacing the `_.memoize.Cache`
	 * constructor with one whose instances implement the
	 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
	 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to have its output memoized.
	 * @param {Function} [resolver] The function to resolve the cache key.
	 * @returns {Function} Returns the new memoized function.
	 * @example
	 *
	 * var object = { 'a': 1, 'b': 2 };
	 * var other = { 'c': 3, 'd': 4 };
	 *
	 * var values = _.memoize(_.values);
	 * values(object);
	 * // => [1, 2]
	 *
	 * values(other);
	 * // => [3, 4]
	 *
	 * object.a = 2;
	 * values(object);
	 * // => [1, 2]
	 *
	 * // Modify the result cache.
	 * values.cache.set(object, ['a', 'b']);
	 * values(object);
	 * // => ['a', 'b']
	 *
	 * // Replace `_.memoize.Cache`.
	 * _.memoize.Cache = WeakMap;
	 */
	function memoize(func, resolver) {
	  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  var memoized = function() {
	    var args = arguments,
	        key = resolver ? resolver.apply(this, args) : args[0],
	        cache = memoized.cache;

	    if (cache.has(key)) {
	      return cache.get(key);
	    }
	    var result = func.apply(this, args);
	    memoized.cache = cache.set(key, result) || cache;
	    return result;
	  };
	  memoized.cache = new (memoize.Cache || MapCache);
	  return memoized;
	}

	// Expose `MapCache`.
	memoize.Cache = MapCache;

	module.exports = memoize;


/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

	var baseToString = __webpack_require__(244);

	/**
	 * Converts `value` to a string. An empty string is returned for `null`
	 * and `undefined` values. The sign of `-0` is preserved.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 * @example
	 *
	 * _.toString(null);
	 * // => ''
	 *
	 * _.toString(-0);
	 * // => '-0'
	 *
	 * _.toString([1, 2, 3]);
	 * // => '1,2,3'
	 */
	function toString(value) {
	  return value == null ? '' : baseToString(value);
	}

	module.exports = toString;


/***/ }),
/* 244 */
/***/ (function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(115),
	    arrayMap = __webpack_require__(245),
	    isArray = __webpack_require__(147),
	    isSymbol = __webpack_require__(239);

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolToString = symbolProto ? symbolProto.toString : undefined;

	/**
	 * The base implementation of `_.toString` which doesn't convert nullish
	 * values to empty strings.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 */
	function baseToString(value) {
	  // Exit early for strings to avoid a performance hit in some environments.
	  if (typeof value == 'string') {
	    return value;
	  }
	  if (isArray(value)) {
	    // Recursively convert values (susceptible to call stack limits).
	    return arrayMap(value, baseToString) + '';
	  }
	  if (isSymbol(value)) {
	    return symbolToString ? symbolToString.call(value) : '';
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}

	module.exports = baseToString;


/***/ }),
/* 245 */
/***/ (function(module, exports) {

	/**
	 * A specialized version of `_.map` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */
	function arrayMap(array, iteratee) {
	  var index = -1,
	      length = array == null ? 0 : array.length,
	      result = Array(length);

	  while (++index < length) {
	    result[index] = iteratee(array[index], index, array);
	  }
	  return result;
	}

	module.exports = arrayMap;


/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

	var isSymbol = __webpack_require__(239);

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;

	/**
	 * Converts `value` to a string key if it's not a string or symbol.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {string|symbol} Returns the key.
	 */
	function toKey(value) {
	  if (typeof value == 'string' || isSymbol(value)) {
	    return value;
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}

	module.exports = toKey;


/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

	var baseHasIn = __webpack_require__(248),
	    hasPath = __webpack_require__(249);

	/**
	 * Checks if `path` is a direct or inherited property of `object`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 * @example
	 *
	 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
	 *
	 * _.hasIn(object, 'a');
	 * // => true
	 *
	 * _.hasIn(object, 'a.b');
	 * // => true
	 *
	 * _.hasIn(object, ['a', 'b']);
	 * // => true
	 *
	 * _.hasIn(object, 'b');
	 * // => false
	 */
	function hasIn(object, path) {
	  return object != null && hasPath(object, path, baseHasIn);
	}

	module.exports = hasIn;


/***/ }),
/* 248 */
/***/ (function(module, exports) {

	/**
	 * The base implementation of `_.hasIn` without support for deep paths.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {Array|string} key The key to check.
	 * @returns {boolean} Returns `true` if `key` exists, else `false`.
	 */
	function baseHasIn(object, key) {
	  return object != null && key in Object(object);
	}

	module.exports = baseHasIn;


/***/ }),
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

	var castPath = __webpack_require__(237),
	    isArguments = __webpack_require__(144),
	    isArray = __webpack_require__(147),
	    isIndex = __webpack_require__(139),
	    isLength = __webpack_require__(138),
	    toKey = __webpack_require__(246);

	/**
	 * Checks if `path` exists on `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @param {Function} hasFunc The function to check properties.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 */
	function hasPath(object, path, hasFunc) {
	  path = castPath(path, object);

	  var index = -1,
	      length = path.length,
	      result = false;

	  while (++index < length) {
	    var key = toKey(path[index]);
	    if (!(result = object != null && hasFunc(object, key))) {
	      break;
	    }
	    object = object[key];
	  }
	  if (result || ++index != length) {
	    return result;
	  }
	  length = object == null ? 0 : object.length;
	  return !!length && isLength(length) && isIndex(key, length) &&
	    (isArray(object) || isArguments(object));
	}

	module.exports = hasPath;


/***/ }),
/* 250 */
/***/ (function(module, exports, __webpack_require__) {

	var baseProperty = __webpack_require__(251),
	    basePropertyDeep = __webpack_require__(252),
	    isKey = __webpack_require__(238),
	    toKey = __webpack_require__(246);

	/**
	 * Creates a function that returns the value at `path` of a given object.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Util
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 * @example
	 *
	 * var objects = [
	 *   { 'a': { 'b': 2 } },
	 *   { 'a': { 'b': 1 } }
	 * ];
	 *
	 * _.map(objects, _.property('a.b'));
	 * // => [2, 1]
	 *
	 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
	 * // => [1, 2]
	 */
	function property(path) {
	  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
	}

	module.exports = property;


/***/ }),
/* 251 */
/***/ (function(module, exports) {

	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}

	module.exports = baseProperty;


/***/ }),
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGet = __webpack_require__(236);

	/**
	 * A specialized version of `baseProperty` which supports deep paths.
	 *
	 * @private
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 */
	function basePropertyDeep(path) {
	  return function(object) {
	    return baseGet(object, path);
	  };
	}

	module.exports = basePropertyDeep;


/***/ }),
/* 253 */
/***/ (function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.9.1
	(function() {
	  var XMLAttribute, create;

	  create = __webpack_require__(161);

	  module.exports = XMLAttribute = (function() {
	    function XMLAttribute(parent, name, value) {
	      this.stringify = parent.stringify;
	      if (name == null) {
	        throw new Error("Missing attribute name of element " + parent.name);
	      }
	      if (value == null) {
	        throw new Error("Missing attribute value for attribute " + name + " of element " + parent.name);
	      }
	      this.name = this.stringify.attName(name);
	      this.value = this.stringify.attValue(value);
	    }

	    XMLAttribute.prototype.clone = function() {
	      return create(XMLAttribute.prototype, this);
	    };

	    XMLAttribute.prototype.toString = function(options, level) {
	      return ' ' + this.name + '="' + this.value + '"';
	    };

	    return XMLAttribute;

	  })();

	}).call(this);


/***/ }),
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.9.1
	(function() {
	  var XMLProcessingInstruction, create;

	  create = __webpack_require__(161);

	  module.exports = XMLProcessingInstruction = (function() {
	    function XMLProcessingInstruction(parent, target, value) {
	      this.stringify = parent.stringify;
	      if (target == null) {
	        throw new Error("Missing instruction target");
	      }
	      this.target = this.stringify.insTarget(target);
	      if (value) {
	        this.value = this.stringify.insValue(value);
	      }
	    }

	    XMLProcessingInstruction.prototype.clone = function() {
	      return create(XMLProcessingInstruction.prototype, this);
	    };

	    XMLProcessingInstruction.prototype.toString = function(options, level) {
	      var indent, newline, offset, pretty, r, ref, ref1, ref2, space;
	      pretty = (options != null ? options.pretty : void 0) || false;
	      indent = (ref = options != null ? options.indent : void 0) != null ? ref : '  ';
	      offset = (ref1 = options != null ? options.offset : void 0) != null ? ref1 : 0;
	      newline = (ref2 = options != null ? options.newline : void 0) != null ? ref2 : '\n';
	      level || (level = 0);
	      space = new Array(level + offset + 1).join(indent);
	      r = '';
	      if (pretty) {
	        r += space;
	      }
	      r += '<?';
	      r += this.target;
	      if (this.value) {
	        r += ' ' + this.value;
	      }
	      r += '?>';
	      if (pretty) {
	        r += newline;
	      }
	      return r;
	    };

	    return XMLProcessingInstruction;

	  })();

	}).call(this);


/***/ }),
/* 255 */
/***/ (function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.9.1
	(function() {
	  var XMLCData, XMLNode, create,
	    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	    hasProp = {}.hasOwnProperty;

	  create = __webpack_require__(161);

	  XMLNode = __webpack_require__(164);

	  module.exports = XMLCData = (function(superClass) {
	    extend(XMLCData, superClass);

	    function XMLCData(parent, text) {
	      XMLCData.__super__.constructor.call(this, parent);
	      if (text == null) {
	        throw new Error("Missing CDATA text");
	      }
	      this.text = this.stringify.cdata(text);
	    }

	    XMLCData.prototype.clone = function() {
	      return create(XMLCData.prototype, this);
	    };

	    XMLCData.prototype.toString = function(options, level) {
	      var indent, newline, offset, pretty, r, ref, ref1, ref2, space;
	      pretty = (options != null ? options.pretty : void 0) || false;
	      indent = (ref = options != null ? options.indent : void 0) != null ? ref : '  ';
	      offset = (ref1 = options != null ? options.offset : void 0) != null ? ref1 : 0;
	      newline = (ref2 = options != null ? options.newline : void 0) != null ? ref2 : '\n';
	      level || (level = 0);
	      space = new Array(level + offset + 1).join(indent);
	      r = '';
	      if (pretty) {
	        r += space;
	      }
	      r += '<![CDATA[' + this.text + ']]>';
	      if (pretty) {
	        r += newline;
	      }
	      return r;
	    };

	    return XMLCData;

	  })(XMLNode);

	}).call(this);


/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.9.1
	(function() {
	  var XMLComment, XMLNode, create,
	    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	    hasProp = {}.hasOwnProperty;

	  create = __webpack_require__(161);

	  XMLNode = __webpack_require__(164);

	  module.exports = XMLComment = (function(superClass) {
	    extend(XMLComment, superClass);

	    function XMLComment(parent, text) {
	      XMLComment.__super__.constructor.call(this, parent);
	      if (text == null) {
	        throw new Error("Missing comment text");
	      }
	      this.text = this.stringify.comment(text);
	    }

	    XMLComment.prototype.clone = function() {
	      return create(XMLComment.prototype, this);
	    };

	    XMLComment.prototype.toString = function(options, level) {
	      var indent, newline, offset, pretty, r, ref, ref1, ref2, space;
	      pretty = (options != null ? options.pretty : void 0) || false;
	      indent = (ref = options != null ? options.indent : void 0) != null ? ref : '  ';
	      offset = (ref1 = options != null ? options.offset : void 0) != null ? ref1 : 0;
	      newline = (ref2 = options != null ? options.newline : void 0) != null ? ref2 : '\n';
	      level || (level = 0);
	      space = new Array(level + offset + 1).join(indent);
	      r = '';
	      if (pretty) {
	        r += space;
	      }
	      r += '<!-- ' + this.text + ' -->';
	      if (pretty) {
	        r += newline;
	      }
	      return r;
	    };

	    return XMLComment;

	  })(XMLNode);

	}).call(this);


/***/ }),
/* 257 */
/***/ (function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.9.1
	(function() {
	  var XMLCData, XMLComment, XMLDTDAttList, XMLDTDElement, XMLDTDEntity, XMLDTDNotation, XMLDocType, XMLProcessingInstruction, create, isObject;

	  create = __webpack_require__(161);

	  isObject = __webpack_require__(120);

	  XMLCData = __webpack_require__(255);

	  XMLComment = __webpack_require__(256);

	  XMLDTDAttList = __webpack_require__(258);

	  XMLDTDEntity = __webpack_require__(259);

	  XMLDTDElement = __webpack_require__(260);

	  XMLDTDNotation = __webpack_require__(261);

	  XMLProcessingInstruction = __webpack_require__(254);

	  module.exports = XMLDocType = (function() {
	    function XMLDocType(parent, pubID, sysID) {
	      var ref, ref1;
	      this.documentObject = parent;
	      this.stringify = this.documentObject.stringify;
	      this.children = [];
	      if (isObject(pubID)) {
	        ref = pubID, pubID = ref.pubID, sysID = ref.sysID;
	      }
	      if (sysID == null) {
	        ref1 = [pubID, sysID], sysID = ref1[0], pubID = ref1[1];
	      }
	      if (pubID != null) {
	        this.pubID = this.stringify.dtdPubID(pubID);
	      }
	      if (sysID != null) {
	        this.sysID = this.stringify.dtdSysID(sysID);
	      }
	    }

	    XMLDocType.prototype.element = function(name, value) {
	      var child;
	      child = new XMLDTDElement(this, name, value);
	      this.children.push(child);
	      return this;
	    };

	    XMLDocType.prototype.attList = function(elementName, attributeName, attributeType, defaultValueType, defaultValue) {
	      var child;
	      child = new XMLDTDAttList(this, elementName, attributeName, attributeType, defaultValueType, defaultValue);
	      this.children.push(child);
	      return this;
	    };

	    XMLDocType.prototype.entity = function(name, value) {
	      var child;
	      child = new XMLDTDEntity(this, false, name, value);
	      this.children.push(child);
	      return this;
	    };

	    XMLDocType.prototype.pEntity = function(name, value) {
	      var child;
	      child = new XMLDTDEntity(this, true, name, value);
	      this.children.push(child);
	      return this;
	    };

	    XMLDocType.prototype.notation = function(name, value) {
	      var child;
	      child = new XMLDTDNotation(this, name, value);
	      this.children.push(child);
	      return this;
	    };

	    XMLDocType.prototype.cdata = function(value) {
	      var child;
	      child = new XMLCData(this, value);
	      this.children.push(child);
	      return this;
	    };

	    XMLDocType.prototype.comment = function(value) {
	      var child;
	      child = new XMLComment(this, value);
	      this.children.push(child);
	      return this;
	    };

	    XMLDocType.prototype.instruction = function(target, value) {
	      var child;
	      child = new XMLProcessingInstruction(this, target, value);
	      this.children.push(child);
	      return this;
	    };

	    XMLDocType.prototype.root = function() {
	      return this.documentObject.root();
	    };

	    XMLDocType.prototype.document = function() {
	      return this.documentObject;
	    };

	    XMLDocType.prototype.toString = function(options, level) {
	      var child, i, indent, len, newline, offset, pretty, r, ref, ref1, ref2, ref3, space;
	      pretty = (options != null ? options.pretty : void 0) || false;
	      indent = (ref = options != null ? options.indent : void 0) != null ? ref : '  ';
	      offset = (ref1 = options != null ? options.offset : void 0) != null ? ref1 : 0;
	      newline = (ref2 = options != null ? options.newline : void 0) != null ? ref2 : '\n';
	      level || (level = 0);
	      space = new Array(level + offset + 1).join(indent);
	      r = '';
	      if (pretty) {
	        r += space;
	      }
	      r += '<!DOCTYPE ' + this.root().name;
	      if (this.pubID && this.sysID) {
	        r += ' PUBLIC "' + this.pubID + '" "' + this.sysID + '"';
	      } else if (this.sysID) {
	        r += ' SYSTEM "' + this.sysID + '"';
	      }
	      if (this.children.length > 0) {
	        r += ' [';
	        if (pretty) {
	          r += newline;
	        }
	        ref3 = this.children;
	        for (i = 0, len = ref3.length; i < len; i++) {
	          child = ref3[i];
	          r += child.toString(options, level + 1);
	        }
	        r += ']';
	      }
	      r += '>';
	      if (pretty) {
	        r += newline;
	      }
	      return r;
	    };

	    XMLDocType.prototype.ele = function(name, value) {
	      return this.element(name, value);
	    };

	    XMLDocType.prototype.att = function(elementName, attributeName, attributeType, defaultValueType, defaultValue) {
	      return this.attList(elementName, attributeName, attributeType, defaultValueType, defaultValue);
	    };

	    XMLDocType.prototype.ent = function(name, value) {
	      return this.entity(name, value);
	    };

	    XMLDocType.prototype.pent = function(name, value) {
	      return this.pEntity(name, value);
	    };

	    XMLDocType.prototype.not = function(name, value) {
	      return this.notation(name, value);
	    };

	    XMLDocType.prototype.dat = function(value) {
	      return this.cdata(value);
	    };

	    XMLDocType.prototype.com = function(value) {
	      return this.comment(value);
	    };

	    XMLDocType.prototype.ins = function(target, value) {
	      return this.instruction(target, value);
	    };

	    XMLDocType.prototype.up = function() {
	      return this.root();
	    };

	    XMLDocType.prototype.doc = function() {
	      return this.document();
	    };

	    return XMLDocType;

	  })();

	}).call(this);


/***/ }),
/* 258 */
/***/ (function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.9.1
	(function() {
	  var XMLDTDAttList, create;

	  create = __webpack_require__(161);

	  module.exports = XMLDTDAttList = (function() {
	    function XMLDTDAttList(parent, elementName, attributeName, attributeType, defaultValueType, defaultValue) {
	      this.stringify = parent.stringify;
	      if (elementName == null) {
	        throw new Error("Missing DTD element name");
	      }
	      if (attributeName == null) {
	        throw new Error("Missing DTD attribute name");
	      }
	      if (!attributeType) {
	        throw new Error("Missing DTD attribute type");
	      }
	      if (!defaultValueType) {
	        throw new Error("Missing DTD attribute default");
	      }
	      if (defaultValueType.indexOf('#') !== 0) {
	        defaultValueType = '#' + defaultValueType;
	      }
	      if (!defaultValueType.match(/^(#REQUIRED|#IMPLIED|#FIXED|#DEFAULT)$/)) {
	        throw new Error("Invalid default value type; expected: #REQUIRED, #IMPLIED, #FIXED or #DEFAULT");
	      }
	      if (defaultValue && !defaultValueType.match(/^(#FIXED|#DEFAULT)$/)) {
	        throw new Error("Default value only applies to #FIXED or #DEFAULT");
	      }
	      this.elementName = this.stringify.eleName(elementName);
	      this.attributeName = this.stringify.attName(attributeName);
	      this.attributeType = this.stringify.dtdAttType(attributeType);
	      this.defaultValue = this.stringify.dtdAttDefault(defaultValue);
	      this.defaultValueType = defaultValueType;
	    }

	    XMLDTDAttList.prototype.toString = function(options, level) {
	      var indent, newline, offset, pretty, r, ref, ref1, ref2, space;
	      pretty = (options != null ? options.pretty : void 0) || false;
	      indent = (ref = options != null ? options.indent : void 0) != null ? ref : '  ';
	      offset = (ref1 = options != null ? options.offset : void 0) != null ? ref1 : 0;
	      newline = (ref2 = options != null ? options.newline : void 0) != null ? ref2 : '\n';
	      level || (level = 0);
	      space = new Array(level + offset + 1).join(indent);
	      r = '';
	      if (pretty) {
	        r += space;
	      }
	      r += '<!ATTLIST ' + this.elementName + ' ' + this.attributeName + ' ' + this.attributeType;
	      if (this.defaultValueType !== '#DEFAULT') {
	        r += ' ' + this.defaultValueType;
	      }
	      if (this.defaultValue) {
	        r += ' "' + this.defaultValue + '"';
	      }
	      r += '>';
	      if (pretty) {
	        r += newline;
	      }
	      return r;
	    };

	    return XMLDTDAttList;

	  })();

	}).call(this);


/***/ }),
/* 259 */
/***/ (function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.9.1
	(function() {
	  var XMLDTDEntity, create, isObject;

	  create = __webpack_require__(161);

	  isObject = __webpack_require__(120);

	  module.exports = XMLDTDEntity = (function() {
	    function XMLDTDEntity(parent, pe, name, value) {
	      this.stringify = parent.stringify;
	      if (name == null) {
	        throw new Error("Missing entity name");
	      }
	      if (value == null) {
	        throw new Error("Missing entity value");
	      }
	      this.pe = !!pe;
	      this.name = this.stringify.eleName(name);
	      if (!isObject(value)) {
	        this.value = this.stringify.dtdEntityValue(value);
	      } else {
	        if (!value.pubID && !value.sysID) {
	          throw new Error("Public and/or system identifiers are required for an external entity");
	        }
	        if (value.pubID && !value.sysID) {
	          throw new Error("System identifier is required for a public external entity");
	        }
	        if (value.pubID != null) {
	          this.pubID = this.stringify.dtdPubID(value.pubID);
	        }
	        if (value.sysID != null) {
	          this.sysID = this.stringify.dtdSysID(value.sysID);
	        }
	        if (value.nData != null) {
	          this.nData = this.stringify.dtdNData(value.nData);
	        }
	        if (this.pe && this.nData) {
	          throw new Error("Notation declaration is not allowed in a parameter entity");
	        }
	      }
	    }

	    XMLDTDEntity.prototype.toString = function(options, level) {
	      var indent, newline, offset, pretty, r, ref, ref1, ref2, space;
	      pretty = (options != null ? options.pretty : void 0) || false;
	      indent = (ref = options != null ? options.indent : void 0) != null ? ref : '  ';
	      offset = (ref1 = options != null ? options.offset : void 0) != null ? ref1 : 0;
	      newline = (ref2 = options != null ? options.newline : void 0) != null ? ref2 : '\n';
	      level || (level = 0);
	      space = new Array(level + offset + 1).join(indent);
	      r = '';
	      if (pretty) {
	        r += space;
	      }
	      r += '<!ENTITY';
	      if (this.pe) {
	        r += ' %';
	      }
	      r += ' ' + this.name;
	      if (this.value) {
	        r += ' "' + this.value + '"';
	      } else {
	        if (this.pubID && this.sysID) {
	          r += ' PUBLIC "' + this.pubID + '" "' + this.sysID + '"';
	        } else if (this.sysID) {
	          r += ' SYSTEM "' + this.sysID + '"';
	        }
	        if (this.nData) {
	          r += ' NDATA ' + this.nData;
	        }
	      }
	      r += '>';
	      if (pretty) {
	        r += newline;
	      }
	      return r;
	    };

	    return XMLDTDEntity;

	  })();

	}).call(this);


/***/ }),
/* 260 */
/***/ (function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.9.1
	(function() {
	  var XMLDTDElement, create;

	  create = __webpack_require__(161);

	  module.exports = XMLDTDElement = (function() {
	    function XMLDTDElement(parent, name, value) {
	      this.stringify = parent.stringify;
	      if (name == null) {
	        throw new Error("Missing DTD element name");
	      }
	      if (!value) {
	        value = '(#PCDATA)';
	      }
	      if (Array.isArray(value)) {
	        value = '(' + value.join(',') + ')';
	      }
	      this.name = this.stringify.eleName(name);
	      this.value = this.stringify.dtdElementValue(value);
	    }

	    XMLDTDElement.prototype.toString = function(options, level) {
	      var indent, newline, offset, pretty, r, ref, ref1, ref2, space;
	      pretty = (options != null ? options.pretty : void 0) || false;
	      indent = (ref = options != null ? options.indent : void 0) != null ? ref : '  ';
	      offset = (ref1 = options != null ? options.offset : void 0) != null ? ref1 : 0;
	      newline = (ref2 = options != null ? options.newline : void 0) != null ? ref2 : '\n';
	      level || (level = 0);
	      space = new Array(level + offset + 1).join(indent);
	      r = '';
	      if (pretty) {
	        r += space;
	      }
	      r += '<!ELEMENT ' + this.name + ' ' + this.value + '>';
	      if (pretty) {
	        r += newline;
	      }
	      return r;
	    };

	    return XMLDTDElement;

	  })();

	}).call(this);


/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.9.1
	(function() {
	  var XMLDTDNotation, create;

	  create = __webpack_require__(161);

	  module.exports = XMLDTDNotation = (function() {
	    function XMLDTDNotation(parent, name, value) {
	      this.stringify = parent.stringify;
	      if (name == null) {
	        throw new Error("Missing notation name");
	      }
	      if (!value.pubID && !value.sysID) {
	        throw new Error("Public or system identifiers are required for an external entity");
	      }
	      this.name = this.stringify.eleName(name);
	      if (value.pubID != null) {
	        this.pubID = this.stringify.dtdPubID(value.pubID);
	      }
	      if (value.sysID != null) {
	        this.sysID = this.stringify.dtdSysID(value.sysID);
	      }
	    }

	    XMLDTDNotation.prototype.toString = function(options, level) {
	      var indent, newline, offset, pretty, r, ref, ref1, ref2, space;
	      pretty = (options != null ? options.pretty : void 0) || false;
	      indent = (ref = options != null ? options.indent : void 0) != null ? ref : '  ';
	      offset = (ref1 = options != null ? options.offset : void 0) != null ? ref1 : 0;
	      newline = (ref2 = options != null ? options.newline : void 0) != null ? ref2 : '\n';
	      level || (level = 0);
	      space = new Array(level + offset + 1).join(indent);
	      r = '';
	      if (pretty) {
	        r += space;
	      }
	      r += '<!NOTATION ' + this.name;
	      if (this.pubID && this.sysID) {
	        r += ' PUBLIC "' + this.pubID + '" "' + this.sysID + '"';
	      } else if (this.pubID) {
	        r += ' PUBLIC "' + this.pubID + '"';
	      } else if (this.sysID) {
	        r += ' SYSTEM "' + this.sysID + '"';
	      }
	      r += '>';
	      if (pretty) {
	        r += newline;
	      }
	      return r;
	    };

	    return XMLDTDNotation;

	  })();

	}).call(this);


/***/ }),
/* 262 */
/***/ (function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.9.1
	(function() {
	  var XMLNode, XMLRaw, create,
	    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	    hasProp = {}.hasOwnProperty;

	  create = __webpack_require__(161);

	  XMLNode = __webpack_require__(164);

	  module.exports = XMLRaw = (function(superClass) {
	    extend(XMLRaw, superClass);

	    function XMLRaw(parent, text) {
	      XMLRaw.__super__.constructor.call(this, parent);
	      if (text == null) {
	        throw new Error("Missing raw text");
	      }
	      this.value = this.stringify.raw(text);
	    }

	    XMLRaw.prototype.clone = function() {
	      return create(XMLRaw.prototype, this);
	    };

	    XMLRaw.prototype.toString = function(options, level) {
	      var indent, newline, offset, pretty, r, ref, ref1, ref2, space;
	      pretty = (options != null ? options.pretty : void 0) || false;
	      indent = (ref = options != null ? options.indent : void 0) != null ? ref : '  ';
	      offset = (ref1 = options != null ? options.offset : void 0) != null ? ref1 : 0;
	      newline = (ref2 = options != null ? options.newline : void 0) != null ? ref2 : '\n';
	      level || (level = 0);
	      space = new Array(level + offset + 1).join(indent);
	      r = '';
	      if (pretty) {
	        r += space;
	      }
	      r += this.value;
	      if (pretty) {
	        r += newline;
	      }
	      return r;
	    };

	    return XMLRaw;

	  })(XMLNode);

	}).call(this);


/***/ }),
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.9.1
	(function() {
	  var XMLNode, XMLText, create,
	    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	    hasProp = {}.hasOwnProperty;

	  create = __webpack_require__(161);

	  XMLNode = __webpack_require__(164);

	  module.exports = XMLText = (function(superClass) {
	    extend(XMLText, superClass);

	    function XMLText(parent, text) {
	      XMLText.__super__.constructor.call(this, parent);
	      if (text == null) {
	        throw new Error("Missing element text");
	      }
	      this.value = this.stringify.eleText(text);
	    }

	    XMLText.prototype.clone = function() {
	      return create(XMLText.prototype, this);
	    };

	    XMLText.prototype.toString = function(options, level) {
	      var indent, newline, offset, pretty, r, ref, ref1, ref2, space;
	      pretty = (options != null ? options.pretty : void 0) || false;
	      indent = (ref = options != null ? options.indent : void 0) != null ? ref : '  ';
	      offset = (ref1 = options != null ? options.offset : void 0) != null ? ref1 : 0;
	      newline = (ref2 = options != null ? options.newline : void 0) != null ? ref2 : '\n';
	      level || (level = 0);
	      space = new Array(level + offset + 1).join(indent);
	      r = '';
	      if (pretty) {
	        r += space;
	      }
	      r += this.value;
	      if (pretty) {
	        r += newline;
	      }
	      return r;
	    };

	    return XMLText;

	  })(XMLNode);

	}).call(this);


/***/ }),
/* 264 */
/***/ (function(module, exports) {

	// Generated by CoffeeScript 1.10.0
	(function() {
	  "use strict";
	  exports.stripBOM = function(str) {
	    if (str[0] === '\uFEFF') {
	      return str.substring(1);
	    } else {
	      return str;
	    }
	  };

	}).call(this);


/***/ }),
/* 265 */
/***/ (function(module, exports) {

	// Generated by CoffeeScript 1.10.0
	(function() {
	  "use strict";
	  var prefixMatch;

	  prefixMatch = new RegExp(/(?!xmlns)^.*:/);

	  exports.normalize = function(str) {
	    return str.toLowerCase();
	  };

	  exports.firstCharLowerCase = function(str) {
	    return str.charAt(0).toLowerCase() + str.slice(1);
	  };

	  exports.stripPrefix = function(str) {
	    return str.replace(prefixMatch, '');
	  };

	  exports.parseNumbers = function(str) {
	    if (!isNaN(str)) {
	      str = str % 1 === 0 ? parseInt(str, 10) : parseFloat(str);
	    }
	    return str;
	  };

	  exports.parseBooleans = function(str) {
	    if (/^(?:true|false)$/i.test(str)) {
	      str = str.toLowerCase() === 'true';
	    }
	    return str;
	  };

	}).call(this);


/***/ }),
/* 266 */
/***/ (function(module, exports) {

	module.exports = require("timers");

/***/ }),
/* 267 */
/***/ (function(module, exports, __webpack_require__) {

	var xmlserializer = __webpack_require__(103);

	var SerializerManager = function(){
		var registry={}, defaultSerializer = null;

		var _private={
			"validate":function(serializer){

				function validateProperties(serializer, props){
					var result = true;
					for (var propIndex in props){
						var propType  = props[propIndex].split(":");
						if (!serializer.hasOwnProperty([propType[0]]) || typeof serializer[propType[0]] !== propType[1]){
							result = false;
							break;
						}
					}

					return result;
				}


				result = validateProperties(serializer,["name:string","serialize:function","isDefault:boolean"]);

				// valid  serializer, check if its not default request serializer, to validate non
				// default serializer props
				if (result && !serializer.isDefault)
					result = validateProperties(serializer,["match:function"]);
				

				return result;
			}
		};

		this.add = function(serializer){
			if (!_private.validate(serializer))
				throw "serializer cannot be added: invalid serializer definition";

			if (serializer.isDefault){
				defaultSerializer = serializer;
			}else{
				registry[serializer.name] = serializer;
			}
		};

		this.remove = function(serializerName){
			var result = registry[serializerName];
			if (!result)
				throw "cannot remove serializer: " + serializerName +" doesn't exists";

			delete registry[serializerName];
		};

		this.find = function(serializerName){
			var result = registry[serializerName];
			if (!result)
				throw "cannot find serializer: " + serializerName +" doesn't exists";

			return result;
		};
		
		
		this.clean = function(){
			registry={};
		};

		this.get = function(request){
			var result = null;
			for (var serializerName in registry){
				if (registry[serializerName].match(request)){
					result = registry[serializerName];
					break;
				}
			}
			// if serializer not found return default serializer, else serializer found
			return (result === null)?defaultSerializer:result;
		};

		this.getAll=function(){
			var result = [];		
			for (var serializerName in registry){
				result.push(registry[serializerName]);
			}
			return result;
		};

		this.getDefault = function(){
			return defaultSerializer;
		};
	};




	module.exports = function(){

	var serializerManager = new SerializerManager();

	var BaseSerializer ={
		"isDefault":false,		
		"match":function(request){
			var result = false,
			contentType = request.headers["Content-Type"] && request.headers["Content-Type"].replace(/ /g, '');

			if (!contentType) return result;

			for (var i=0; i<this.contentTypes.length;i++){
				result = this.contentTypes[i].trim().toLowerCase() === contentType.trim().toLowerCase();
				if (result) break;
			}

			return result;
		}
	};


	//add default serializer managers: JSON,XML and unknown content/type
	serializerManager.add(Object.assign({
		"name":"XML",
		"options":{},	
		"contentTypes":["application/xml","application/xml;charset=utf-8","text/xml","text/xml;charset=utf-8"],
		"xmlSerializer":new xmlserializer.Builder(this.options),	
		"serialize":function(data,nrcEventEmitter,serializedCallback){
			if (typeof data === 'object')
				data = xmlSerializer.buildObject(data);

			serializedCallback(data);
		
		}
	},BaseSerializer));

	serializerManager.add(Object.assign({
		"name":"JSON",	
		"contentTypes":["application/json","application/json;charset=utf-8"],	
		"serialize":function(data,nrcEventEmitter,serializedCallback){
			if(typeof data === 'object')
				data = JSON.stringify(data);
			serializedCallback(data);
	    }
	},BaseSerializer));


	serializerManager.add(Object.assign({
		"name":"FORM-ENCODED",
		"contentTypes":["application/x-www-form-urlencoded","multipart/form-data","text/plain"],
		"encode":function (obj, parent) {
	              var tokens = [], propertyName;
	              //iterate over all properties
	              for(propertyName in obj) {
	                  //if object has property (it's not an array iteration)
	                  if (obj.hasOwnProperty(propertyName)) {
	                  //if property has parent, add nested reference  
	                  var parsedProperty = parent ? parent + "[" + propertyName + "]" : propertyName, propertyValue = obj[propertyName];

	                  // if property has value and is object (we must iterate again, not final leaf)
	                  // iterate over object property passing current parsed property as parent
	                  // else add encoded parsed property and value to result array
	                  tokens.push((propertyValue !== null && typeof propertyValue === "object") ?
	                    serialize(propertyValue, parsedProperty) :
	                    encodeURIComponent(parsedProperty) + "=" + encodeURIComponent(propertyValue));
	                    }
	                }
	                    return tokens.join("&");
	    },	
		"serialize":function(data,nrcEventEmitter,serializedCallback){
			if(typeof data === 'object')
				data = this.encode(data);

			serializedCallback(data);
	    	}
		},BaseSerializer));


	serializerManager.add({
		"name":"DEFAULT",
		"isDefault":true,
		"serialize":function(data,nrcEventEmitter,serializedCallback){
			
			serializedCallback(data.toString());
		}
	});

	return serializerManager;

	};

/***/ }),
/* 268 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _classCallCheck2 = __webpack_require__(76);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(77);

	var _createClass3 = _interopRequireDefault(_createClass2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Config = function () {
	  function Config() {
	    (0, _classCallCheck3.default)(this, Config);
	  }

	  (0, _createClass3.default)(Config, [{
	    key: 'apiKey',
	    value: function apiKey() {
	      return 'AIzaSyB2OABu7ZLGUBKuN3CN7rLqbgKPR-Hnz9Y';
	    }
	  }]);
	  return Config;
	}();

	exports.default = Config;

/***/ })
/******/ ])));