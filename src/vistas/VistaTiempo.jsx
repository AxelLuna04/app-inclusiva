import BotonItem from '../components/BotonItem';
import { DATOS_TIEMPO } from '../data/datosApp';

export default function VistaTiempo({ alAgregar }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {DATOS_TIEMPO.map((item) => (
        <BotonItem 
          key={item.id} 
          imagen={item.imagen} 
          texto={item.texto}
          colorBorde="border-purple-300 hover:border-purple-500 hover:bg-purple-50"
          alHacerClic={() => alAgregar(item)} 
        />
      ))}
    </div>
  );
}