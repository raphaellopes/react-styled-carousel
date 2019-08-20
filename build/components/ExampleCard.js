"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background: #00558B;\n  color: #fff;\n  line-height: 100px;\n  text-align: center;\n  font-size: 36px;\n  margin: 10px;\n  padding: 2%;\n  position: relative;\n  box-shadow: 0 1px 2px 0 #00111B;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ExampleCard = _styledComponents["default"].h1(_templateObject());

var _default = ExampleCard;
exports["default"] = _default;