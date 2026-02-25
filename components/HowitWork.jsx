const HowItWorks = () => {
  return (
    <div className="px-10 py-20 bg-gray-950">
      <h2 className="text-4xl font-bold text-center mb-12">
        How It <span className="text-yellow-400">Works</span>
      </h2>

      <div className="grid md:grid-cols-3 gap-10 text-center">
        <div className="p-6 bg-gray-900 rounded-xl">📩 Send Your Idea</div>
        <div className="p-6 bg-gray-900 rounded-xl">🎨 We Design It</div>
        <div className="p-6 bg-gray-900 rounded-xl">👟 You Wear It</div>
      </div>
    </div>
  );
};

export default HowItWorks;
