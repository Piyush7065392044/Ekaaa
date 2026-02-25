const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-10 py-20">
      
      <div className="max-w-xl">
        <h1 className="text-5xl font-bold leading-tight">
          Custom Designed <br />
          <span className="text-yellow-400">Shoes Just For You</span>
        </h1>

        <p className="text-gray-400 mt-5">
          Premium handmade custom shoe designs made with love.
        </p>

        <div className="mt-8 flex gap-4">
          <button className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-full">
            View Designs
          </button>
          <button className="px-6 py-3 border border-yellow-400 text-yellow-400 rounded-full">
            Order Custom
          </button>
        </div>
      </div>

      <img 
        src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519"
        className="w-[450px] rounded-xl shadow-xl mt-10 md:mt-0"
      />
    </div>
  );
};

export default Hero;
