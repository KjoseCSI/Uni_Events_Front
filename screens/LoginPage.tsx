import React, { useState } from 'react';
import { View, TextInput, Button, Text, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        //Validate if fields are empty
        if (!email || !password) {
            alert('Please enter your email and password.');
            return;
        }
        //Validate email format
        const emailPattern =/^[^\s@] + @[^\s@]+ \.[^\s@] + $/ ; 
        if (!emailPattern.test(email)){
            alert('Email or password entered incorrectly. Make sure the email contains "@" and a domain.');
            return;
        }
        //If you entered both fields correctly, login message
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

                <View style={styles.Boton}>
                    <TouchableOpacity style={styles.boxButton} onPress={handleLogin}>
                        <Text style={styles.TextButton}>
                            Sing In
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View>
                <Text style={styles.input}>
                    Don't have an account?    . 
                    <TouchableOpacity > 
                       <Text style={styles.link}>Register here</Text>
                    </TouchableOpacity>
                </Text>
                <Button title=
                    "Continue with email" onPress={() => { }} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#003366',
        justifyContent: 'center',
        alignItems: 'center',
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
        height: 35,
        color: '#9095a1',
    },
    textBox: {
        paddingVertical: 5,
        backgroundColor: '#cccccc90',
        marginVertical: 10,
        borderRadius: 10,
        fontWeight: 'bold',
        
    },
    Boton: {
        alignItems: 'center',
    },
    boxButton:{
        backgroundColor: '#003366',
        borderRadius: 30,
        paddingVertical: 20,
        width: 150,
        marginTop: 20,
        margin: 10,
    },
    TextButton: {
        textAlign: 'center',
        color: 'white',
    },
    link: {
        color: '#ffffff',
        textDecorationLine: 'underline',
        fontWeight: 'bold',
        margin: -6,
    },

});