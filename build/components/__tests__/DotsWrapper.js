"use strict";

var _react = _interopRequireDefault(require("react"));

var _DotsWrapper = _interopRequireDefault(require("../DotsWrapper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('<DotsWrapper />', function () {
  it('Should render a <div> tag', function () {
    var renderedComponent = shallow(_react["default"].createElement(_DotsWrapper["default"], null));
    expect(renderedComponent.type()).toEqual('ul');
  });
  it('Should have a className attribute', function () {
    var renderedComponent = shallow(_react["default"].createElement(_DotsWrapper["default"], null));
    expect(renderedComponent.prop('className')).toBeDefined();
  });
  it('Should adopt a valid attribute', function () {
    var id = 'test-id';
    var renderedComponent = shallow(_react["default"].createElement(_DotsWrapper["default"], {
      id: id
    }));
    expect(renderedComponent.prop('id')).toEqual(id);
  });
  it('Should not adopt an invalid attribute', function () {
    var renderedComponent = shallow(_react["default"].createElement(_DotsWrapper["default"], {
      attribute: "test"
    }));
    expect(renderedComponent.prop('attribute')).toBeUndefined();
  });
});