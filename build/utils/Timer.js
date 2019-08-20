"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Timer =
/*#__PURE__*/
function () {
  function Timer(callback, delay) {
    _classCallCheck(this, Timer);

    this.callback = callback;
    this.delay = delay;
  }

  _createClass(Timer, [{
    key: "pause",
    value: function pause() {
      clearInterval(this.timerId);
    }
  }, {
    key: "resume",
    value: function resume() {
      clearInterval(this.timerId);
      this.timerId = setInterval(this.callback, this.delay);
    }
  }, {
    key: "start",
    value: function start() {
      this.resume();
    }
  }]);

  return Timer;
}();

var _default = Timer;
exports["default"] = _default;