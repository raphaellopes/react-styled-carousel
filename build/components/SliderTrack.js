"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: auto;\n  position: relative;\n  height: auto;\n  width: 100%;\n  display: inline-block;\n  white-space: nowrap;\n  overflow: hidden;\n  vertical-align: top;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SliderTrack = _styledComponents["default"].div(_templateObject());

var _default = SliderTrack;
exports["default"] = _default;