import React, { useEffect, useState } from "react";
import Layout from "../containers/Layout";
import Section from "../components/Section";
import Button from "../components/Button";
import Image from "../components/Image";
import Card from "../components/Card";
const Components = () => {
  return (
    <Layout>
      <h1>Botones</h1>
      <Section>
        <Button
          disabled={false}
          type="process"
          text="PROCESS"
          size="l"
        ></Button>
        <Button
          disabled={false}
          type="succeed"
          text="SUCCEED"
          size="l"
        ></Button>
        <Button disabled={false} type="alert" text="ALERT" size="l"></Button>
        <Button disabled={false} type="error" text="ERROR" size="l"></Button>
        <Button
          disabled={false}
          type="primary"
          text="PRIMARY"
          size="l"
        ></Button>
        <Button
          disabled={true}
          type="primary"
          text="DISABLED"
          size="l"
        ></Button>
      </Section>
      <h1>Imágenes</h1>
      <Section>
        <Image src="/img1.png" caption=""></Image>
        <Image src="/img2.png" caption="hola este es un texto dummy"></Image>
      </Section>
      <h1>Cards</h1>
      <Section>
        <Card
          title="Título"
          text="lorem ipsum dolor sit amet, consectetur adipiscing elit. aenean eu porta
        urna. duis quis sodales odio, in euismod arcu. phasellus quis lorem non
        velit tincidunt gravida at in nunc. nunc euismod odio nec volutpat
        eleifend. ut ante purus, ultricies non gravida vitae, interdum sed diam.
        vestibulum nec finibus leo, vel pellentesque urna."
          buttons={[
            {
              id: 1,
              type: "succeed",
              disabled: false,
              text: "ACEPTAR",
              size: "s",
            },
            {
              id: 2,
              type: "error",
              disabled: false,
              text: "CANCELAR",
              size: "s",
            },
          ]}
        />
      </Section>
    </Layout>
  );
};
export default Components;
