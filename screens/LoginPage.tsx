import React, { useState } from 'react';
import { View, TextInput, Button, Text, Image, StyleSheet,TouchableOpacity  } from 'react-native';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (!email || !password) {
            alert('Por favor, ingresa tu correo y contraseña.');
            return;
        }

        alert(`Iniciando sesión con ${email}`);
    };
    const handleRegister = () => {
        navigation.navigate('RegistrationPage'); // Asegúrate de que el nombre de la ruta sea correcto
    };

    return (
        <View style={styles.container}>
             <Image style={styles.icon} source={require('../assets/icon.png')} />
            <Text style={styles.TitleText}>Bienvenido</Text>
            <View style={styles.formContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Correo electrónico"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Contraseña"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />
                <View style={styles.checkboxContainer}>
                    <Text style={styles.label}>Recordar contraseña</Text>
                </View>
                <Button title="Iniciar sesión" onPress={handleLogin} />
            </View>
            <Text style={styles.linkText}>
                ¿No tienes una cuenta?
                <TouchableOpacity onPress={handleRegister}>
                    <Text style={styles.link}> Registrarse</Text>
                </TouchableOpacity>
            </Text>
            <Button title="Continuar con correo electrónico" onPress={() => { }} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#003366',
        justifyContent: 'center',
        padding: 16,
    },
    icon: {
        alignSelf: 'center',
        width: 100,
        height: 100,
        marginBottom: 20,
    },
    TitleText: {
        textAlign: 'center',
        marginBottom: 30,
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
    },
    formContainer: {
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingLeft: 8,
        backgroundColor: '#9095a1',
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
    label: {
        color: 'white',
    },
    linkText: {
        textAlign: 'center',
        marginBottom: 30,
        color: 'white',
    },
    link: {
        color: '#ffffff',
        textDecorationLine: 'underline',
        fontWeight: 'bold',
    },
});
