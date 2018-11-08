'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactEmotion = require('react-emotion');

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

var _theme = require('./theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Card = function Card(_ref) {
  var header = _ref.header,
      children = _ref.children,
      alternateHeaderColor = _ref.alternateHeaderColor,
      props = _objectWithoutProperties(_ref, ['header', 'children', 'alternateHeaderColor']);

  return _react2.default.createElement(
    Container,
    _extends({}, props, { header: !!header }),
    header && _react2.default.createElement(
      Header,
      { priority: props.priority, alternateHeaderColor: alternateHeaderColor },
      header
    ),
    children
  );
};

var Container = /*#__PURE__*/(0, _reactEmotion2.default)('div', {
  label: 'Container',
  target: 'e9h3hbb0'
})('border-radius:26px;display:flex;flex-direction:column;color:', function (p) {
  return !p.priority || p.priority == 'light' ? _theme2.default.gray7 : '#fff';
}, ';box-shadow:', _theme2.default.dropShadowHeavy, ';background:', function (p) {
  return p.priority ? _theme2.default.alert[p.priority].background : '#fff';
}, ';font-family:sans-serif;min-height:100px;', function (p) {
  return p.priority && p.priority !== 'light' ? '\n    font-smooth: antialiased;\n    -webkit-font-smoothing: antialiased;\n  ' : null;
}, ';');

var getHeaderColor = function getHeaderColor(p) {
  return p.alternateHeaderColor ? _theme2.default[p.alternateHeaderColor] : _theme2.default.purple;
};

var Header = /*#__PURE__*/(0, _reactEmotion2.default)('div', {
  label: 'Header',
  target: 'e9h3hbb1'
})('border-radius:26px 26px 0 0;padding:1.25em 1em 1em 1em;color:#fff;display:flex;font-size:0.875em;align-items:center;background:', function (p) {
  return p.priority ? _theme2.default.alert[p.priority].background : getHeaderColor(p);
}, ';border-bottom:1px solid ', function (p) {
  return p.priority ? _theme2.default.alert[p.priority].border : '#fff';
}, ';', function (p) {
  return !p.priority || p.priority == 'light' ? '\n    font-smooth: antialiased;\n    -webkit-font-smoothing: antialiased;\n  ' : null;
}, ';');

exports.default = Card;
module.exports = exports['default'];