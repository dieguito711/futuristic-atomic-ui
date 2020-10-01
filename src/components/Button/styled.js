import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { leerColor, colores } from "../../constants";

const Container = styled.button`
  text-decoration: inherit;
  font-family: "Gugi", cursive;
  font-size: 1rem;
  padding: 1rem 2rem;
  background-color: ${leerColor(colores.negro)};
  color: ${leerColor(colores.blanco)};
  border: 10px solid;
  border-image-slice: 1;
  border-width: 5px;

  font-size: ${(props) => {
    switch (props.size) {
      case "s":
        return `0.5rem`;
      case "m":
        return `0.7rem`;
      case "l":
        return `1rem`;
      default:
        return `0.7rem`;
    }
  }};
  padding: ${(props) => {
    switch (props.size) {
      case "s":
        return `0.3rem 0.6rem`;
      case "m":
        return `0.5rem 1rem`;
      case "l":
        return `1rem 2rem`;
      default:
        return `0.5rem 1rem`;
    }
  }};
  border-image-source: ${(props) => {
    switch (props.type) {
      case "process":
        return `linear-gradient(
      to bottom,
      ${leerColor(colores.violeta1)},
      ${leerColor(colores.violeta2)}
    )`;

      case "succeed":
        return `linear-gradient(
      to bottom,
      ${leerColor(colores.verde1)},
      ${leerColor(colores.verde2)}
    )`;

      case "alert":
        return `linear-gradient(
      to bottom,
      ${leerColor(colores.amarillo1)},
      ${leerColor(colores.amarillo2)}
    )`;

      case "error":
        return `linear-gradient(
      to bottom,
      ${leerColor(colores.rojo1)},
      ${leerColor(colores.rojo2)}
    )`;
      default:
        return `linear-gradient(
      to bottom,
      ${leerColor(colores.verde1)},
      ${leerColor(colores.amarillo1)},
      ${leerColor(colores.rojo1)},
      ${leerColor(colores.violeta1)},
      ${leerColor(colores.violeta2)}
    )`;
    }
  }};

  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
  :hover {
    color: ${(props) => {
      switch (props.type) {
        case "process":
          return `${leerColor(colores.violeta1)}`;
        case "succeed":
          return `${leerColor(colores.verde1)}`;

        case "alert":
          return `${leerColor(colores.amarillo1)}`;

        case "error":
          return `${leerColor(colores.rojo1)}`;
        default:
          return `${leerColor(colores.blanco)}`;
      }
    }};
  }
  :active {
    color: ${leerColor(colores.negro)};
    background: ${(props) => {
      switch (props.type) {
        case "process":
          return `-webkit-linear-gradient(${leerColor(
            colores.violeta1
          )}, ${leerColor(colores.violeta2)});`;
        case "succeed":
          return `-webkit-linear-gradient(${leerColor(
            colores.verde1
          )}, ${leerColor(colores.verde2)});`;

        case "alert":
          return `-webkit-linear-gradient(${leerColor(
            colores.amarillo1
          )}, ${leerColor(colores.amarillo2)});`;

        case "error":
          return `-webkit-linear-gradient(${leerColor(
            colores.rojo1
          )}, ${leerColor(colores.rojo2)});`;
        default:
          return `-webkit-linear-gradient(${leerColor(
            colores.verde1
          )}, ${leerColor(colores.amarillo1)}, ${leerColor(
            colores.rojo1
          )}, ${leerColor(colores.violeta1)}, ${leerColor(colores.violeta2)});`;
      }
    }};
  }
  :disabled {
    color: ${leerColor(colores.gris)};
    border-image-source: linear-gradient(
      to bottom,
      ${leerColor(colores.blanco)},
      ${leerColor(colores.gris)}
    );
  }
`;
export { Container };
