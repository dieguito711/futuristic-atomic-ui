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


const Home = () => {
  return (
    <Layout>
      <Section>
        <Titles type="h1">
          Futuristic UI
        </Titles>
      </Section>
      <Section>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et ante eget mauris mattis hendrerit. Sed sed hendrerit sem, non aliquam mi. Aenean sit amet nisi ante. Donec vitae lacus ut tortor efficitur consectetur eget non dui. Nunc aliquet ac erat convallis scelerisque. Nullam facilisis leo sed pretium consectetur. Nulla in gravida justo, vel ornare leo. Ut eu imperdiet metus. Nunc posuere elit eget ex rutrum, ac pharetra nulla sodales. Praesent mauris mi, sagittis accumsan sem eget, tincidunt aliquet ante. Mauris vehicula dui a felis facilisis, ac egestas purus malesuada. Maecenas elit dui, dignissim id vestibulum vitae, sodales at quam.
        </Paragraph>
      </Section>
    </Layout>
  );
};
export default Home;
