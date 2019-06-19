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

var _iconCircleChevron = require('./icon-circle-chevron');

var _iconCircleChevron2 = _interopRequireDefault(_iconCircleChevron);

var _iconClose = require('./icon-close');

var _iconClose2 = _interopRequireDefault(_iconClose);

var _theme = require('./theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var BashCard = function BashCard(_ref) {
  var children = _ref.children,
      header = _ref.header,
      props = _objectWithoutProperties(_ref, ['children', 'header']);

  return _react2.default.createElement(
    StyledCard,
    _extends({}, props, {
      priority: 'dark',
      header: _react2.default.createElement(
        HeaderContent,
        { style: { width: '98%' } },
        _react2.default.createElement(
          HeaderContent,
          null,
          _react2.default.createElement(StyledIconCircleChevron, null),
          header || 'Chrissy — vim'
        ),
        _react2.default.createElement(StyledIconClose, null)
      )
    }),
    children || _react2.default.createElement(
      BashContent,
      null,
      _react2.default.createElement(
        Green,
        null,
        'Commit: 698d6725db'
      ),
      _react2.default.createElement('br', null),
      'Author: Chrissy',
      _react2.default.createElement('br', null),
      'Date: Wed Jul 18',
      _react2.default.createElement('br', null),
      _react2.default.createElement('br', null),
      'Recompute splines to fix component',
      _react2.default.createElement('br', null),
      _react2.default.createElement(
        Orange,
        null,
        'fixes SENTRY-5T4'
      ),
      _react2.default.createElement(Cursor, null),
      _react2.default.createElement('br', null),
      '~',
      _react2.default.createElement('br', null),
      '~',
      _react2.default.createElement('br', null)
    )
  );
};

var blink = /*#__PURE__*/(0, _reactEmotion.keyframes)('0%{opacity:1;}50%{opacity:1;}51%{opacity:0;}100%{opacity:0;}label:blink;');

var Cursor = /*#__PURE__*/(0, _reactEmotion2.default)('span', {
  label: 'Cursor',
  target: 'e1ijumhd0'
})('background-color:', _theme2.default.blueLight, ';display:inline-block;width:2px;height:1.2em;position:relative;transform:translate(0.25em,0.25em);animation:1s ', blink, ' infinite;');

var StyledCard = /*#__PURE__*/(0, _reactEmotion2.default)(_card2.default, {
  label: 'StyledCard',
  target: 'e1ijumhd1'
})('background:#2f2837;margin:0 auto;');

var Green = /*#__PURE__*/(0, _reactEmotion2.default)('span', {
  label: 'Green',
  target: 'e1ijumhd2'
})('color:', _theme2.default.green, ';');

var Orange = /*#__PURE__*/(0, _reactEmotion2.default)('span', {
  label: 'Orange',
  target: 'e1ijumhd3'
})('color:', _theme2.default.yellowOrange, ';');

var BashContent = /*#__PURE__*/(0, _reactEmotion2.default)('p', {
  label: 'BashContent',
  target: 'e1ijumhd4'
})('padding:0.5em 1.5em;font-size:0.85em;line-height:1.5;font-weight:600;');

var StyledIconCircleChevron = /*#__PURE__*/(0, _reactEmotion2.default)(_iconCircleChevron2.default, {
  label: 'StyledIconCircleChevron',
  target: 'e1ijumhd5'
})('height:1.5em;color:', _theme2.default.purpleLight, ';margin-right:0.5em;');

var HeaderContent = /*#__PURE__*/(0, _reactEmotion2.default)('div', {
  label: 'HeaderContent',
  target: 'e1ijumhd6'
})('color:', _theme2.default.purpleLightest, ';display:flex;align-items:center;justify-content:space-between;');

var StyledIconClose = /*#__PURE__*/(0, _reactEmotion2.default)(_iconClose2.default, {
  label: 'StyledIconClose',
  target: 'e1ijumhd7'
})('height:1em;fill:', _theme2.default.purpleLightest, ';');

exports.default = BashCard;
module.exports = exports['default'];