import React, { useState } from 'react';
import { View, TextInput, Button, Text, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../../firebaseConfig";
import { useAuthContext } from "../../context/AuthContext";


export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation(); // 

    const {logingEmailWithPassword} = useAuthContext()

    //input parameter validation
    const handleLogin = async () => {

        if (!email || !password) {
            Alert.alert('Error', 'Por favor introduce tu correo electrónico y contraseña.');
            return;
        }
        //Validate email format
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            Alert.alert('Error', 'Correo electrónico o contraseña mal ingresados. Asegúrese de que su correo electrónico contenga "@" y un dominio.');
            return;
        }
        Alert.alert('Iniciando sesión', 'Accediendo...');

        try {
            await signInWithEmailAndPassword(auth, email, password); // Call to Firebase for verification
            logingEmailWithPassword(email,password);
          } catch (error) {
            console.error(error);
            Alert.alert('Error usuario o contraseña mal ingresados'); 
          }
    }

    // Navigate to the Registration page
    const handleRegister = () => {
        navigation.navigate('RegistrationPage');
    };



    return (
        <View style={styles.container}>

            <Image style={styles.icon} source={require('../../assets/icon.png')} />
            <Text style={styles.TitleText}>Bienvenido </Text>

            <View style={styles.Card}>
                <Text style={styles.input}>Ingresa tu correo electrónico institucional:</Text>

                <View style={styles.textBox}>
                    <TextInput
                        style={styles.input}
                        placeholder="email@uce.edu.ec"
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                </View>

                <Text style={styles.input}>Ingrese su contraseña:</Text>
                <View style={styles.textBox}>
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        secureTextEntry
                    />
                </View>

                <View style={styles.Boton}>
                    <TouchableOpacity style={styles.boxButton} onPress={handleLogin}>
                        <Text style={styles.TextButton}>
                            Iniciar sesión
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View>
                <Text style={styles.input}>
                    ¿No tienes una cuenta?    .
                    <TouchableOpacity onPressIn={handleRegister}>
                        <Text style={styles.link}>Register here</Text>
                    </TouchableOpacity>
                </Text>
                <Button title=
                    "Continuar con google" onPress={() => { }} />
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
    boxButton: {
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
