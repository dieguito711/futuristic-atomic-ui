En esta carpeta 'constants', se encuentran dos archivos. Por ahora solo se usa 'index.js'.

**index.js contiene:**
Todos los colores que se usarán en la página.

- blanco
- negro
- verde1
- verde2
- violeta1
- violeta2
- amarillo1
- amarillo2
- rojo1
- rojo2

Los que terminan en 1 son las versiones claras y en 2 oscuras.

Para llamar a estos colores desde los distintos componentes y páginas hay que:
importar las funciones y objetos desde index.js -->
import { leerColor, colores } from "../../constants";

y para llamar por ejemplo en background-color -->
background-color: \${leerColor(colores.negro)};
