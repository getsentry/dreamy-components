'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactEmotion = require('react-emotion');

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

var _theme = require('./theme');

var _theme2 = _interopRequireDefault(_theme);

var _badge = require('./badge');

var _badge2 = _interopRequireDefault(_badge);

var _card = require('./card');

var _card2 = _interopRequireDefault(_card);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var ContributorsLine = function ContributorsLine(_ref) {
  var name = _ref.name,
      src = _ref.src,
      score = _ref.score,
      props = _objectWithoutProperties(_ref, ['name', 'src', 'score']);

  return _react2.default.createElement(
    LineContainer,
    props,
    _react2.default.createElement(StyledBadge, { name: name, src: src }),
    _react2.default.createElement(LineChart, { score: score }),
    _react2.default.createElement(
      LineNumber,
      null,
      score
    )
  );
};

var ContributorsCard = function ContributorsCard(props) {
  return _react2.default.createElement(
    _card2.default,
    props,
    _react2.default.createElement(ContributorsLine, {
      name: 'Ben',
      src: 'https://sentry.io/_assets/people/benvinegar-28a3febe24d6cdac0ea9d896e3c16570b1c7b31083f08fa5d54f46e8df0e2bda.jpg',
      score: 4
    }),
    _react2.default.createElement(ContributorsLine, {
      name: 'Colleen',
      src: 'https://sentry.io/_assets/people/colleenorourke-8b97c40b41b68e31097b8d3dbe21cbb53dd09d7b0034ef5c92c8b951ea6adfc5.jpg',
      score: 11
    }),
    _react2.default.createElement(ContributorsLine, {
      name: 'Chris',
      src: 'https://sentry.io/_assets/people/ckj-274e99b013127e748e6ea1e7d6cec774cf60609c7b19872abb984964fdca3604.jpg',
      score: 8
    }),
    _react2.default.createElement(ContributorsLine, {
      name: 'Dena',
      src: 'https://sentry.io/_assets/people/denamwangi-e522c9cae55e1a226b03e57bed5a27a44a92fe870fe2de0a6559a8fb4bdaece5.jpg',
      score: 6,
      noDelimiter: true
    })
  );
};

var expandOut = /*#__PURE__*/(0, _reactEmotion.keyframes)('0%{opacity:0;transform-origin:left center;transform:scaleX(0.5);}100%{opacity:1;transform-origin:left center;transform:scaleX(1);}label:expandOut;');

var LineContainer = /*#__PURE__*/(0, _reactEmotion2.default)('div', {
  label: 'LineContainer',
  target: 'e1diby6x0'
})('border-bottom:', function (p) {
  return !p.noDelimiter && '1px solid ' + _theme2.default.borderLight;
}, ';padding:1.25em 1.5em 1.25em 1em;display:grid;grid-template-columns:auto 1fr 2em;grid-column-gap:1em;align-items:center;');

var StyledBadge = /*#__PURE__*/(0, _reactEmotion2.default)(_badge2.default, {
  label: 'StyledBadge',
  target: 'e1diby6x1'
})('font-size:0.875em;');

var LineChart = /*#__PURE__*/(0, _reactEmotion2.default)('div', {
  label: 'LineChart',
  target: 'e1diby6x2'
})('width:', function (p) {
  return p.score / 12 * 100;
}, '%;height:6px;background:', _theme2.default.green, ';border-radius:10px;animation:0.5s ', expandOut, ';');

var LineNumber = /*#__PURE__*/(0, _reactEmotion2.default)('div', {
  label: 'LineNumber',
  target: 'e1diby6x3'
})('font-family:sans-serif;font-size:0.875em;text-align:right;color:', _theme2.default.green, ';');

exports.default = ContributorsCard;
module.exports = exports['default'];