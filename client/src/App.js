import logo from './logo.svg';
import './App.css';
import Modal from './Components/Modal'
import React, { useState } from 'react';

function App() {
const [name,setName] = useState('')
const [surname, setSurname] = useState('')
const [gender, setGender] = useState('Erkek')
const [date, setDate] = useState('')
const [team, setTeam] = useState('')
const [explanation, setExplanation] = useState('')
const [pollstername, setPollsterName] = useState('')
const [pollstersurname,setPollsterSurname] = useState('')
const [openModal,setOpenModal] = useState(true)


const formSubmitAction = () => {
  console.log(name)
  console.log(surname)
  console.log(gender)
  console.log(date)
  console.log(team)
  console.log(explanation)
  console.log(pollstername)
  console.log(pollstersurname)
}

  return (

    <div className="App">
      <div className="formContainer">

      
          <h5>Hangi takımlısınız?</h5>
          <div className="teamFormContainer" >

            
            <div className="textContainer">
              
              <p>Adınız: </p>
              <p>Soyadınız: </p> 
              <p>Cinsiyetiniz: </p>
              <p>Doğum Tarihiniz: </p>
              <p>Tuttuğunuz Takım: </p>
              <p>Açıklama: </p>
              
              

            </div>
            <div className="inputContainer">
              <input type="text" className="input" onChange={(text)=> setName(text.target.value)}/>
              
              <input type="text" className="input" onChange={(text)=> setSurname(text.target.value)}/>

              <select className="input" defaultValue={gender} onChange={(text)=>setGender(text.target.value)} >
                <option>Erkek</option>
                <option>Kadın</option>
              </select>

              <input type="date" className="input" onChange={(Date)=>setDate(Date.target.value)} />

              <input type="text" className="input" onChange={(text) => setTeam(text.target.value)} />
              
              <textarea rows="5" cols="30" className="input" onChange={(textarea) => setExplanation(textarea.target.value)} />


            </div>


          </div>
            <h5>Anketör Bilgileri: </h5>
          <div className="teamFormContainer" style={{justifyContent:"center"}}>
            
            <div className="textContainer">
              
              <p>Adı: </p>
              <p>Soyadı: </p> 

            </div>
            <div className="inputContainer">
              <input type="text" className="input" onChange={(text)=> setPollsterName(text.target.value)}/>
              
              <input type="text" className="input" onChange={(text)=> setPollsterSurname(text.target.value)}/>

            </div>


          </div>
          <button onClick={formSubmitAction}> Kaydet </button>

      </div>
        {openModal && <Modal closeModal={setOpenModal}/>}
    </div>

        



    

    


    

   
  );
}

export default App;
