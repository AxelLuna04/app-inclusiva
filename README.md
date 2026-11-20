# 🗣️ App Inclusiva — Comunicación con pictogramas

Aplicación web de **comunicación aumentativa y alternativa (CAA)** para personas que tienen dificultades para hablar. El usuario arma una frase tocando pictogramas y la app **la lee en voz alta** en español de México.

**🔗 Demo en vivo:** https://axelluna04.github.io/app-inclusiva/

<!-- Agrega aquí una captura o un GIF de la app, por ejemplo:
![Captura de la app](docs/captura.png)
-->

## ✨ Cómo funciona

1. En la pantalla de inicio el usuario elige una categoría: **Urgencias, Salud, Emociones, Comida o Tiempo**.
2. Cada pictograma que toca se agrega a la barra de mensaje de la parte superior.
3. Con el botón verde, la app **reproduce la frase completa con voz** usando la Web Speech API.
4. Puede borrar el último pictograma o todo el mensaje.

**Ejemplo:** tocar *"Me duele la cabeza"* + *"En la noche"* y presionar reproducir hace que la app diga: *"Me duele la cabeza, En la noche"*.

### Pedidos de comida

La categoría **Comida** permite armar un pedido completo sin hablar:

- Elegir el platillo (pizza, tacos, hamburguesa) y la **cantidad**.
- Indicar ingredientes **con** o **sin** (por ejemplo, *"sin cebolla"*).
- Agregar si es **para llevar** o **para comer aquí**.

La app convierte todo en una frase como: *"Me da 1 hamburguesa, sin cebolla, para llevar"*.

## 🧰 Tecnologías

- **React 19** con **Vite**
- **Tailwind CSS 4**
- **Web Speech API** (`SpeechSynthesis`) para la voz
- **GitHub Pages** para el despliegue (`gh-pages`)

## 🗂️ Estructura

```
src
├── App.jsx                 # Pantalla principal, barra de mensaje y voz
├── components/BotonItem.jsx  # Botón de pictograma reutilizable
├── vistas/
│   ├── VistaCategoria.jsx  # Cuadrícula de pictogramas de una categoría
│   └── VistaComida.jsx     # Armado de pedidos (platillo, ingredientes, extras)
└── data/datosApp.js        # Pictogramas y textos de cada categoría
```

Para agregar un pictograma nuevo basta con poner la imagen en `public/imagenes/` y agregar un objeto `{ id, imagen, texto }` en `src/data/datosApp.js`.

## ⚙️ Cómo correrlo en local

```bash
git clone https://github.com/AxelLuna04/app-inclusiva.git
cd app-inclusiva
npm install
npm run dev
```

Abre `http://localhost:5173/app-inclusiva/`.

### Publicar en GitHub Pages

```bash
npm run deploy
```

## 🚀 Ideas a futuro

- Más categorías y pictogramas.
- Que el usuario pueda crear sus propios pictogramas con fotos.
- Guardar frases frecuentes.

<!--
## 🙏 Créditos
Si los íconos son de un sitio como Flaticon, agrega aquí el crédito que pide su licencia,
por ejemplo: "Íconos de Flaticon (www.flaticon.com)".
-->
