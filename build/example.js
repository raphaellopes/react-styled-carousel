"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _Root = _interopRequireDefault(require("./Root"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* global document */
_reactDom["default"].render(_react["default"].createElement(_Root["default"], null), document.getElementById('root'));