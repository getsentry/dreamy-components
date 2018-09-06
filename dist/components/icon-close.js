"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IconClose = function IconClose(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { viewBox: "0 0 36 36" }),
    _react2.default.createElement("path", { d: "M3 6.812L6.812 3 33 29.188 29.188 33z" }),
    _react2.default.createElement("path", { d: "M29.188 3L33 6.812 6.812 33 3 29.188z" })
  );
};

exports.default = IconClose;
module.exports = exports["default"];