const base = import.meta.env.BASE_URL;

//Iconos del menu principal
export const CATEGORIAS_PRINCIPALES = [
  { id: 'comidaChatarra', imagen: `${base}imagenes/categorias/comidaChatarra.png`, texto: 'Comida' },
  { id: 'bebidas', imagen: `${base}imagenes/categorias/bebidas.png`, texto: 'Bebidas' },
  { id: 'salud', imagen: `${base}imagenes/categorias/salud.webp`, texto: 'Salud' },
];

//Iconos de la categoria salud
export const DATOS_SALUD = [
  { id: 'cabeza', imagen: `${base}imagenes/salud/cabeza.png`, texto: 'Me duele la cabeza' },
  { id: 'estomago', imagen: `${base}imagenes/salud/estomago.png`, texto: 'Me duele el estómago' },
  { id: 'vomitar', imagen: `${base}imagenes/salud/vomitar.png`, texto: 'Quiero vomitar' },
];

//Aqui ponemos los iconos generales de la app
export const ICONOS_UI = {
  volver: `${base}imagenes/elementos/volver.png`, 
  borrar: `${base}imagenes/elementos/borrar.png`,
  eliminar: `${base}imagenes/elementos/eliminar.png`,
  reproducir: `${base}imagenes/elementos/reproducir.png`,
  hablando: `${base}imagenes/elementos/hablando.webp`,
};