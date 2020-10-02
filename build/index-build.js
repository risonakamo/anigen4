/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"index": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./index.tsx","vendors-index"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/show-box/show-box.less":
/*!*******************************************!*\
  !*** ./components/show-box/show-box.less ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Nob3ctYm94L3Nob3ctYm94Lmxlc3M/OWExYSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiIuL2NvbXBvbmVudHMvc2hvdy1ib3gvc2hvdy1ib3gubGVzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/show-box/show-box.less\n");

/***/ }),

/***/ "./components/show-box/show-box.tsx":
/*!******************************************!*\
  !*** ./components/show-box/show-box.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ShowBox; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _show_box_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./show-box.less */ \"./components/show-box/show-box.less\");\n/* harmony import */ var _show_box_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_show_box_less__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction ShowBox() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"show-box\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"top-contain\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"season\"\n  }, \"Winter\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, \"2020\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    src: \"../ref/testimage.jpg\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"content-contain\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \"Houkago Teibou Nisshi\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"tags\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, \"Slice of Life\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, \"Comedy\"))));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Nob3ctYm94L3Nob3ctYm94LnRzeD9lNGZiIl0sIm5hbWVzIjpbIlNob3dCb3giXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFFZSxTQUFTQSxPQUFULEdBQ2Y7QUFDRSxzQkFBTztBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNMO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0U7QUFBTSxhQUFTLEVBQUM7QUFBaEIsY0FERixlQUVFLGdGQUZGLENBREssZUFNTDtBQUFLLE9BQUcsRUFBQztBQUFULElBTkssZUFRTDtBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNFLCtGQURGLGVBRUU7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDRSx5RkFERixlQUVFLGtGQUZGLENBRkYsQ0FSSyxDQUFQO0FBZ0JEIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9zaG93LWJveC9zaG93LWJveC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgXCIuL3Nob3ctYm94Lmxlc3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNob3dCb3goKTpKU1guRWxlbWVudFxyXG57XHJcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwic2hvdy1ib3hcIj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wLWNvbnRhaW5cIj5cclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2Vhc29uXCI+V2ludGVyPC9zcGFuPlxyXG4gICAgICA8c3Bhbj4yMDIwPC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGltZyBzcmM9XCIuLi9yZWYvdGVzdGltYWdlLmpwZ1wiLz5cclxuXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtY29udGFpblwiPlxyXG4gICAgICA8aDI+SG91a2FnbyBUZWlib3UgTmlzc2hpPC9oMj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWdzXCI+XHJcbiAgICAgICAgPHNwYW4+U2xpY2Ugb2YgTGlmZTwvc3Bhbj5cclxuICAgICAgICA8c3Bhbj5Db21lZHk8L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+O1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/show-box/show-box.tsx\n");

/***/ }),

/***/ "./components/show-section/show-section.less":
/*!***************************************************!*\
  !*** ./components/show-section/show-section.less ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Nob3ctc2VjdGlvbi9zaG93LXNlY3Rpb24ubGVzcz83YTA4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9zaG93LXNlY3Rpb24vc2hvdy1zZWN0aW9uLmxlc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/show-section/show-section.less\n");

/***/ }),

/***/ "./components/show-section/show-section.tsx":
/*!**************************************************!*\
  !*** ./components/show-section/show-section.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ShowSection; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _show_box_show_box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../show-box/show-box */ \"./components/show-box/show-box.tsx\");\n/* harmony import */ var _show_section_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./show-section.less */ \"./components/show-section/show-section.less\");\n/* harmony import */ var _show_section_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_show_section_less__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction ShowSection() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"section\", {\n    className: \"show-section\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"title-zone\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"TV\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"title-bar\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"inner-bar\"\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"shows-contain\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_show_box_show_box__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_show_box_show_box__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_show_box_show_box__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null)));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Nob3ctc2VjdGlvbi9zaG93LXNlY3Rpb24udHN4P2YzZDQiXSwibmFtZXMiOlsiU2hvd1NlY3Rpb24iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBRWUsU0FBU0EsV0FBVCxHQUNmO0FBQ0Usc0JBQU87QUFBUyxhQUFTLEVBQUM7QUFBbkIsa0JBQ0w7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDRSw0RUFERixlQUVFO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0U7QUFBSyxhQUFTLEVBQUM7QUFBZixJQURGLENBRkYsQ0FESyxlQU9MO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0UsMkRBQUMsMERBQUQsT0FERixlQUVFLDJEQUFDLDBEQUFELE9BRkYsZUFHRSwyREFBQywwREFBRCxPQUhGLENBUEssQ0FBUDtBQWFEIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9zaG93LXNlY3Rpb24vc2hvdy1zZWN0aW9uLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBTaG93Qm94IGZyb20gXCIuLi9zaG93LWJveC9zaG93LWJveFwiO1xyXG5cclxuaW1wb3J0IFwiLi9zaG93LXNlY3Rpb24ubGVzc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2hvd1NlY3Rpb24oKTpKU1guRWxlbWVudFxyXG57XHJcbiAgcmV0dXJuIDxzZWN0aW9uIGNsYXNzTmFtZT1cInNob3ctc2VjdGlvblwiPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZS16b25lXCI+XHJcbiAgICAgIDxoMT5UVjwvaDE+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUtYmFyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lci1iYXJcIj48L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2hvd3MtY29udGFpblwiPlxyXG4gICAgICA8U2hvd0JveC8+XHJcbiAgICAgIDxTaG93Qm94Lz5cclxuICAgICAgPFNob3dCb3gvPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9zZWN0aW9uPjtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/show-section/show-section.tsx\n");

/***/ }),

/***/ "./index.less":
/*!********************!*\
  !*** ./index.less ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pbmRleC5sZXNzPzNjZTUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiLi9pbmRleC5sZXNzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./index.less\n");

/***/ }),

/***/ "./index.tsx":
/*!*******************!*\
  !*** ./index.tsx ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_show_section_show_section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/show-section/show-section */ \"./components/show-section/show-section.tsx\");\n/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.less */ \"./index.less\");\n/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nfunction IndexMain() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_show_section_show_section__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_show_section_show_section__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null));\n}\n\nfunction main() {\n  react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IndexMain, null), document.querySelector(\".main\"));\n}\n\nwindow.onload = main;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pbmRleC50c3g/ZmUxYiJdLCJuYW1lcyI6WyJJbmRleE1haW4iLCJtYWluIiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ3aW5kb3ciLCJvbmxvYWQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFFQTs7QUFFQSxTQUFTQSxTQUFULEdBQ0E7QUFDRSxzQkFBTyxxSUFDTCwyREFBQyw2RUFBRCxPQURLLGVBRUwsMkRBQUMsNkVBQUQsT0FGSyxDQUFQO0FBSUQ7O0FBRUQsU0FBU0MsSUFBVCxHQUNBO0FBQ0VDLGtEQUFRLENBQUNDLE1BQVQsZUFBZ0IsMkRBQUMsU0FBRCxPQUFoQixFQUE2QkMsUUFBUSxDQUFDQyxhQUFULENBQXVCLE9BQXZCLENBQTdCO0FBQ0Q7O0FBRURDLE1BQU0sQ0FBQ0MsTUFBUCxHQUFjTixJQUFkIiwiZmlsZSI6Ii4vaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xyXG5cclxuaW1wb3J0IFNob3dTZWN0aW9uIGZyb20gXCIuL2NvbXBvbmVudHMvc2hvdy1zZWN0aW9uL3Nob3ctc2VjdGlvblwiO1xyXG5cclxuaW1wb3J0IFwiLi9pbmRleC5sZXNzXCI7XHJcblxyXG5mdW5jdGlvbiBJbmRleE1haW4oKTpKU1guRWxlbWVudFxyXG57XHJcbiAgcmV0dXJuIDw+XHJcbiAgICA8U2hvd1NlY3Rpb24vPlxyXG4gICAgPFNob3dTZWN0aW9uLz5cclxuICA8Lz47XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1haW4oKVxyXG57XHJcbiAgUmVhY3RET00ucmVuZGVyKDxJbmRleE1haW4vPixkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5cIikpO1xyXG59XHJcblxyXG53aW5kb3cub25sb2FkPW1haW47Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./index.tsx\n");

/***/ })

/******/ });