import BotonItem from '../components/BotonItem';
import { DATOS_SALUD } from '../data/datosApp';

export default function VistaSalud({ alAgregar }) {
  return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {DATOS_SALUD.map((item) => (
          <BotonItem 
            key={item.id} 
            imagen={item.imagen} 
            texto={item.texto}
            colorBorde="border-red-300 hover:border-red-500 hover:bg-red-50"
            alHacerClic={() => alAgregar(item)} 
          />
        ))}
      </div>
  );
}