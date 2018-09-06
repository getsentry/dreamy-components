'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  0% {\n    transform: rotate(0deg);\n  }\n  10% {\n    transform: rotate(', 'deg);\n  }\n  50% {\n    transform: rotate(', 'deg);\n  }\n  60% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(0deg);\n  }\n'], ['\n  0% {\n    transform: rotate(0deg);\n  }\n  10% {\n    transform: rotate(', 'deg);\n  }\n  50% {\n    transform: rotate(', 'deg);\n  }\n  60% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(0deg);\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    0% {\n      border-color: ', ';\n      transform: scale(', ') rotate(0deg);\n    }\n    10% {\n      border-color: ', ';\n      transform: scale(', ') rotate(-180deg);\n    }\n    23% {\n      transform: scale(', ') rotate(-180deg);\n    }\n    50% {\n      border-color: ', ';\n      transform: scale(', ') rotate(-180deg);\n    }\n    60% {\n      border-color: ', ';\n      transform: scale(', ') rotate(0deg);\n    }\n    70% {\n      border-color: ', ';\n      transform: scale(', ') rotate(0deg);\n    }\n    100% {\n      border-color: ', ';\n      transform: scale(', ') rotate(0deg);\n    }\n  '], ['\n    0% {\n      border-color: ', ';\n      transform: scale(', ') rotate(0deg);\n    }\n    10% {\n      border-color: ', ';\n      transform: scale(', ') rotate(-180deg);\n    }\n    23% {\n      transform: scale(', ') rotate(-180deg);\n    }\n    50% {\n      border-color: ', ';\n      transform: scale(', ') rotate(-180deg);\n    }\n    60% {\n      border-color: ', ';\n      transform: scale(', ') rotate(0deg);\n    }\n    70% {\n      border-color: ', ';\n      transform: scale(', ') rotate(0deg);\n    }\n    100% {\n      border-color: ', ';\n      transform: scale(', ') rotate(0deg);\n    }\n  ']),
    _templateObject3 = _taggedTemplateLiteral(['\n  0% {\n    background: ', ';\n    color: ', ';\n  }\n  10% {\n    background: ', ';\n    color: ', ';\n  }\n  15% {\n    background: ', ';\n    color: ', ';\n  }\n  50% {\n    background: ', ';\n    color: ', ';\n  }\n  51% {\n    background: ', ';\n    color: ', ';\n  }\n  60% {\n    background: ', ';\n    color: ', ';\n  }\n  65% {\n    background: ', ';\n    color: ', ';\n  }\n  100% {\n    background: ', ';\n    color: ', ';\n  }\n'], ['\n  0% {\n    background: ', ';\n    color: ', ';\n  }\n  10% {\n    background: ', ';\n    color: ', ';\n  }\n  15% {\n    background: ', ';\n    color: ', ';\n  }\n  50% {\n    background: ', ';\n    color: ', ';\n  }\n  51% {\n    background: ', ';\n    color: ', ';\n  }\n  60% {\n    background: ', ';\n    color: ', ';\n  }\n  65% {\n    background: ', ';\n    color: ', ';\n  }\n  100% {\n    background: ', ';\n    color: ', ';\n  }\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  width: 70px;\n  height: 70px;\n  padding: ', 'px;\n  position: relative;\n  transform-origin: center center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n'], ['\n  width: 70px;\n  height: 70px;\n  padding: ', 'px;\n  position: relative;\n  transform-origin: center center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  width: 70px;\n  height: 70px;\n  position: relative;\n  animation: 10s ', ' infinite;\n'], ['\n  width: 70px;\n  height: 70px;\n  position: relative;\n  animation: 10s ', ' infinite;\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 0.875em;\n  animation: 10s ', ' infinite;\n'], ['\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 0.875em;\n  animation: 10s ', ' infinite;\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n  position: absolute;\n  animation: 10s ', ' infinite\n    ', ';\n  width: 70px;\n  height: 70px;\n'], ['\n  position: absolute;\n  animation: 10s ', ' infinite\n    ', ';\n  width: 70px;\n  height: 70px;\n']),
    _templateObject8 = _taggedTemplateLiteral(['\n  transform: translate(', ');\n  width: 70px;\n  height: 70px;\n  position: absolute;\n'], ['\n  transform: translate(', ');\n  width: 70px;\n  height: 70px;\n  position: absolute;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactEmotion = require('react-emotion');

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

var _avatar = require('./avatar');

var _avatar2 = _interopRequireDefault(_avatar);

var _issue = require('./issue');

var _issue2 = _interopRequireDefault(_issue);

var _theme = require('./theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SuggestedAssignees = function SuggestedAssignees(props) {
  return _react2.default.createElement(
    Container,
    props,
    _react2.default.createElement(StyledIssue, { description: 'E3fc2x', priority: 'error', triangleUp: true }),
    _react2.default.createElement(
      Avatars,
      null,
      _react2.default.createElement(AvatarPackage, {
        top: true,
        left: true,
        src: 'https://sentry.io/_assets/people/matte-noble-98626d554cd2dcc6fbf5fba79428eb810c8ed7cb75da65baab550cb7d0d32061.jpg'
      }),
      _react2.default.createElement(AvatarPackage, {
        end: true,
        top: true,
        middle: true,
        src: 'https://sentry.io/_assets/people/meredith-9530c4a02bc5e6135f3eb4c731f704ae9456637fb98452d1c8b10a1f91f02014.jpg'
      }),
      _react2.default.createElement(AvatarPackage, {
        top: true,
        right: true,
        src: 'https://sentry.io/_assets/people/denamwangi-e522c9cae55e1a226b03e57bed5a27a44a92fe870fe2de0a6559a8fb4bdaece5.jpg'
      }),
      _react2.default.createElement(AvatarPackage, {
        bottom: true,
        left: true,
        src: 'https://sentry.io/_assets/people/colleenorourke-8b97c40b41b68e31097b8d3dbe21cbb53dd09d7b0034ef5c92c8b951ea6adfc5.jpg'
      }),
      _react2.default.createElement(AvatarPackage, {
        start: true,
        bottom: true,
        middle: true,
        src: 'https://sentry.io/_assets/people/benvinegar-28a3febe24d6cdac0ea9d896e3c16570b1c7b31083f08fa5d54f46e8df0e2bda.jpg'
      }),
      _react2.default.createElement(AvatarPackage, {
        bottom: true,
        right: true,
        src: 'https://sentry.io/_assets/people/adhiraj-5faa25498fde92382792066aa195c48ec5b4e2f7530ba4bcada1fd332bb86e98.jpg'
      })
    )
  );
};

var rotation = function rotation() {
  var operator = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  return (0, _reactEmotion.keyframes)(_templateObject, 180 * operator, 180 * operator);
};

var getAvatarAnimation = function getAvatarAnimation(p) {
  var startColor = p.start ? _theme2.default.green : _theme2.default.gray1;
  var endColor = p.start ? _theme2.default.gray1 : _theme2.default.green;
  var startSize = p.start ? 1.1 : 1;
  var endSize = p.start ? 1 : 1.1;

  return (0, _reactEmotion.keyframes)(_templateObject2, startColor, startSize, endColor, startSize, endSize, endColor, endSize, startColor, endSize, startColor, startSize, startColor, startSize);
};

var getIssueAnimation = function getIssueAnimation() {
  return (0, _reactEmotion.keyframes)(_templateObject3, _theme2.default.red, _theme2.default.red, _theme2.default.red, _theme2.default.red, _theme2.default.green, _theme2.default.green, _theme2.default.green, _theme2.default.green, _theme2.default.red, _theme2.default.red, _theme2.default.red, _theme2.default.red, _theme2.default.green, _theme2.default.green, _theme2.default.green, _theme2.default.green);
};

var Container = (0, _reactEmotion2.default)('div')(_templateObject4, 70 * 1.5);

var Avatars = (0, _reactEmotion2.default)('div')(_templateObject5, rotation());

var StyledIssue = (0, _reactEmotion2.default)(_issue2.default)(_templateObject6, function (p) {
  return getIssueAnimation(p);
});

var getTransforms = function getTransforms(p) {
  if (p.bottom && p.middle) return '0, -150%';
  if (p.top && p.middle) return '0, 150%';
  if (p.top && p.right) return '-150%, 75%';
  if (p.top && p.left) return '-150%, -75%';
  if (p.bottom && p.right) return '150%, 75%';
  if (p.bottom && p.left) return '150%, -75%';
};

var StyledAvatar = (0, _reactEmotion2.default)(_avatar2.default)(_templateObject7, rotation(-1), function (p) {
  return (p.start || p.end) && ', 10s ' + getAvatarAnimation(p) + ' infinite';
});

var AvatarWrapper = (0, _reactEmotion2.default)('div')(_templateObject8, getTransforms);

var AvatarPackage = function AvatarPackage(_ref) {
  var src = _ref.src,
      start = _ref.start,
      end = _ref.end,
      props = _objectWithoutProperties(_ref, ['src', 'start', 'end']);

  return _react2.default.createElement(
    AvatarWrapper,
    props,
    _react2.default.createElement(StyledAvatar, { start: start, end: end, src: src })
  );
};

exports.default = SuggestedAssignees;
module.exports = exports['default'];