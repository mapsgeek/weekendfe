webpackHotUpdate("static/development/pages/interests.js",{

/***/ "./pages/interests.js":
/*!****************************!*\
  !*** ./pages/interests.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _kiwicom_orbit_components_lib_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @kiwicom/orbit-components/lib/Card */ "./node_modules/@kiwicom/orbit-components/lib/Card/index.js");
/* harmony import */ var _kiwicom_orbit_components_lib_Card__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_kiwicom_orbit_components_lib_Card__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _kiwicom_orbit_components_lib_Card_CardSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @kiwicom/orbit-components/lib/Card/CardSection */ "./node_modules/@kiwicom/orbit-components/lib/Card/CardSection/index.js");
/* harmony import */ var _kiwicom_orbit_components_lib_Card_CardSection__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_kiwicom_orbit_components_lib_Card_CardSection__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _kiwicom_orbit_components_lib_Card_CardSection_CardSectionHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @kiwicom/orbit-components/lib/Card/CardSection/CardSectionHeader */ "./node_modules/@kiwicom/orbit-components/lib/Card/CardSection/CardSectionHeader/index.js");
/* harmony import */ var _kiwicom_orbit_components_lib_Card_CardSection_CardSectionHeader__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_kiwicom_orbit_components_lib_Card_CardSection_CardSectionHeader__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _kiwicom_orbit_components_lib_Card_CardSection_CardSectionContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @kiwicom/orbit-components/lib/Card/CardSection/CardSectionContent */ "./node_modules/@kiwicom/orbit-components/lib/Card/CardSection/CardSectionContent/index.js");
/* harmony import */ var _kiwicom_orbit_components_lib_Card_CardSection_CardSectionContent__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_kiwicom_orbit_components_lib_Card_CardSection_CardSectionContent__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/petrsnobelt/Projects/js-weekend-brno-fe/pages/interests.js";






var BrnoInterests = { kind: "Document", definitions: [{ kind: "OperationDefinition", operation: "query", variableDefinitions: [], directives: [], selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "interests" }, arguments: [{ kind: "Argument", name: { kind: "Name", value: "city" }, value: { kind: "StringValue", value: "Brno", block: false } }, { kind: "Argument", name: { kind: "Name", value: "country" }, value: { kind: "StringValue", value: "CZ", block: false } }, { kind: "Argument", name: { kind: "Name", value: "interest" }, value: { kind: "StringValue", value: "drinks", block: false } }], directives: [], selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "img" }, arguments: [], directives: [] }, { kind: "Field", name: { kind: "Name", value: "score" }, arguments: [], directives: [] }, { kind: "Field", name: { kind: "Name", value: "name" }, arguments: [], directives: [] }, { kind: "Field", name: { kind: "Name", value: "category" }, arguments: [], directives: [] }, { kind: "Field", name: { kind: "Name", value: "address" }, arguments: [], directives: [] }] } }] } }], loc: { start: 0, end: 160, source: { body: "# https://weekend-api.now.sh/\n\nquery {\n  interests(city: \"Brno\", country: \"CZ\", interest: \"drinks\") {\n    img\n    score\n    name\n    category\n    address\n  }\n}\n", name: "GraphQL request", locationOffset: { line: 1, column: 1 } } } };

var InterestsSample = function InterestsSample() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], {
    query: BrnoInterests,
    context: {
      uri: "https://weekend-api.now.sh/"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, function (_ref) {
    var loading = _ref.loading,
        error = _ref.error,
        data = _ref.data;
    if (error) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, "error");
    if (loading) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, "Loading");
    return data.interests.map(function (_ref2) {
      var img = _ref2.img,
          score = _ref2.score,
          name = _ref2.name,
          category = _ref2.category,
          address = _ref2.address;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_kiwicom_orbit_components_lib_Card__WEBPACK_IMPORTED_MODULE_2___default.a, {
        key: "".concat(name, "-").concat(address),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_kiwicom_orbit_components_lib_Card_CardSection__WEBPACK_IMPORTED_MODULE_3___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_kiwicom_orbit_components_lib_Card_CardSection_CardSectionHeader__WEBPACK_IMPORTED_MODULE_4___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("em", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, category), " ", name, " [", score, "]"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_kiwicom_orbit_components_lib_Card_CardSection_CardSectionContent__WEBPACK_IMPORTED_MODULE_5___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: img,
        alt: name,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }), address)));
    });
  }));
};

InterestsSample.GQL_API = "https://weekend-api.now.sh/";
/* harmony default export */ __webpack_exports__["default"] = (InterestsSample);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/interests")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=interests.js.b8225c081f4209703705.hot-update.js.map