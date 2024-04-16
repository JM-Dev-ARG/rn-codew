import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import FormInput from './FormInput'
import theme from '../theme';


export default function Form(greating, text1, text2, text1Redirect, text2Redirect) {
  const [name, setUserName] = useState("");
  const [password, setPassword] = useState("");
  greating = "Everyone"
  text1 = "Olvidaste tu password?"
  text2 = "Registrate"

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image style={styles.img} source={require("../../assets/code-w.webp")} />
      </View>

      <View style={styles.saludo}>
        <Text style={styles.textSaludo}>
          {greating}
        </Text>
      </View>

      <View style={styles.formInputs}>
        <FormInput placeholder={"UserName"} setValueProp={setUserName} />
        <FormInput placeholder={"Password"} setValueProp={setPassword} mode={true} />
      </View>

      <View style={styles.bottom}>
        <Text style={styles.text}>
          {text1}
        </Text>
        <Text style={text2 === 'Registrate' ? styles.text2 : styles.text}>
          {text2}
        </Text>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: theme.bgColors['bg-100'],
    flex: 1,
    width: '100%',
  },
  formInputs: {
    alignSelf: 'center',
    width: '80%',
    gap: 20,
    marginVertical: 20,

  },
  logo: {
    justifyContent: 'center',
    alignContent: 'center',
  },
  img: {
    objectFit: 'contain',
    width: '80%',
    alignSelf: 'center',
  }
  ,
  saludo: {
    alignSelf: 'center',
  },
  textSaludo: {
    color: theme.textColors['text-200'],
    fontSize: 30,
    fontFamily: 'Ubuntu'
  },
  bottom: {
    width: '80%',
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center'
  },

  text: {
    fontWeight: '700',
    color: theme.textColors['text-200'],
    fontFamily: 'Ubuntu',
  },

  text2: {
    color: theme.colors['primary-200'],
    fontWeight: '700',
    fontFamily: 'Ubuntu',
  }

})