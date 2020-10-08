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


const Experiments = () => {
  return (
    <Layout>
      <Section>
        <Titles type="h1">
            Experiments
        </Titles>
      </Section>
      <Section>
        <Paragraph>Proximamente amiwi</Paragraph>
      </Section>
    </Layout>
  );
};
export default Experiments;

