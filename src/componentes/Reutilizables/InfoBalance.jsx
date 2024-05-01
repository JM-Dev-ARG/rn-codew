import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Avatar from './Avatar'
import theme from '../../theme'

const InfoBalance = ({ visualize, amount, coin, change, type, img, component }) => {


    return (
        component === "wallet" ?
            <View style={styles.container}>
                <View style={styles.cardImgWallet}>
                    <Avatar img={img} width={40} height={40} /></View>
                <View >
                    <View style={styles.cardInfoWallet}>
                        <Text style={styles.coin}>{coin}</Text>
                        <Text style={styles.cardValueWallet}>{visualize === true ? amount : "*****"} </Text>
                    </View>
                    <View style={styles.cardInfoWallet}>
                        <Text style={styles.type}>{type}</Text>
                        {coin === "ARS" ? <Text> </Text> : <Text style={styles.cardCoinWallet}>{visualize ? change : "*****"}</Text>}
                    </View>
                </View>
            </View>
            :
            <View style={styles.cardInfo}>
                <Avatar width={40} height={40} img={img} />
                <Text style={styles.cardValue}>{visualize === true ? amount : "*****"} <Text style={styles.cardCoin}>{coin}</Text></Text>
            </View>
    )

}

export default InfoBalance

const styles = StyleSheet.create({
    //Balance
    cardInfo: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 10,
        width: '90%'
    },
    cardValue: {
        color: theme.textColors['text-200'],
        fontSize: 25,
        fontFamily: 'UbuntuBold'
    },
    cardCoin: {
        fontSize: 15,
        fontFamily: 'Ubuntu',
        color: theme.colors['accent-200']
    },

    //Wallet
    container: {
        flexDirection: "row",
        width: "100%",
        paddingVertical: 5,
        alignItems: "center",
        gap: 10
    },
    cardValueWallet: {
        color: theme.textColors['text-200'],
        fontSize: 18,
        fontFamily: 'UbuntuBold',
    },

    cardCoinWallet: {
        fontSize: 12,
        fontFamily: 'Ubuntu',
        color: theme.colors['accent-200'],
        paddingRight: 5

    },
    coin: {
        fontFamily: "Ubuntu",
        fontSize: 16,
        color: theme.textColors['text-200']
    },
    type: {
        color: theme.colors['accent-200'],
        fontSize: 12,
        fontFamily: "Ubuntu"

    },
    cardImgWallet: {
        width: "auto",
    },
    cardInfoWallet: {
        width: "90%",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    }
})