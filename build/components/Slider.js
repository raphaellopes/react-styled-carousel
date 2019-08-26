"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _lodash = _interopRequireDefault(require("lodash.sortby"));

var _reactSwipeable = require("react-swipeable");

var _SliderTrack = _interopRequireDefault(require("./SliderTrack"));

var _CardWrapper = _interopRequireDefault(require("./CardWrapper"));

var _RightArrow = _interopRequireDefault(require("./RightArrow"));

var _LeftArrow = _interopRequireDefault(require("./LeftArrow"));

var _SliderWrapper = _interopRequireDefault(require("./SliderWrapper"));

var _SliderList = _interopRequireDefault(require("./SliderList"));

var _DotsWrapper = _interopRequireDefault(require("./DotsWrapper"));

var _Dot = _interopRequireDefault(require("./Dot"));

var _Timer = _interopRequireDefault(require("../utils/Timer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Slider =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Slider, _React$Component);

  function Slider(props) {
    var _this;

    _classCallCheck(this, Slider);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Slider).call(this, props));
    _this.renderChildren = _this.renderChildren.bind(_assertThisInitialized(_this));
    _this.handleLeftArrowClick = _this.handleLeftArrowClick.bind(_assertThisInitialized(_this));
    _this.handleRightArrowClick = _this.handleRightArrowClick.bind(_assertThisInitialized(_this));
    _this.changeInitialCard = _this.changeInitialCard.bind(_assertThisInitialized(_this));
    _this.renderDots = _this.renderDots.bind(_assertThisInitialized(_this));
    _this.renderLeftArrow = _this.renderLeftArrow.bind(_assertThisInitialized(_this));
    _this.renderRightArrow = _this.renderRightArrow.bind(_assertThisInitialized(_this));
    _this.updateResponsiveView = _this.updateResponsiveView.bind(_assertThisInitialized(_this));
    _this.state = {
      initialCard: 0,
      childWidth: 0,
      cardsToShow: 0,
      hideArrows: false
    };
    return _this;
  }

  _createClass(Slider, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var _this$props = this.props,
          children = _this$props.children,
          cardsToShowProp = _this$props.cardsToShow,
          autoSlide = _this$props.autoSlide,
          hideArrowsOnNoSlides = _this$props.hideArrowsOnNoSlides;
      var numberOfChildren = children ? children.length || 1 : 0;
      var cardsToShow = cardsToShowProp || numberOfChildren;
      var childWidth = 100 / cardsToShow;
      this.setState({
        childWidth: childWidth,
        cardsToShow: cardsToShow,
        hideArrows: hideArrowsOnNoSlides && numberOfChildren <= cardsToShow
      }, function () {
        return _this2.updateResponsiveView();
      });
      typeof window !== 'undefined' && window.addEventListener('resize', this.updateResponsiveView);

      if (autoSlide) {
        this.autoSlider = new _Timer["default"](function () {
          var updatedInitialCard = 0;

          if (numberOfChildren - _this2.state.cardsToShow > _this2.state.initialCard) {
            updatedInitialCard = _this2.state.initialCard + 1;
          }

          _this2.setState({
            initialCard: updatedInitialCard
          });
        }, autoSlide === true ? 2000 : autoSlide);
        this.autoSlider.start();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      typeof window !== 'undefined' // eslint-disable-line no-unused-expressions
      && window.removeEventListener('resize', this.updateResponsiveView);
    }
  }, {
    key: "updateResponsiveView",
    value: function updateResponsiveView() {
      var _this$props2 = this.props,
          children = _this$props2.children,
          hideArrowsOnNoSlides = _this$props2.hideArrowsOnNoSlides;
      var responsive = this.props.responsive;
      var numberOfChildren = children ? children.length || 1 : 0;

      if (responsive) {
        responsive = (0, _lodash["default"])(responsive, 'breakPoint');
        var updatedCardsToShow = this.state.cardsToShow;
        responsive.forEach(function (_ref) {
          var breakPoint = _ref.breakPoint,
              cardsToShow = _ref.cardsToShow;

          if (breakPoint <= window.innerWidth) {
            updatedCardsToShow = cardsToShow;
          }
        });
        var updatedInitialCard = numberOfChildren - updatedCardsToShow < this.state.initialCard ? numberOfChildren - updatedCardsToShow : this.state.initialCard;
        this.setState({
          cardsToShow: updatedCardsToShow,
          childWidth: 100 / updatedCardsToShow,
          initialCard: updatedInitialCard,
          hideArrows: hideArrowsOnNoSlides && numberOfChildren <= updatedCardsToShow
        });
      }
    }
  }, {
    key: "changeInitialCard",
    value: function changeInitialCard(initialCard) {
      var _this$props3 = this.props,
          afterSlide = _this$props3.afterSlide,
          beforeSlide = _this$props3.beforeSlide;

      if (beforeSlide) {
        beforeSlide(initialCard);
      }

      this.setState({
        initialCard: initialCard
      }, function () {
        if (afterSlide) {
          afterSlide(initialCard);
        }
      });
    }
  }, {
    key: "handleLeftArrowClick",
    value: function handleLeftArrowClick(evt) {
      var children = this.props.children;
      var cardsToShow = this.state.cardsToShow;
      var childrenCount = children ? children.length : 0;

      if (evt && evt.preventDefault) {
        evt.preventDefault();
      }

      var nextInitialCard = this.state.initialCard - 1;

      if (nextInitialCard < 0) {
        nextInitialCard = childrenCount - cardsToShow;
      }

      this.changeInitialCard(nextInitialCard);
    }
  }, {
    key: "handleRightArrowClick",
    value: function handleRightArrowClick(evt) {
      var children = this.props.children;
      var cardsToShow = this.state.cardsToShow;
      var childrenCount = children ? children.length : 0;

      if (evt && evt.preventDefault) {
        evt.preventDefault();
      }

      var nextInitialCard = this.state.initialCard + 1;

      if (childrenCount - cardsToShow < nextInitialCard) {
        nextInitialCard = 0;
      }

      this.changeInitialCard(nextInitialCard);
    }
  }, {
    key: "renderChildren",
    value: function renderChildren(children) {
      var childWidth = this.state.childWidth;
      var displayCards = [];

      _react["default"].Children.forEach(children, function (child, index) {
        displayCards.push(_react["default"].createElement(_CardWrapper["default"], {
          key: index,
          width: childWidth
        }, child));
      });

      return displayCards;
    }
  }, {
    key: "renderDots",
    value: function renderDots() {
      var _this3 = this;

      var dots = [];
      var _this$props4 = this.props,
          children = _this$props4.children,
          Dot = _this$props4.Dot;
      var numberOfChildren = children ? children.length || 1 : 0;
      var i;

      var _loop = function _loop() {
        var index = i;
        dots.push(_react["default"].cloneElement(Dot, {
          active: index === _this3.state.initialCard,
          key: index,
          onClick: function onClick() {
            return _this3.changeInitialCard(index);
          }
        }));
      };

      for (i = 0; i <= numberOfChildren - this.state.cardsToShow; i += 1) {
        _loop();
      }

      return dots;
    }
  }, {
    key: "renderLeftArrow",
    value: function renderLeftArrow() {
      var _this$props5 = this.props,
          LeftArrow = _this$props5.LeftArrow,
          infinite = _this$props5.infinite;
      var initialCard = this.state.initialCard;
      return _react["default"].cloneElement(LeftArrow, {
        onClick: this.handleLeftArrowClick,
        disabled: !infinite && !initialCard
      });
    }
  }, {
    key: "renderRightArrow",
    value: function renderRightArrow() {
      var _this$props6 = this.props,
          RightArrow = _this$props6.RightArrow,
          children = _this$props6.children,
          infinite = _this$props6.infinite;
      var numberOfChildren = children ? children.length || 1 : 0;
      var _this$state = this.state,
          initialCard = _this$state.initialCard,
          cardsToShow = _this$state.cardsToShow;
      return _react["default"].cloneElement(RightArrow, {
        onClick: this.handleRightArrowClick,
        disabled: !infinite && initialCard + cardsToShow === numberOfChildren
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$props7 = this.props,
          children = _this$props7.children,
          cardsToShow = _this$props7.cardsToShow,
          showDots = _this$props7.showDots,
          showArrows = _this$props7.showArrows,
          pauseOnMouseOver = _this$props7.pauseOnMouseOver,
          DotsWrapper = _this$props7.DotsWrapper,
          otherProps = _objectWithoutProperties(_this$props7, ["children", "cardsToShow", "showDots", "showArrows", "pauseOnMouseOver", "DotsWrapper"]);

      var _this$state2 = this.state,
          initialCard = _this$state2.initialCard,
          childWidth = _this$state2.childWidth;
      return _react["default"].createElement("div", {
        onMouseLeave: function onMouseLeave() {
          return pauseOnMouseOver && _this4.autoSlider && _this4.autoSlider.resume();
        },
        onMouseEnter: function onMouseEnter() {
          return pauseOnMouseOver && _this4.autoSlider && _this4.autoSlider.pause();
        }
      }, _react["default"].createElement(_SliderWrapper["default"], otherProps, showArrows && !this.state.hideArrows && this.renderLeftArrow(), _react["default"].createElement(_reactSwipeable.Swipeable, {
        onSwipedLeft: this.handleRightArrowClick,
        onSwipedRight: this.handleLeftArrowClick
      }, _react["default"].createElement(_SliderTrack["default"], null, _react["default"].createElement(_SliderList["default"], {
        translateX: initialCard * childWidth
      }, this.renderChildren(children, cardsToShow || children.length)))), showArrows && !this.state.hideArrows && this.renderRightArrow()), _react["default"].createElement(DotsWrapper, null, showDots && this.renderDots()));
    }
  }]);

  return Slider;
}(_react["default"].Component);

Slider.defaultProps = {
  showDots: true,
  showArrows: true,
  LeftArrow: _react["default"].createElement(_LeftArrow["default"], null),
  RightArrow: _react["default"].createElement(_RightArrow["default"], null),
  Dot: _react["default"].createElement(_Dot["default"], null),
  DotsWrapper: _DotsWrapper["default"],
  cardsToShow: null,
  afterSlide: null,
  beforeSlide: null,
  infinite: true,
  responsive: null,
  autoSlide: 2000,
  pauseOnMouseOver: true,
  padding: '0px 20px',
  margin: '0px',
  hideArrowsOnNoSlides: true
};
Slider.propTypes = {
  LeftArrow: _propTypes["default"].node,
  RightArrow: _propTypes["default"].node,
  Dot: _propTypes["default"].node,
  showArrows: _propTypes["default"].bool,
  showDots: _propTypes["default"].bool,
  children: _propTypes["default"].node.isRequired,
  cardsToShow: _propTypes["default"].number,
  afterSlide: _propTypes["default"].func,
  beforeSlide: _propTypes["default"].func,
  infinite: _propTypes["default"].bool,
  responsive: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    breakPoint: _propTypes["default"].number,
    cardsToShow: _propTypes["default"].number
  })),
  autoSlide: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].bool]),
  pauseOnMouseOver: _propTypes["default"].bool,
  padding: _propTypes["default"].string,
  margin: _propTypes["default"].string,
  hideArrowsOnNoSlides: _propTypes["default"].bool,
  DotsWrapper: _propTypes["default"].shape({})
};
var _default = Slider;
exports["default"] = _default;