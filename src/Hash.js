import bcrypt from "bcryptjs-react";

const password = "password123";
const saltRounds = 10;

const Hash = () => {
    
    bcrypt.hash(password, saltRounds, (err, hash) =>
    {
        if (err) {
            return console.log("Error");
        }
        return console.log("Success: ", hash);
    })
}

export default Hash;