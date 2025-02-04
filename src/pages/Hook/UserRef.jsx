import { useRef, useState } from "react";

const UserRefHook =() =>{
    const userRef =useRef(null);
    const emailRef =useRef(null);
    const [getValue,setValue] = useState("")
    
    function changeValue(){
        console.log(userRef.current.value)
        console.log(emailRef.current.value)
        setValue(userRef.current.value)
        
    }
    return(
        <>
        <h1 className="my-5">{getValue}</h1>
        <input type="text" ref={userRef} onChange={changeValue}/>
        <input type="text" ref={emailRef} onChange={changeValue}/>
        </>
    )
}
export default UserRefHook;