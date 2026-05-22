import BotonItem from '../components/BotonItem';
import { DATOS_TIEMPO, CATEGORIAS_PRINCIPALES, ICONOS_UI } from '../data/datosApp';

export default function VistaTiempo({ alVolver, alAgregar }) {
  
  const infoCategoria = CATEGORIAS_PRINCIPALES.find(cat => cat.id === 'tiempo');

  return (
    <div>
      <div className="flex items-center gap-6 mb-6 pb-4 border-b">
        <button 
          onClick={alVolver} 
          className="bg-gray-200 p-4 rounded-xl hover:bg-gray-300 shadow-sm transition-transform active:scale-95">
          <img 
            src={ICONOS_UI.volver} 
            alt="Volver" 
            className="w-12 h-12 object-contain"
            onError={(e) => { e.target.src = 'https://via.placeholder.com/50?text=<-' }}
          />
        </button>
        
        <img 
          src={infoCategoria.imagen} 
          alt="Categoría Tiempo" 
          className="w-20 h-20 object-contain"
          onError={(e) => { e.target.src = 'https://via.placeholder.com/80?text=Falta' }}
        />
      </div>
      
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
    </div>
  );
}