/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _dec, _class, _desc, _value, _class2;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _throttleDecorator = __webpack_require__(1);

var _throttleDecorator2 = _interopRequireDefault(_throttleDecorator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BaseComponent = function () {
    function BaseComponent() {
        _classCallCheck(this, BaseComponent);
    }

    _createClass(BaseComponent, [{
        key: 'render',
        value: function render() {
            console.log('render');
        }
    }]);

    return BaseComponent;
}();

function component(target, name, descriptor) {
    Object.setPrototypeOf(target.prototype, BaseComponent.prototype);
    Object.setPrototypeOf(target.constructor, target.prototype);
    return target;
}

var App = (_dec = (0, _throttleDecorator2.default)(100), component(_class = (_class2 = function () {
    function App() {
        _classCallCheck(this, App);
    }

    _createClass(App, [{
        key: 'onScroll',
        value: function onScroll() {
            console.log(1);
        }
    }, {
        key: 'init',
        value: function init() {
            var _this = this;

            console.log(2);
            window.addEventListener('scroll', function () {
                console.log(10);
                _this.onScroll();
            });
        }
    }]);

    return App;
}(), (_applyDecoratedDescriptor(_class2.prototype, 'onScroll', [_dec], Object.getOwnPropertyDescriptor(_class2.prototype, 'onScroll'), _class2.prototype)), _class2)) || _class);

/**
 *  var App = (function(){
        class App {
            init() {

            }
            onScroll() {

            }
        }
        var _temp
        _temp = throllte(100)(
            App.prototype, 
            'onScroll',  
            Object.getOwnPropertyDescriptor(App.prototype, "onScroll")
        )
        if (_temp) Object.defineProperty(App.prototype, 'onScroll', _temp)
        return App 
    })()
 */

var app = new App();
app.init();
app.render();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (wait) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    return function (target, name, descriptor) {
        return {
            configurable: true,
            enumerable: descriptor.enumerable,
            get: function get() {
                Object.defineProperty(this, name, {
                    configurable: true,
                    enumerable: descriptor.enumerable,
                    value: (0, _throttle2.default)(descriptor.value, wait, options)
                });
                return this[name];
            }
        };
    };
};

var _throttle = __webpack_require__(2);

var _throttle2 = _interopRequireDefault(_throttle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = throttle;
function throttle(fn) {
    var _this = this,
        _arguments = arguments;

    var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
    var options = arguments[2];

    var context = void 0;
    var args = void 0;
    var result = void 0;
    var previous = void 0;
    var timeout = void 0;
    var later = function later() {
        previous = new Date().getTime();
        timeout = null;
        result = fn.apply(context, args);
        context = args = null;
    };
    return function () {
        context = _this;
        args = _arguments;
        var now = new Date().getTime();
        if (!previous) {
            previous = now;
        }
        var wait = delay - (now - previous);
        if (wait > delay || !delay) {
            clearTimeout(timeout);
            timeout = null;
            previous = now;
            result = fn.call(context, args);
            context = args = null;
        } else if (!timeout) {
            timeout = setTimeout(later, delay);
        }
    };
}

/***/ })
/******/ ]);