'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _bashCard = require('./bash-card');

var _bashCard2 = _interopRequireDefault(_bashCard);

var _reactEmotion = require('react-emotion');

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

var _theme = require('./theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Minified = function Minified() {
  return _react2.default.createElement(
    _bashCard2.default,
    { header: _react2.default.createElement(
        Header,
        null,
        'sentry.min.js'
      ) },
    _react2.default.createElement(
      MinifiedContent,
      null,
      _react2.default.createElement(
        MinifiedBlock,
        null,
        '!function(){var n="object"==typeof self&&self.self===self&&self||"object"==typeof global&&global.global==global&&global||this||{},r=n._,e=Array.prototype,o=Object.prototype,s="undefined"!=typeof Symbol?Symbol.prototype:null,u=e.push,c=e.slice,p=o.toString,i=o.hasOwnProperty;'
      ),
      _react2.default.createElement(
        Callout,
        null,
        'function() { if (',
        _react2.default.createElement(
          Orange,
          null,
          'aProblem'
        ),
        ') return ',
        _react2.default.createElement(
          Yellow,
          null,
          "'",
          'the problem',
          "'"
        ),
        ' };'
      ),
      _react2.default.createElement(
        MinifiedBlock,
        null,
        'f=function(){},h=function(n){return n instanceof h?n:this instanceof h?void(this._wrapped=n):new h(n)};"undefined"==typeof exports||exports.nodeType?n._=h:("undefined"!=typeof module&&!module.nodeType&&module.exports&&(exports=module.exports=h),exports._=h);'
      )
    )
  );
};

var MinifiedContent = /*#__PURE__*/(0, _reactEmotion2.default)('div', {
  label: 'MinifiedContent',
  target: 'e1api4o90'
})('padding:2em 2em 2.25em 2em;color:', _theme2.default.purpleDark, ';font-weight:bold;');

var MinifiedBlock = /*#__PURE__*/(0, _reactEmotion2.default)('div', {
  label: 'MinifiedBlock',
  target: 'e1api4o91'
})('word-break:break-all;max-height:3.4em;overflow:hidden;');

var Header = /*#__PURE__*/(0, _reactEmotion2.default)('span', {
  label: 'Header',
  target: 'e1api4o92'
})('font-weight:bold;color:', _theme2.default.purpleLightest, ';');

var Callout = /*#__PURE__*/(0, _reactEmotion2.default)('span', {
  label: 'Callout',
  target: 'e1api4o93'
})('color:#fff;display:block;text-align:center;padding:1em;');

var Orange = /*#__PURE__*/(0, _reactEmotion2.default)('span', {
  label: 'Orange',
  target: 'e1api4o94'
})('color:', _theme2.default.yellowOrange, ';');

var Yellow = /*#__PURE__*/(0, _reactEmotion2.default)('span', {
  label: 'Yellow',
  target: 'e1api4o95'
})('color:', _theme2.default.yellow, ';');

exports.default = Minified;
module.exports = exports['default'];