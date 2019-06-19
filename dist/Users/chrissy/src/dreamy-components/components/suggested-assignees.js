'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactEmotion = require('react-emotion');

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

var _isPropValid = require('@emotion/is-prop-valid');

var _isPropValid2 = _interopRequireDefault(_isPropValid);

var _avatar = require('./avatar');

var _avatar2 = _interopRequireDefault(_avatar);

var _issue = require('./issue');

var _issue2 = _interopRequireDefault(_issue);

var _theme = require('./theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

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
        src: 'https://sentryio-assets.storage.googleapis.com/img/avatars/1.jpg'
      }),
      _react2.default.createElement(AvatarPackage, {
        end: true,
        top: true,
        middle: true,
        src: 'https://sentryio-assets.storage.googleapis.com/img/avatars/2.jpg'
      }),
      _react2.default.createElement(AvatarPackage, {
        top: true,
        right: true,
        src: 'https://sentryio-assets.storage.googleapis.com/img/avatars/7.jpg'
      }),
      _react2.default.createElement(AvatarPackage, {
        bottom: true,
        left: true,
        src: 'https://sentryio-assets.storage.googleapis.com/img/avatars/4.jpg'
      }),
      _react2.default.createElement(AvatarPackage, {
        start: true,
        bottom: true,
        middle: true,
        src: 'https://sentryio-assets.storage.googleapis.com/img/avatars/5.jpg'
      }),
      _react2.default.createElement(AvatarPackage, {
        bottom: true,
        right: true,
        src: 'https://sentryio-assets.storage.googleapis.com/img/avatars/6.jpg'
      })
    )
  );
};

var rotation = function rotation() {
  var operator = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  return (/*#__PURE__*/(0, _reactEmotion.keyframes)('0%{transform:rotate(0deg);}10%{transform:rotate(', 180 * operator, 'deg);}50%{transform:rotate(', 180 * operator, 'deg);}60%{transform:rotate(0deg);}100%{transform:rotate(0deg);}label:rotation;')
  );
};

var getAvatarAnimation = function getAvatarAnimation(p) {
  var startColor = p.startingElement ? _theme2.default.green : _theme2.default.gray1;
  var endColor = p.startingElement ? _theme2.default.gray1 : _theme2.default.green;
  var startSize = p.startingElement ? 1.1 : 1;
  var endSize = p.startingElement ? 1 : 1.1;

  return (/*#__PURE__*/(0, _reactEmotion.keyframes)('0%{border-color:', startColor, ';transform:scale(', startSize, ') rotate(0deg);}10%{border-color:', endColor, ';transform:scale(', startSize, ') rotate(-180deg);}23%{transform:scale(', endSize, ') rotate(-180deg);}50%{border-color:', endColor, ';transform:scale(', endSize, ') rotate(-180deg);}60%{border-color:', startColor, ';transform:scale(', endSize, ') rotate(0deg);}70%{border-color:', startColor, ';transform:scale(', startSize, ') rotate(0deg);}100%{border-color:', startColor, ';transform:scale(', startSize, ') rotate(0deg);}label:getAvatarAnimation;')
  );
};

var getIssueAnimation = function getIssueAnimation() {
  return (/*#__PURE__*/(0, _reactEmotion.keyframes)('0%{background:', _theme2.default.red, ';color:', _theme2.default.red, ';}10%{background:', _theme2.default.red, ';color:', _theme2.default.red, ';}15%{background:', _theme2.default.green, ';color:', _theme2.default.green, ';}50%{background:', _theme2.default.green, ';color:', _theme2.default.green, ';}51%{background:', _theme2.default.red, ';color:', _theme2.default.red, ';}60%{background:', _theme2.default.red, ';color:', _theme2.default.red, ';}65%{background:', _theme2.default.green, ';color:', _theme2.default.green, ';}100%{background:', _theme2.default.green, ';color:', _theme2.default.green, ';}label:getIssueAnimation;')
  );
};

var Container = /*#__PURE__*/(0, _reactEmotion2.default)('div', {
  label: 'Container',
  target: 'e1pw85ix0'
})('margin:9em;position:relative;transform-origin:center center;display:flex;align-items:center;justify-content:center;');

var Avatars = /*#__PURE__*/(0, _reactEmotion2.default)('div', {
  label: 'Avatars',
  target: 'e1pw85ix1'
})('width:70px;height:70px;position:relative;animation:10s ', rotation(), ' infinite;');

var StyledIssue = /*#__PURE__*/(0, _reactEmotion2.default)(_issue2.default, {
  label: 'StyledIssue',
  target: 'e1pw85ix2'
})('position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:0.875em;animation:10s ', function (p) {
  return getIssueAnimation(p);
}, ' infinite;');

var getTransforms = function getTransforms(p) {
  if (p.bottom && p.middle) return '0, -150%';
  if (p.top && p.middle) return '0, 150%';
  if (p.top && p.right) return '-150%, 75%';
  if (p.top && p.left) return '-150%, -75%';
  if (p.bottom && p.right) return '150%, 75%';
  if (p.bottom && p.left) return '150%, -75%';
};

var StyledAvatar = /*#__PURE__*/(0, _reactEmotion2.default)(_avatar2.default, { shouldForwardProp: _isPropValid2.default, label: 'StyledAvatar',
  target: 'e1pw85ix3'
})('position:absolute;animation:10s ', rotation(-1), ' infinite ', function (p) {
  return (p.startingElement || p.endingElement) && ', 10s ' + getAvatarAnimation(p) + ' infinite';
}, ';width:70px;height:70px;');

var AvatarWrapper = /*#__PURE__*/(0, _reactEmotion2.default)('div', { shouldForwardProp: _isPropValid2.default, label: 'AvatarWrapper',
  target: 'e1pw85ix4'
})('transform:translate(', getTransforms, ');width:70px;height:70px;position:absolute;');

var AvatarPackage = function AvatarPackage(_ref) {
  var src = _ref.src,
      start = _ref.start,
      end = _ref.end,
      props = _objectWithoutProperties(_ref, ['src', 'start', 'end']);

  return _react2.default.createElement(
    AvatarWrapper,
    props,
    _react2.default.createElement(StyledAvatar, { src: src, startingElement: start, endingElement: end })
  );
};

exports.default = SuggestedAssignees;
module.exports = exports['default'];