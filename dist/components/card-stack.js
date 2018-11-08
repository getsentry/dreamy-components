'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactEmotion = require('react-emotion');

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var Container = /*#__PURE__*/(0, _reactEmotion2.default)('div', {
  label: 'Container',
  target: 'ejplyi40'
})('position:relative;max-width:500px;');

var animate = function animate(p) {
  return (/*#__PURE__*/(0, _reactEmotion.keyframes)('0%{transform-origin:center center;transform:translate(0%,0%);}100%{transform-origin:center center;transform:translate( ', horizontalOffset(p), '%,', verticalOffset(p), '% );}label:animate;')
  );
};

var Wrapper = /*#__PURE__*/(0, _reactEmotion2.default)('div', {
  label: 'Wrapper',
  target: 'ejplyi41'
})('animation:0.7s ', animate, ';position:', function (p) {
  return p.inFlow ? 'relative' : 'absolute';
}, ';width:100%;top:0;left:0;transform:translate(', function (p) {
  return horizontalOffset(p);
}, '%,', function (p) {
  return verticalOffset(p);
}, '%);');

exports.default = CardStack;
module.exports = exports['default'];