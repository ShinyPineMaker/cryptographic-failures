import bcrypt from "bcryptjs-react";
import { useRef } from "react";

const passwordCheck = "password";

const Hash = () => {
    
    const passRef = useRef(null);
    const saltRounds = 10;

    const handleClick = (event) => {
        event.preventDefault();
        const passValue = passRef.current.value;
        bcrypt.hash(passValue, saltRounds, (err,hash)=>{
            let passwordHash = hash;
            bcrypt.compare(passwordCheck, passwordHash).then(
                (check) => {
                    if (check){
                        return console.log("Password Matches \nBcrypt Hash: ", passwordHash)
                    }
                    return console.log("Password Does Not Match \nBcrypt Hash: ", passwordHash)
                }
            )
            if (err){
                return console.log("error");
            }
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