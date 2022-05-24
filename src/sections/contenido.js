import React from "react";
import '../App.css';
import lupa from './images/lupa.png';
import micro from './images/micro.png'


function Contenido(){
    return(
    <div className="principalcontainer-contenido">
        <div className="googleText">
            <font color="#4285F4">G</font><font color="#EA4335">o</font><font color="#FBBC05">o</font>
            <font color="#4285F4">g</font><font color="#34A853">l</font><font color="#EA4335">e</font>
        </div>

        <div className="busqueda">
            <div className="cajabusqueda">
                <img src={lupa} alt="" className="lupa"></img>
                <input type="text" className="textbox"></input>
                <img src={micro} alt="" className="micro"></img>
            </div>
        </div>

        <div className="botones">
            <input type="button" className="itemboton" value="Buscar con Google"></input>
            <input type="button" className="itemboton" value="Me siento con suerte"></input>
        </div>

        <div className="idioma">
            <label>Ofrecido por Google en: </label>
            <a href="#">English</a>
        </div>
            
    </div>
    )}
  
  export default Contenido;