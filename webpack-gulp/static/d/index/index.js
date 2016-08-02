webpackJsonp([0,1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by baixing on 15/10/10.
	 */
	
	'use strict';
	
	var _indexIndex = __webpack_require__(1);
	
	//test()

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by baixing on 15/10/10.
	 */
	
	'use strict';
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	exports.__esModule = true;
	exports.test = test;
	
	var _es = __webpack_require__(3);
	
	var _es2 = _interopRequireDefault(_es);
	
	function test() {
	  console.log('update');
	}

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	
	exports["default"] = function (obj) {
	  return obj && obj.__esModule ? obj : {
	    "default": obj
	  };
	};
	
	exports.__esModule = true;

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";
	
	function getValue() {
	  var a = 1;
	  var b = 1;
	  if (true) {
	    b = 2;
	    a = 3;
	  }
	  console.log(a);
	  console.log(b);
	}
	var c = 10;
	console.log(c);
	getValue();

/***/ }
]);
//# sourceMappingURL=index.js.map