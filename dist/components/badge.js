'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  display: flex;\n  align-items: center;\n  font-weight: 500;\n  font-family: sans-serif;\n  color: ', ';\n'], ['\n  display: flex;\n  align-items: center;\n  font-weight: 500;\n  font-family: sans-serif;\n  color: ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  width: 1.5em;\n  height: 1.5em;\n  margin-right: 0.5em;\n'], ['\n  width: 1.5em;\n  height: 1.5em;\n  margin-right: 0.5em;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactEmotion = require('react-emotion');

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

var _avatar = require('./avatar');

var _avatar2 = _interopRequireDefault(_avatar);

var _theme = require('./theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

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

var Container = (0, _reactEmotion2.default)('div')(_templateObject, _theme2.default.gray4);

var StyledAvatar = (0, _reactEmotion2.default)(_avatar2.default)(_templateObject2);

exports.default = Badge;
module.exports = exports['default'];