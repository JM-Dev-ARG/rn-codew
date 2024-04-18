import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import theme from './theme'
import Login from './componentes/Login'
import Register from './componentes/Register'
import Navigation from './Navigation/Navigation'
import RegisterPhoto from './componentes/RegisterPhoto'



export default function Main() {



    return (

        <SafeAreaView style={styles.container}>
            <Navigation />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: theme.bgColors['bg-100'],
        alignItems: 'center',
        justifyContent: 'flex-start',
    },

})