import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/credentials";
import Validate from "../components/Validate";
import '../assets/styles/containers/login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUserPlus} from '@fortawesome/free-solid-svg-icons'

const Register = () => {
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
      await createUserWithEmailAndPassword(auth, user.email, user.password);
      navigate("/");
    } catch (error) {
      if (error.code === "auth/invalid-email") {
        setError("Email Invalido");
      } else if (error.code === "auth/weak-password") {
        setError("La contraseña debe ser de mas de 6 catacteres");
      } else if (error.code === "auth/email-already-in-use") {
        setError("El usuario ya esta registrado");
      }
    }
  };

  return (
    <div className="containerform">
      <div className="form">
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
              id="password"
              placeholder="********"
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <FontAwesomeIcon icon={faUserPlus} />
          <button
            className="btn "
          >
            Registro
          </button>
        </form>

        <p className=" text-black my-4 text-sm flex justify-between px-3">
          Ya tienes una cuenta? <Link to="/login">Iniciar Sesion</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;