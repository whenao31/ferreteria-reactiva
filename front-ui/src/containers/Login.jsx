import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/credentials";
import Validate from "../components/Validate";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        user.email,
        user.password
      );
      console.log(userCredentials);
      navigate("/");
    } catch (error) {
      console.log(error.code);
      setError(error.code);
      if (error.code === "auth/invalid-email") {
        setError("Email Invalido");
      } else if (error.code === "auth/wrong-password") {
        setError("La contraseña es Incorrecta");
      } else if (error.code === "auth/user-not-found") {
        setError("El usuario no esta registrado");
      }
    }
  };

  return (
    <div className="bg-slate-300 h-screen flex text-white">
      <div className=" w-full max-w-xs m-auto ">
        {error && <Validate message={error} />}
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="youremail@company.ltd"
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              placeholder="**********"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700
        text-white text-sm font-bold py-2 px-4 rounded
        focus:outline-none focus:shadow-outline "
          >
            Iniciar Sesion
          </button>
        </form>

        <p className="my-4 text-sm flex justify-between px-3 text-black">
          No tienes una cuenta <Link to="/signup">Registrate</Link>
        </p>
      </div>
    </div>
  );
};

export default Login