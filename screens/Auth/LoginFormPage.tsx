import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import styles from './style';

function LoginFormPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = () => {
    // Logic validation y autentication
    if (!email || !password) {
      alert('Por favor, ingresa tu correo y contraseña.');
      return;
    }

    alert(`Iniciando sesión con ${email}`);
  };

  return (
    <View style={styles.formContainer}>
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico "
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none" />
      <TextInput
        style={styles.input}
        placeholder="Contraseña "
        value={password}
        onChangeText={setPassword}
        secureTextEntry />
      <View style={styles.checkboxContainer}>
        <Text style={styles.label}>Recordar contraseña</Text>
      </View>
      <Button title="Iniciar sesión" onPress={handleLogin} />
    </View>
  );
}

export default LoginFormPage;