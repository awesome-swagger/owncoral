import React from "react";
import * as Styled from './style';

const Card = (props: any) => {
  return (
    <Styled.Card {...props}>
      {props.children}
    </Styled.Card>
  );
};

export default Card;