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

/***/ "./src/layout/Page.tsx":
/*!*****************************!*\
  !*** ./src/layout/Page.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Page\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_AsideMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/AsideMenu */ \"./src/components/AsideMenu.tsx\");\n/* harmony import */ var _components_AsideRightMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/AsideRightMenu */ \"./src/components/AsideRightMenu.tsx\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Header */ \"./src/components/Header.tsx\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n\n\n\n\n\nfunction Page(param) {\n    var children = param.children;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Grid, {\n        templateColumns: \"275px 600px 325px\",\n        maxW: \"1200px\",\n        w: \"100%\",\n        m: \"0 auto\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AsideMenu__WEBPACK_IMPORTED_MODULE_1__.AsideMenu, {}, void 0, false, {\n                fileName: \"/home/joaovictor3g/Documentos/projects/fwitter/src/layout/Page.tsx\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                as: \"section\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_3__.Header, {}, void 0, false, {\n                        fileName: \"/home/joaovictor3g/Documentos/projects/fwitter/src/layout/Page.tsx\",\n                        lineNumber: 11,\n                        columnNumber: 9\n                    }, this),\n                    children\n                ]\n            }, void 0, true, {\n                fileName: \"/home/joaovictor3g/Documentos/projects/fwitter/src/layout/Page.tsx\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AsideRightMenu__WEBPACK_IMPORTED_MODULE_2__.AsideRightMenu, {}, void 0, false, {\n                fileName: \"/home/joaovictor3g/Documentos/projects/fwitter/src/layout/Page.tsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/joaovictor3g/Documentos/projects/fwitter/src/layout/Page.tsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this));\n}\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGF5b3V0L1BhZ2UudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWtEO0FBQ1U7QUFDaEI7QUFDZ0I7QUFFckQsU0FBU0ssSUFBSSxDQUFDLEtBQWlCLEVBQUUsQ0FBQztRQUFsQkMsUUFBUSxHQUFWLEtBQWlCLENBQWZBLFFBQVE7SUFDN0IsTUFBTSw2RUFDSEYsa0RBQUk7UUFBQ0csZUFBZSxFQUFDLENBQW1CO1FBQUNDLElBQUksRUFBQyxDQUFRO1FBQUNDLENBQUMsRUFBQyxDQUFNO1FBQUNDLENBQUMsRUFBQyxDQUFROzt3RkFDeEVWLDREQUFTOzs7Ozt3RkFDVEcsaURBQUc7Z0JBQUNRLEVBQUUsRUFBQyxDQUFTOztnR0FDZFQsc0RBQU07Ozs7O29CQUNOSSxRQUFROzs7Ozs7O3dGQUVWTCxzRUFBYzs7Ozs7Ozs7Ozs7QUFHckIsQ0FBQztLQVhlSSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9sYXlvdXQvUGFnZS50c3g/YzZlYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBc2lkZU1lbnUgfSBmcm9tIFwiQC9jb21wb25lbnRzL0FzaWRlTWVudVwiO1xuaW1wb3J0IHsgQXNpZGVSaWdodE1lbnUgfSBmcm9tIFwiQC9jb21wb25lbnRzL0FzaWRlUmlnaHRNZW51XCI7XG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tIFwiQC9jb21wb25lbnRzL0hlYWRlclwiO1xuaW1wb3J0IHsgQm94LCBGbGV4LCBHcmlkLCBHcmlkSXRlbSB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBQYWdlKHsgY2hpbGRyZW4gfTogYW55KSB7XG4gIHJldHVybiAoXG4gICAgPEdyaWQgdGVtcGxhdGVDb2x1bW5zPVwiMjc1cHggNjAwcHggMzI1cHhcIiBtYXhXPVwiMTIwMHB4XCIgdz1cIjEwMCVcIiBtPVwiMCBhdXRvXCI+XG4gICAgICA8QXNpZGVNZW51IC8+XG4gICAgICA8Qm94IGFzPVwic2VjdGlvblwiPlxuICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvQm94PlxuICAgICAgPEFzaWRlUmlnaHRNZW51IC8+XG4gICAgPC9HcmlkPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkFzaWRlTWVudSIsIkFzaWRlUmlnaHRNZW51IiwiSGVhZGVyIiwiQm94IiwiR3JpZCIsIlBhZ2UiLCJjaGlsZHJlbiIsInRlbXBsYXRlQ29sdW1ucyIsIm1heFciLCJ3IiwibSIsImFzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/layout/Page.tsx\n");

/***/ })

});