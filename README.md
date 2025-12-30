# ClimaOP - Frontend

Aplicación web para el monitoreo del clima en tiempo real, construida con React y Vite.

**Despliegue:** [https://clima-op-frontend.vercel.app](https://clima-op-frontend.vercel.app)

## Descripción

ClimaOP permite a los usuarios agregar ciudades y visualizar su información climática actualizada. Esta es la interfaz de usuario (Frontend) que consume la API de ClimaOP.

## Características

-   **Agregar Ciudades:** Formulario intuitivo para registrar nuevas ciudades.
-   **Listado de Clima:** Visualización de las ciudades agregadas con sus datos meteorológicos.
-   **Interfaz Moderna:** Diseño responsivo y amigable.

## Tecnologías

-   **[React](https://react.dev/)** - Biblioteca para construir interfaces de usuario.
-   **[Vite](https://vitejs.dev/)** - Entorno de desarrollo rápido.
-   **[Axios](https://axios-http.com/)** - Cliente HTTP para consumir la API.
-   **CSS Modules** - Estilizado de componentes.

## Instalación y Ejecución Local

Para ejecutar este proyecto en tu máquina local, sigue estos pasos:

1.  **Clonar el repositorio**

    ```bash
    git clone <URL_DEL_REPOSITORIO>
    cd frontend-climaop
    ```

2.  **Instalar dependencias**

    ```bash
    npm install
    ```

3.  **Ejecutar servidor de desarrollo**

    ```bash
    npm run dev
    ```

    La aplicación estará disponible en `http://localhost:5173`.

## Configuración de API

El frontend está configurado para comunicarse con el servidor backend alojado en Render:
`https://climaop.onrender.com`

La configuración se encuentra en `src/services/api.js`.

## Scripts Disponibles

-   `npm run dev`: Inicia el servidor de desarrollo.
-   `npm run build`: Construye la aplicación para producción.
-   `npm run preview`: Previsualiza la build de producción localmente.
-   `npm run lint`: Ejecuta el linter para verificar el código.
