'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactEmotion = require('react-emotion');

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

var _iconCircleCheck = require('./icon-circle-check');

var _iconCircleCheck2 = _interopRequireDefault(_iconCircleCheck);

var _iconCircleExclamation = require('./icon-circle-exclamation');

var _iconCircleExclamation2 = _interopRequireDefault(_iconCircleExclamation);

var _theme = require('./theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Issue = function Issue(_ref) {
  var priority = _ref.priority,
      triangleUp = _ref.triangleUp,
      name = _ref.name,
      description = _ref.description,
      shouldAnimate = _ref.shouldAnimate,
      delay = _ref.delay,
      props = _objectWithoutProperties(_ref, ['priority', 'triangleUp', 'name', 'description', 'shouldAnimate', 'delay']);

  return _react2.default.createElement(
    StyledIssue,
    _extends({}, props, { priority: priority }),
    _react2.default.createElement(
      'div',
      null,
      name && _react2.default.createElement(
        IssueName,
        null,
        name
      ),
      description && _react2.default.createElement(
        Description,
        { priority: priority },
        description
      )
    ),
    _react2.default.createElement(StyledIcon, { priority: priority, shouldAnimate: shouldAnimate, delay: delay }),
    triangleUp && _react2.default.createElement(TriangleUp, { priority: priority })
  );
};

var StyledIssue = /*#__PURE__*/(0, _reactEmotion2.default)('div', {
  label: 'StyledIssue',
  target: 'ex6yyby0'
})('display:inline-flex;align-items:center;justify-content:space-between;padding:0.5em 0.5em 0.5em 1em;background:', function (p) {
  return _theme2.default.alert[p.priority || 'error'].background;
}, ';font-size:1.2em;font-family:sans-serif;color:#fff;border-radius:2em;margin-top:', function (p) {
  return p.triangleUp ? '0.5em' : null;
}, ';position:relative;-webkit-font-smoothing:antialiased;');

var Description = /*#__PURE__*/(0, _reactEmotion2.default)('span', {
  label: 'Description',
  target: 'ex6yyby1'
})('color:#fff;');

var IssueName = /*#__PURE__*/(0, _reactEmotion2.default)('span', {
  label: 'IssueName',
  target: 'ex6yyby2'
})('font-weight:bold;margin-right:0.5em;');

var TriangleUp = /*#__PURE__*/(0, _reactEmotion2.default)('div', {
  label: 'TriangleUp',
  target: 'ex6yyby3'
})('width:0;height:0;border-left:0.5em solid transparent;border-right:0.5em solid transparent;border-bottom:0.5em solid currentColor;position:absolute;left:50%;bottom:97%;transform:translateX(-50%);');

var growOut = /*#__PURE__*/(0, _reactEmotion.keyframes)('0%{transform:scale(0.5);opacity:0;}100%{transform:scale(1);opacity:1;}label:growOut;');

var StyledIcon = /*#__PURE__*/(0, _reactEmotion2.default)(function (_ref2) {
  var className = _ref2.className,
      priority = _ref2.priority;
  return priority == 'success' ? _react2.default.createElement(_iconCircleCheck2.default, { className: className }) : _react2.default.createElement(_iconCircleExclamation2.default, { className: className });
}, {
  label: 'StyledIcon',
  target: 'ex6yyby4'
})('height:2em;width:2em;margin-left:0.5em;', function (p) {
  return p.shouldAnimate && 'transform: scale(0.5);';
}, ' ', function (p) {
  return p.shouldAnimate && 'opacity: 0;';
}, ' path{fill:#fff;}animation:', function (p) {
  return p.shouldAnimate && '0.5s ' + growOut + ' forwards';
}, ';animation-delay:', function (p) {
  return p.delay;
}, ';');

exports.default = Issue;
module.exports = exports['default'];