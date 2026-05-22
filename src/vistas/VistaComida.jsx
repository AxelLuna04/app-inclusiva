import { useState } from 'react';
import BotonItem from '../components/BotonItem';
import { DATOS_COMIDA, INGREDIENTES, EXTRAS_PEDIDO, CATEGORIAS_PRINCIPALES, ICONOS_UI } from '../data/datosApp';

export default function VistaComida({ alVolver, alAgregar }) {
  const [itemBase, setItemBase] = useState(null);
  const [cantidad, setCantidad] = useState(1);
  
  const [ingredientesCon, setIngredientesCon] = useState([]);
  const [ingredientesSin, setIngredientesSin] = useState([]);
  const [extras, setExtras] = useState([]);
  
  const [modoSin, setModoSin] = useState(false);

  const infoCategoria = CATEGORIAS_PRINCIPALES.find(cat => cat.id === 'comidaChatarra' || cat.id === 'comida');

  const manejarIngrediente = (ingrediente) => {
    if (modoSin) {
      if (ingredientesSin.find(i => i.id === ingrediente.id)) {
        setIngredientesSin(ingredientesSin.filter(i => i.id !== ingrediente.id));
      } else {
        setIngredientesSin([...ingredientesSin, ingrediente]);
        setIngredientesCon(ingredientesCon.filter(i => i.id !== ingrediente.id));
      }
    } else {
      if (ingredientesCon.find(i => i.id === ingrediente.id)) {
        setIngredientesCon(ingredientesCon.filter(i => i.id !== ingrediente.id));
      } else {
        setIngredientesCon([...ingredientesCon, ingrediente]);
        setIngredientesSin(ingredientesSin.filter(i => i.id !== ingrediente.id));
      }
    }
  };

  const manejarExtra = (extra) => {
    if (extras.find(e => e.id === extra.id)) {
      setExtras(extras.filter(e => e.id !== extra.id));
    } else {
      setExtras([...extras, extra]);
    }
  };

  const confirmarPedido = () => {
    const secuencia = [];

    secuencia.push({
      ...itemBase,
      texto: `Me da ${cantidad} ${itemBase.texto}`
    });

    ingredientesCon.forEach(ing => {
      secuencia.push({ ...ing, texto: `de ${ing.texto}` });
    });

    ingredientesSin.forEach(ing => {
      secuencia.push({ ...ing, texto: `sin ${ing.texto}` });
    });

    extras.forEach(ext => secuencia.push(ext));

    alAgregar(secuencia);
    
    setItemBase(null);
    setCantidad(1);
    setIngredientesCon([]);
    setIngredientesSin([]);
    setExtras([]);
    setModoSin(false);
  };

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center gap-6 mb-4 pb-4 border-b shrink-0">
        <button 
          onClick={() => itemBase ? setItemBase(null) : alVolver()} 
          className="bg-gray-200 p-4 rounded-xl hover:bg-gray-300 shadow-sm active:scale-95">
          <img src={ICONOS_UI.volver} alt="" className="w-12 h-12 object-contain" />
        </button>
        <img src={infoCategoria?.imagen} alt="" className="w-20 h-20 object-contain" />
      </div>
      
      {!itemBase ? (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 overflow-y-auto">
          {DATOS_COMIDA.map((item) => (
            <BotonItem key={item.id} imagen={item.imagen} texto={item.texto} colorBorde="border-orange-300 hover:bg-orange-50" alHacerClic={() => setItemBase(item)} />
          ))}
        </div>
      ) : (
        <div className="flex-1 overflow-y-auto pr-2 pb-6">
          
          <div className="flex items-center justify-between bg-orange-50 p-4 rounded-2xl border-4 border-orange-200 mb-6">
            <img src={itemBase.imagen} alt="" className="w-20 h-20 md:w-24 md:h-24 object-contain bg-white rounded-xl shadow-sm p-2" />
            
            <div className="flex items-center gap-4 md:gap-6">
              <button onClick={() => setCantidad(Math.max(1, cantidad - 1))} className="bg-white border-4 border-gray-300 w-14 h-14 md:w-16 md:h-16 rounded-2xl text-4xl md:text-5xl font-bold shadow-sm active:scale-95 flex items-center justify-center pb-1">-</button>
              <span className="text-5xl md:text-6xl font-black text-orange-600 w-12 md:w-16 text-center">{cantidad}</span>
              <button onClick={() => setCantidad(cantidad + 1)} className="bg-white border-4 border-gray-300 w-14 h-14 md:w-16 md:h-16 rounded-2xl text-4xl md:text-5xl font-bold shadow-sm active:scale-95 flex items-center justify-center pb-1">+</button>
            </div>
          </div>

          <div className="flex justify-end mb-4">
            <button 
              onClick={() => setModoSin(!modoSin)}
              className={`p-3 rounded-2xl transition-all border-4 flex items-center justify-center ${
                modoSin ? 'bg-red-100 border-red-500 scale-105 shadow-md' : 'bg-gray-100 border-gray-200 grayscale opacity-50'
              }`}>
              <span className="text-4xl">🚫</span>
            </button>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-5 gap-3 mb-6">
            {INGREDIENTES.map((ing) => {
              const esCon = ingredientesCon.find(i => i.id === ing.id);
              const esSin = ingredientesSin.find(i => i.id === ing.id);
              
              let color = "border-gray-200 bg-white opacity-80";
              if (esCon) color = "border-green-500 bg-green-50 border-4 opacity-100";
              if (esSin) color = "border-red-500 bg-red-50 border-4 opacity-100 relative";

              return (
                <div key={ing.id} className="relative">
                  <BotonItem 
                    imagen={ing.imagen} 
                    texto={ing.texto}
                    colorBorde={color}
                    alHacerClic={() => manejarIngrediente(ing)} 
                  />
                  {esSin && <div className="absolute top-1 right-1 text-3xl">🚫</div>}
                </div>
              )
            })}
          </div>

          <hr className="border-2 border-gray-100 mb-6"/>

          <div className="grid grid-cols-3 md:grid-cols-5 gap-3 mb-8">
            {EXTRAS_PEDIDO.map((ext) => {
              const seleccionado = extras.find(e => e.id === ext.id);
              return (
                <BotonItem 
                  key={ext.id} 
                  imagen={ext.imagen} 
                  texto={ext.texto}
                  colorBorde={seleccionado ? "border-blue-500 bg-blue-50 border-4" : "border-gray-200 bg-white opacity-80"}
                  alHacerClic={() => manejarExtra(ext)} 
                />
              )
            })}
          </div>

          <div className="flex justify-center mt-4">
            <button 
              onClick={confirmarPedido} 
              className="bg-green-500 w-3/4 md:w-1/2 py-4 rounded-2xl shadow-md hover:bg-green-600 active:scale-95 flex justify-center items-center">
              <span className="text-5xl">✅</span>
            </button>
          </div>

        </div>
      )}
    </div>
  );
}