"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/AsideMenu.tsx":
/*!**************************************!*\
  !*** ./src/components/AsideMenu.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AsideMenu\": function() { return /* binding */ AsideMenu; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n\n\nvar options = [\n    {\n        name: \"Home\",\n        to: \"home\"\n    },\n    {\n        name: \"Logout\",\n        to: \"login\"\n    }, \n];\nfunction AsideMenu() {\n    var _this = this;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {\n        as: \"nav\",\n        borderRightWidth: \"1px\",\n        borderStyle: \"solid\",\n        borderColor: \"border\",\n        h: \"100vh\",\n        position: \"fixed\",\n        p: \"16\",\n        gap: \"80px\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.List, {\n            children: options.map(function(option) {\n                /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ListItem, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: option.to,\n                            children: option.name\n                        }, void 0, false, {\n                            fileName: \"/home/joaovictor3g/Documentos/projects/fwitter/src/components/AsideMenu.tsx\",\n                            lineNumber: 27,\n                            columnNumber: 15\n                        }, _this)\n                    }, option.name, false, {\n                        fileName: \"/home/joaovictor3g/Documentos/projects/fwitter/src/components/AsideMenu.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 13\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/home/joaovictor3g/Documentos/projects/fwitter/src/components/AsideMenu.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 11\n                }, _this);\n            })\n        }, void 0, false, {\n            fileName: \"/home/joaovictor3g/Documentos/projects/fwitter/src/components/AsideMenu.tsx\",\n            lineNumber: 23,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/joaovictor3g/Documentos/projects/fwitter/src/components/AsideMenu.tsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, this));\n}\n_c = AsideMenu;\nvar _c;\n$RefreshReg$(_c, \"AsideMenu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Bc2lkZU1lbnUudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQW9FO0FBRXBFLEdBQUssQ0FBQ0ksT0FBTyxHQUFHLENBQUM7SUFDZixDQUFDO1FBQ0NDLElBQUksRUFBRSxDQUFNO1FBQ1pDLEVBQUUsRUFBRSxDQUFNO0lBQ1osQ0FBQztJQUNELENBQUM7UUFBQ0QsSUFBSSxFQUFFLENBQVE7UUFBRUMsRUFBRSxFQUFFLENBQU87SUFBQyxDQUFDO0FBQ2pDLENBQUM7QUFFTSxTQUFTQyxTQUFTLEdBQUcsQ0FBQzs7SUFDM0IsTUFBTSw2RUFDSFAsa0RBQUk7UUFDSFEsRUFBRSxFQUFDLENBQUs7UUFDUkMsZ0JBQWdCLEVBQUMsQ0FBSztRQUN0QkMsV0FBVyxFQUFDLENBQU87UUFDbkJDLFdBQVcsRUFBQyxDQUFRO1FBQ3BCQyxDQUFDLEVBQUMsQ0FBTztRQUNUQyxRQUFRLEVBQUMsQ0FBTztRQUNoQkMsQ0FBQyxFQUFDLENBQUk7UUFDTkMsR0FBRyxFQUFDLENBQU07OEZBRVRkLGtEQUFJO3NCQUNGRyxPQUFPLENBQUNZLEdBQUcsQ0FBQyxRQUFRLENBQVBDLE1BQU07OEJBQ2xCLE1BQU0sK0RBQUxmLHNEQUFROzBHQUNOQyxrREFBSTs4R0FDRmUsQ0FBQzs0QkFBQ0MsSUFBSSxFQUFFRixNQUFNLENBQUNYLEVBQUU7c0NBQUdXLE1BQU0sQ0FBQ1osSUFBSTs7Ozs7O3VCQUR2QlksTUFBTSxDQUFDWixJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRbEMsQ0FBQztLQXZCZUUsU0FBUyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Bc2lkZU1lbnUudHN4PzIyNTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmxleCwgTGlzdCwgTGlzdEl0ZW0sIFN0YWNrLCBMaW5rIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcblxuY29uc3Qgb3B0aW9ucyA9IFtcbiAge1xuICAgIG5hbWU6IFwiSG9tZVwiLFxuICAgIHRvOiBcImhvbWVcIixcbiAgfSxcbiAgeyBuYW1lOiBcIkxvZ291dFwiLCB0bzogXCJsb2dpblwiIH0sXG5dO1xuXG5leHBvcnQgZnVuY3Rpb24gQXNpZGVNZW51KCkge1xuICByZXR1cm4gKFxuICAgIDxGbGV4XG4gICAgICBhcz1cIm5hdlwiXG4gICAgICBib3JkZXJSaWdodFdpZHRoPVwiMXB4XCJcbiAgICAgIGJvcmRlclN0eWxlPVwic29saWRcIlxuICAgICAgYm9yZGVyQ29sb3I9XCJib3JkZXJcIlxuICAgICAgaD1cIjEwMHZoXCJcbiAgICAgIHBvc2l0aW9uPVwiZml4ZWRcIlxuICAgICAgcD1cIjE2XCJcbiAgICAgIGdhcD1cIjgwcHhcIlxuICAgID5cbiAgICAgIDxMaXN0PlxuICAgICAgICB7b3B0aW9ucy5tYXAoKG9wdGlvbikgPT4gKFxuICAgICAgICAgIDxMaXN0SXRlbT5cbiAgICAgICAgICAgIDxMaW5rIGtleT17b3B0aW9uLm5hbWV9PlxuICAgICAgICAgICAgICA8YSBocmVmPXtvcHRpb24udG99PntvcHRpb24ubmFtZX08L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgKSl9XG4gICAgICA8L0xpc3Q+XG4gICAgPC9GbGV4PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkZsZXgiLCJMaXN0IiwiTGlzdEl0ZW0iLCJMaW5rIiwib3B0aW9ucyIsIm5hbWUiLCJ0byIsIkFzaWRlTWVudSIsImFzIiwiYm9yZGVyUmlnaHRXaWR0aCIsImJvcmRlclN0eWxlIiwiYm9yZGVyQ29sb3IiLCJoIiwicG9zaXRpb24iLCJwIiwiZ2FwIiwibWFwIiwib3B0aW9uIiwiYSIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/AsideMenu.tsx\n");

/***/ })

});