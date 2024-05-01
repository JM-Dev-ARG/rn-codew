import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Btn from './Reutilizables/Btn'
import { Ionicons } from '@expo/vector-icons';
import theme from '../theme';
import Card from './Reutilizables/Card';
import InfoBalance from './Reutilizables/InfoBalance';



const CardBalance = ({ visualize, setVisualize, userData }) => {
    return (
        <Card>
            <View style={styles.cardBtns}>
                <View style={styles.cardTitle}>
                    <Text style={styles.balance}>Balance Total</Text>
                    <Pressable onPress={() => setVisualize(!visualize)}>{visualize ? <Ionicons name="eye-outline" size={24} color={theme.colors['primary-100']} /> : <Ionicons name="eye-off-outline" size={24} color={theme.colors['primary-100']} />}
                    </Pressable>
                </View>


            </View>
            <InfoBalance visualize={visualize} amount={userData.balance[0].amount} coin={"ARS"} />


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
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    cardTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 10,
    },

    balance: {
        fontSize: 15,
        fontFamily: 'UbuntuBold',
        color: theme.colors['accent-200']

    }
})