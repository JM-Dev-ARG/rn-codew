import { useNavigation } from '@react-navigation/native'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import theme from '../../theme';
import { Feather } from '@expo/vector-icons';

const PreseableMiniCard = ({ icon, texto, route }) => {
    const navigation = useNavigation();
    return (
        <Pressable style={styles.container} onPress={() => navigation.navigate({ route })}>
            <View style={styles.iconContainer}>
                <View style={styles.icon}>
                    <Feather name={icon} size={40} color={theme.bgColors['bg-100']} />
                </View>
            </View>

            <Text style={styles.texto}>{texto} <Feather name="chevron-right" size={20} /> </Text>
        </Pressable>
    )
}

export default PreseableMiniCard

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 180,
        width: 180,
        gap: 15,
        backgroundColor: theme.bgColors['bg-200'],
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        margin: 15,
        borderColor: theme.colors['primary-100']
    },
    iconContainer: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: '100%',
        paddingLeft: 10
    },
    icon: {
        width: 70,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        borderWidth: 1,
        backgroundColor: theme.colors['primary-100']

    },
    texto: {
        width: '100%',
        paddingLeft: 10,
        fontSize: 16,
        color: theme.colors['accent-100'],
        fontFamily: 'Ubuntu'
    }
})