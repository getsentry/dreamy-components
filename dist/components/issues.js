'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _cardStack = require('../components/card-stack');

var _cardStack2 = _interopRequireDefault(_cardStack);

var _filesCard = require('../components/files-card');

var _filesCard2 = _interopRequireDefault(_filesCard);

var _issuesCard = require('../components/issues-card');

var _issuesCard2 = _interopRequireDefault(_issuesCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Issues = function Issues(props) {
  return _react2.default.createElement(
    _cardStack2.default,
    _extends({ verticalMultiplier: 2.5, horizontalMultiplier: 1.5 }, props),
    _react2.default.createElement(_filesCard2.default, { style: { fontSize: '0.875em' } }),
    _react2.default.createElement(_issuesCard2.default, { priority: 'error' }),
    _react2.default.createElement(_issuesCard2.default, { priority: 'success' })
  );
};

exports.default = Issues;
module.exports = exports['default'];