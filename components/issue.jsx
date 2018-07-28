import React from 'react';
import styled from 'react-emotion';
import IconCircleCheck from './icon-circle-check';
import IconCircleExclamation from './icon-circle-exclamation';

const Issue = (props) => {
  return (
    <div {...props}>
      <IconCircleExclamation/>
      Hello World
    </div>
  )
}
const StyledTest = styled(Issue)`
  color: red;
`

export default StyledTest;
