import React, { useState } from 'react';
import "./index.css";


const Pollster = ({formData}) => {
 

const [pollsterName, setPollsterName] = useState('')
const [pollsterSurname,setPollsterSurname] = useState('')



const formSubmitAction = () => {
  const submitData = {...formData,pollsterName,pollsterSurname}
  console.log(submitData)
 
}

  return (
    
    <div> 
      <h5>Anketör Bilgileri</h5> 
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
      
  
  )
  
}
export default Pollster
