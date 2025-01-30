import React, { useState } from 'react';
import { View, TextInput, Button, Text, Alert, StyleSheet } from 'react-native';


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
            <TextInput
                style={styles.input}
                placeholder="Name"
                value={firstName}
                onChangeText={setFirstName} />
            <TextInput
                style={styles.input}
                placeholder="Last name"
                value={lastName}
                onChangeText={setLastName} />
            <TextInput
                style={styles.input}
                placeholder="Cell phone number"
                value={phoneNumber}
                onChangeText={setPhoneNumber}
                keyboardType="phone-pad" />
            <TextInput
                style={styles.input}
                placeholder="Faculty"
                value={faculty}
                onChangeText={setFaculty} />
            <TextInput
                style={styles.input}
                placeholder="Career"
                value={career}
                onChangeText={setCareer} />
            <TextInput
                style={styles.input}
                placeholder="Correo electrónico"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none" />
            <TextInput
                style={styles.input}
                placeholder="Contraseña"
                value={password}
                onChangeText={setPassword}
                secureTextEntry />

            <Button title="Sing In" onPress={handleLogin} />
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
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingLeft: 8,
        backgroundColor: '#9095a1',
    },


});
