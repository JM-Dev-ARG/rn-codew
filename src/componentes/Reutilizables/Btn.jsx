import { Pressable, StyleSheet, Text } from 'react-native'
import React from 'react'
import theme from '../../theme'

const Btn = ({ btnText, onPress }) => {
    return (
        <Pressable style={styles.container} onPress={onPress}>
            <Text style={styles.textBtn}>{btnText}</Text>
        </Pressable>
    )
}

export default Btn

const styles = StyleSheet.create({
    container: {
        borderColor: theme.colors['primary-100'],
        width: 105,
        borderWidth: 1,
        borderRadius: 10,
        paddingVertical: 5,
        backgroundColor: theme.bgColors['bg-300']
    },
    textBtn: {
        textAlign: 'center',
        color: theme.textColors['text-100'],
        fontFamily: 'Ubuntu'
    }
})