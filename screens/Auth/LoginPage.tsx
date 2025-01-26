import React from 'react';
import { View, Text, Button } from 'react-native';
import LoginFormPage from './LoginFormPage';
import styles from './style';
import { Image } from 'react-native';

function LoginPage () {
    return (
        <View style={styles.container}>

            <Image style={styles.icon}
                source={require('../../assets/icon.png')} />
            <Text style={styles.TitleText}>Bienvenido</Text>
            <LoginFormPage />
            <Text style={styles.linkText}>¿No tienes una cuenta? <Text style={styles.link}>Registrarse</Text></Text>
            <Button title="Continuar con correo electrónico" onPress={() => { } } />
        </View>
    );
}

export default LoginPage;