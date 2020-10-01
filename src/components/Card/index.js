import React from "react";
import Button from "../Button";
/* import Title from '../Title'; */
/* import Paragraph from '../Paragraph'; */
import { Container, ButtonsContainer } from "./styled";
const Card = ({ children, ...props }) => {
  const { id, title, text, buttons } = props;
  console.log(buttons);
  return (
    <Container>
      <h1>{title}</h1>
      <p>{text}</p>
      <ButtonsContainer>
        {buttons.map((button) => (
          <Button
            key={button.id}
            type={button.type}
            disabled={button.disabled}
            text={button.text}
          ></Button>
        ))}
      </ButtonsContainer>
    </Container>
  );
};

export default Card;
