'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  position: relative;\n  max-width: 500px;\n'], ['\n  position: relative;\n  max-width: 500px;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  0% {\n    transform-origin: center center;\n    transform: translate(0%, 0%);\n  }\n  100% {\n    transform-origin: center center;\n    transform: translate(\n      ', '%,\n      ', '%\n    );\n  }\n'], ['\n  0% {\n    transform-origin: center center;\n    transform: translate(0%, 0%);\n  }\n  100% {\n    transform-origin: center center;\n    transform: translate(\n      ', '%,\n      ', '%\n    );\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  animation: 0.7s ', ';\n  position: ', ';\n  width: 100%;\n  top: 0;\n  left: 0;\n  transform: translate(', '%, ', '%);\n'], ['\n  animation: 0.7s ', ';\n  position: ', ';\n  width: 100%;\n  top: 0;\n  left: 0;\n  transform: translate(', '%, ', '%);\n']);

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
        inFlow: i == Math.ceil(length / 2),
        verticalMultiplier: verticalMultiplier,
        horizontalMultiplier: horizontalMultiplier
      },
      Child
    );
  });

  return _react2.default.createElement(
    Container,
    props,
    stacked
  );
};

var horizontalOffset = function horizontalOffset(p) {
  return p.transformAmount / 25 * (p.horizontalMultiplier || 1);
};
var verticalOffset = function verticalOffset(p) {
  return p.transformAmount / 10 * (p.verticalMultiplier || 1);
};

var Container = (0, _reactEmotion2.default)('div')(_templateObject);

var animate = function animate(p) {
  return (0, _reactEmotion.keyframes)(_templateObject2, horizontalOffset(p), verticalOffset(p));
};

var Wrapper = (0, _reactEmotion2.default)('div')(_templateObject3, animate, function (p) {
  return p.inFlow ? 'relative' : 'absolute';
}, function (p) {
  return horizontalOffset(p);
}, function (p) {
  return verticalOffset(p);
});

exports.default = CardStack;
module.exports = exports['default'];