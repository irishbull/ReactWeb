import React from 'react';

const cliente = (props) => {

    return (
     <div>
        <p onClick = {props.modifica}> NOME {props.nome} - Bollini {props.bollini} -  Ultima spesa  {props.data} </p>
        <p>{props.children}</p>
        <input type ="text" value={props.nome} onChange={props.modifcaNome}></input>
    </div>
    )
}

export default cliente;