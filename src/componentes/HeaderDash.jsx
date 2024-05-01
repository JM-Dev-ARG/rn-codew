import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Avatar from './Reutilizables/Avatar'
import theme from '../theme';



const HeaderDash = ({ userName, imgAvatar }) => {
    return (
        <View style={styles.container}>
            <View style={styles.greeting}>
                <Avatar width={30} height={30} img={imgAvatar} />
                <Text style={styles.greetingText}>{userName}</Text>
            </View>

        </View>
    )
}

export default HeaderDash

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        width: '70%',
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    greeting: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,

        paddingRight: 15,
        borderRadius: 40,
        backgroundColor: theme.bgColors['bg-200'],
    },
    greetingText: {
        color: theme.textColors['text-200'],
        fontFamily: 'UbuntuBold',
    }
})