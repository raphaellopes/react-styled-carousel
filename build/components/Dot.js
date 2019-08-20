"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  pointer-events: none;\n  button {\n    pointer-events: all;\n    border: 0;\n    background: 0 0;\n    cursor: pointer;\n    font-size: 1.8em;\n    line-height: 1.2em;\n    margin: 0 5px;\n    ", "\n    :hover {\n      color: #000000;\n    }\n    :focus {\n      outline: none;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Dot = _styledComponents["default"].li.attrs({
  children: function children(_ref) {
    var onClick = _ref.onClick;
    return _react["default"].createElement("button", {
      onClick: onClick,
      type: "button"
    }, "\u2022");
  } // eslint-disable-line react/prop-types

})(_templateObject(), function (_ref2) {
  var active = _ref2.active;
  return active ? 'color: #000000;' : 'color: #E5E5E5;';
});

var _default = Dot;
exports["default"] = _default;