'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  display: grid;\n  grid-template-columns: 1fr auto 10%;\n  grid-column-gap: 1em;\n  align-items: center;\n  color: ', ';\n  font-family: sans-serif;\n  font-size: 0.75em;\n'], ['\n  display: grid;\n  grid-template-columns: 1fr auto 10%;\n  grid-column-gap: 1em;\n  align-items: center;\n  color: ', ';\n  font-family: sans-serif;\n  font-size: 0.75em;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  height: 1px;\n  background-image: linear-gradient(\n    90deg,\n    ', ',\n    ', ' 50%,\n    transparent 50%,\n    transparent 100%\n  );\n  background-size: 3px 1px;\n  border: none;\n'], ['\n  height: 1px;\n  background-image: linear-gradient(\n    90deg,\n    ', ',\n    ', ' 50%,\n    transparent 50%,\n    transparent 100%\n  );\n  background-size: 3px 1px;\n  border: none;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactEmotion = require('react-emotion');

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

var _theme = require('./theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

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

var CommitLineContainer = (0, _reactEmotion2.default)('div')(_templateObject, _theme2.default.purple);

var Line = (0, _reactEmotion2.default)('div')(_templateObject2, _theme2.default.purple, _theme2.default.purple);

exports.default = CommitLine;
module.exports = exports['default'];