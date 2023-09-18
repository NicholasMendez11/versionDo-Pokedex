# PokedexApp - Resumen y Aspectos Técnicos

## Descripción

**PokedexApp** es una aplicación diseñada para brindar a los usuarios una experiencia simplificada de una Pokedex. Esta aplicación utiliza la **PokeAPI** para presentar información detallada sobre Pokémon. Los usuarios pueden explorar y aprender sobre sus Pokémon favoritos, así como capturarlos y liberarlos en su Pokedex personal.

## Aspectos Técnicos

### Estructura de Directorios

- **src/components/:** Almacena componentes de React reutilizables en toda la aplicación.
- **src/screens/:** Cada pantalla de la aplicación tiene su propia carpeta para una organización eficiente.
- **src/redux/:** Configuración de Redux y carpetas para acciones, reductores y tipos.
- **src/types/:** Contiene archivos de tipos TypeScript para una tipificación sólida.
- **src/utils/:** Funciones de utilidad que mejoran la eficiencia y el mantenimiento del código.

### Tecnologías Utilizadas

- **Framework:** React JS con Vite y TypeScript.
- **Manejador de Paquetes:** Yarn.
- **Gestor de Estado:** Redux con Redux Toolkit.
- **Llamadas HTTP:** Axios.
- **Bibliotecas de UI y Componentes:** Material-UI (MUI), Tailwind CSS, Flowbite y Framer Motion para animaciones.

### Funcionalidades Destacadas

- **Inicio de Sesión:** Los usuarios pueden autenticarse para acceder a la aplicación (credenciales: Email: admin@email.com, Contraseña: password2023).

- **Pantalla de Inicio (Home):** Muestra información detallada sobre Pokémon, incluidos detalles sobre habilidades, estadísticas y tipos. Los usuarios pueden capturar y liberar Pokémon y explorar su Pokedex personal.

- **Protección de Rutas:** React Router se utiliza para proteger las rutas y garantizar que los usuarios autenticados accedan a las partes adecuadas de la aplicación.

## Instrucciones para Ejecutar

1. Clona este repositorio en tu máquina local.
2. Abre la terminal y navega al directorio raíz del proyecto.
3. Ejecuta `yarn install` para instalar las dependencias.
4. Ejecuta `yarn dev` para iniciar la aplicación en modo de desarrollo.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

¡Disfruta explorando el emocionante mundo de Pokémon con PokedexApp!

---

Si tienes alguna pregunta, comentario o retroalimentación, no dudes en contactarme. Estoy aquí para ayudarte. ¡Gracias por revisar mi proyecto!
