"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  color: #000;\n  position: absolute;\n  margin-left: 3px;\n  margin-top: 11px;\n  width: 16px;\n  height: 2px;\n  background-color: ", ";\n  left: 0px;\n  top: calc(50% - 5px);\n  border: 0;\n  cursor: ", ";\n  outline: none;\n  z-index: 1;\n  :before {\n    content: '';\n    position: absolute;\n    left: 1px;\n    top: -5px;\n    width: 10px;\n    height: 10px;\n    border-top: solid 2px ", ";\n    border-right: solid 2px ", ";\n    transform: rotate(-135deg);\n  }\n  :after {\n    content: '';\n    position: absolute;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var LeftArrow = _styledComponents["default"].button(_templateObject(), function (_ref) {
  var disabled = _ref.disabled;
  return disabled ? '#B2B2B2' : '#000000';
}, function (_ref2) {
  var disabled = _ref2.disabled;
  return disabled ? 'not-allowed' : 'pointer';
}, function (_ref3) {
  var disabled = _ref3.disabled;
  return disabled ? '#B2B2B2' : '#000000';
}, function (_ref4) {
  var disabled = _ref4.disabled;
  return disabled ? '#B2B2B2' : '#000000';
});

var _default = LeftArrow;
exports["default"] = _default;