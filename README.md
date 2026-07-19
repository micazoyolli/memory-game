# 🧠 Memory Game

Juego de memoria interactivo con niveles de dificultad, cronómetro y diseño responsive. Ideal para ejercitar la mente y divertirse descubriendo pares de monstruos.

<img alt="Memory Game" src="https://github.com/micazoyolli/memory-game/blob/main/public/assets/screenshot.png" width="500" />

## 🌐 Demo

👉 [Memory Game Demo](https://micazoyolli.github.io/memory-game/)

## 🚀 Tecnologías usadas

- React 19 + Vite 8
- TypeScript
- SCSS (con estructura modular)
- HTML5 + CSS3
- Buenas prácticas de accesibilidad y rendimiento
- Node 24
- @micazoyolli/foundation para SEO/build y reduced motion

## 📦 Estructura del proyecto

```
memory-game
├── public/
│   ├── assets/
│   ├── icons/
│   ├── favicon.ico
│   ├── manifest.json
│   ├── meta.jpg
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/
│   |   ├── Card/
│   |   ├── Game/
│   ├── styles/
│   └── styles/
├── .editorconfig
├── .gitignore
├── .nvmrc
├── LICENSE
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.js
```

## ▶️ Uso

```bash
yarn install
yarn dev
yarn lint
yarn typecheck
yarn build
```

Abre `http://localhost:5173/memory-game/` para jugar.

## Despliegue en GitHub Pages

Este proyecto se publica en GitHub Pages desde la rama `gh-pages`. El comando `yarn deploy` compila la aplicación, limpia archivos `.DS_Store` del build y publica `dist/` usando el CLI de Micazoyolli Foundation sin crear commits de despliegue en `main`.

La configuración `base` de Vite debe conservar la subruta del repositorio: `/memory-game/`.

## 🧠 Funcionalidad

- Tres niveles de dificultad: Fácil, Medio y Difícil.
- Cronómetro en tiempo real.
- Modal de victoria con tiempo total.
- Diseño responsivo y visual atractivo.
- Animaciones sutiles y transiciones suaves.
- Código modular con buenas prácticas.

---

## Construido con Micazoyolli Foundation

Este proyecto utiliza [Micazoyolli Foundation](https://github.com/micazoyolli/foundation) como infraestructura compartida. Las mejoras de tooling, estructura y despliegue deben realizarse en Foundation para beneficiar a todos los proyectos que la consumen.

## 👩‍💻 Autora

Una creación de [`<micazoyolli />✨`](https://nadia.dev)
