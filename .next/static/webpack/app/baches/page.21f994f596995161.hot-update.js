"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/baches/page",{

/***/ "(app-pages-browser)/./app/component/common/customSideBar.js":
/*!***********************************************!*\
  !*** ./app/component/common/customSideBar.js ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_getSetGo_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../public/getSetGo.svg */ \"(app-pages-browser)/./public/getSetGo.svg\");\n/* harmony import */ var _lib_commonImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/commonImage */ \"(app-pages-browser)/./lib/commonImage.js\");\n/* harmony import */ var _public_Logout_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../public/Logout.svg */ \"(app-pages-browser)/./public/Logout.svg\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst CustomSideBar = ()=>{\n    var _sideBarContent;\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_5__.usePathname)();\n    // useEffect(()=>{\n    //   router.push('/dashboard')\n    // },[])\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-sideBarColor min-w-max w-56  h-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-9 pl-6\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    src: _public_getSetGo_svg__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n                    alt: \"get set go image\"\n                }, void 0, false, {\n                    fileName: \"/Users/appiness/Documents/get-set-go-github/get-set-go/app/component/common/customSideBar.js\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/appiness/Documents/get-set-go-github/get-set-go/app/component/common/customSideBar.js\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" flex flex-col gap-6\",\n                children: (_sideBarContent = _lib_commonImage__WEBPACK_IMPORTED_MODULE_3__.sideBarContent) === null || _sideBarContent === void 0 ? void 0 : _sideBarContent.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"rounded items-center flex pl-3 gap-2 hover:bg-sideBarHoverColor w-full h-6 cursor-pointer \\n            \".concat(pathname.includes(item.link) && \"bg-sideBarHoverColor w-full h-6 cursor-pointer\"),\n                        onClick: ()=>router.push(\"\".concat(item.link)),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                src: item.img,\n                                alt: item.message\n                            }, void 0, false, {\n                                fileName: \"/Users/appiness/Documents/get-set-go-github/get-set-go/app/component/common/customSideBar.js\",\n                                lineNumber: 31,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"small\", {\n                                className: \"min-w-max\",\n                                children: item.name\n                            }, void 0, false, {\n                                fileName: \"/Users/appiness/Documents/get-set-go-github/get-set-go/app/component/common/customSideBar.js\",\n                                lineNumber: 32,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, item.id, true, {\n                        fileName: \"/Users/appiness/Documents/get-set-go-github/get-set-go/app/component/common/customSideBar.js\",\n                        lineNumber: 22,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/appiness/Documents/get-set-go-github/get-set-go/app/component/common/customSideBar.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" pt-20   \",\n                onClick: router.push(\"/\"),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \" rounded pl-3 flex gap-2 items-center hover:bg-sideBarHoverColor w-full h-6 cursor-pointer\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            src: _public_Logout_svg__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                            alt: \"logout image\"\n                        }, void 0, false, {\n                            fileName: \"/Users/appiness/Documents/get-set-go-github/get-set-go/app/component/common/customSideBar.js\",\n                            lineNumber: 38,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"small\", {\n                            children: \"Logout\"\n                        }, void 0, false, {\n                            fileName: \"/Users/appiness/Documents/get-set-go-github/get-set-go/app/component/common/customSideBar.js\",\n                            lineNumber: 39,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/appiness/Documents/get-set-go-github/get-set-go/app/component/common/customSideBar.js\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/appiness/Documents/get-set-go-github/get-set-go/app/component/common/customSideBar.js\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/appiness/Documents/get-set-go-github/get-set-go/app/component/common/customSideBar.js\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CustomSideBar, \"gA9e4WsoP6a20xDgQgrFkfMP8lc=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_5__.useRouter,\n        next_navigation__WEBPACK_IMPORTED_MODULE_5__.usePathname\n    ];\n});\n_c = CustomSideBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CustomSideBar);\nvar _c;\n$RefreshReg$(_c, \"CustomSideBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnQvY29tbW9uL2N1c3RvbVNpZGVCYXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUMrQjtBQUMwQjtBQUNOO0FBQ0U7QUFDSTtBQUN2QjtBQUVsQyxNQUFNTyxnQkFBZ0I7UUFZYkw7O0lBWFAsTUFBTU0sU0FBU0osMERBQVNBO0lBQ3hCLE1BQU1LLFdBQVdKLDREQUFXQTtJQUM1QixrQkFBa0I7SUFDbEIsOEJBQThCO0lBQzlCLFFBQVE7SUFDUixxQkFDRSw4REFBQ0s7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDWCxtREFBS0E7b0JBQUNZLEtBQUtYLDREQUFhQTtvQkFBRVksS0FBSTs7Ozs7Ozs7Ozs7MEJBRWpDLDhEQUFDSDtnQkFBSUMsV0FBVTsyQkFDWlQsa0JBQUFBLDREQUFjQSxjQUFkQSxzQ0FBQUEsZ0JBQWdCWSxHQUFHLENBQUMsQ0FBQ0MscUJBQ3BCLDhEQUFDTDt3QkFFQ0MsV0FBVywyR0FJVixPQUZDRixTQUFTTyxRQUFRLENBQUNELEtBQUtFLElBQUksS0FDM0I7d0JBRUZDLFNBQVMsSUFBTVYsT0FBT1csSUFBSSxDQUFDLEdBQWEsT0FBVkosS0FBS0UsSUFBSTs7MENBRXZDLDhEQUFDakIsbURBQUtBO2dDQUFDWSxLQUFLRyxLQUFLSyxHQUFHO2dDQUFFUCxLQUFLRSxLQUFLTSxPQUFPOzs7Ozs7MENBQ3ZDLDhEQUFDQztnQ0FBTVgsV0FBVTswQ0FBYUksS0FBS1EsSUFBSTs7Ozs7Ozt1QkFUbENSLEtBQUtTLEVBQUU7Ozs7Ozs7Ozs7MEJBYWxCLDhEQUFDZDtnQkFBSUMsV0FBVTtnQkFBWU8sU0FBU1YsT0FBT1csSUFBSSxDQUFDOzBCQUM5Qyw0RUFBQ1Q7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDWCxtREFBS0E7NEJBQUNZLEtBQUtULDBEQUFXQTs0QkFBRVUsS0FBSTs7Ozs7O3NDQUM3Qiw4REFBQ1M7c0NBQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2pCO0dBbkNNZjs7UUFDV0gsc0RBQVNBO1FBQ1BDLHdEQUFXQTs7O0tBRnhCRTtBQXFDTiwrREFBZUEsYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50L2NvbW1vbi9jdXN0b21TaWRlQmFyLmpzP2FiZTkiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBnZXRTZXRHb0ltYWdlIGZyb20gXCIuLi8uLi8uLi9wdWJsaWMvZ2V0U2V0R28uc3ZnXCI7XG5pbXBvcnQgeyBzaWRlQmFyQ29udGVudCB9IGZyb20gXCJAL2xpYi9jb21tb25JbWFnZVwiO1xuaW1wb3J0IExvZ291dEltYWdlIGZyb20gXCIuLi8uLi8uLi9wdWJsaWMvTG9nb3V0LnN2Z1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyLCB1c2VQYXRobmFtZSB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBDdXN0b21TaWRlQmFyID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgcGF0aG5hbWUgPSB1c2VQYXRobmFtZSgpO1xuICAvLyB1c2VFZmZlY3QoKCk9PntcbiAgLy8gICByb3V0ZXIucHVzaCgnL2Rhc2hib2FyZCcpXG4gIC8vIH0sW10pXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiZy1zaWRlQmFyQ29sb3IgbWluLXctbWF4XHQgdy01NiAgaC1zY3JlZW5cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItOSBwbC02XCI+XG4gICAgICAgIDxJbWFnZSBzcmM9e2dldFNldEdvSW1hZ2V9IGFsdD1cImdldCBzZXQgZ28gaW1hZ2VcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBmbGV4IGZsZXgtY29sIGdhcC02XCI+XG4gICAgICAgIHtzaWRlQmFyQ29udGVudD8ubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgcm91bmRlZCBpdGVtcy1jZW50ZXIgZmxleCBwbC0zIGdhcC0yIGhvdmVyOmJnLXNpZGVCYXJIb3ZlckNvbG9yIHctZnVsbCBoLTYgY3Vyc29yLXBvaW50ZXIgXG4gICAgICAgICAgICAke1xuICAgICAgICAgICAgICBwYXRobmFtZS5pbmNsdWRlcyhpdGVtLmxpbmspICYmXG4gICAgICAgICAgICAgIFwiYmctc2lkZUJhckhvdmVyQ29sb3Igdy1mdWxsIGgtNiBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgICB9YH1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKGAke2l0ZW0ubGlua31gKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPXtpdGVtLmltZ30gYWx0PXtpdGVtLm1lc3NhZ2V9IC8+XG4gICAgICAgICAgICA8c21hbGwgY2xhc3NOYW1lPVwibWluLXctbWF4XCI+e2l0ZW0ubmFtZX08L3NtYWxsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCIgcHQtMjAgICBcIiBvbkNsaWNrPXtyb3V0ZXIucHVzaCgnLycpfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgcm91bmRlZCBwbC0zIGZsZXggZ2FwLTIgaXRlbXMtY2VudGVyIGhvdmVyOmJnLXNpZGVCYXJIb3ZlckNvbG9yIHctZnVsbCBoLTYgY3Vyc29yLXBvaW50ZXJcIj5cbiAgICAgICAgICA8SW1hZ2Ugc3JjPXtMb2dvdXRJbWFnZX0gYWx0PVwibG9nb3V0IGltYWdlXCIgLz5cbiAgICAgICAgICA8c21hbGw+TG9nb3V0PC9zbWFsbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEN1c3RvbVNpZGVCYXI7XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJnZXRTZXRHb0ltYWdlIiwic2lkZUJhckNvbnRlbnQiLCJMb2dvdXRJbWFnZSIsInVzZVJvdXRlciIsInVzZVBhdGhuYW1lIiwidXNlRWZmZWN0IiwiQ3VzdG9tU2lkZUJhciIsInJvdXRlciIsInBhdGhuYW1lIiwiZGl2IiwiY2xhc3NOYW1lIiwic3JjIiwiYWx0IiwibWFwIiwiaXRlbSIsImluY2x1ZGVzIiwibGluayIsIm9uQ2xpY2siLCJwdXNoIiwiaW1nIiwibWVzc2FnZSIsInNtYWxsIiwibmFtZSIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/component/common/customSideBar.js\n"));

/***/ })

});