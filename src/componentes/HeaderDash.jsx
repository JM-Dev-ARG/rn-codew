import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Avatar from './Reutilizables/Avatar'
import { Ionicons } from '@expo/vector-icons';
import theme from '../theme';



const HeaderDash = ({ userName, setOpenMenu, openMenu }) => {
    return (
        <View style={styles.container}>
            <View style={styles.greeting}>
                <Avatar width={30} height={30} />
                <Text style={styles.greetingText}>{userName}</Text>
            </View>
            <Pressable onPress={() => { setOpenMenu(!openMenu) }}>
                {openMenu ? <Ionicons name="close" size={24} color="black" /> : <Ionicons name="menu" size={24} color={theme.colors['accent-200']} />}
            </Pressable>

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
    },
    greetingText: {
        color: theme.textColors['text-200'],
        fontFamily: 'UbuntuBold',
    }
})