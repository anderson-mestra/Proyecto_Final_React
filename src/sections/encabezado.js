import React from "react";
import "../App.css";
import apps from "./images/apps.png";
import {Link} from 'react-router-dom';

function Cabecera(){
    return(
        <div className="principalcabecera">
            <div class="items">
                <div class="itemcabecera">
                    <a href="#">Gmail</a>
                </div>
                <div class="itemcabecera">
                    <a href="#">Imagenes</a>
                </div>
                <div class="itemcabecera">
                    <img width="18px" height="18px" src={apps}></img>
                </div>
                <div class="itemcabecera">
                    <input type="button" className="iteminiciosesion" value="Iniciar sesion"></input>
                </div>
        </div>
        </div>
    )
};

export default Cabecera;