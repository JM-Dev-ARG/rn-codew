import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
/* import FormInput from './Reutilizables/FormInput' */
import theme from '../../theme';
import { AntDesign } from '@expo/vector-icons';


export default function FormAcces({ greating, text1, text2, text1Redirect, text2Redirect, children }) {
    return (
        <View style={styles.container}>
            <View style={styles.logo}>
                <Image style={styles.img} source={require("../../../assets/code-w.webp")} />
            </View>

            <View style={styles.saludo}>
                <Text style={styles.textSaludo}>
                    {greating}
                </Text>
            </View>
            <View style={styles.formInputs}>
                {children}
            </View>
            <View style={styles.bottom}>
                <Text style={styles.text}>
                    {text1}
                </Text>
                <Text style={text2 === 'Registrate' ? styles.text2 : styles.text3}>
                    {text2} {text2 === 'Registrate' ? "" : < AntDesign name="forward" size={14} color={theme.textColors['text-200']} />}
                </Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: theme.bgColors['bg-100'],

        flex: 1,
        width: '100%',
    },
    formInputs: {
        alignSelf: 'center',
        width: '80%',
        gap: 20,
        marginVertical: 20,

    },
    logo: {
        justifyContent: 'center',
        alignContent: 'center',
    },

    img: {
        objectFit: 'contain',
        width: '80%',
        alignSelf: 'center',
    },

    saludo: {
        alignSelf: 'center',
    },

    textSaludo: {
        color: theme.textColors['text-200'],
        fontSize: 30,
        fontFamily: "Ubuntu",
    },

    bottom: {
        width: '80%',
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'center'
    },

    text: {
        fontFamily: "Ubuntu",
        color: theme.textColors['text-200'],
    },

    text2: {
        fontFamily: "UbuntuBold",
        color: theme.colors['primary-200'],

    },

    text3: {
        alignItems: 'center',
        fontFamily: "UbuntuBold",
        color: theme.textColors['text-200'],
    },


})