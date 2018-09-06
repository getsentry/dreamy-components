'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 1;\n  }\n  51% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 0;\n  }\n'], ['\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 1;\n  }\n  51% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 0;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  background-color: ', ';\n  display: inline-block;\n  width: 2px;\n  height: 1.2em;\n  position: relative;\n  transform: translate(0.25em, 0.25em);\n  animation: 1s ', ' infinite;\n'], ['\n  background-color: ', ';\n  display: inline-block;\n  width: 2px;\n  height: 1.2em;\n  position: relative;\n  transform: translate(0.25em, 0.25em);\n  animation: 1s ', ' infinite;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  background: #2f2837;\n  width: 500px;\n  margin: 0 auto;\n'], ['\n  background: #2f2837;\n  width: 500px;\n  margin: 0 auto;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  color: ', ';\n'], ['\n  color: ', ';\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  padding: 0.5em 1.5em;\n  font-size: 0.85em;\n  line-height: 1.5;\n  font-weight: 600;\n'], ['\n  padding: 0.5em 1.5em;\n  font-size: 0.85em;\n  line-height: 1.5;\n  font-weight: 600;\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  height: 1.5em;\n  color: ', ';\n  margin-right: 0.5em;\n'], ['\n  height: 1.5em;\n  color: ', ';\n  margin-right: 0.5em;\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n  color: ', ';\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n'], ['\n  color: ', ';\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n']),
    _templateObject8 = _taggedTemplateLiteral(['\n  height: 1em;\n  fill: ', ';\n'], ['\n  height: 1em;\n  fill: ', ';\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactEmotion = require('react-emotion');

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

var _card = require('./card');

var _card2 = _interopRequireDefault(_card);

var _iconCircleChevron = require('./icon-circle-chevron');

var _iconCircleChevron2 = _interopRequireDefault(_iconCircleChevron);

var _iconClose = require('./icon-close');

var _iconClose2 = _interopRequireDefault(_iconClose);

var _theme = require('./theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BashCard = function BashCard(props) {
  return _react2.default.createElement(
    StyledCard,
    _extends({}, props, {
      priority: 'dark',
      header: _react2.default.createElement(
        HeaderContent,
        { style: { width: '98%' } },
        _react2.default.createElement(
          HeaderContent,
          null,
          _react2.default.createElement(StyledIconCircleChevron, null),
          ' Chrissy \u2014 Vim'
        ),
        _react2.default.createElement(StyledIconClose, null)
      )
    }),
    _react2.default.createElement(
      BashContent,
      null,
      _react2.default.createElement(
        Green,
        null,
        'Commit: Dc34EFrfs56Gs'
      ),
      _react2.default.createElement('br', null),
      'Author: Chrissy',
      _react2.default.createElement('br', null),
      'Date: Wed Jul 18',
      _react2.default.createElement('br', null),
      '~',
      _react2.default.createElement('br', null),
      'fix: Don\u2019t fail.',
      _react2.default.createElement('br', null),
      _react2.default.createElement(
        Orange,
        null,
        'fixes SENTRY-5T4'
      ),
      _react2.default.createElement(Cursor, null),
      _react2.default.createElement('br', null),
      '~',
      _react2.default.createElement('br', null),
      '~',
      _react2.default.createElement('br', null)
    )
  );
};

var blink = (0, _reactEmotion.keyframes)(_templateObject);

var Cursor = (0, _reactEmotion2.default)('span')(_templateObject2, _theme2.default.blueLight, blink);

var StyledCard = (0, _reactEmotion2.default)(_card2.default)(_templateObject3);

var Green = (0, _reactEmotion2.default)('span')(_templateObject4, _theme2.default.green);

var Orange = (0, _reactEmotion2.default)('span')(_templateObject4, _theme2.default.yellowOrange);

var BashContent = (0, _reactEmotion2.default)('p')(_templateObject5);

var StyledIconCircleChevron = (0, _reactEmotion2.default)(_iconCircleChevron2.default)(_templateObject6, _theme2.default.purpleLight);

var HeaderContent = (0, _reactEmotion2.default)('div')(_templateObject7, _theme2.default.purpleLightest);

var StyledIconClose = (0, _reactEmotion2.default)(_iconClose2.default)(_templateObject8, _theme2.default.purpleLightest);

exports.default = BashCard;
module.exports = exports['default'];