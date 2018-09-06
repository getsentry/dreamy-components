'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  0% {\n    opacity: 0;\n    transform-origin: left center;\n    transform: scaleX(0.5);\n  }\n\n  100% {\n    opacity: 1;\n    transform-origin: left center;\n    transform: scaleX(1);\n  }\n'], ['\n  0% {\n    opacity: 0;\n    transform-origin: left center;\n    transform: scaleX(0.5);\n  }\n\n  100% {\n    opacity: 1;\n    transform-origin: left center;\n    transform: scaleX(1);\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  border-bottom: ', ';\n  padding: 1.25em 1.5em 1.25em 1em;\n  display: grid;\n  grid-template-columns: auto 1fr 2em;\n  grid-column-gap: 1em;\n  align-items: center;\n'], ['\n  border-bottom: ', ';\n  padding: 1.25em 1.5em 1.25em 1em;\n  display: grid;\n  grid-template-columns: auto 1fr 2em;\n  grid-column-gap: 1em;\n  align-items: center;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  font-size: 0.875em;\n'], ['\n  font-size: 0.875em;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  width: ', '%;\n  height: 6px;\n  background: ', ';\n  border-radius: 10px;\n  animation: 0.5s ', ';\n'], ['\n  width: ', '%;\n  height: 6px;\n  background: ', ';\n  border-radius: 10px;\n  animation: 0.5s ', ';\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  font-family: sans-serif;\n  font-size: 0.875em;\n  text-align: right;\n  color: ', ';\n'], ['\n  font-family: sans-serif;\n  font-size: 0.875em;\n  text-align: right;\n  color: ', ';\n']);

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

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

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
      name: 'Jess',
      src: 'https://sentry.io/_assets/people/jessmacqueen-d3703f7a0aaf8b53330704b5f693ed3f9b907c53efeae485e3ce4c34aa55fbd4.jpg',
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

var expandOut = (0, _reactEmotion.keyframes)(_templateObject);

var LineContainer = (0, _reactEmotion2.default)('div')(_templateObject2, function (p) {
  return !p.noDelimiter && '1px solid ' + _theme2.default.borderLight;
});

var StyledBadge = (0, _reactEmotion2.default)(_badge2.default)(_templateObject3);

var LineChart = (0, _reactEmotion2.default)('div')(_templateObject4, function (p) {
  return p.score / 12 * 100;
}, _theme2.default.green, expandOut);

var LineNumber = (0, _reactEmotion2.default)('div')(_templateObject5, _theme2.default.green);

exports.default = ContributorsCard;
module.exports = exports['default'];