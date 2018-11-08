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
      src: 'https://sentry.io/_assets/people/benvinegar-28a3febe24d6cdac0ea9d896e3c16570b1c7b31083f08fa5d54f46e8df0e2bda.jpg',
      message: 'Add ArrayJoin if nested column is present'
    }),
    _react2.default.createElement(LineItem, {
      name: 'Jess',
      src: 'https://sentry.io/_assets/people/jessmacqueen-d3703f7a0aaf8b53330704b5f693ed3f9b907c53efeae485e3ce4c34aa55fbd4.jpg',
      message: 'Add ability to reset querybuilder'
    }),
    _react2.default.createElement(LineItem, {
      name: 'Chris',
      src: 'https://sentry.io/_assets/people/ckj-274e99b013127e748e6ea1e7d6cec774cf60609c7b19872abb984964fdca3604.jpg',
      message: 'Fix aliases for tag columns',
      noDelimiter: true
    })
  );
};

var LineContainer = /*#__PURE__*/(0, _reactEmotion2.default)('div', {
  label: 'LineContainer',
  target: 'ebpkuxd0'
})('border-bottom:', function (p) {
  return !p.noDelimiter && '1px solid ' + _theme2.default.borderLight;
}, ';padding:1.25em 1.5em 1.25em 1em;display:grid;grid-template-columns:auto 1fr;grid-column-gap:0.5em;align-items:center;');

var StyledBadge = /*#__PURE__*/(0, _reactEmotion2.default)(_badge2.default, {
  label: 'StyledBadge',
  target: 'ebpkuxd1'
})('font-size:0.875em;font-weight:600;color:', _theme2.default.gray3, ';');

var EmailMessage = /*#__PURE__*/(0, _reactEmotion2.default)('span', {
  label: 'EmailMessage',
  target: 'ebpkuxd2'
})('color:', _theme2.default.gray2, ';font-size:0.875em;');

var StyledIconMail = /*#__PURE__*/(0, _reactEmotion2.default)(_iconMail2.default, {
  label: 'StyledIconMail',
  target: 'ebpkuxd3'
})('width:1.5em;fill:#fff;margin-right:0.5em;');

exports.default = ContributorsCard;
module.exports = exports['default'];