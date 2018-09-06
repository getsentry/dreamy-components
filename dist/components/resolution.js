'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  max-width: 500px;\n'], ['\n  max-width: 500px;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  0% {\n    ', ';\n    ', '\n    background: ', ';\n  }\n  ', '\n  20% {\n    ', ';\n    transform: translateY(0) scale(1);\n    background: ', ';\n  }\n'], ['\n  0% {\n    ', ';\n    ', '\n    background: ', ';\n  }\n  ', '\n  20% {\n    ', ';\n    transform: translateY(0) scale(1);\n    background: ', ';\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  font-size: 0.875em;\n  margin: 1em 0;\n  width: 100%;\n  animation: 5s ', ' ease-out infinite;\n  transform: ', ';\n  opacity: ', ';\n'], ['\n  font-size: 0.875em;\n  margin: 1em 0;\n  width: 100%;\n  animation: 5s ', ' ease-out infinite;\n  transform: ', ';\n  opacity: ', ';\n']);

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

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

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

var Container = (0, _reactEmotion2.default)('div')(_templateObject);

var makeAnimation = function makeAnimation(p) {
  return (0, _reactEmotion.keyframes)(_templateObject2, (p.fadeIn || p.fadeOut) && 'opacity: ' + (p.fadeIn ? 0 : 1), !p.fadeOut && 'transform: translateY(' + (p.startAsError ? '-200%' : '-167%') + ');', p.startAsError && _theme2.default.red, p.startAsError && '\n    15% {\n      transform: scale(1.01);\n    }\n  ', (p.fadeIn || p.fadeOut) && 'opacity: ' + (p.fadeIn ? 1 : 0), p.startAsError && _theme2.default.green);
};

var StyledIssue = (0, _reactEmotion2.default)(_issue2.default)(_templateObject3, makeAnimation, function (p) {
  return p.fadeOut && 'translateY(-167%)';
}, function (p) {
  return p.fadeOut && 0;
});

exports.default = IssuesCard;
module.exports = exports['default'];