'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  display: inline-flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.5em 0.5em 0.5em 1em;\n  background: ', ';\n  font-size: 1.2em;\n  font-family: sans-serif;\n  color: #fff;\n  border-radius: 2em;\n  margin-top: ', ';\n  position: relative;\n  -webkit-font-smoothing: antialiased;\n'], ['\n  display: inline-flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.5em 0.5em 0.5em 1em;\n  background: ', ';\n  font-size: 1.2em;\n  font-family: sans-serif;\n  color: #fff;\n  border-radius: 2em;\n  margin-top: ', ';\n  position: relative;\n  -webkit-font-smoothing: antialiased;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  color: #fff;\n'], ['\n  color: #fff;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  font-weight: bold;\n  margin-right: 0.5em;\n'], ['\n  font-weight: bold;\n  margin-right: 0.5em;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  width: 0;\n  height: 0;\n  border-left: 0.5em solid transparent;\n  border-right: 0.5em solid transparent;\n  border-bottom: 0.5em solid currentColor;\n  position: absolute;\n  left: 50%;\n  bottom: 97%;\n  transform: translateX(-50%);\n'], ['\n  width: 0;\n  height: 0;\n  border-left: 0.5em solid transparent;\n  border-right: 0.5em solid transparent;\n  border-bottom: 0.5em solid currentColor;\n  position: absolute;\n  left: 50%;\n  bottom: 97%;\n  transform: translateX(-50%);\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  0% {\n    transform: scale(0.5);\n    opacity: 0;\n  }\n  100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n'], ['\n  0% {\n    transform: scale(0.5);\n    opacity: 0;\n  }\n  100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  height: 2em;\n  width: 2em;\n  margin-left: 0.5em;\n  ', ' ', '\n  path {\n    fill: #fff;\n  }\n  animation: ', ';\n  animation-delay: ', ';\n'], ['\n  height: 2em;\n  width: 2em;\n  margin-left: 0.5em;\n  ', ' ', '\n  path {\n    fill: #fff;\n  }\n  animation: ', ';\n  animation-delay: ', ';\n']);

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

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Issue = function Issue(_ref) {
  var priority = _ref.priority,
      triangleUp = _ref.triangleUp,
      name = _ref.name,
      description = _ref.description,
      animate = _ref.animate,
      animationDelay = _ref.animationDelay,
      props = _objectWithoutProperties(_ref, ['priority', 'triangleUp', 'name', 'description', 'animate', 'animationDelay']);

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
    _react2.default.createElement(StyledIcon, { priority: priority, animate: animate, animationDelay: animationDelay }),
    triangleUp && _react2.default.createElement(TriangleUp, { priority: priority })
  );
};

var StyledIssue = (0, _reactEmotion2.default)('div')(_templateObject, function (p) {
  return _theme2.default.alert[p.priority || 'error'].background;
}, function (p) {
  return p.triangleUp ? '0.5em' : null;
});

var Description = (0, _reactEmotion2.default)('span')(_templateObject2);

var IssueName = (0, _reactEmotion2.default)('span')(_templateObject3);

var TriangleUp = (0, _reactEmotion2.default)('div')(_templateObject4);

var growOut = (0, _reactEmotion.keyframes)(_templateObject5);

var StyledIcon = (0, _reactEmotion2.default)(function (_ref2) {
  var priority = _ref2.priority,
      props = _objectWithoutProperties(_ref2, ['priority']);

  return priority == 'success' ? _react2.default.createElement(_iconCircleCheck2.default, props) : _react2.default.createElement(_iconCircleExclamation2.default, props);
})(_templateObject6, function (p) {
  return p.animate && 'transform: scale(0.5);';
}, function (p) {
  return p.animate && 'opacity: 0;';
}, function (p) {
  return p.animate && '0.5s ' + growOut + ' forwards';
}, function (p) {
  return p.animationDelay;
});

exports.default = Issue;
module.exports = exports['default'];