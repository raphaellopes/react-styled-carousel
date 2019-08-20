"use strict";

var _react = _interopRequireDefault(require("react"));

var _styledComponents = require("styled-components");

var _Dot = _interopRequireDefault(require("../Dot"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["button:hover"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["button"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["button"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

describe('<Dot />', function () {
  it('Should render a <div> tag', function () {
    var renderedComponent = shallow(_react["default"].createElement(_Dot["default"], null));
    expect(renderedComponent.type()).toEqual('li');
  });
  it('Should have a className attribute', function () {
    var renderedComponent = shallow(_react["default"].createElement(_Dot["default"], null));
    expect(renderedComponent.prop('className')).toBeDefined();
  });
  it('Should adopt a valid attribute', function () {
    var id = 'test-id';
    var renderedComponent = shallow(_react["default"].createElement(_Dot["default"], {
      id: id
    }));
    expect(renderedComponent.prop('id')).toEqual(id);
  });
  it('Should not adopt an invalid attribute', function () {
    var renderedComponent = shallow(_react["default"].createElement(_Dot["default"], {
      attribute: "test"
    }));
    expect(renderedComponent.prop('attribute')).toBeUndefined();
  });
  it('Should render a <button> tag inside', function () {
    var renderedComponent = shallow(_react["default"].createElement(_Dot["default"], null));
    expect(renderedComponent.find('button').length).toEqual(1);
  });
  it('Should have a valid color value inside rendered <button> tag', function () {
    var renderedComponent = shallow(_react["default"].createElement(_Dot["default"], null));
    expect(renderedComponent).toHaveStyleRule('color', '#E5E5E5', {
      modifier: (0, _styledComponents.css)(_templateObject())
    });
  });
  it('Should have a valid color value inside rendered <button> tag when <Dot /> is active', function () {
    var renderedComponent = shallow(_react["default"].createElement(_Dot["default"], {
      active: true
    }));
    expect(renderedComponent).toHaveStyleRule('color', '#000000', {
      modifier: (0, _styledComponents.css)(_templateObject2())
    });
  });
  it('Should have a valid color value inside rendered <button> tag when :hovered', function () {
    var renderedComponent = shallow(_react["default"].createElement(_Dot["default"], null));
    expect(renderedComponent).toHaveStyleRule('color', '#000000', {
      modifier: (0, _styledComponents.css)(_templateObject3())
    });
  });
});