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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
      _react2.default.createElement(ImageFill, { src: src, alt: 'avatar' })
    )
  );
};

var Container = /*#__PURE__*/(0, _reactEmotion2.default)('div', {
  label: 'Container',
  target: 'ebuganl0'
})('width:100%;height:100%;display:inline-flex;align-items:center;justify-content:center;border-radius:100%;border:', function (p) {
  return !p.borderless ? '3px solid ' + _theme2.default.gray1 : null;
}, ';overflow:hidden;');

var ImageCropper = /*#__PURE__*/(0, _reactEmotion2.default)('div', {
  label: 'ImageCropper',
  target: 'ebuganl1'
})('width:100%;height:100%;border-radius:100%;overflow:hidden;');

var ImageFill = /*#__PURE__*/(0, _reactEmotion2.default)('img', {
  label: 'ImageFill',
  target: 'ebuganl2'
})('object-fit:cover;width:100%;height:100%;');

exports.default = Avatar;
module.exports = exports['default'];