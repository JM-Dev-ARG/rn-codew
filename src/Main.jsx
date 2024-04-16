import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import theme from './theme'
import Form from './componentes/Form'



export default function Main() {



    return (
        <View style={styles.container} >
            <Form />
        </View>
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