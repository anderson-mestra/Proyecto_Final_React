import React from "react";
import '../App.css';
import {Link, Linksleft, Linksright, Pais} from './styled-components';

function Pie(){
    return(
        <div className="pie">
            <div className="pais">
                <Pais>Colombia</Pais>
            </div>
            <div className="opciones">
                <Linksleft>
                    <Link href="#">Sobre Google</Link>
                    <Link href="#">Publicidad</Link>
                    <Link href="#">Negocios</Link>
                    <Link href="#">Cómo funciona la busqueda</Link>
                </Linksleft>
                <Linksright>
                    <Link href="#">Privacidad</Link>
                    <Link href="#">Condiciones</Link>
                    <Link href="#">Prefencias</Link>
                </Linksright>

            </div>
        </div>
    )
};

export default Pie;