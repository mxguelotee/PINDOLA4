# Evidencia 3 – Documentación y Control de Versiones

## Objetivo del proyecto
El objetivo de esta evidencia es aprender a documentar correctamente un proyecto software y a trabajar de forma colaborativa utilizando un sistema de control de versiones.

Para ello se ha documentado un archivo JavaScript utilizando **JSDoc** y se ha aplicado un flujo de trabajo con **Git y GitHub**, haciendo uso de ramas, commits y pull requests.

---

## Tecnologías y herramientas utilizadas
- **JavaScript**: lenguaje principal del proyecto.
- **JSDoc**: documentación automática del código.
- **Git**: control de versiones.
- **GitHub**: repositorio remoto, pull requests y wiki.
- **Visual Studio Code**: editor de código.

---

## Estructura del proyecto
/
├── src/
│ └── archivo.js
├── README.md

yaml
Copiar código

- `src/archivo.js`: contiene la lógica del proyecto y las clases documentadas.
- `README.md`: explicación general del proyecto.
- **Wiki**: documentación detallada de las clases y del funcionamiento del programa.

---

## Clases documentadas
El archivo `archivo.js` contiene las siguientes clases, todas ellas documentadas mediante comentarios JSDoc:

- **Producto**  
  Representa un producto con nombre, precio y cantidad. Incluye un método para calcular su importe total.

- **Carrito**  
  Gestiona una lista de productos, permite añadir productos, calcular el total del carrito y vaciarlo.

- **Usuario**  
  Representa un usuario con datos básicos y un carrito asociado. Permite añadir productos al carrito y finalizar la compra.

---

## Documentación del código
La documentación se ha realizado directamente en el código utilizando el estándar **JSDoc**, comentando:

- Clases
- Constructores
- Propiedades importantes
- Métodos principales
- Tipos de datos (`@type`)
- Parámetros (`@param`)
- Valores de retorno (`@returns`)

Esto permite que el código sea más fácil de entender y mantener.

---

## Flujo de trabajo con Git
El trabajo en equipo se ha realizado siguiendo este flujo:

1. Creación del repositorio en GitHub.
2. Clonado del repositorio en local.
3. Creación de ramas independientes para cada tarea.
4. Documentación del código en cada rama.
5. Commits descriptivos.
6. Creación de Pull Requests.
7. Revisión y fusión de los cambios en la rama principal (`main`).

Aunque el equipo está formado por dos personas, se ha mantenido un flujo de trabajo completo para demostrar el uso correcto del control de versiones.

---

## Wiki del proyecto
El repositorio incluye una **Wiki** con la siguiente información:

- Página principal del proyecto.
- Página específica para cada clase:
  - Producto
  - Carrito
  - Usuario
- Página explicando el funcionamiento general del archivo `archivo.js`.

---

## Conclusión
Este proyecto demuestra la importancia de la documentación y del control de versiones en el desarrollo de software.