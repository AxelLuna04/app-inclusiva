import { useState } from 'react'

function App() {
  // Aquí guardaremos los iconos que el usuario vaya seleccionando
  const [mensaje, setMensaje] = useState([])

  // Función para agregar un item al panel superior
  const agregarAlMensaje = (item) => {
    setMensaje([...mensaje, item])
  }

  // Función para limpiar el mensaje
  const limpiarMensaje = () => {
    setMensaje([])
  }

  return (
    <div className="flex flex-col h-screen bg-gray-100 p-4">
      
      {/* 1. PANEL SUPERIOR (El cuadro donde se arma el mensaje) */}
      <div className="h-1/3 w-full bg-white border-2 border-gray-400 rounded-lg shadow-sm p-4 flex flex-col justify-between mb-4">
        <div className="flex flex-wrap gap-2">
          {mensaje.length === 0 ? (
            <p className="text-gray-400">Selecciona categorías abajo para armar tu mensaje...</p>
          ) : (
            mensaje.map((item, index) => (
              <div key={index} className="bg-blue-100 px-3 py-2 rounded-md font-semibold text-blue-800">
                {item}
              </div>
            ))
          )}
        </div>
        
        {/* Controles del panel superior */}
        <div className="flex justify-end gap-2 mt-2">
          <button 
            onClick={limpiarMensaje}
            className="bg-red-500 text-white px-4 py-2 rounded-lg font-bold shadow-md hover:bg-red-600">
            Borrar Todo
          </button>
          <button 
            className="bg-green-500 text-white px-4 py-2 rounded-lg font-bold shadow-md hover:bg-green-600">
            Reproducir Mensaje 🔊
          </button>
        </div>
      </div>

      {/* 2. PANEL INFERIOR (Categorías principales) */}
      <div className="h-2/3 w-full flex justify-center items-start pt-4">
        <div className="grid grid-cols-2 gap-6 w-full max-w-md">
          
          {/* Botón Comida */}
          <button 
            onClick={() => agregarAlMensaje('Comida 🍔')}
            className="flex flex-col items-center justify-center bg-white border-2 border-blue-300 rounded-xl p-4 shadow-sm hover:bg-blue-50 transition-colors aspect-square">
            <span className="text-6xl mb-2">🍔</span>
            <span className="font-bold text-gray-700">Comida</span>
          </button>

          {/* Botón Bebidas */}
          <button 
            onClick={() => agregarAlMensaje('Bebidas 🥤')}
            className="flex flex-col items-center justify-center bg-white border-2 border-blue-300 rounded-xl p-4 shadow-sm hover:bg-blue-50 transition-colors aspect-square">
            <span className="text-6xl mb-2">🥤</span>
            <span className="font-bold text-gray-700">Bebidas</span>
          </button>

        </div>
      </div>

    </div>
  )
}

export default App
