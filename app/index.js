import React from 'react';
import { View, TextInput, Button, StyleSheet, Image, Text } from 'react-native';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/logo.png')}
        style={styles.logo}
      />
      <Text style={styles.logoText}>Marketspace</Text>
      <Text style={styles.subText}>Seu espaço de compra e venda</Text>
      <Text style={styles.subtexto}>Acesse sua conta</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome de usuário"
      />
      <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        secureTextEntry
      />
      <Button style={styles.botaoenter} title="Entrar" onPress={() => {}} />
      <Text style={styles.subText}>ainda não tem acesso?</Text>
      <Button style={styles.botaocriar} title="criar a conta" onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
    padding: 20,
  },
  logo: {
    width: 200,
    height: 100,
    marginBottom: 20,
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subText: {
    fontSize: 12,
    color: 'rgba(0, 0, 0, 0.3)',
    marginBottom: 20,
    margin:100,

  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'white',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius:5,
    backgroundColor:'white',
    placeholderTextColor:'gray',
  },
  subtexto:{
    marginBottom: 10,
  },
  botaoenter:{
borderRadius:150,
  },
  botaocriar:{
    borderRadius:150,
    color:'grey'
  }
});

export default LoginScreen;
