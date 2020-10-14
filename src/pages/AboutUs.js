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
                <Image className="aboutus_figure" src="/diego1.jpg" caption="Hola Lean." />


            </Section>
            <Section direction="column">
                <Titles type="h2">Agustina</Titles>
                <Image src="/agus1.jpg" caption="Queremos aprobar." />


            </Section>
          </Section>
    </Layout>
  );
};
export default AboutUs;