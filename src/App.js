import './index.css'
import './App.css';
import logo from './Componentes/images/logo.svg'
import MenuEsquerdo from './Componentes/MenuEsquerdo/MenuEsquerdo';
import MenuDireito from './Componentes/MenuDireito/MenuDireito';
function App() {
  return (
    <div className="App">
      <img src={logo} alt='logo' className='img'/>
      <div className='ParteDeCima'>
      <MenuEsquerdo /> <MenuDireito />
      </div>
    </div>
  );
}

export default App;
