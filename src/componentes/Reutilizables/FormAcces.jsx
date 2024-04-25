import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
/* import FormInput from './Reutilizables/FormInput' */
import theme from '../../theme';
import { AntDesign } from '@expo/vector-icons';


const FormAcces = ({ greating, text1, text2, text1Redirect, text2Redirect, children, btnText, btnRedirect, navigator }) => {


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
                {/* {btnText ? <Pressable style={styles.btn} onPress={() => navigator.navigate(`${btnRedirect}`)}>
                    <Text style={styles.btnText}>
                        {btnText}
                    </Text>
                </Pressable> : ""} */}
            </View>

            <View style={styles.bottom}>
                <Pressable onPress={() => navigator.navigate(`${text1Redirect}`)}>
                    <Text style={styles.text}>
                        {text1}
                    </Text>
                </Pressable>

                <Pressable onPress={() => navigator.navigate(`${text2Redirect}`)}>
                    <Text style={text2 === 'Registrate' ? styles.text2 : styles.text3}>
                        {text2} {text2 === 'Registrate' || text2 === undefined ? "" : < AntDesign name="forward" size={14} color={theme.textColors['text-200']} />}
                    </Text>
                </Pressable>

            </View>

        </View>
    )
}
export default FormAcces

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: '#0E0D0D',

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