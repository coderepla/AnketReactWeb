import logo from './logo.svg';
import './App.css';
import Modal from './Components/Modal/Modal'
import Pollster from "./Components/Pollster/index"
import WhichTeam from "./Components/WhichTeam/index"
import React, { useState } from 'react';


function App() {


const [openModal,setOpenModal] = useState(true)


  return (

    <div className="App">
      <div className="formContainer">
        <WhichTeam />
          
      </div>
        {openModal && <Modal closeModal={setOpenModal}/>}
    </div>
    
  );
}

export default App;
