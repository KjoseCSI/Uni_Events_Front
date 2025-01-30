import React, { useState } from 'react';
import { View, TextInput, Button, Text, Alert, StyleSheet,TouchableOpacity } from 'react-native';


export default function RegistrationPage() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [faculty, setFaculty] = useState('');
    const [career, setCareer] = useState('');

    const handleLogin = () => {
        // Validación de campos
        if (!firstName) {
            Alert.alert('Error', 'Please complete the Name field!');
            return;
        }
        if (!lastName) {
            Alert.alert('Error', 'Please complete the Last Name field!');
            return;
        }
        if (!phoneNumber) {
            Alert.alert('Error', 'Por favor, completa el campo Número de celular!');
            return;
        }
        if (!email) {
            Alert.alert('Error', 'Please complete the Cell Phone Number field!');
            return;
        }
        if (!password) {
            Alert.alert('Error', 'Please complete the password!');
            return;
        }
        if (!faculty) {
            Alert.alert('Error', 'Please complete the Faculty field!');
            return;
        }
        if (!career) {
            Alert.alert('Error', 'Please complete the Career field!');
            return;
        }

        // validation email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            Alert.alert('Error', 'Invalid email. Be sure to include "@" and a domain.');
            return;
        }
        Alert.alert('Éxito', `Logging in with ${email}`);
    };

    return (
        <View style={styles.container}>

            <Text style={styles.TitleText}>User Registration</Text>

            <View style={styles.Card}>
                <View style={styles.textBox}>
                    <TextInput
                        style={styles.input}
                        placeholder="Name"
                        value={firstName}
                        onChangeText={setFirstName} />
                </View>

                <View style={styles.textBox}>
                    <TextInput
                        style={styles.input}
                        placeholder="Last name"
                        value={lastName}
                        onChangeText={setLastName} />
                </View>

                <View style={styles.textBox}>
                    <TextInput
                        style={styles.input}
                        placeholder="Cell phone number"
                        value={phoneNumber}
                        onChangeText={setPhoneNumber}
                        keyboardType="phone-pad" />
                </View>

                <View style={styles.textBox}>
                    <TextInput
                        style={styles.input}
                        placeholder="Faculty"
                        value={faculty}
                        onChangeText={setFaculty} />
                </View>

                <View style={styles.textBox}>
                    <TextInput
                        style={styles.input}
                        placeholder="Career"
                        value={career}
                        onChangeText={setCareer} />
                </View>
                <View style={styles.textBox}>
                    <TextInput
                        style={styles.input}
                        placeholder="Correo electrónico"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        autoCapitalize="none" />
                </View>

                <View style={styles.textBox}>
                    <TextInput
                        style={styles.input}
                        placeholder="Contraseña"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry />
                </View>

                <View style={styles.Boton}>
                    <TouchableOpacity style={styles.boxButton} onPress={handleLogin}>
                        <Text style={styles.TextButton}>
                            Sing In
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
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
    TitleText: {
        textAlign: 'center',
        marginBottom: 30,
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
    },
    input: {
        height: 40,
        paddingLeft: 8,
        color: '#9095a1',
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
    textBox: {
        paddingVertical: 5,
        backgroundColor: '#cccccc90',
        marginVertical: 10,
        borderRadius: 10,
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

});
