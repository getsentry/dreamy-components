'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactEmotion = require('react-emotion');

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

var _theme = require('./theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var CommitLine = function CommitLine(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ['children']);

  return _react2.default.createElement(
    CommitLineContainer,
    props,
    _react2.default.createElement(Line, null),
    _react2.default.createElement(
      'div',
      null,
      children
    ),
    _react2.default.createElement(Line, null)
  );
};

var CommitLineContainer = /*#__PURE__*/(0, _reactEmotion2.default)('div', {
  label: 'CommitLineContainer',
  target: 'enmex3g0'
})('display:grid;grid-template-columns:1fr auto 10%;grid-column-gap:1em;align-items:center;color:', _theme2.default.purple, ';font-family:sans-serif;font-size:0.75em;');

var Line = /*#__PURE__*/(0, _reactEmotion2.default)('div', {
  label: 'Line',
  target: 'enmex3g1'
})('height:1px;background-image:linear-gradient( 90deg,', _theme2.default.purple, ',', _theme2.default.purple, ' 50%,transparent 50%,transparent 100% );background-size:3px 1px;border:none;');

exports.default = CommitLine;
module.exports = exports['default'];