const Color = require("color");
export const colores = {
  blanco: Color.rgb(255, 255, 255),
  negro: Color.rgb(35, 35, 35),
  gris: Color.rgb(99, 99, 99),
  verde1: Color.rgb(202, 254, 1),
  verde2: Color.rgb(177, 200, 33),
  violeta1: Color.rgb(243, 60, 131),
  violeta2: Color.rgb(179, 67, 158),
  amarillo1: Color.rgb(255, 250, 0),
  amarillo2: Color.rgb(255, 221, 0),
  rojo1: Color.rgb(255, 142, 70),
  rojo2: Color.rgb(255, 95, 70),
};
export const leerColor = (color) => color.hsl().string();
