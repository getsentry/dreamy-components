'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _cardStack = require('../components/card-stack');

var _cardStack2 = _interopRequireDefault(_cardStack);

var _emailCard = require('../components/email-card');

var _emailCard2 = _interopRequireDefault(_emailCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Emails = function Emails(props) {
  return _react2.default.createElement(
    _cardStack2.default,
    _extends({ verticalMultiplier: 1.5 }, props),
    _react2.default.createElement(_emailCard2.default, { hash: '7cd0912' }),
    _react2.default.createElement(_emailCard2.default, { hash: '3ab7615', alternateHeaderColor: 'purpleLightest' }),
    _react2.default.createElement(_emailCard2.default, { hash: '2dc1209', alternateHeaderColor: 'purpleDarkest' })
  );
};

exports.default = Emails;
module.exports = exports['default'];