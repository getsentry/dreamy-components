'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactEmotion = require('react-emotion');

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

var _issue = require('./issue');

var _issue2 = _interopRequireDefault(_issue);

var _commitLine = require('./commit-line');

var _commitLine2 = _interopRequireDefault(_commitLine);

var _theme = require('./theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IssuesCard = function IssuesCard(props) {
  return _react2.default.createElement(
    Container,
    props,
    _react2.default.createElement(StyledIssue, {
      fadeIn: true,
      name: 'DoesNotExist',
      description: '/api/0/projects/',
      priority: 'error'
    }),
    _react2.default.createElement(StyledIssue, { name: 'DoesNotExist', description: '/api/0/projects/', priority: 'error' }),
    _react2.default.createElement(
      _commitLine2.default,
      null,
      '9956ddd'
    ),
    _react2.default.createElement(StyledIssue, {
      startAsError: true,
      name: 'DoesNotExist',
      description: '/api/0/projects/',
      priority: 'success'
    }),
    _react2.default.createElement(StyledIssue, {
      fadeOut: true,
      name: 'DoesNotExist',
      description: '/api/0/projects/',
      priority: 'success'
    })
  );
};

var Container = /*#__PURE__*/(0, _reactEmotion2.default)('div', {
  label: 'Container',
  target: 'esepdvl0'
})('max-width:500px;');

var makeAnimation = function makeAnimation(p) {
  return (/*#__PURE__*/(0, _reactEmotion.keyframes)('0%{', (p.fadeIn || p.fadeOut) && 'opacity: ' + (p.fadeIn ? 0 : 1), ';', !p.fadeOut && 'transform: translateY(' + (p.startAsError ? '-200%' : '-167%') + ');', ' background:', p.startAsError && _theme2.default.red, ';}', p.startAsError && '\n    15% {\n      transform: scale(1.01);\n    }\n  ', ' 20%{', (p.fadeIn || p.fadeOut) && 'opacity: ' + (p.fadeIn ? 1 : 0), ';transform:translateY(0) scale(1);background:', p.startAsError && _theme2.default.green, ';}label:makeAnimation;')
  );
};

var StyledIssue = /*#__PURE__*/(0, _reactEmotion2.default)(_issue2.default, {
  label: 'StyledIssue',
  target: 'esepdvl1'
})('font-size:0.875em;margin:1em 0;width:100%;animation:5s ', makeAnimation, ' ease-out infinite;transform:', function (p) {
  return p.fadeOut && 'translateY(-167%)';
}, ';opacity:', function (p) {
  return p.fadeOut && 0;
}, ';');

exports.default = IssuesCard;
module.exports = exports['default'];