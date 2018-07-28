import React from 'react';
import styled from 'react-emotion';
import IconCircleCheck from './icon-circle-check';
import IconCircleExclamation from './icon-circle-exclamation';

const Issue = (props) => {
  return (
    <div {...props}>
      <div>
        <IssueName>ReferenceError</IssueName>
        <span>/api/1/components</span>
      </div>
      <StyledIcon/>
    </div>
  )
}
const StyledTest = styled(Issue)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5em 0.5em 0.5em 1em;
  background: #BD2215;
  font-size: 1.2em;
  font-family: sans-serif;
  color: #fff;
  border-radius: 2em;
`

const IssueName = styled('span')`
  font-weight: bold;
  margin-right: 0.5em;
`

const StyledIcon = styled(IconCircleExclamation)`
  height: 2em;
  width: 2em;
`

export default StyledTest;
