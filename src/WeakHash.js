import React from "react";
import { useRef } from "react";

function hashCode(string){
    var hash = 0;
    for (var i = 0; i < string.length; i++) {
        var code = string.charCodeAt(i);
        hash = ((hash<<5)-hash)+code;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
}

const WeakHash = () => {
    const passRef = useRef(null);


    const handleClick = (event) => {
        event.preventDefault();
        const passValue = passRef.current.value;
        console.log("weak hash: ",hashCode(passValue));
    }

    return (
        <div className="component">
            <h2>Hashing padrão Java: </h2>
            <div>
                <input type="password" placeholder="Insira uma Senha" ref={passRef}></input>
                <button type="button" onClick={handleClick}>Enviar</button>
            </div>
        </div>
    )
}

export default WeakHash;