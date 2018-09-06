'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  width: 100%;\n  height: 100%;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 100%;\n  border: ', ';\n  overflow: hidden;\n'], ['\n  width: 100%;\n  height: 100%;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 100%;\n  border: ', ';\n  overflow: hidden;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  width: 100%;\n  height: 100%;\n  border-radius: 100%;\n  overflow: hidden;\n'], ['\n  width: 100%;\n  height: 100%;\n  border-radius: 100%;\n  overflow: hidden;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  object-fit: cover;\n  width: 100%;\n  height: 100%;\n'], ['\n  object-fit: cover;\n  width: 100%;\n  height: 100%;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactEmotion = require('react-emotion');

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

var _theme = require('./theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Avatar = function Avatar(_ref) {
  var src = _ref.src,
      props = _objectWithoutProperties(_ref, ['src']);

  return _react2.default.createElement(
    Container,
    props,
    _react2.default.createElement(
      ImageCropper,
      null,
      _react2.default.createElement(ImageFill, { src: src })
    )
  );
};

var Container = (0, _reactEmotion2.default)('div')(_templateObject, function (p) {
  return !p.borderless ? '3px solid ' + _theme2.default.gray1 : null;
});

var ImageCropper = (0, _reactEmotion2.default)('div')(_templateObject2);

var ImageFill = (0, _reactEmotion2.default)('img')(_templateObject3);

exports.default = Avatar;
module.exports = exports['default'];