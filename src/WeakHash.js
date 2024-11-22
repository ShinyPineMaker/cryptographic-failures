import React from "react";
import { useRef } from "react";

const passwordCheck = "password";

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
        let passwordHash = hashCode(passValue);

        if (passwordHash === hashCode(passwordCheck)){
            return console.log("Password Matches \nJava Hash: ", passwordHash)
        }
        return console.log("Password Does Not Match \nJava Hash: ", passwordHash)
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