import React, { useState } from 'react'
import FormInput from './Reutilizables/FormInput'
import FormAcces from './Reutilizables/FormAcces';


const ForgetPass = ({ navigation }) => {
    const [userName, setUserName] = useState('');

    return (
        <FormAcces
            greating='Escribe tu Email'
            text1="Recibiras un correo electronico con tu nuevo password, RECUERDA cambiarlo al ingresar."
            btnText="Solicitar nuevo password"
            navigator={navigation}>

            <FormInput placeholder={"Email"} setValueProp={setUserName} />

        </FormAcces>
    )
}

export default ForgetPass