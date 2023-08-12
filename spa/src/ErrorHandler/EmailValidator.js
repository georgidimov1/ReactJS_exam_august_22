import {useState} from 'react';

function EmailValidator(user){
    const [message, setMessage] = useState("");
        const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
        if (regEx.test(user)) {
           setMessage("");
           } else if (!regEx.test(user) && user !== "") {
                setMessage("Invalid email");
           } else {
               setMessage("");
           }
    }



        export default EmailValidator;
