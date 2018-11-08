'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactEmotion = require('react-emotion');

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

var _avatar = require('./avatar');

var _avatar2 = _interopRequireDefault(_avatar);

var _theme = require('./theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Badge = function Badge(_ref) {
  var name = _ref.name,
      src = _ref.src,
      props = _objectWithoutProperties(_ref, ['name', 'src']);

  return _react2.default.createElement(
    Container,
    props,
    _react2.default.createElement(StyledAvatar, { src: src, borderless: true }),
    name
  );
};

var Container = /*#__PURE__*/(0, _reactEmotion2.default)('div', {
  label: 'Container',
  target: 'e5xhav90'
})('display:flex;align-items:center;font-weight:500;font-family:sans-serif;color:', _theme2.default.gray4, ';');

var StyledAvatar = /*#__PURE__*/(0, _reactEmotion2.default)(_avatar2.default, {
  label: 'StyledAvatar',
  target: 'e5xhav91'
})('width:1.5em;height:1.5em;margin-right:0.5em;');

exports.default = Badge;
module.exports = exports['default'];