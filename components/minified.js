import React from 'react';
import BashCard from './bash-card';
import styled from 'react-emotion';
import theme from './theme';

const Minified = () => (
  <BashCard header={<Header>sentry.min.js</Header>}>
    <MinifiedContent>
      <MinifiedBlock>
        {`!function(){var n="object"==typeof self&&self.self===self&&self||"object"==typeof global&&global.global==global&&global||this||{},r=n._,e=Array.prototype,o=Object.prototype,s="undefined"!=typeof Symbol?Symbol.prototype:null,u=e.push,c=e.slice,p=o.toString,i=o.hasOwnProperty;`}
      </MinifiedBlock>
      <Callout>
        {'function() { if ('}
        <Orange>aProblem</Orange>
        {') return '}
        <Yellow>
          {"'"}
          the problem
          {"'"}
        </Yellow>
        {' };'}
      </Callout>
      <MinifiedBlock>
        {`f=function(){},h=function(n){return n instanceof h?n:this instanceof h?void(this._wrapped=n):new h(n)};"undefined"==typeof exports||exports.nodeType?n._=h:("undefined"!=typeof module&&!module.nodeType&&module.exports&&(exports=module.exports=h),exports._=h);`}
      </MinifiedBlock>
    </MinifiedContent>
  </BashCard>
);

const MinifiedContent = styled('div')`
  padding: 2em 2em 2.25em 2em;
  color: ${theme.purpleDark};
  font-weight: bold;
`;

const MinifiedBlock = styled('div')`
  word-break: break-all;
  max-height: 3.4em;
  overflow: hidden;
`;

const Header = styled('span')`
  font-weight: bold;
  color: ${theme.purpleLightest};
`;

const Callout = styled('span')`
  color: #fff;
  display: block;
  text-align: center;
  padding: 1em;
`;

const Orange = styled('span')`
  color: ${theme.yellowOrange};
`;

const Yellow = styled('span')`
  color: ${theme.yellow};
`;

export default Minified;
