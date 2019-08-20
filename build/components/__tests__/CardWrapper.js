"use strict";

var _react = _interopRequireDefault(require("react"));

var _CardWrapper = _interopRequireDefault(require("../CardWrapper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('<CardWrapper />', function () {
  it('Should render a <div> tag', function () {
    var renderedComponent = shallow(_react["default"].createElement(_CardWrapper["default"], null));
    expect(renderedComponent.type()).toEqual('div');
  });
  it('Should have a className attribute', function () {
    var renderedComponent = shallow(_react["default"].createElement(_CardWrapper["default"], null));
    expect(renderedComponent.prop('className')).toBeDefined();
  });
  it('Should adopt a valid attribute', function () {
    var id = 'test-id';
    var renderedComponent = shallow(_react["default"].createElement(_CardWrapper["default"], {
      id: id
    }));
    expect(renderedComponent.prop('id')).toEqual(id);
  });
  it('Should not adopt an invalid attribute', function () {
    var renderedComponent = shallow(_react["default"].createElement(_CardWrapper["default"], {
      attribute: "test"
    }));
    expect(renderedComponent.prop('attribute')).toBeUndefined();
  });
  it('Should adopt the width given from the props', function () {
    var renderedComponent = shallow(_react["default"].createElement(_CardWrapper["default"], {
      width: "50"
    }));
    expect(renderedComponent).toHaveStyleRule('width', '50%');
  });
});