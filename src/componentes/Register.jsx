import React, { useState } from 'react'
import FormInput from './Reutilizables/FormInput'
import FormAcces from './Reutilizables/FormAcces';



export default function Register() {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [dni, setDni] = useState("");
    /* Usar camara */
    /* const [foto, setFoto] = useState(""); */

    return (
        <FormAcces greating='Ingrasa tus datos' text2="Siguiente " >

            <FormInput placeholder={"Nombre"} setValueProp={setNombre} />
            <FormInput placeholder={"Apellido"} setValueProp={setApellido} />
            <FormInput placeholder={"Password"} setValueProp={setPassword} />
            <FormInput placeholder={"Email"} setValueProp={setEmail} />
            <FormInput placeholder={"Dni"} setValueProp={setDni} />
        </FormAcces>
    )
}
