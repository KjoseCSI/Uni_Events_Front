
import React, { useState } from 'react';
import { View, TextInput, Text, Alert, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; //


export default function RegistrationPage() {
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [faculty, setFaculty] = useState('');
    const navigation = useNavigation(); // 


    // validation of complete fields.
    const handleRegistration = () => {
        const errors = validateInput();
        if (errors.length > 0) {
            Alert.alert('Error', errors.join('\n'));
            return;

        }
        Alert.alert('Success', 'Your information has been successfully registered. Logging in...');
            navigation.navigate('MainEvents'); // Navegar a la página de registro
     
    }
    // Validations
    const validateInput = () => {
        let errors = [];
        const namePattern = /^[A-Za-z]+$/;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        //Check if all fields are correct. 
        if (!firstName) {
            errors.push('Please fill in your username.');
        }
        if (!faculty) {
            errors.push('Please fill in your faculty.');
        }
        if (!email) {
            errors.push('Please fill in your email.');
        }
        if (!password) {
            errors.push('Please complete the password!');
        }
        if (!confirmPassword) {
            errors.push('Please confirm your password!');
        }

        //check the types of entries entered

        if (errors.length === 0) {
            if (firstName.length > 10) {
                errors.push('Name must have a maximum of 10 characters.');
            }
            if (!emailPattern.test(email)) {
                errors.push('Make sure the email contains "@" and a domain.');
            }
            if (password !== confirmPassword) {
                errors.push('Passwords do not match.');
            }
            if (!namePattern.test(faculty)) {
                errors.push('Only letters are allowed in the faculty field.');
            }
        }

        return errors;
    };


    return (
        <View style={styles.container}>
            <Text style={styles.TitleText}>User Registration</Text>

            <View style={styles.Card}>

            <Text style={styles.inputLabel}>Enter your username:</Text>
                <View style={styles.textBox}>
                    <TextInput
                        style={styles.input}
                        placeholder="User Name"
                        value={firstName}
                        onChangeText={setFirstName} />
                </View>
    
                <Text style={styles.inputLabel}>Enter your Faculty:</Text>
                <View style={styles.textBox}>
                    <TextInput
                        style={styles.input}
                        placeholder="Faculty"
                        value={faculty}
                        onChangeText={setFaculty} />
                </View>


                <Text style={styles.inputLabel}>Enter your institutional email:</Text>
                <View style={styles.textBox}>
                    <TextInput
                        style={styles.input}
                        placeholder="email@uce.edu.ec"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        autoCapitalize="none" />
                </View>

                <Text style={styles.inputLabel}>Enter your password:</Text>
                <View style={styles.textBox}>
                    <TextInput
                        style={styles.input}
                        placeholder="Pasword"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry />
                </View>
                
                <Text style={styles.inputLabel}>Confirm your password:</Text>
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
                        Register
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
