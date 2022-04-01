
import Logo from './assets/img/logo.png'
import BuscadorProducto from './components/buscador/BuscadorProducto';
import ResultadoProducto from './components/buscador/ResultadoProducto';
import { BrowserRouter as Router } from "react-router-dom"
import Navbar from './components/Navbar';
import PageRoutes from './containers/PageRoutes'

function App() {
  return (
    <div className="container div-welcome mt-4">
      <Router>
        <div className='container mt-4'>
          <Navbar />
          <hr/>
          <PageRoutes />
        </div>
      </Router>
      
    </div>
  );
}

export default App;
