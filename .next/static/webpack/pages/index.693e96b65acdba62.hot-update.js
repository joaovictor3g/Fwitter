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

/***/ "./src/components/shared/FweetBox.tsx":
/*!********************************************!*\
  !*** ./src/components/shared/FweetBox.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"FweetBox\": function() { return /* binding */ FweetBox; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _BorderedBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BorderedBox */ \"./src/components/shared/BorderedBox.tsx\");\n\n\n\nfunction FweetBox() {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BorderedBox__WEBPACK_IMPORTED_MODULE_1__.BorderedBox, {\n        display: \"flex\",\n        p: \"6\",\n        gap: \"20px\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Avatar, {\n                name: \"Jo\\xe3o Victor\"\n            }, void 0, false, {\n                fileName: \"/home/joaovictor3g/Documentos/projects/fwitter/src/components/shared/FweetBox.tsx\",\n                lineNumber: 7,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                h: \"100px\",\n                display: \"flex\",\n                flexDir: \"column\",\n                justifyContent: \"space-between\",\n                w: \"100%\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                        as: \"span\",\n                        children: \"Jo\\xe3o Victor\"\n                    }, void 0, false, {\n                        fileName: \"/home/joaovictor3g/Documentos/projects/fwitter/src/components/shared/FweetBox.tsx\",\n                        lineNumber: 16,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                        as: \"p\",\n                        children: \"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam dicta optio dignissimos corrupti possimus dolore, repellendus velit neque qui obcaecati tenetur quis labore, in suscipit minima similique provident illum voluptates.\"\n                    }, void 0, false, {\n                        fileName: \"/home/joaovictor3g/Documentos/projects/fwitter/src/components/shared/FweetBox.tsx\",\n                        lineNumber: 17,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/joaovictor3g/Documentos/projects/fwitter/src/components/shared/FweetBox.tsx\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/joaovictor3g/Documentos/projects/fwitter/src/components/shared/FweetBox.tsx\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this));\n}\n_c = FweetBox;\nvar _c;\n$RefreshReg$(_c, \"FweetBox\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zaGFyZWQvRndlZXRCb3gudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFvRDtBQUNUO0FBRXBDLFNBQVNJLFFBQVEsR0FBRyxDQUFDO0lBQzFCLE1BQU0sNkVBQ0hELHFEQUFXO1FBQUNFLE9BQU8sRUFBQyxDQUFNO1FBQUNDLENBQUMsRUFBQyxDQUFHO1FBQUNDLEdBQUcsRUFBQyxDQUFNOzt3RkFDekNQLG9EQUFNO2dCQUFDUSxJQUFJLEVBQUMsQ0FBYTs7Ozs7O3dGQUV4QlAsaURBQUU7Z0JBQ0ZRLENBQUMsRUFBQyxDQUFPO2dCQUNUSixPQUFPLEVBQUMsQ0FBTTtnQkFDZEssT0FBTyxFQUFDLENBQVE7Z0JBQ2hCQyxjQUFjLEVBQUMsQ0FBZTtnQkFDOUJDLENBQUMsRUFBQyxDQUFNOztnR0FFUFYsa0RBQUk7d0JBQUNXLEVBQUUsRUFBQyxDQUFNO2tDQUFDLENBQVc7Ozs7OztnR0FDMUJYLGtEQUFJO3dCQUFDVyxFQUFFLEVBQUMsQ0FBRztrQ0FBQyxDQUtiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJUixDQUFDO0tBdEJlVCxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3NoYXJlZC9Gd2VldEJveC50c3g/NjY1YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBdmF0YXIsIEJveCwgVGV4dCB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgeyBCb3JkZXJlZEJveCB9IGZyb20gXCIuL0JvcmRlcmVkQm94XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBGd2VldEJveCgpIHtcbiAgcmV0dXJuIChcbiAgICA8Qm9yZGVyZWRCb3ggZGlzcGxheT1cImZsZXhcIiBwPVwiNlwiIGdhcD1cIjIwcHhcIj5cbiAgICAgIDxBdmF0YXIgbmFtZT1cIkpvw6NvIFZpY3RvclwiIC8+XG5cbiAgICAgIDxCb3hcbiAgICAgICAgaD1cIjEwMHB4XCJcbiAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgICBmbGV4RGlyPVwiY29sdW1uXCJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCJcbiAgICAgICAgdz1cIjEwMCVcIlxuICAgICAgPlxuICAgICAgICA8VGV4dCBhcz1cInNwYW5cIj5Kb8OjbyBWaWN0b3I8L1RleHQ+XG4gICAgICAgIDxUZXh0IGFzPVwicFwiPlxuICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCwgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBBbGlxdWFtXG4gICAgICAgICAgZGljdGEgb3B0aW8gZGlnbmlzc2ltb3MgY29ycnVwdGkgcG9zc2ltdXMgZG9sb3JlLCByZXBlbGxlbmR1cyB2ZWxpdFxuICAgICAgICAgIG5lcXVlIHF1aSBvYmNhZWNhdGkgdGVuZXR1ciBxdWlzIGxhYm9yZSwgaW4gc3VzY2lwaXQgbWluaW1hIHNpbWlsaXF1ZVxuICAgICAgICAgIHByb3ZpZGVudCBpbGx1bSB2b2x1cHRhdGVzLlxuICAgICAgICA8L1RleHQ+XG4gICAgICA8L0JveD5cbiAgICA8L0JvcmRlcmVkQm94PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkF2YXRhciIsIkJveCIsIlRleHQiLCJCb3JkZXJlZEJveCIsIkZ3ZWV0Qm94IiwiZGlzcGxheSIsInAiLCJnYXAiLCJuYW1lIiwiaCIsImZsZXhEaXIiLCJqdXN0aWZ5Q29udGVudCIsInciLCJhcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/shared/FweetBox.tsx\n");

/***/ })

});