import React, { useState } from 'react';
import { View, TextInput, Button, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

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

    return (
        <View style={styles.container}>
            <Image style={styles.icon} source={require('../assets/icon.png')} />
            <Text style={styles.TitleText}>Welcome</Text>

            <View style={styles.card}>
                <Text style={styles.input}> Enter your institutional email:</Text>

                <TextInput
                    style={styles.input}
                    placeholder="e-mail"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
                <Text style={styles.input}> Enter your password: </Text>

                <TextInput
                    style={styles.input}
                    placeholder="Password:"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />
                <View style={styles.buttonBox}>
                    <TouchableOpacity onPress={handleLogin}>
                        <Text style={styles.textButton}>
                            Sin In
                        </Text>
                    </TouchableOpacity>

                </View>
            </View>

            <Text style={styles.linkText}>
                Don't have an account?<Text style={styles.link}>Register</Text>
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
    },
    TitleText: {
        textAlign: 'center',
        marginBottom: 30,
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
    },
    card: {
        margin: 20,
        backgroundColor: 'white',
        justifyContent: 'center',
        borderRadius: 20,
        width: '90%',
        padding: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 20,
    },
    buttonBox: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#019dff',
        borderRadius: 30,
        paddingVertical: 20,
        width: 150,
        marginTop: 20,
        margin: 10,

    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingLeft: 8,
        backgroundColor: '#9095a1',
    },
    textButton: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
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