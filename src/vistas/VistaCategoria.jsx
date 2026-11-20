import BotonItem from '../components/BotonItem';

// Muestra la cuadrícula de pictogramas de una categoría.
// Se reutiliza para Salud, Emociones, Urgencias y Tiempo.
export default function VistaCategoria({ items, colorBorde, alAgregar }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {items.map((item) => (
        <BotonItem
          key={item.id}
          imagen={item.imagen}
          texto={item.texto}
          colorBorde={colorBorde}
          alHacerClic={() => alAgregar(item)}
        />
      ))}
    </div>
  );
}
