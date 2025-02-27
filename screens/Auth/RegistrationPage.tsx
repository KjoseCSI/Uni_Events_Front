import React, { useState } from 'react';
import { View, TextInput, Text, Alert, StyleSheet, TouchableOpacity } from 'react-native';

import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../../firebaseConfig";
import { useAuthContext } from '../../context/AuthContext';
import { REALTIMEDATABASE } from '@env'
import { useNotificacion } from '../../hooks/useNotification';
import { useSQLiteContext } from 'expo-sqlite';

export default function RegistrationPage() {
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [faculty, setFaculty] = useState('');
    const [career, setCareer] = useState('');
    const {logingEmailWithPassword} = useAuthContext();

    const expoPushToken = useNotificacion()
    const database = useSQLiteContext();

    const loginUser = async () => {
        try {
          // Desactivar todos los usuarios
          await database.execAsync(`UPDATE user SET active = 0;`);
          // Activar el usuario con el email dado
          await database.execAsync(`UPDATE user SET active = 1 WHERE email = ${email};`,);
          console.log(`Usuario con email ${email} ha iniciado sesión y ahora está activo.`);
        } catch (error) {
          console.error("Error al iniciar sesión:", error);
        }
      };

    const handleSaveUser = async () => {
        try {
          const response = await database.runAsync(
            `INSERT INTO user (firstName, email, faculty, career, active) 
             VALUES (?, ?, ?, ?, ?);`,
            [firstName, email, faculty, career, 0] 
          );
          console.log("Usuario guardado Correctamente:", response?.changes!);
        } catch (error) {
          console.error("Error al guaradar el Usuario:", error);
        }
      };
      
    // validation of complete fields.
    const handleRegistration = async () => {
        const errors = validateInput();
        if (errors.length > 0) {
            Alert.alert('Error', errors.join('\n'));
            return;

        }
        try {
            // Crear un nuevo usuario con email y contraseña
            await createUserWithEmailAndPassword(auth, email, password);
            Alert.alert('Registro Exitoso', `Bienvenido ${firstName}!`);
            handleSaveUser();
            loginUser();
            logingEmailWithPassword(email,password);
            await fetch(`${REALTIMEDATABASE}/info.json`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    correo: email,
                    firstName: firstName,
                    faculty: faculty,
                    notificationToken: expoPushToken
                })
            })
            } catch (error) {
            console.error(error);
            Alert.alert('Error', error.message); // Muestra un mensaje de error si falla el registro
        }

    }
    // Validations
    const validateInput = () => {
        let errors = [];
        const namePattern = /^[A-Za-z]+$/;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        //Check if all fields are correct. 
        if (!firstName) {
            errors.push('Por favor, ingrese su nombre de usuario.');
        }
        if (!faculty) {
            errors.push('Por favor, ingrese el nombre de su facultad.');
        }
        if (!email) {
            errors.push('Por favor, ingrese su correo electrónico.');
        }
        if (!password) {
            errors.push('Por favor, ingresa una contraseña.');
        }
        if (!confirmPassword) {
            errors.push('Por favor, ingresa la confirmación de tu contraseña');
        }

        //check the types of entries entered

        if (errors.length === 0) {
            if (firstName.length > 20) {
                errors.push('Nombre de Usuario inválido, su nombre debe tener un máximo de 20 letras.');
            }
            if (!emailPattern.test(email)) {
                errors.push('Asegúrese de que el correo electrónico contenga "@" y un dominio.');
            }
            if (password !== confirmPassword) {
                errors.push('Las contraseñas no coinciden. Intente de nuevo...');
            }
            if (!namePattern.test(faculty)) {
                errors.push('Sólo se permite el ingreso de letras en el campo de Facultad.');
            }
        }

        return errors;
    };


    return (
        <View style={styles.container}>
            <Text style={styles.TitleText}>Registro de usuario</Text>

            <View style={styles.Card}>

            <Text style={styles.inputLabel}>Ingrese su nombre y apellido:</Text>
                <View style={styles.textBox}>
                    <TextInput
                        style={styles.input}
                        placeholder="User Name"
                        value={firstName}
                        onChangeText={setFirstName} />
                </View>
    
                <Text style={styles.inputLabel}>Ingrese el nombre de tu Facultad:</Text>
                <View style={styles.textBox}>
                    <TextInput
                        style={styles.input}
                        placeholder="Faculty"
                        value={faculty}
                        onChangeText={setFaculty} />
                </View>


                <Text style={styles.inputLabel}>Ingrese su correo electrónico institucional:</Text>
                <View style={styles.textBox}>
                    <TextInput
                        style={styles.input}
                        placeholder="email@uce.edu.ec"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        autoCapitalize="none" />
                </View>

                <Text style={styles.inputLabel}>Ingrese una contraseña:</Text>
                <View style={styles.textBox}>
                    <TextInput
                        style={styles.input}
                        placeholder="Pasword"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry />
                </View>
                
                <Text style={styles.inputLabel}>Confirma tu contraseña:</Text>
                <View style={styles.textBox}>
                    <TextInput
                        style={styles.input}
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                        secureTextEntry
                    />
                </View>
            </View>
            <View style={styles.Boton}>
                <TouchableOpacity style={styles.boxButton} onPress={handleRegistration}>
                    <Text style={styles.TextButton}>
                        Registrarse
                    </Text>
                </TouchableOpacity>
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
    inputLabel: { 
        marginBottom: 5, 
        color: '#9095a1',
        fontSize: 14, 
    },
    input: {
        height: 40, 
        paddingVertical: 10,
        paddingLeft: 8,
        color: '#9095a1',
        borderWidth: 1, 
        borderColor: '#cccccc', 
        borderRadius: 10, 
        fontSize: 12,
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
        shadowRadius: 4,
        elevation: 5,
    },
    textBox: {
        paddingVertical: 5,
        backgroundColor: '#cccccc90',
        marginVertical: 10,
        borderRadius: 10,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
    },
    Boton: {
        alignItems: 'center',
    },
    boxButton: {
        backgroundColor: '#019dff',
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
