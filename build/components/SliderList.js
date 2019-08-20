"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  transform: translateX(", ");\n  transition: transform 0.6s ease-in-out;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SliderList = _styledComponents["default"].div(_templateObject(), function (_ref) {
  var translateX = _ref.translateX;
  return translateX ? "-".concat(translateX, "%") : '0%';
});

var _default = SliderList;
exports["default"] = _default;