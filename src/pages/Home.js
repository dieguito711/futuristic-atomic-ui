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
import Grid from '../components/Grid';

const Home = () => {
  const autores = [
    {
      id: 1,
      caption: 'Ursula K. Le Guin',
      src: './leguin.jpg'
    },
    {
      id: 2,
      caption: 'Héctor G. Oesterheld',
      src: './oesterheld.jpg'
    },
    {
      id: 3,
      caption: 'Octavia E. Butler',
      src: './butler.jpg'
    },
    {
      id: 4,
      caption: 'Isaac Asimov',
      src: './asimov.jpg'
    },
    {
      id: 5,
      caption: 'Marie Shelley',
      src: './shelley.jpg'
    },
    {
      id: 6,
      caption: 'Ray Bradbury',
      src: './bradbury.jpg'
    },
    {
      id: 7,
      caption: 'Adolfo Bioy Casares',
      src: './casares.jpg'
    },
    {
      id: 8,
      caption: 'Margaret Atwood',
      src: './atwood.jpg'
    },
    {
      id: 9,
      caption: 'Philip K. Dick',
      src: './dick.jpg'
    },
    {
      id: 10,
      caption: 'Arthur C. Clarke',
      src: './clarke.jpg'
    },
    {
      id: 11,
      caption: 'George Orwell',
      src: './orwell.jpg'
    },
    {
      id: 12,
      caption: 'Aldous Huxley',
      src: './huxley.png'
    },
  ];
  return (
    <Layout>
      <Section>
        <Titles type="h1">
          Mentes brillantes de la ciencia ficcion
        </Titles>

      </Section>
      <Section><Quote>My imagination makes me human and makes me a fool; it gives me all the world, and exiles me from it.

</Quote></Section>
      <Section direction="column">
        <div className="grid_autores">
        {autores && autores.map((autor) => {
          return (<Image key={autor.id} caption={autor.caption} src={autor.src}/>)
        })}

        </div>

      </Section>
    </Layout>
  );
};
export default Home;
