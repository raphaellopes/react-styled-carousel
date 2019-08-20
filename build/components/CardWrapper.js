"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  outline: none;\n  width: ", ";\n  min-height: 1px;\n  margin: 0;\n  padding: 0;\n  display: inline-block;\n  vertical-align: top;\n  white-space: normal;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var CardWrapper = _styledComponents["default"].div(_templateObject(), function (_ref) {
  var width = _ref.width;
  return "".concat(width, "%");
});

var _default = CardWrapper;
exports["default"] = _default;