'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  position: relative;\n  max-width: 500px;\n'], ['\n  position: relative;\n  max-width: 500px;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  0% {\n    transform-origin: center center;\n    transform: translate(0%, 0%);\n  }\n  100% {\n    transform-origin: center center;\n    transform: translate(', '%, ', '%);\n  }\n'], ['\n  0% {\n    transform-origin: center center;\n    transform: translate(0%, 0%);\n  }\n  100% {\n    transform-origin: center center;\n    transform: translate(', '%, ', '%);\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  animation: 0.7s ', ';\n  position: absolute;\n  width: 100%;\n  transform: translate(\n    ', '%,\n    ', '%\n  );\n'], ['\n  animation: 0.7s ', ';\n  position: absolute;\n  width: 100%;\n  transform: translate(\n    ', '%,\n    ', '%\n  );\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactEmotion = require('react-emotion');

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var CardStack = function CardStack(_ref) {
  var children = _ref.children,
      verticalMultiplier = _ref.verticalMultiplier,
      horizontalMultiplier = _ref.horizontalMultiplier,
      props = _objectWithoutProperties(_ref, ['children', 'verticalMultiplier', 'horizontalMultiplier']);

  var childrenAsArray = _react2.default.Children.toArray(children);
  var length = childrenAsArray.length;
  var isOdd = length % 2 == 1;
  var iterator = 200 / (length - (isOdd ? 1 : 0));

  var getEvenTransform = function getEvenTransform(i) {
    if (i < length / 2) return iterator * (i + 1) * -1;
    return iterator * i;
  };

  var getOddTransform = function getOddTransform(i) {
    if (i == (length - 1) / 2) return 0;
    if (i <= (length - 1) / 2) return iterator * (i + 1) * -1;
    return iterator * (i - 1);
  };

  var stacked = childrenAsArray.map(function (Child, i) {
    var transformAmount = isOdd ? getOddTransform(i) : getEvenTransform(i);
    return _react2.default.createElement(
      Wrapper,
      {
        transformAmount: transformAmount,
        key: i,
        verticalMultiplier: verticalMultiplier,
        horizontalMultiplier: horizontalMultiplier
      },
      Child
    );
  });

  return _react2.default.createElement(
    Container,
    _extends({}, props, { count: childrenAsArray.length }),
    stacked
  );
};

var Container = (0, _reactEmotion2.default)('div')(_templateObject);

var animate = function animate(p) {
  return (0, _reactEmotion.keyframes)(_templateObject2, p.transformAmount / 25 * (p.horizontalMultiplier || 1), p.transformAmount / 10 * (p.verticalMultiplier || 1));
};

var Wrapper = (0, _reactEmotion2.default)('div')(_templateObject3, animate, function (p) {
  return p.transformAmount / 25 * (p.horizontalMultiplier || 1);
}, function (p) {
  return p.transformAmount / 10 * (p.verticalMultiplier || 1);
});

exports.default = CardStack;
module.exports = exports['default'];