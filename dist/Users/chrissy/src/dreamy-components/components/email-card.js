'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactEmotion = require('react-emotion');

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

var _badge = require('./badge');

var _badge2 = _interopRequireDefault(_badge);

var _card = require('./card');

var _card2 = _interopRequireDefault(_card);

var _iconMail = require('./icon-mail');

var _iconMail2 = _interopRequireDefault(_iconMail);

var _theme = require('./theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var LineItem = function LineItem(_ref) {
  var name = _ref.name,
      src = _ref.src,
      message = _ref.message,
      props = _objectWithoutProperties(_ref, ['name', 'src', 'message']);

  return _react2.default.createElement(
    LineContainer,
    props,
    _react2.default.createElement(StyledBadge, { name: name, src: src }),
    _react2.default.createElement(
      EmailMessage,
      null,
      message
    )
  );
};

var ContributorsCard = function ContributorsCard(_ref2) {
  var hash = _ref2.hash,
      props = _objectWithoutProperties(_ref2, ['hash']);

  return _react2.default.createElement(
    _card2.default,
    _extends({}, props, {
      header: _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.createElement(StyledIconMail, null),
        'New Release! Version ',
        hash,
        ' was deployed'
      )
    }),
    _react2.default.createElement(LineItem, {
      name: 'Ben',
      src: 'https://sentryio-assets.storage.googleapis.com/img/avatars/6.jpg',
      message: 'Add ArrayJoin if nested column is present'
    }),
    _react2.default.createElement(LineItem, {
      name: 'Kelly',
      src: 'https://sentryio-assets.storage.googleapis.com/img/avatars/4.jpg',
      message: 'Add ability to reset querybuilder'
    }),
    _react2.default.createElement(LineItem, {
      name: 'Meredith',
      src: 'https://sentryio-assets.storage.googleapis.com/img/avatars/1.jpg',
      message: 'Fix aliases for tag columns',
      noDelimiter: true
    })
  );
};

var LineContainer = /*#__PURE__*/(0, _reactEmotion2.default)('div', {
  label: 'LineContainer',
  target: 'e14yiynw0'
})('border-bottom:', function (p) {
  return !p.noDelimiter && '1px solid ' + _theme2.default.borderLight;
}, ';padding:1.25em 1.5em 1.25em 1em;display:grid;grid-template-columns:auto 1fr;grid-column-gap:0.5em;align-items:center;');

var StyledBadge = /*#__PURE__*/(0, _reactEmotion2.default)(_badge2.default, {
  label: 'StyledBadge',
  target: 'e14yiynw1'
})('font-size:0.875em;font-weight:600;color:', _theme2.default.gray3, ';');

var EmailMessage = /*#__PURE__*/(0, _reactEmotion2.default)('span', {
  label: 'EmailMessage',
  target: 'e14yiynw2'
})('color:', _theme2.default.gray2, ';font-size:0.875em;');

var StyledIconMail = /*#__PURE__*/(0, _reactEmotion2.default)(_iconMail2.default, {
  label: 'StyledIconMail',
  target: 'e14yiynw3'
})('width:1.5em;fill:#fff;margin-right:0.5em;');

exports.default = ContributorsCard;
module.exports = exports['default'];