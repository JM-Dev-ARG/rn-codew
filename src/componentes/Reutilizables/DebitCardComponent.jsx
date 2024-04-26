import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import theme from '../../theme'
import Svg, { Path } from "react-native-svg"

const SvgComponent = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={60}
        height={60}
        className="svgLogo"
        viewBox="0 0 48 48"
        {...props}
    >
        <Path fill={theme.textColors['text-200']} d="M32 10a14 14 0 1 0 0 28 14 14 0 1 0 0-28Z" />
        <Path fill={theme.colors['accent-200']} d="M16 10a14 14 0 1 0 0 28 14 14 0 1 0 0-28Z" />
        <Path
            fill={theme.colors['accent-200']}
            d="M18 24c0 4.755 2.376 8.95 6 11.48 3.624-2.53 6-6.725 6-11.48s-2.376-8.95-6-11.48c-3.624 2.53-6 6.725-6 11.48z"
        />
    </Svg>
)

const DebitCardComponent = ({ cardNumber, name, date, cvv }) => {
    return (
        <View style={styles.card} >
            <ImageBackground source={require("../../../assets/backTarjeta.webp")} style={styles.back}>

                <View style={styles.logoContainer}>
                    <Image source={require("../../../assets/logoTarjeta.webp")} style={styles.logo}></Image>
                    <SvgComponent />
                </View>

                <View style={styles.numberContainer}>
                    <Text style={styles.cardNumber}> XXXX XXXX XXXX {cardNumber}</Text>
                </View>
                <View style={styles.nameWrapper}>
                    <Text style={styles.name}> {name}</Text>

                </View>
                <View style={styles.dateCvvContainer}>

                    <View style={styles.expiryWrapper}>
                        <Text style={styles.inputLabel}>VALID</Text>
                        <Text style={styles.inputStyle}>{date}</Text>

                    </View>

                    <View style={styles.cvvWrapper}>
                        <Text style={styles.inputLabel}>CVV</Text>
                        <Text style={styles.inputStyle}>{cvv}</Text>

                    </View>
                </View>
            </ImageBackground>

        </View>
    )
}

export default DebitCardComponent

const styles = StyleSheet.create({
    card: {
        display: 'flex',
        flexDirection: 'column',
        alignSelf: 'center',
        width: 350,
        height: 230,
        borderRadius: 15,
        overflow: 'hidden',

    },
    back: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        gap: 10,

    }, logoContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 80,
        paddingHorizontal: 20,
    },

    logo: {
        width: 80,
        height: 80,
        objectFit: 'contain',
    },


    numberContainer: {
        width: '100%',
        height: 'auto',
        flexDirection: 'column',
    },
    cardNumber: {
        fontSize: 18,
        letterSpacing: 1.5,
        alignSelf: 'center',
        color: theme.textColors['text-100'],
    },
    nameWrapper: {
        height: 'auto',
        paddingLeft: 20
    },
    name: {
        fontSize: 14,
        letterSpacing: 1.5,
        color: theme.textColors['text-100'],

    },
    dateCvvContainer: {
        width: '100%',
        height: 25,
        justifyContent: 'center',
        paddingLeft: 20,
    },
    inputLabel: {
        fontSize: 8,
        letterSpacing: 1.5,
        color: theme.textColors['text-100'],
    },
    inputStyle: {
        color: theme.textColors['text-100'],
        fontSize: 10,
        height: 'auto',
        letterSpacing: 1.5,
        alignItems: 'center',
    },
    expiryWrapper: {
        height: 'auto',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    cvvWrapper: {
        width: '10%',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,

    },
})