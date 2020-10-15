import React, { useEffect, useState } from "react";
import Layout from "../containers/Layout";
import Section from "../components/Section";
import Button from "../components/Button";
import Titles from "../components/Titles";
import Paragraph from "../components/Paragraph";
import Quote from "../components/Quote";

import { render } from "react-dom";
import { motion } from "framer-motion";

import { AiFillCaretLeft } from "react-icons/ai";
import { AiFillCaretRight }  from "react-icons/ai";




const Experiments = () => {

  const autores = [
    {
      id: 1,
      caption: 'Ursula K. Le Guin',
      src: './leguin.jpg',
      linkRef: 'https://cdn.zendalibros.com/wp-content/uploads/2018/10/poemas-de-ursula-k-le-guin-e1539145916932.jpg'
    },
    {
      id: 2,
      caption: 'Héctor G. Oesterheld',
      src: './oesterheld.jpg',
      linkRef: 'https://2.bp.blogspot.com/-De-nZXQXUOA/UdMNdzHYNpI/AAAAAAAAF40/Aiq0au_yNLU/s400/hecto+2.jpg'
    },
    {
      id: 3,
      caption: 'Octavia E. Butler',
      src: './butler.jpg',
      linkRef: 'https://i2.wp.com/www.fantasticmag.es/wordpress2/wp-content/archivos/2020/07/octavia-butler.jpg?fit=750%2C500&ssl=1'
    },
    {
      id: 4,
      caption: 'Isaac Asimov',
      src: './asimov.jpg',
      linkRef: 'https://laleyendadedarwan.files.wordpress.com/2014/04/isaacasimov.jpg?w=640'
    },
    {
      id: 5,
      caption: 'Marie Shelley',
      src: './shelley.jpg',
      linkRef: 'https://upload.wikimedia.org/wikipedia/commons/d/d7/Claire_Clairmont%2C_by_Amelia_Curran.jpg'
    },
    {
      id: 6,
      caption: 'Ray Bradbury',
      src: './bradbury.jpg',
      linkRef: 'https://i1.wp.com/relatosenconstruccion.com/wprelatos/wp-content/uploads/2018/06/ray-bradbury-video.jpg?fit=1500%2C600&ssl=1'
    },
    {
      id: 7,
      caption: 'Adolfo Bioy Casares',
      src: './casares.jpg',
      linkRef: 'https://i.pinimg.com/originals/d5/e0/91/d5e091b822729ae3447fe2fe613d0d71.jpg'
    },
    {
      id: 8,
      caption: 'Margaret Atwood',
      src: './atwood.jpg',
      linkRef: 'https://karsh.org/wordpress/wp-content/uploads/2019/09/Yousuf-Karsh-Margaret-Atwood-1977.jpg'
    },
    {
      id: 9,
      caption: 'Philip K. Dick',
      src: './dick.jpg',
      linkRef: 'https://cdn.arbetet.se/app/uploads/2018/01/09165037/nintchdbpict000354548724-e1505946699152.jpg'
    },
    {
      id: 10,
      caption: 'Arthur C. Clarke',
      src: './clarke.jpg',
      linkRef: 'https://science.sciencemag.org/content/sci/358/6369/1393/F1.large.jpg?width=800&height=600&carousel=1'
    },
    {
      id: 11,
      caption: 'George Orwell',
      src: './orwell.jpg',
      linkRef: 'https://writingasiplease.files.wordpress.com/2014/09/orwell-1946.jpg'
    },
    {
      id: 12,
      caption: 'Aldous Huxley',
      src: './huxley.png',
      linkRef: 'https://www.abc.net.au/news/image/11295242-3x4-700x933.jpg'
    },
  ];

   {/* esta const está para ver si puedo modificar la src de la imagen, y también tendría que servir para modificar el titlo del autor/a */}

  const [ imagen, setImagen ] = useState(autores[0].linkRef);
  const [ contImagen, setContImagen ] = useState(0);

  const handleImagenF = () => {
    if (contImagen < autores.length) {
      console.log(contImagen, "esto es un if")
      setContImagen(contImagen+1);
      setImagen(autores[contImagen].linkRef);
    } else {
      console.log(contImagen, "esto es un else")
      setContImagen(0)
      setImagen(autores[0].linkRef)
    }
  }


  const handleImagenB = () => {
    if (contImagen <= 0) {
    
      console.log(contImagen, "esto es un else")
      setContImagen(autores.length-1)
      setImagen(autores[autores.length-1].linkRef)

    } else {
      console.log(contImagen, "esto es un if")
      setContImagen(contImagen-1);
      setImagen(autores[contImagen].linkRef);
    }
  }
  
  return (
    <Layout>
      <Section>
        <Titles type="h1">
            Experiments
        </Titles>
      </Section>
      <Section>
      <Button
          disabled={false}
          type="process"
          text={<AiFillCaretLeft onClick={() => handleImagenB()}/>}
          size="l"
          onClick={() => console.log("Cambiar foto hacia la izquierda, osea -1")}
        />
        <svg width="800" height="533" viewBox="0 0 800 533">
          <image
            x="0"
            y="0"
            width="800"
            height="533"
            xlinkHref={imagen}
            filter="url(#duotone)" 
          />

          <filter id="duotone">
            <feColorMatrix
              type="matrix"
              result="grayscale"
              values="1 0 0 0 0
                1 0 0 0 0
                1 0 0 0 0
                0 0 0 1 0"
            />
            <feComponentTransfer
              colorInterpolationFilters="sRGB"
              result="duotone"
            >
              <motion.feFuncR
              type="table"
              initial={{ tableValues: `${ashBlue.r} ${green.r}` }}
              animate={{ tableValues: `${deepBlue.r} ${pink.r}` }}
              transition={transition}
            />
            <motion.feFuncG
              type="table"
              initial={{ tableValues: `${ashBlue.g} ${green.g}` }}
              animate={{ tableValues: `${deepBlue.g} ${pink.g}` }}
              transition={transition}
            />
            <motion.feFuncB
              type="table"
              initial={{ tableValues: `${ashBlue.b} ${green.b}` }}
              animate={{ tableValues: `${deepBlue.b} ${pink.b}` }}
              transition={transition}
            />
              <feFuncA type="table" tableValues="0 1" />
            </feComponentTransfer>
          </filter>
        </svg>
        <Button
          disabled={false}
          type="process"
          text={<AiFillCaretRight onClick={() => handleImagenF()}/>}
          size="l"
          onClick={() => console.log("Cambiar foto hacia la dercha, osea +1")}
        />
      </Section>
      <Section>
        <Titles type="h5">{autores[0].caption}</Titles>
      </Section>

      
        
    </Layout>
  )
}



const transition = { duration: 2, ease: "easeInOut", yoyo: Infinity };

const normalRGB = (r, g, b) => ({
  r: r / 255,
  g: g / 255,
  b: b / 255
});

const ashBlue = normalRGB(43, 25, 92);
const green = normalRGB(194, 246, 166);
const deepBlue = normalRGB(1, 29, 93);
const pink = normalRGB(254, 72, 136);



export default Experiments;

