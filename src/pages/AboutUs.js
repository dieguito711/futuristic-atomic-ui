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

const AboutUs = () => {
  return (
    <Layout>
          <Section>
              <Titles type="h1">
                  About Us
              </Titles>
          </Section>
          <Section>
            <Section direction="column">
                <Titles type="h2">Diego</Titles>
                <Image src="/diego1.jpg" caption="" />
                <Paragraph>Gente del bien que solo quiere aprobar programación</Paragraph>
                <Button
                  disabled={false}
                  type="process"
                  text="Aprobar"
                  size="l"
                ></Button>
            </Section>
            <Section direction="column">
                <Titles type="h2">Agustina</Titles>
                <Image src="/agus1.jpg" caption="" />
                <Paragraph>Gente del bien que solo quiere aprobar programación</Paragraph>
                <Button
                  disabled={false}
                  type="process"
                  text="Aprobar"
                  size="l"
                ></Button>
            </Section>
          </Section>
    </Layout>
  );
};
export default AboutUs;