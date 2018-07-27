import React from 'react';
import styled from 'react-emotion';

const Test = (props) => (<h1 {...props}>Hello World</h1>)
const StyledTest = styled(Test)`
  color: red;
`

export default StyledTest;
