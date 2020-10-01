import React from "react";
import { Container, ImageContainer, Overlay } from "./styled";
const Image = ({ children, ...props }) => {
  const { caption, src } = props;
  return (
    <Container>
      <ImageContainer>
        <Overlay />
        <img src={src} />
      </ImageContainer>
      {caption !== "" ? (
        <div className="figcaption_container">
          <figcaption>{caption}</figcaption>
        </div>
      ) : (
        ""
      )}
    </Container>
  );
};

export default Image;
