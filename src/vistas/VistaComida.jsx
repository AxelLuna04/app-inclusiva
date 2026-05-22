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

    // Los textos siguen aquí Ocultos, porque la voz SÍ los necesita para hablar
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
      <div className="flex items-center gap-6 mb-6 pb-4 border-b">
        <button 
          onClick={() => itemBase ? setItemBase(null) : alVolver()} 
          className="bg-gray-200 p-4 rounded-xl hover:bg-gray-300 shadow-sm active:scale-95">
          <img src={ICONOS_UI.volver} alt="" className="w-12 h-12 object-contain" />
        </button>
        <img src={infoCategoria?.imagen} alt="" className="w-20 h-20 object-contain" />
      </div>
      
      {!itemBase ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 overflow-y-auto">
          {DATOS_COMIDA.map((item) => (
            <BotonItem key={item.id} imagen={item.imagen} texto={item.texto} colorBorde="border-orange-300 hover:bg-orange-50" alHacerClic={() => setItemBase(item)} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col md:flex-row gap-6 h-full overflow-hidden">
          
          <div className="flex flex-col items-center bg-orange-50 p-6 rounded-2xl border-4 border-orange-200 w-full md:w-1/3 overflow-y-auto">
            <img src={itemBase.imagen} alt="" className="w-40 h-40 object-contain mb-6 bg-white rounded-xl shadow-sm p-2" />
            
            <div className="flex items-center gap-6 mb-8">
              <button onClick={() => setCantidad(Math.max(1, cantidad - 1))} className="bg-white border-4 border-gray-300 w-16 h-16 rounded-2xl text-5xl font-bold shadow-sm active:scale-95 flex items-center justify-center pb-2">-</button>
              <span className="text-6xl font-black text-orange-600 w-12 text-center">{cantidad}</span>
              <button onClick={() => setCantidad(cantidad + 1)} className="bg-white border-4 border-gray-300 w-16 h-16 rounded-2xl text-5xl font-bold shadow-sm active:scale-95 flex items-center justify-center pb-2">+</button>
            </div>

            <button onClick={confirmarPedido} className="bg-green-500 w-full py-4 rounded-xl shadow-lg hover:bg-green-600 active:scale-95 flex justify-center items-center">
              <span className="text-6xl">✅</span>
            </button>
          </div>

          <div className="w-full md:w-2/3 flex flex-col gap-4 overflow-y-auto pr-2">
            
            {/* BOTÓN VISUAL: MODO SIN 🚫 */}
            <div className="flex items-center justify-end bg-white p-2 rounded-xl border-2 border-gray-200 shadow-sm">
              <button 
                onClick={() => setModoSin(!modoSin)}
                className={`p-2 rounded-lg transition-all border-4 flex items-center justify-center w-full md:w-auto ${
                  modoSin ? 'bg-red-100 border-red-500 scale-105 shadow-md' : 'bg-gray-100 border-gray-200 grayscale opacity-50'
                }`}>
                <span className="text-5xl">🚫</span>
              </button>
            </div>

            <div className="grid grid-cols-3 gap-4">
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
                    {esSin && <div className="absolute top-2 right-2 text-4xl">🚫</div>}
                  </div>
                )
              })}
            </div>

            <hr className="my-2 border-2 border-gray-100"/>

            <div className="grid grid-cols-2 gap-4">
              {EXTRAS_PEDIDO.map((ext) => {
                const seleccionado = extras.find(e => e.id === ext.id);
                return (
                  <BotonItem 
                    key={ext.id} 
                    imagen={ext.imagen} 
                    texto={ext.texto}
                    colorBorde={seleccionado ? "border-blue-500 bg-blue-50 border-4" : "border-gray-200 bg-white"}
                    alHacerClic={() => manejarExtra(ext)} 
                  />
                )
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}