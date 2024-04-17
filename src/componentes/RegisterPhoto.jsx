import React, { useState } from 'react'
import FormInput from './Reutilizables/FormInput'
import FormAcces from './Reutilizables/FormAcces';
import { MaterialIcons } from '@expo/vector-icons';
import theme from '../theme';
import { Pressable, StyleSheet, View } from 'react-native';



export default function RegisterPhoto() {
    /*  const [nombre, setNombre] = useState("");
     const [apellido, setApellido] = useState("");
     const [password, setPassword] = useState("");
     const [email, setEmail] = useState("");
     const [dni, setDni] = useState(""); */
    /* Usar camara */
    /* const [foto, setFoto] = useState(""); */

    return (
        <FormAcces greating='Tomate una foto' text2="Finalizar " >
            <View style={styles.container}>
                <Pressable onPress={() => { alert("hola") }}>
                    <MaterialIcons name="camera" size={200} color={theme.textColors['text-200']} />
                </Pressable>

            </View>

        </FormAcces>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    }
})