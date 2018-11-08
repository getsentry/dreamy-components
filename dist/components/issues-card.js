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

var _issue = require('./issue');

var _issue2 = _interopRequireDefault(_issue);

var _theme = require('./theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var IssuesCard = function IssuesCard(_ref) {
  var priority = _ref.priority,
      props = _objectWithoutProperties(_ref, ['priority']);

  return _react2.default.createElement(
    _card2.default,
    _extends({}, props, {
      priority: priority,
      header: priority == 'success' ? 'Resolved Issues' : 'New Issues'
    }),
    _react2.default.createElement(StyledIssue, {
      name: 'ResponseError',
      description: '/api/0/projects/',
      priority: priority,
      shouldAnimate: true
    }),
    _react2.default.createElement(StyledIssue, {
      name: 'DataError',
      description: '/extensions/github/web/',
      priority: priority,
      shouldAnimate: true,
      delay: '0.15s'
    }),
    _react2.default.createElement(StyledIssue, {
      name: 'ValueTooLarge',
      description: '/api/{project_id}/store/',
      priority: priority,
      shouldAnimate: true,
      noDelimiter: true,
      delay: '0.3s'
    })
  );
};

var StyledIssue = /*#__PURE__*/(0, _reactEmotion2.default)(_issue2.default, {
  label: 'StyledIssue',
  target: 'e1adbg4a0'
})('background:none;font-size:0.875em;border-radius:0;border-bottom:', function (p) {
  return !p.noDelimiter && '1px solid ' + _theme2.default.alert[p.priority || 'error'].border;
}, ';padding:1.25em 1.5em 1.25em 1em;');

exports.default = IssuesCard;
module.exports = exports['default'];