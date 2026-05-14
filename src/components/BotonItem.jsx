export default function BotonItem({ imagen, texto, colorBorde, alHacerClic }) {
  return (
    <button 
      onClick={alHacerClic}
      className={`flex items-center justify-center border-4 bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-all aspect-square ${colorBorde}`}
    >
      <img 
        src={imagen} 
        alt={texto}
        className="w-full h-full object-contain rounded-lg"
        onError={(e) => { e.target.src = 'https://via.placeholder.com/150?text=Falta+Imagen' }}
      />
    </button>
  );
}