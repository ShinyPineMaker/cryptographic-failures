import bcrypt from "bcryptjs-react";
import { useRef } from "react";

const Hash = () => {
    
    const passRef = useRef(null);
    const saltRounds = 10;

    const handleClick = (event) => {
        event.preventDefault();
        const passValue = passRef.current.value;
        bcrypt.hash(passValue, saltRounds, (err,hash)=>{
            if (err){
                return console.log("error");
            }
            return console.log("bcrypt hash: ",hash);
        })
    }

    return (
        <div className="component">
            <h2>Hashing do Bcrypt (com salt): </h2>
            <div>
                <input type="password" placeholder="Insira uma Senha" ref={passRef}></input>
                <button type="button" onClick={handleClick}>Enviar</button>
            </div>
        </div>
    )
};

export default Hash;