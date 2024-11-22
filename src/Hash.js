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
            return console.log(hash);
        })
        console.log(passValue);
    }

    return (
        <div>
            <h2>Hashing do Bcrypt (com salt): </h2>
            <input type="password" placeholder="Insira uma Senha" ref={passRef}></input>
            <button type="button" onClick={handleClick}>Enviar</button>
        </div>
    )
};

export default Hash;