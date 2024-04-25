import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Avatar from './Avatar'
import theme from '../../theme'



const MovementItem = ({ visualize, img, type, date, ammount }) => {

    return (
        <View style={styles.container}>
            <View style={styles.typeContainer}>
                <Avatar img={img} width={40} height={40} />
                <View>
                    <Text style={styles.typeText}>{type}</Text>
                    <Text style={styles.typeDate}>{date}</Text>
                </View>
            </View>

            <Text style={type === "Deposito" || type === "Venta de Crypto" ? styles.typeAmountPositive : styles.typeAmountNegative}>{visualize ? ammount : "*****"}</Text>
        </View>
    )
}

export default MovementItem

const styles = StyleSheet.create({
    container: {

        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
    },
    typeContainer: {
        flexDirection: "row",
        gap: 10
    },
    typeText: {
        fontFamily: "Ubuntu",
        fontSize: 16,
        color: theme.textColors['text-200']
    },
    typeDate: {
        color: theme.colors['accent-200'],
        fontSize: 12,
        fontFamily: "Ubuntu"
    },
    typeAmountPositive: {
        fontFamily: "Ubuntu",
        color: "#2e7d32",
        fontSize: 16
    },
    typeAmountNegative: {
        fontFamily: "Ubuntu",
        color: "#c62828",
        fontSize: 16
    }

})