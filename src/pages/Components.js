import React, { useEffect, useState } from "react";
import Layout from "../containers/Layout";
import Section from "../components/Section";
import Button from "../components/Button";
import Titles from "../components/Titles"
import Paragraph from "../components/Paragraph"
import Quote from "../components/Quote"
import Search from "../components/Search"
import InputText from "../components/InputText"
import InputTextarea from "../components/InputTextarea"
import InputSelect from "../components/InputSelect"

import Image from "../components/Image";
import Card from "../components/Card";
const Components = () => {
  return (
    <Layout>
      <h1>Botones</h1>
      <div>
        <Button type="process">PROCESS</Button>
        <Button type="succeed">SUCCEED</Button>
        <Button type="alert">ALERT</Button>
        <Button type="error">ERROR</Button>
        <Button type="primary">PRIMARY</Button>
      </div>
      <h1>Titulos</h1>
      <div>
        <Titles type="h1">h1</Titles>
        <Titles type="h2">h2</Titles>
        <Titles type="h3">h3</Titles>
        <Titles type="h4">h4</Titles>
        <Titles type="h5">h5</Titles>
        <Titles type="h6">h6</Titles>
      </div>
      <h1>Párrafos</h1>
      <div>
        <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id ultrices tortor. Nulla nisl felis, scelerisque ac pretium vel, aliquam ac nisi. Vestibulum sit amet tortor elit. Vestibulum nibh velit, maximus a ullamcorper et, feugiat eget diam. Sed leo nulla, viverra eu aliquam eget, iaculis id libero. In dapibus non dui a ultricies. Suspendisse ac molestie metus. Cras vulputate mi lorem, eget interdum odio placerat vitae. Fusce eu ipsum mattis, pretium ante vitae, interdum diam.</Paragraph>
      </div>
      <h1>Citas</h1>
      <div>
        <Quote>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id ultrices tortor. Nulla nisl felis, scelerisque ac pretium vel, aliquam ac nisi.</Quote>
      </div>
      <h1>Search</h1>
      <div>
        <Search></Search>
      </div>
      <h1>Inputs</h1>
      <h2>Text</h2>
      <div>
        <InputText></InputText>
      </div>
      <div>
        <InputTextarea></InputTextarea>
      </div>
      <h2>Select</h2>
      <div>
        <InputSelect></InputSelect>
      </div>
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
