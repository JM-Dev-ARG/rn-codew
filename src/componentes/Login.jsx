
import React, { useState, useEffect } from 'react'
import FormInput from './Reutilizables/FormInput'
import FormAcces from './Reutilizables/FormAcces';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { login } from '../functions/autentication';
import theme from '../theme';


const Login = ({ navigation }) => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [route, setRoute] = useState("");
  const [error, setError] = useState(false);


  const handleLogin = () => {
    const isValidUser = login(username, password);
    if (isValidUser) {
      setError(false);
      setUserName("");
      setPassword("");
    } else {
      setError(true);
    }
  }
  useEffect(() => {
    const isValidUser = login(username, password);
    isValidUser ?
      setRoute("Dashboard") :
      setRoute("");


  }, [username, password])

  return (

    <FormAcces
      greating='Bienvenido'
      text1="Olvidaste tu password?"
      text1Redirect='ForgetPass'
      text2="Registrate"
      text2Redirect='Register'

      navigator={navigation}>

      <FormInput placeholder={"UserName"} setValueProp={setUserName} error={error} inputValue={username} />
      <FormInput placeholder={"Password"} setValueProp={setPassword} mode={true} error={error} inputValue={password} />

      {error ? <Text style={{ color: 'red' }}>Usuario o contraseña incorrectos</Text> : ""}

      <Pressable
        style={styles.btn}
        onPress={() => {
          handleLogin();
          route === "Dashboard" ?
            navigation.navigate("DashboarTabdNav") :
            "";

        }
        }>
        <Text style={styles.btnText}>
          Ingresa
        </Text>
      </Pressable>

    </FormAcces>
  )

}

export default Login

const styles = StyleSheet.create({
  btn: {
    backgroundColor: theme.colors['primary-200'],
    width: 'auto',
    paddingVertical: 10,
    borderRadius: 20,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    color: theme.textColors['text-100'],
    fontFamily: "UbuntuBold",
    marginHorizontal: 20,

  }
})


