import React, { useState } from 'react';
import { View, TextInput, Button, Text, Alert, StyleSheet, TouchableOpacity } from 'react-native';


export default function RegistrationPage() {
    const [firstName, setFirstName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [faculty, setFaculty] = useState('');

    // Field validationS
    // validation of complete fields.
    const handleLogin = () => {
        const errors = validateInput();
        if (errors.length > 0) {
            Alert.alert('Error', errors.join('\n'));
            return;
        }
        Alert.alert('Success', 'Your information has been successfully registered. Logging in...');

    }
    const validateInput = () => {
        let errors = [];
        const namePattern = /^[A-Za-z]+$/;
        const phonePattern = /^\d{10}$/;
        const emailPattern = /^[^\s@] + @[^\s@]+ \.[^\s@] + $/;

        if (!firstName || firstName.length > 10) {
            errors.push('Name must have a maximum of 10 characters.');
        }
        if (!phonePattern.test(phoneNumber)) {
            errors.push('The number entered is incorrect');
        }
        if (!emailPattern.test(email)) {
            errors.push('Invalid email.');
        }
        if (!password) {
            errors.push('Please complete the password!');
        }
        if (password !== confirmPassword) {
            errors.push('Passwords do not match.');
        }
        if (!namePattern.test(faculty)) {
            errors.push('Only letters are allowed.');
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
                <Text style={styles.inputLabel}>Enter your cell phone number:</Text>
                <View style={styles.textBox}>
                    <TextInput
                        style={styles.input}
                        placeholder="Number"
                        value={phoneNumber}
                        onChangeText={setPhoneNumber}
                        keyboardType="phone-pad" />
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
                <TouchableOpacity style={styles.boxButton} onPress={handleLogin}>
                    <Text style={styles.TextButton}>
                        Sing In
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
