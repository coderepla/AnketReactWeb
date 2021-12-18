import React from 'react'
import "./Modal.css"

function Modal({closeModal}){
    return(
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="titleCloseBtn">
                    <button onClick={()=>closeModal(false)}>X</button>
                </div>
                
                <div className="title">
                    <h1>Yapmak istediğiniz anketi seçiniz.</h1>
                </div>
                <div className="body"></div>

                <div className="footer">
                    <button>Hangi takımlısınız?</button>
                    <button>Hayatınızdan memnun musunuz?</button>
                </div>
            </div>  
        </div>
    )
}

export default Modal