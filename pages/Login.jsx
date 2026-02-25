import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/home");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="bg-white p-8 rounded-xl shadow-lg w-[350px]">

        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        <input 
          type="email"
          placeholder="Email"
          className="w-full border p-2 mb-4 rounded"
        />

        <input 
          type="password"
          placeholder="Password"
          className="w-full border p-2 mb-4 rounded"
        />

        <button
          onClick={handleLogin}
          className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
        >
          Login
        </button>

      </div>
    </div>
  );
};

export default Login;
