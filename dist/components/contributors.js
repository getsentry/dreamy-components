'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _cardStack = require('../components/card-stack');

var _cardStack2 = _interopRequireDefault(_cardStack);

var _filesCard = require('../components/files-card');

var _filesCard2 = _interopRequireDefault(_filesCard);

var _contributorsCard = require('../components/contributors-card');

var _contributorsCard2 = _interopRequireDefault(_contributorsCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Contributors = function Contributors(props) {
  return _react2.default.createElement(
    _cardStack2.default,
    props,
    _react2.default.createElement(_filesCard2.default, null),
    _react2.default.createElement(_contributorsCard2.default, null)
  );
};

exports.default = Contributors;
module.exports = exports['default'];