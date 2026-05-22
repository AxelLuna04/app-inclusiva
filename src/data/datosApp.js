const base = import.meta.env.BASE_URL;

//Iconos del menu principal
export const CATEGORIAS_PRINCIPALES = [
  { id: 'urgencias', imagen: `${base}imagenes/categorias/urgencias.webp`, texto: 'Urgencias' },
  { id: 'salud', imagen: `${base}imagenes/categorias/salud.webp`, texto: 'Salud' },
  { id: 'emociones', imagen: `${base}imagenes/categorias/emociones.jpeg`, texto: 'Emociones' },
  { id: 'comidaChatarra', imagen: `${base}imagenes/categorias/comidaChatarra.png`, texto: 'Comida' },
  //{ id: 'bebidas', imagen: `${base}imagenes/categorias/bebidas.png`, texto: 'Bebidas' },
  { id: 'tiempo', imagen: `${base}imagenes/categorias/tiempo.png`, texto: 'Tiempo' },
];

//Aqui ponemos los iconos generales de la app
export const ICONOS_UI = {
  volver: `${base}imagenes/elementos/volver.png`, 
  borrar: `${base}imagenes/elementos/borrar.png`,
  eliminar: `${base}imagenes/elementos/eliminar.png`,
  reproducir: `${base}imagenes/elementos/reproducir.png`,
  hablando: `${base}imagenes/elementos/hablando.png`,
};

//Iconos de la categoria salud
export const DATOS_SALUD = [
  { id: 'cabeza', imagen: `${base}imagenes/salud/cabeza.png`, texto: 'Me duele la cabeza' },
  { id: 'estomago', imagen: `${base}imagenes/salud/estomago.png`, texto: 'Me duele el estómago' },
  { id: 'vomitar', imagen: `${base}imagenes/salud/vomitar.png`, texto: 'Quiero vomitar' },
];

//Iconos de la categoria emociones
export const DATOS_EMOCIONES = [
  //{ id: 'feliz', imagen: `${base}imagenes/emociones/feliz.jpeg`, texto: 'Me siento feliz' },
  //{ id: 'triste', imagen: `${base}imagenes/emociones/triste.jpeg`, texto: 'Me siento triste' },
  //{ id: 'enojado', imagen: `${base}imagenes/emociones/enojado.jpeg`, texto: 'Me siento enojado' },
];

//Iconos de la categoria urgencias
export const DATOS_URGENCIAS = [
  { id: 'inodoro', imagen: `${base}imagenes/urgencias/inodoro.png`, texto: '¿Dónde está el baño?' },
  { id: 'permiso', imagen: `${base}imagenes/urgencias/permiso.png`, texto: 'Me da permiso' },
  { id: 'ayuda', imagen: `${base}imagenes/urgencias/ayuda.png`, texto: '¡Ayuda!' },
];

//Iconos de la categoria tiempo
export const DATOS_TIEMPO = [
  { id: 'manana', imagen: `${base}imagenes/tiempo/manana.png`, texto: 'En la mañana' },
  { id: 'tarde', imagen: `${base}imagenes/tiempo/tarde.png`, texto: 'En la tarde' },
  { id: 'noche', imagen: `${base}imagenes/tiempo/noche.png`, texto: 'En la noche' },
  { id: 'madrugada', imagen: `${base}imagenes/tiempo/madrugada.png`, texto: 'En la madrugada' },
];
export const DATOS_COMIDA = [
  { id: 'pizza_rebanada', imagen: `${base}imagenes/comida/pizza_rebanada.png`, texto: 'rebanada de pizza' },
  { id: 'pizza_entera', imagen: `${base}imagenes/comida/pizza_entera.png`, texto: 'pizza completa' },
  { id: 'taco_individual', imagen: `${base}imagenes/comida/taco.png`, texto: 'taco' },
  { id: 'tacos_orden', imagen: `${base}imagenes/comida/tacos_orden.png`, texto: 'orden de tacos' },
  { id: 'hamburguesa', imagen: `${base}imagenes/comida/hamburguesa.png`, texto: 'hamburguesa' },
];

//Ingredientes universales
export const INGREDIENTES = [
  { id: 'peperoni', imagen: `${base}imagenes/ingredientes/peperoni.png`, texto: 'peperoni' },
  { id: 'pastor', imagen: `${base}imagenes/ingredientes/pastor.png`, texto: 'pastor' },
  { id: 'tomate', imagen: `${base}imagenes/ingredientes/tomate.png`, texto: 'tomate' },
  { id: 'cebolla', imagen: `${base}imagenes/ingredientes/cebolla.png`, texto: 'cebolla' },
  { id: 'queso', imagen: `${base}imagenes/ingredientes/queso.png`, texto: 'queso' },
];

//Extras y acciones
export const EXTRAS_PEDIDO = [
  { id: 'para_llevar', imagen: `${base}imagenes/elementos/para_llevar.png`, texto: 'para llevar' },
  { id: 'comer_aqui', imagen: `${base}imagenes/elementos/comer_aqui.png`, texto: 'para comer aquí' },
];

