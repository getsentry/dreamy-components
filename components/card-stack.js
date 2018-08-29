import React from 'react';
import styled from 'react-emotion';

const CardStack = ({children, ...props}) => {
  const childrenAsArray = React.Children.toArray(children);
  const length = childrenAsArray.length;
  const isOdd = length % 2 == 1;
  const iterator = 200 / (length - (isOdd ? 1 : 0));


  const getEvenTransform = (i) => {
    if (i < length / 2) return iterator * (i + 1) * -1;
    return iterator * i;
  }

  const getOddTransform = (i) => {
    if (i == (length - 1) / 2 + 1) return 0;
    if (i <= (length - 1) / 2) return iterator * i * -1;
    return iterator * (i - 1);
  }

  const stacked = childrenAsArray.map((Child, i) => {
    const transformAmount = isOdd ? getOddTransform(i) : getEvenTransform(i);
    console.log(transformAmount)
    return <Wrapper transformAmount={transformAmount}>{Child}</Wrapper>
  });

  console.log(stacked)

  return (
    <Container {...props} count={childrenAsArray.length}>
      {stacked}
    </Container>
  );
}

const Container = styled('div')`
  position: relative;
  max-width: 500px;
  margin: 0 auto;
  top: 1em;
`;

const Wrapper = styled('div')`
  transform: translate(${p => p.transformAmount / 25}%, ${p => p.transformAmount / 10}%);
  position: absolute;
  width: 100%;
`;

export default CardStack;
