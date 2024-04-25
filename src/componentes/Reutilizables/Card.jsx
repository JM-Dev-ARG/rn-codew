import { StyleSheet, View } from 'react-native'
import React from 'react'
import theme from '../../theme'



const Card = ({ children }) => {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                {children}

            </View>
        </View>


    )
}

export default Card

const styles = StyleSheet.create({
    container: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',

    },
    card: {
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 'auto',
        width: '80%',
        gap: 15,
        backgroundColor: theme.bgColors['bg-200'],
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        borderColor: theme.colors['primary-100']
    },


})