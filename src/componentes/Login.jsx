
import React, { useState } from 'react'
import FormInput from './Reutilizables/FormInput'
import FormAcces from './Reutilizables/FormAcces';


export default function Login() {
  const [name, setUserName] = useState("");
  const [password, setPassword] = useState("");


  return (

    <FormAcces greating='Bienvenido' text1="Olvidaste tu password?" text2="Registrate" >
      <FormInput placeholder={"UserName"} setValueProp={setUserName} />
      <FormInput placeholder={"Password"} setValueProp={setPassword} mode={true} />
    </FormAcces>
  )


}


