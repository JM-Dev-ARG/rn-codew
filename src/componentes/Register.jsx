import React, { useState } from 'react'
import FormInput from './Reutilizables/FormInput'
import FormAcces from './Reutilizables/FormAcces';
import { Pressable, StyleSheet, Text } from 'react-native';
import theme from '../theme';



const Register = ({ navigation }) => {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [password, setPassword] = useState("");
    const [rePass, setRePass] = useState("");
    const [email, setEmail] = useState("");
    const [dni, setDni] = useState("");




    return (
        <FormAcces greating='Ingrasa tus datos' /* text2="Siguiente " text2Redirect='RegisterPhoto' */ navigator={navigation}>

            <FormInput placeholder={"Nombre"} setValueProp={setNombre} type="text" />
            <FormInput placeholder={"Apellido"} setValueProp={setApellido} type="text" />
            <FormInput placeholder={"Dni"} setValueProp={setDni} type="numeric" />
            <FormInput placeholder={"Email"} setValueProp={setEmail} type="email" />
            <FormInput placeholder={"Password"} setValueProp={setPassword} mode={true} type="text" />
            <FormInput placeholder={"Reingresa el password"} setValueProp={setRePass} mode={true} type="text" />

            <Pressable
                style={styles.btn}
                onPress={() => {

                }
                }>
                <Text style={styles.btnText}>
                    Registrate
                </Text>
            </Pressable>

        </FormAcces>
    )
}

export default Register

const styles = StyleSheet.create({
    btn: {
        backgroundColor: theme.colors['primary-200'],
        width: 'auto',
        paddingVertical: 10,
        borderRadius: 20,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnText: {
        color: theme.textColors['text-100'],
        fontFamily: "UbuntuBold",
        marginHorizontal: 20,

    }
})