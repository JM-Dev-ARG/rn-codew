import { Image, StyleSheet, View } from 'react-native'
import React from 'react'
import theme from '../../theme'



const Avatar = ({ img, width, height }) => {

    img ? img : img = "https://firebasestorage.googleapis.com/v0/b/rn-coder-c0251.appspot.com/o/bandera.webp?alt=media&token=39f5a0e8-3960-4b5d-8e61-4da49d2cac36"

    return (
        <View style={{ width: width, height: height, ...styles.container }} >

            <Image source={{ uri: img }} style={styles.img} />
        </View>
    )
}


export default Avatar

const styles = StyleSheet.create({
    container: {
        borderRadius: 100,
        borderWidth: 1,
        borderRadius: 100,
        borderColor: theme.colors['primary-100'],
        alignSelf: 'center',
        objectFit: 'contain',
        overflow: 'hidden'
    },
    img: {
        flex: 1,
        width: '100%',

    }
})