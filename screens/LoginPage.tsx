import React, { useState } from 'react';
import { View, TextInput, Button, Text, Image, StyleSheet } from 'react-native';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (!email || !password) {
            alert('Please enter your email and password.');
            return;
        }

        alert(`Logging in with ${email}`);
    };

    return (
        <View style={styles.container}>
            <Image style={styles.icon} source={require('../assets/icon.png')} />
            <Text style={styles.TitleText}>Welcome</Text>
            <View style={styles.formContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="email@uce.edu.ec"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />
                
                <Button title="Sing In" onPress={handleLogin} />
            </View>
            <Text style={styles.linkText}>

                Don't have an account? <Text style={styles.link}>Register here</Text>
            </Text>
            <Button title=
                "Continue with email" onPress={() => { }} />
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