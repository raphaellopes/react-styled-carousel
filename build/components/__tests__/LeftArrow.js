"use strict";

var _react = _interopRequireDefault(require("react"));

var _LeftArrow = _interopRequireDefault(require("../LeftArrow"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import { css } from 'styled-components';
describe('<LeftArrow />', function () {
  it('Should render a <div> tag', function () {
    var renderedComponent = shallow(_react["default"].createElement(_LeftArrow["default"], null));
    expect(renderedComponent.type()).toEqual('button');
  });
  it('Should have a className attribute', function () {
    var renderedComponent = shallow(_react["default"].createElement(_LeftArrow["default"], null));
    expect(renderedComponent.prop('className')).toBeDefined();
  });
  it('Should adopt a valid attribute', function () {
    var id = 'test-id';
    var renderedComponent = shallow(_react["default"].createElement(_LeftArrow["default"], {
      id: id
    }));
    expect(renderedComponent.prop('id')).toEqual(id);
  });
  it('Should not adopt an invalid attribute', function () {
    var renderedComponent = shallow(_react["default"].createElement(_LeftArrow["default"], {
      attribute: "test"
    }));
    expect(renderedComponent.prop('attribute')).toBeUndefined();
  });
  it('Should have proper border-top, border-right & background-color when not disabled', function () {
    var renderedComponent = shallow(_react["default"].createElement(_LeftArrow["default"], null));
    expect(renderedComponent).toHaveStyleRule('background-color', '#000000');
    expect(renderedComponent).toHaveStyleRule('border-top', 'solid 2px #000000', {
      modifier: ':before'
    });
    expect(renderedComponent).toHaveStyleRule('border-right', 'solid 2px #000000', {
      modifier: ':before'
    });
  });
  it('Should have proper border-top, border-right & background-color when disabled', function () {
    var renderedComponent = shallow(_react["default"].createElement(_LeftArrow["default"], {
      disabled: true
    }));
    expect(renderedComponent).toHaveStyleRule('background-color', '#B2B2B2');
    expect(renderedComponent).toHaveStyleRule('border-top', 'solid 2px #B2B2B2', {
      modifier: ':before'
    });
    expect(renderedComponent).toHaveStyleRule('border-right', 'solid 2px #B2B2B2', {
      modifier: ':before'
    });
  });
  it('Should have proper cursor when not disabled', function () {
    var renderedComponent = shallow(_react["default"].createElement(_LeftArrow["default"], null));
    expect(renderedComponent).toHaveStyleRule('cursor', 'pointer');
  });
  it('Should have proper cursor when disabled', function () {
    var renderedComponent = shallow(_react["default"].createElement(_LeftArrow["default"], {
      disabled: true
    }));
    expect(renderedComponent).toHaveStyleRule('cursor', 'not-allowed');
  });
});