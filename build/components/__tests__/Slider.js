"use strict";

var _react = _interopRequireDefault(require("react"));

var _Slider = _interopRequireDefault(require("../Slider"));

var _SliderWrapper = _interopRequireDefault(require("../SliderWrapper"));

var _SliderTrack = _interopRequireDefault(require("../SliderTrack"));

var _CardWrapper = _interopRequireDefault(require("../CardWrapper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('<Slider />', function () {
  it('Should match the snapshot with single child', function () {
    var renderedComponent = shallow(_react["default"].createElement(_Slider["default"], null, _react["default"].createElement("div", null)));
    expect(renderedComponent).toMatchSnapshot();
  });
  it('Should match the snapshot with multiple children', function () {
    var renderedComponent = shallow(_react["default"].createElement(_Slider["default"], null, _react["default"].createElement("div", null), _react["default"].createElement("h1", null, "Hello")));
    expect(renderedComponent).toMatchSnapshot();
  });
  it('Should render all the wrapper components', function () {
    var renderedComponent = shallow(_react["default"].createElement(_Slider["default"], null, _react["default"].createElement("h1", null, "Hello")));
    expect(renderedComponent.find(_SliderWrapper["default"])).toHaveLength(1);
    expect(renderedComponent.find(_SliderWrapper["default"])).toHaveLength(1);
    expect(renderedComponent.find(_SliderTrack["default"])).toHaveLength(1);
  });
  it('Should render <CardWrapper> around every child', function () {
    var children = [_react["default"].createElement("div", {
      key: 1
    }), _react["default"].createElement("div", {
      key: 2
    }), _react["default"].createElement("div", {
      key: 3
    })];
    var renderedComponent = shallow(_react["default"].createElement(_Slider["default"], null, children));
    expect(renderedComponent.find(_CardWrapper["default"])).toHaveLength(children.length);
  });
});