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
            Alert.alert('Error', 'Por favor, completa el campo Nombre.');
            return;
        }
        if (!lastName) {
            Alert.alert('Error', 'Por favor, completa el campo Apellido.');
            return;
        }
        if (!phoneNumber) {
            Alert.alert('Error', 'Por favor, completa el campo Número de celular.');
            return;
        }
        if (!email) {
            Alert.alert('Error', 'Por favor, completa el campo Correo electrónico.');
            return;
        }
        if (!password) {
            Alert.alert('Error', 'Por favor, completa el campo Contraseña.');
            return;
        }
        if (!faculty) {
            Alert.alert('Error', 'Por favor, completa el campo Facultad.');
            return;
        }
        if (!career) {
            Alert.alert('Error', 'Por favor, completa el campo Carrera.');
            return;
        }

        // validation email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            Alert.alert('Error', 'Correo electrónico inválido. Asegúrate de incluir "@" y un dominio.');
            return;
        }
        Alert.alert('Éxito', `Iniciando sesión con ${email}`);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.TitleText}>Registro de Usuario</Text>
            <TextInput
                style={styles.input}
                placeholder="Nombre"
                value={firstName}
                onChangeText={setFirstName} />
            <TextInput
                style={styles.input}
                placeholder="Apellido"
                value={lastName}
                onChangeText={setLastName} />
            <TextInput
                style={styles.input}
                placeholder="Número de celular"
                value={phoneNumber}
                onChangeText={setPhoneNumber}
                keyboardType="phone-pad" />
            <TextInput
                style={styles.input}
                placeholder="Facultad"
                value={faculty}
                onChangeText={setFaculty} />
            <TextInput
                style={styles.input}
                placeholder="Carrera"
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

            <Button title="Iniciar Sesión" onPress={handleLogin} />
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
