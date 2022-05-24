import './App.css';
import Cabecera from './sections/encabezado';
import Contenido from './sections/contenido';
import Pie from './sections/pie';

function App() {
  return (
    <div className="App">
        <div className='principal'>
          <div className='cabecera'>
            <Cabecera />
          </div>
          <div className='contenido'>
            <Contenido />
          </div>
          <div className='pie'>
            <Pie />
          </div>
        </div>
    </div>
  );
}

export default App;
