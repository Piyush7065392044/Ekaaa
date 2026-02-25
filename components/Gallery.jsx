const Gallery = () => {
  return (
    <div className="px-10 py-20">
      <h2 className="text-4xl font-bold text-center mb-10">
        Our <span className="text-yellow-400">Gallery</span>
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[...Array(8)].map((_,i) => (
          <img 
            key={i}
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
            className="rounded-lg hover:scale-105 transition"
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
