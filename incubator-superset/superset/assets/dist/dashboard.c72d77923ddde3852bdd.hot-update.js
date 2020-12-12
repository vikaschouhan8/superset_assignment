webpackHotUpdate("dashboard",{

/***/ "./src/dashboard/components/menu/WithPopoverMenu.jsx":
/*!***********************************************************!*\
  !*** ./src/dashboard/components/menu/WithPopoverMenu.jsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);\n(function () {var enterModule = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\").enterModule;enterModule && enterModule(module);})(); /**\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * Licensed to the Apache Software Foundation (ASF) under one\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * or more contributor license agreements.  See the NOTICE file\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * distributed with this work for additional information\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * regarding copyright ownership.  The ASF licenses this file\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * to you under the Apache License, Version 2.0 (the\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * \"License\"); you may not use this file except in compliance\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * with the License.  You may obtain a copy of the License at\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            *\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            *   http://www.apache.org/licenses/LICENSE-2.0\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            *\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * Unless required by applicable law or agreed to in writing,\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * software distributed under the License is distributed on an\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * KIND, either express or implied.  See the License for the\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * specific language governing permissions and limitations\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * under the License.\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            */\n\n\n\n\nvar propTypes = {\n  children: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.node,\n  disableClick: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,\n  menuItems: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.node),\n  onChangeFocus: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,\n  isFocused: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,\n  shouldFocus: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,\n  editMode: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool.isRequired,\n  style: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object };\n\n\nvar defaultProps = {\n  children: null,\n  disableClick: false,\n  onChangeFocus: null,\n  onPressDelete: function onPressDelete() {},\n  menuItems: [],\n  isFocused: false,\n  shouldFocus: function shouldFocus(event, container) {return (\n      container && container.contains(event.target));},\n  style: null };var\n\n\nWithPopoverMenu = /*#__PURE__*/function (_React$PureComponent) {_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(WithPopoverMenu, _React$PureComponent);\n  function WithPopoverMenu(props) {var _this;_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, WithPopoverMenu);\n    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(WithPopoverMenu).call(this, props));\n    _this.state = {\n      isFocused: props.isFocused };\n\n    _this.setRef = _this.setRef.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));\n    _this.handleClick = _this.handleClick.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));return _this;\n  }_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(WithPopoverMenu, [{ key: \"UNSAFE_componentWillReceiveProps\", value: function UNSAFE_componentWillReceiveProps(\n\n    nextProps) {\n      if (nextProps.editMode && nextProps.isFocused && !this.state.isFocused) {\n        document.addEventListener('click', this.handleClick);\n        document.addEventListener('drag', this.handleClick);\n        this.setState({ isFocused: true });\n      } else if (this.state.isFocused && !nextProps.editMode) {\n        document.removeEventListener('click', this.handleClick);\n        document.removeEventListener('drag', this.handleClick);\n        this.setState({ isFocused: false });\n      }\n    } }, { key: \"componentWillUnmount\", value: function componentWillUnmount()\n\n    {\n      document.removeEventListener('click', this.handleClick);\n      document.removeEventListener('drag', this.handleClick);\n    } }, { key: \"setRef\", value: function setRef(\n\n    ref) {\n      this.container = ref;\n    } }, { key: \"handleClick\", value: function handleClick(\n\n    event) {\n      if (!this.props.editMode) {\n        return;\n      }var _this$props =\n\n\n\n\n      this.props,onChangeFocus = _this$props.onChangeFocus,shouldFocusFunc = _this$props.shouldFocus,disableClick = _this$props.disableClick;\n      var shouldFocus = shouldFocusFunc(event, this.container);\n\n      if (!disableClick && shouldFocus && !this.state.isFocused) {\n        // if not focused, set focus and add a window event listener to capture outside clicks\n        // this enables us to not set a click listener for ever item on a dashboard\n        document.addEventListener('click', this.handleClick);\n        document.addEventListener('drag', this.handleClick);\n        this.setState(function () {return { isFocused: true };});\n        if (onChangeFocus) {\n          onChangeFocus(true);\n        }\n      } else if (!shouldFocus && this.state.isFocused) {\n        document.removeEventListener('click', this.handleClick);\n        document.removeEventListener('drag', this.handleClick);\n        this.setState(function () {return { isFocused: false };});\n        if (onChangeFocus) {\n          onChangeFocus(false);\n        }\n      }\n    } }, { key: \"render\", value: function render()\n\n    {var _this$props2 =\n      this.props,children = _this$props2.children,menuItems = _this$props2.menuItems,editMode = _this$props2.editMode,style = _this$props2.style;var\n      isFocused = this.state.isFocused;\n\n      return (\n        react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(\"div\", {\n          ref: this.setRef,\n          onClick: this.handleClick,\n          role: \"none\",\n          className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(\n          'with-popover-menu',\n          editMode && isFocused && 'with-popover-menu--focused'),\n\n          style: style },\n\n        children,\n        editMode && isFocused && menuItems.length > 0 &&\n        react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(\"div\", { className: \"popover-menu\" },\n        menuItems.map(function (node, i) {return (\n            react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(\"div\", { className: \"menu-item\", key: \"menu-item-\".concat(i) }));}))));\n\n\n\n\n\n\n\n    } }, { key: \"__reactstandin__regenerateByEval\", // @ts-ignore\n    value: function __reactstandin__regenerateByEval(key, code) {// @ts-ignore\n      this[key] = eval(code);} }]);return WithPopoverMenu;}(react__WEBPACK_IMPORTED_MODULE_6___default.a.PureComponent);\nWithPopoverMenu.propTypes = propTypes;\nWithPopoverMenu.defaultProps = defaultProps;var _default =\n\nWithPopoverMenu;/* harmony default export */ __webpack_exports__[\"default\"] = (_default);;(function () {var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\").default;var leaveModule = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\").leaveModule;if (!reactHotLoader) {return;}reactHotLoader.register(propTypes, \"propTypes\", \"/Users/Vikas/Documents/companyAssignment/newEnv/incubator-superset/superset/assets/src/dashboard/components/menu/WithPopoverMenu.jsx\");reactHotLoader.register(defaultProps, \"defaultProps\", \"/Users/Vikas/Documents/companyAssignment/newEnv/incubator-superset/superset/assets/src/dashboard/components/menu/WithPopoverMenu.jsx\");reactHotLoader.register(WithPopoverMenu, \"WithPopoverMenu\", \"/Users/Vikas/Documents/companyAssignment/newEnv/incubator-superset/superset/assets/src/dashboard/components/menu/WithPopoverMenu.jsx\");reactHotLoader.register(_default, \"default\", \"/Users/Vikas/Documents/companyAssignment/newEnv/incubator-superset/superset/assets/src/dashboard/components/menu/WithPopoverMenu.jsx\");leaveModule(module);})();;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZGFzaGJvYXJkL2NvbXBvbmVudHMvbWVudS9XaXRoUG9wb3Zlck1lbnUuanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2Rhc2hib2FyZC9jb21wb25lbnRzL21lbnUvV2l0aFBvcG92ZXJNZW51LmpzeD9jMzA4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogTGljZW5zZWQgdG8gdGhlIEFwYWNoZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIChBU0YpIHVuZGVyIG9uZVxuICogb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuICBTZWUgdGhlIE5PVElDRSBmaWxlXG4gKiBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvblxuICogcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuICBUaGUgQVNGIGxpY2Vuc2VzIHRoaXMgZmlsZVxuICogdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZVxuICogXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4gKiB3aXRoIHRoZSBMaWNlbnNlLiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsXG4gKiBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxuICogXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcbiAqIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZVxuICogc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9uc1xuICogdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5jb25zdCBwcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgZGlzYWJsZUNsaWNrOiBQcm9wVHlwZXMuYm9vbCxcbiAgbWVudUl0ZW1zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubm9kZSksXG4gIG9uQ2hhbmdlRm9jdXM6IFByb3BUeXBlcy5mdW5jLFxuICBpc0ZvY3VzZWQ6IFByb3BUeXBlcy5ib29sLFxuICBzaG91bGRGb2N1czogUHJvcFR5cGVzLmZ1bmMsXG4gIGVkaXRNb2RlOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbn07XG5cbmNvbnN0IGRlZmF1bHRQcm9wcyA9IHtcbiAgY2hpbGRyZW46IG51bGwsXG4gIGRpc2FibGVDbGljazogZmFsc2UsXG4gIG9uQ2hhbmdlRm9jdXM6IG51bGwsXG4gIG9uUHJlc3NEZWxldGUoKSB7fSxcbiAgbWVudUl0ZW1zOiBbXSxcbiAgaXNGb2N1c2VkOiBmYWxzZSxcbiAgc2hvdWxkRm9jdXM6IChldmVudCwgY29udGFpbmVyKSA9PlxuICAgIGNvbnRhaW5lciAmJiBjb250YWluZXIuY29udGFpbnMoZXZlbnQudGFyZ2V0KSxcbiAgc3R5bGU6IG51bGwsXG59O1xuXG5jbGFzcyBXaXRoUG9wb3Zlck1lbnUgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlzRm9jdXNlZDogcHJvcHMuaXNGb2N1c2VkLFxuICAgIH07XG4gICAgdGhpcy5zZXRSZWYgPSB0aGlzLnNldFJlZi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlQ2xpY2sgPSB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyk7XG4gIH1cblxuICBVTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICBpZiAobmV4dFByb3BzLmVkaXRNb2RlICYmIG5leHRQcm9wcy5pc0ZvY3VzZWQgJiYgIXRoaXMuc3RhdGUuaXNGb2N1c2VkKSB7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlQ2xpY2spO1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZycsIHRoaXMuaGFuZGxlQ2xpY2spO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzRm9jdXNlZDogdHJ1ZSB9KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUuaXNGb2N1c2VkICYmICFuZXh0UHJvcHMuZWRpdE1vZGUpIHtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVDbGljayk7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnJywgdGhpcy5oYW5kbGVDbGljayk7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgaXNGb2N1c2VkOiBmYWxzZSB9KTtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlQ2xpY2spO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWcnLCB0aGlzLmhhbmRsZUNsaWNrKTtcbiAgfVxuXG4gIHNldFJlZihyZWYpIHtcbiAgICB0aGlzLmNvbnRhaW5lciA9IHJlZjtcbiAgfVxuXG4gIGhhbmRsZUNsaWNrKGV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLnByb3BzLmVkaXRNb2RlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHtcbiAgICAgIG9uQ2hhbmdlRm9jdXMsXG4gICAgICBzaG91bGRGb2N1czogc2hvdWxkRm9jdXNGdW5jLFxuICAgICAgZGlzYWJsZUNsaWNrLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHNob3VsZEZvY3VzID0gc2hvdWxkRm9jdXNGdW5jKGV2ZW50LCB0aGlzLmNvbnRhaW5lcik7XG5cbiAgICBpZiAoIWRpc2FibGVDbGljayAmJiBzaG91bGRGb2N1cyAmJiAhdGhpcy5zdGF0ZS5pc0ZvY3VzZWQpIHtcbiAgICAgIC8vIGlmIG5vdCBmb2N1c2VkLCBzZXQgZm9jdXMgYW5kIGFkZCBhIHdpbmRvdyBldmVudCBsaXN0ZW5lciB0byBjYXB0dXJlIG91dHNpZGUgY2xpY2tzXG4gICAgICAvLyB0aGlzIGVuYWJsZXMgdXMgdG8gbm90IHNldCBhIGNsaWNrIGxpc3RlbmVyIGZvciBldmVyIGl0ZW0gb24gYSBkYXNoYm9hcmRcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVDbGljayk7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnJywgdGhpcy5oYW5kbGVDbGljayk7XG4gICAgICB0aGlzLnNldFN0YXRlKCgpID0+ICh7IGlzRm9jdXNlZDogdHJ1ZSB9KSk7XG4gICAgICBpZiAob25DaGFuZ2VGb2N1cykge1xuICAgICAgICBvbkNoYW5nZUZvY3VzKHRydWUpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoIXNob3VsZEZvY3VzICYmIHRoaXMuc3RhdGUuaXNGb2N1c2VkKSB7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlQ2xpY2spO1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZycsIHRoaXMuaGFuZGxlQ2xpY2spO1xuICAgICAgdGhpcy5zZXRTdGF0ZSgoKSA9PiAoeyBpc0ZvY3VzZWQ6IGZhbHNlIH0pKTtcbiAgICAgIGlmIChvbkNoYW5nZUZvY3VzKSB7XG4gICAgICAgIG9uQ2hhbmdlRm9jdXMoZmFsc2UpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuLCBtZW51SXRlbXMsIGVkaXRNb2RlLCBzdHlsZSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGlzRm9jdXNlZCB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIHJlZj17dGhpcy5zZXRSZWZ9XG4gICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9XG4gICAgICAgIHJvbGU9XCJub25lXCJcbiAgICAgICAgY2xhc3NOYW1lPXtjeChcbiAgICAgICAgICAnd2l0aC1wb3BvdmVyLW1lbnUnLFxuICAgICAgICAgIGVkaXRNb2RlICYmIGlzRm9jdXNlZCAmJiAnd2l0aC1wb3BvdmVyLW1lbnUtLWZvY3VzZWQnLFxuICAgICAgICApfVxuICAgICAgICBzdHlsZT17c3R5bGV9XG4gICAgICA+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAge2VkaXRNb2RlICYmIGlzRm9jdXNlZCAmJiBtZW51SXRlbXMubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3BvdmVyLW1lbnVcIj5cbiAgICAgICAgICAgIHttZW51SXRlbXMubWFwKChub2RlLCBpKSA9PiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudS1pdGVtXCIga2V5PXtgbWVudS1pdGVtLSR7aX1gfT5cbiAgICAgICAgICAgICAgICB7Lyoge25vZGV9ICovfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5XaXRoUG9wb3Zlck1lbnUucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xuV2l0aFBvcG92ZXJNZW51LmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcblxuZXhwb3J0IGRlZmF1bHQgV2l0aFBvcG92ZXJNZW51O1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUF4RkE7QUEyRkE7QUFDQTtBQUNBO0FBQ0E7QSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/dashboard/components/menu/WithPopoverMenu.jsx\n");

/***/ })

})