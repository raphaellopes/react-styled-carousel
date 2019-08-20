"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactHotLoader = require("react-hot-loader");

require("normalize.css");

var _Slider = _interopRequireDefault(require("./components/Slider"));

var _ExampleCard = _interopRequireDefault(require("./components/ExampleCard"));

var _Container = _interopRequireDefault(require("./components/Container"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var responsive = [{
  breakPoint: 1280,
  cardsToShow: 4
}, // this will be applied if screen size is greater than 1280px. cardsToShow will become 4.
{
  breakPoint: 760,
  cardsToShow: 2
}];

var Root = function Root() {
  return _react["default"].createElement(_Container["default"], null, _react["default"].createElement("h1", null, "Styled Carousel Example"), _react["default"].createElement(_Slider["default"], {
    responsive: responsive
  }, _react["default"].createElement(_ExampleCard["default"], null, "1"), _react["default"].createElement(_ExampleCard["default"], null, "2"), _react["default"].createElement(_ExampleCard["default"], null, "3"), _react["default"].createElement(_ExampleCard["default"], null, "4"), _react["default"].createElement(_ExampleCard["default"], null, "5"), _react["default"].createElement(_ExampleCard["default"], null, "6")));
};

var _default = (0, _reactHotLoader.hot)(module)(Root);

exports["default"] = _default;