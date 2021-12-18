
import React, { useState } from 'react';
import "./index.css";
import Pollster from '../Pollster/index';


const WhichTeam = () => {


const [formData,setFormData] = useState({})

const [name,setName] = useState('')
const [surname, setSurname] = useState('')
const [gender, setGender] = useState('Erkek')
const [date, setDate] = useState('')
const [team, setTeam] = useState('')
const [explanation, setExplanation] = useState('')

React.useEffect(
    () => {
        setFormData({name,surname,gender,date,team,explanation}) 

      
    },
    [name,surname,gender,date,team,explanation]
  );




    return (
    <div>
        <h5>Hangi takımlısınız?</h5>
        <div className="teamFormContainer">
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
        <Pollster formData={formData}/>
    </div>
    )
}

export default WhichTeam






           