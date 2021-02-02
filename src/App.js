import React from 'react';
import './App.css';
//import './components/Saluti';
//import Saluti, {Saluti2} from './components/Saluti';
//import Fidelity from './components/Fidelity'
//import Contatore from './components/Contatatore'
import './components/GestFid/GestFidApp'
import GestFidApp from './components/GestFid/GestFidApp';

function App() {
  return (
    <div className="App">

    <GestFidApp></GestFidApp>


    </div>
  );
}


const Saluti3 = () => <h3>ciao sono la funzione lambda</h3>




export default App;
