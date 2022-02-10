
import './App.css';
import { Articulo1 } from './components/Articulo1/Articulo1';
import { Articulo2 } from './components/Articulo2/Articulo2';
import { Articulo3 } from './components/Articulo3/Articulo3';
import { Articulo4 } from './components/Articulo4/Articulo4';
import { Header } from './components/Header/Header';
function App() {
  return (
    <div className="container">
      <main className='main'>
      <Header/>
      <Articulo1/>
      <Articulo2/>
      <Articulo3/>
      <Articulo4/>
      </main>
    </div>
  );
}

export default App;
