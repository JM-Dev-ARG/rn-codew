import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Btn from './Reutilizables/Btn'
import Avatar from './Reutilizables/Avatar'
import { Ionicons } from '@expo/vector-icons';
import theme from '../theme';
import Card from './Reutilizables/Card';



const CardBalance = ({ visualize, setVisualize }) => {

    return (
        <Card>
            <View style={styles.cardBtns}>
                <Text style={styles.balance}>Balance</Text>
                <Pressable onPress={() => setVisualize(!visualize)}>{visualize ? <Ionicons name="eye-outline" size={24} color={theme.colors['primary-100']} /> : <Ionicons name="eye-off-outline" size={24} color={theme.colors['primary-100']} />}
                </Pressable>

            </View>
            <View style={styles.cardInfo}>
                <Avatar width={60} height={60} />
                <Text style={styles.cardValue}>{visualize ? 2000 :
                    "*****"} <Text style={styles.cardCoin}>ARS</Text></Text>
            </View>
            <View style={styles.cardBtns}>
                <Btn btnText={"Depositar"} onPress={() => { alert("hola") }} />
                <Btn btnText={"Enviar"} onPress={() => { alert("hola") }} />
                <Btn btnText={"Cambiar"} onPress={() => { alert("hola") }} />
            </View>
        </Card>
    )
}

export default CardBalance

const styles = StyleSheet.create({
    cardBtns: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    cardInfo: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 10,
        width: '90%'
    },
    cardValue: {
        color: theme.textColors['text-200'],
        fontSize: 30,
        fontFamily: 'UbuntuBold'
    },
    cardCoin: {
        fontSize: 15,
        fontFamily: 'Ubuntu'
    },
    balance: {
        fontSize: 15,
        fontFamily: 'UbuntuBold',
        color: theme.colors['accent-200']

    }
})