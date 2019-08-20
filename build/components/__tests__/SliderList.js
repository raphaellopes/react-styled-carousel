"use strict";

var _react = _interopRequireDefault(require("react"));

var _SliderList = _interopRequireDefault(require("../SliderList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('<SliderList />', function () {
  it('Should render a <div> tag', function () {
    var renderedComponent = shallow(_react["default"].createElement(_SliderList["default"], null));
    expect(renderedComponent.type()).toEqual('div');
  });
  it('Should have a className attribute', function () {
    var renderedComponent = shallow(_react["default"].createElement(_SliderList["default"], null));
    expect(renderedComponent.prop('className')).toBeDefined();
  });
  it('Should adopt a valid attribute', function () {
    var id = 'test-id';
    var renderedComponent = shallow(_react["default"].createElement(_SliderList["default"], {
      id: id
    }));
    expect(renderedComponent.prop('id')).toEqual(id);
  });
  it('Should not adopt an invalid attribute', function () {
    var renderedComponent = shallow(_react["default"].createElement(_SliderList["default"], {
      attribute: "test"
    }));
    expect(renderedComponent.prop('attribute')).toBeUndefined();
  });
  it('Should adopt proper translateX given through props', function () {
    var renderedComponent = shallow(_react["default"].createElement(_SliderList["default"], {
      translateX: "50"
    }));
    expect(renderedComponent).toHaveStyleRule('transform', 'translateX(-50%)');
  });
  it('Should adopt default translateX if nothing given through props', function () {
    var renderedComponent = shallow(_react["default"].createElement(_SliderList["default"], null));
    expect(renderedComponent).toHaveStyleRule('transform', 'translateX(0%)');
  });
});