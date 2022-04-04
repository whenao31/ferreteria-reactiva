import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/credentials";
import Validate from "../components/Validate";
import '../assets/styles/containers/login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRightToBracket} from '@fortawesome/free-solid-svg-icons'

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
    <div className="containerform">
      <div className="form">
        <span className="text-danger text-small d-block mb-2">{error && error}</span>
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Correo Electronico
            </label>
            <input
              type="email"
              name="email"
              placeholder="tucorreo@dominio.ltd"
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
          <FontAwesomeIcon icon={faArrowRightToBracket} />
          <button
            className="btn "
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