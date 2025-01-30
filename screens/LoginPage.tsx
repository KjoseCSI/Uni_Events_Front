import React, { useState } from 'react';
import { View, TextInput, Button, Text, Image, StyleSheet } from 'react-native';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        //Validate if fields are empty
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

            <View style={styles.Card}>
                <Text style={styles.input}>Enter your institutional email:</Text>
                
                <View style={styles.textBox}>
                    <TextInput
                        style={styles.input}
                        placeholder="email@uce.edu.ec"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                </View>

                <Text style={styles.input}>Enter your password:</Text>
                <View style={styles.textBox}>
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                    />
                </View>


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
        width: 125,
        height: 125,
        marginBottom: 20,
    },
    TitleText: {
        textAlign: 'center',
        marginBottom: 30,
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
    },
    Card: {
        margin: 10,
        backgroundColor: 'white',
        justifyContent: 'center',
        borderRadius: 20,
        width: '95%',
        padding: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 10,
    },
    input: {
        height: 40,
        paddingLeft: 8,
        color: '#9095a1',
    },
    textBox: {
        paddingVertical: 5,
        backgroundColor: '#cccccc90',
        marginVertical: 10,
        borderRadius: 10,
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