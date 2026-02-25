import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-10 py-5 border-b border-gray-800">
      <h1 className="text-2xl font-bold text-yellow-400">Custom Kicks</h1>

      <ul className="flex gap-8">
        <Link to="/" className="hover:text-yellow-400">Home</Link>
        <Link to="/gallery" className="hover:text-yellow-400">Gallery</Link>
        <Link to="/order" className="hover:text-yellow-400">Order</Link>
        <Link to="/about" className="hover:text-yellow-400">About</Link>
        <Link to="/contact" className="hover:text-yellow-400">Contact</Link>
      </ul>
    </div>
  );
};

export default Navbar;
