'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactEmotion = require('react-emotion');

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

var _card = require('./card');

var _card2 = _interopRequireDefault(_card);

var _iconFileStack = require('./icon-file-stack');

var _iconFileStack2 = _interopRequireDefault(_iconFileStack);

var _theme = require('./theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var FileLine = function FileLine(_ref) {
  var filename = _ref.filename,
      props = _objectWithoutProperties(_ref, ['filename']);

  return _react2.default.createElement(
    LineContainer,
    props,
    _react2.default.createElement(FileIcon, null),
    _react2.default.createElement(
      'div',
      null,
      filename
    )
  );
};

var FileCard = function FileCard(props) {
  return _react2.default.createElement(
    _card2.default,
    _extends({}, props, { priority: 'dark' }),
    _react2.default.createElement(FileLine, { filename: 'api/endpoints/integrations.py' }),
    _react2.default.createElement(FileLine, { filename: 'src/events.py' }),
    _react2.default.createElement(FileLine, { filename: 'confs/server.py' }),
    _react2.default.createElement(FileLine, { filename: 'js/urls.js', noDelimiter: true })
  );
};

var LineContainer = /*#__PURE__*/(0, _reactEmotion2.default)('div', {
  label: 'LineContainer',
  target: 'e1c8j63k0'
})('border-bottom:', function (p) {
  return !p.noDelimiter && '1px solid ' + _theme2.default.purpleLightest;
}, ';padding:1.25em 1.5em 1.25em 1em;display:grid;grid-template-columns:auto 1fr;grid-column-gap:0.5em;align-items:center;color:', _theme2.default.purpleLightest, ';');

var FileIcon = /*#__PURE__*/(0, _reactEmotion2.default)(_iconFileStack2.default, {
  label: 'FileIcon',
  target: 'e1c8j63k1'
})('width:1.5em;fill:', _theme2.default.purpleLightest, ';');

exports.default = FileCard;
module.exports = exports['default'];