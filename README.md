# 🧠 Memory Game

Juego de memoria con niveles de dificultad, cronómetro y dinámica de descubrimiento de pares.

<img alt="Memory Game" src="https://github.com/micazoyolli/memory-game/blob/main/public/assets/screenshot.png" width="500" />

## 🌐 Demo

[Memory Game Demo](https://micazoyolli.github.io/memory-game/)

## 🛠️ Tecnologías

- React
- TypeScript
- SCSS
- Vite
- Node 24
- Micazoyolli Foundation para SEO/build y reduced motion

## 📦 Instalación

```bash
yarn install
```

## 🚀 Scripts

```bash
yarn dev
yarn lint
yarn typecheck
yarn build
yarn preview
yarn deploy
```

Abre `http://localhost:5173/memory-game/` para jugar en local.

## 🗂️ Estructura del proyecto

```txt
public/
scripts/
src/
├── assets/
├── components/
├── styles/
├── utils/
├── App.tsx
└── main.tsx
```

## 🚢 Despliegue en GitHub Pages

Este proyecto se publica en GitHub Pages desde la rama `gh-pages`. El comando `yarn deploy` compila la aplicación, limpia archivos `.DS_Store` del build y publica `dist/` usando el CLI de Micazoyolli Foundation sin crear commits de despliegue en `main`.

La configuración `base` de Vite debe conservar la subruta del repositorio: `/memory-game/`.

## 🧠 Funcionalidad

- Tres niveles de dificultad: fácil, medio y difícil.
- Cronómetro en tiempo real.
- Modal de victoria con tiempo total.
- Diseño responsive y animaciones sutiles.

## 🧩 Construido con Micazoyolli Foundation

Este proyecto utiliza [Micazoyolli Foundation](https://github.com/micazoyolli/foundation) como infraestructura compartida. Las mejoras de tooling, estructura y despliegue deben realizarse en Foundation para beneficiar a todos los proyectos que la consumen.

## 👩‍💻 Autora

Una creación de [`<micazoyolli />✨`](https://nadia.dev)
