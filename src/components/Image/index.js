import React from "react";
import { Container, Overlay } from "./styled";
const Image = ({ children, ...props }) => {
  const { caption, src } = props;
  return (
    <Container>
      <Overlay></Overlay>

      <img src={src} />

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
