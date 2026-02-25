const shoes = [
  { id:1, name:"Galaxy Kicks", img:"https://images.unsplash.com/photo-1542291026-7eec264c27ff" },
  { id:2, name:"Graffiti Dreams", img:"https://images.unsplash.com/photo-1528701800489-20be3c97b46f" },
  { id:3, name:"Gold Luxe", img:"https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77" },
];

const Featured = () => {
  return (
    <div className="px-10 py-20">
      <h2 className="text-4xl font-bold mb-10 text-center">
        Featured <span className="text-yellow-400">Designs</span>
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {shoes.map(shoe => (
          <div key={shoe.id} className="bg-gray-900 p-5 rounded-xl hover:scale-105 transition">
            <img src={shoe.img} className="rounded-lg"/>
            <h3 className="mt-4 text-xl font-semibold">{shoe.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
