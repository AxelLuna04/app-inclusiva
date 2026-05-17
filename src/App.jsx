import { useState } from 'react'
import { CATEGORIAS_PRINCIPALES, ICONOS_UI } from './data/datosApp'
import VistaSalud from './vistas/VistaSalud';
import VistaEmociones from './vistas/VistaEmociones';
import BotonItem from './components/BotonItem'

export default function App() {
  const [vistaActual, setVistaActual] = useState('inicio');
  const [mensaje, setMensaje] = useState([]);
  const [hablando, setHablando] = useState(false);

  const agregarItem = (item) => setMensaje([...mensaje, item]);
  const borrarUltimo = () => setMensaje(mensaje.slice(0, -1));
  const borrarTodo = () => setMensaje([]);

  const reproducirMensaje = () => {
    if (mensaje.length === 0) return;
    setHablando(true);
    const textoCompleto = mensaje.map(item => item.texto).join(', ');
    const utterance = new SpeechSynthesisUtterance(textoCompleto);
    utterance.lang = 'es-MX';
    utterance.rate = 0.9;
    utterance.onend = () => {
      setHablando(false);
      setMensaje([]);
    };
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100 p-4 relative">
      
      {hablando && (
        <div className="absolute inset-0 bg-black/80 z-50 flex items-center justify-center">
          <img 
            src={ICONOS_UI.hablando} 
            alt="Hablando" 
            className="w-64 h-64 object-contain animate-pulse"
            onError={(e) => { e.target.src = 'https://via.placeholder.com/200?text=🗣️' }}
          />
        </div>
      )}

      <div className="h-1/3 w-full bg-white border-4 border-gray-300 rounded-2xl shadow-sm p-4 flex flex-col justify-between mb-4">
        <div className="flex flex-wrap gap-3 overflow-y-auto">
          {mensaje.map((item, index) => (
            <div key={index} className="bg-blue-50 p-2 rounded-2xl border-2 border-blue-200 shadow-sm">
              <img src={item.imagen} alt="" className="w-16 h-16 object-contain" 
                   onError={(e) => { e.target.src = 'https://via.placeholder.com/50' }}/>
            </div>
          ))}
        </div>
        
        <div className="flex justify-between items-end mt-2">
          <div className="flex gap-4">
            
            <button onClick={borrarUltimo} disabled={mensaje.length === 0} className="bg-yellow-400 p-4 rounded-xl shadow-md hover:bg-yellow-500 disabled:opacity-30 transition-transform active:scale-95">
              <img src={ICONOS_UI.borrar} alt="Borrar último" className="w-10 h-10 object-contain" onError={(e) => { e.target.src = 'https://via.placeholder.com/40?text=<-' }}/>
            </button>
            
            <button onClick={borrarTodo} disabled={mensaje.length === 0} className="bg-red-500 p-4 rounded-xl shadow-md hover:bg-red-600 disabled:opacity-30 transition-transform active:scale-95">
               <img src={ICONOS_UI.eliminar} alt="Borrar todo" className="w-10 h-10 object-contain" onError={(e) => { e.target.src = 'https://via.placeholder.com/40?text=X' }}/>
            </button>

          </div>
          
          <button onClick={reproducirMensaje} disabled={mensaje.length === 0} className="bg-green-500 p-6 rounded-2xl shadow-lg hover:bg-green-600 disabled:opacity-30 animate-bounce transition-transform active:scale-95">
             <img src={ICONOS_UI.reproducir} alt="Hablar" className="w-16 h-16 object-contain" onError={(e) => { e.target.src = 'https://via.placeholder.com/64?text=Play' }}/>
          </button>

        </div>
      </div>

      <div className="h-2/3 w-full bg-white rounded-2xl p-4 shadow-sm overflow-y-auto border-4 border-gray-200">
        
        {vistaActual === 'inicio' && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {CATEGORIAS_PRINCIPALES.map((cat) => (
              <BotonItem 
                key={cat.id} 
                imagen={cat.imagen} 
                texto={cat.texto}
                colorBorde="border-blue-300 hover:border-blue-500 hover:bg-blue-50"
                alHacerClic={() => setVistaActual(cat.id)}
              />
            ))}
          </div>
        )}

        {vistaActual === 'salud' && (
          <VistaSalud 
            alVolver={() => setVistaActual('inicio')} 
            alAgregar={agregarItem} 
          />
        )}

        {vistaActual === 'emociones' && (
          <VistaEmociones 
            alVolver={() => setVistaActual('inicio')} 
            alAgregar={agregarItem} 
          />
        )}

      </div>
    </div>
  )
}
