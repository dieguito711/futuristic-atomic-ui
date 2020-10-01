import React, { useEffect, useState } from "react";
import Layout from "../containers/Layout";
import Section from "../components/Section";
import Button from "../components/Button";
import Titles from "../components/Titles";
import Paragraph from "../components/Paragraph";
import Quote from "../components/Quote";
import Search from "../components/Search";
import InputText from "../components/InputText";
import InputTextarea from "../components/InputTextarea";
import InputSelect from "../components/InputSelect";

import Image from "../components/Image";
import Card from "../components/Card";
const Components = () => {
  return (
    <Layout>
      <Titles type="h3">Titulos</Titles>
      <Section>
        <Titles type="h1">h1</Titles>
        <Titles type="h2">h2</Titles>
        <Titles type="h3">h3</Titles>
        <Titles type="h4">h4</Titles>
        <Titles type="h5">h5</Titles>
        <Titles type="h6">h6</Titles>
      </Section>
      <Titles type="h3">Párrafos</Titles>
      <Section>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id
          ultrices tortor. Nulla nisl felis, scelerisque ac pretium vel, aliquam
          ac nisi. Vestibulum sit amet tortor elit. Vestibulum nibh velit,
          maximus a ullamcorper et, feugiat eget diam. Sed leo nulla, viverra eu
          aliquam eget, iaculis id libero. In dapibus non dui a ultricies.
          Suspendisse ac molestie metus. Cras vulputate mi lorem, eget interdum
          odio placerat vitae. Fusce eu ipsum mattis, pretium ante vitae,
          interdum diam.
        </Paragraph>
      </Section>
      <Titles type="h3">Citas</Titles>
      <Section>
        <Quote>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id
          ultrices tortor. Nulla nisl felis, scelerisque ac pretium vel, aliquam
          ac nisi.
        </Quote>
      </Section>
      <Titles type="h3">Search</Titles>
      <Section>
        <Search></Search>
      </Section>
      <Titles type="h3">Inputs</Titles>
      <Titles type="h3">Texts</Titles>
      <Section>
        <InputText></InputText>
      </Section>
      <Section>
        <InputTextarea></InputTextarea>
      </Section>
      <Titles type="h3">Select</Titles>
      <Section>
        <InputSelect></InputSelect>
      </Section>
      <Titles type="h3">Botones</Titles>
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
      <Titles type="h3">Imágenes</Titles>
      <Section>
        <Image src="/img1.png" caption=""></Image>
        <Image src="/img2.png" caption="hola este es un texto dummy"></Image>
      </Section>
      <Titles type="h3">Cards</Titles>
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
