import React from 'react';
import { View, Text, Button } from 'react-native';
import LoginFormPage from '../../components/LoginFormPage';
import styles from '../../components/style';
import {Image, StyleSheet} from 'react-native';


const FormPage = () => {
    return (
        <View style={styles.container}>

       <Image style={styles.icon}
       source={require('../../assets/icon.png')}

            /> 
            

            <Text style={styles.TitleText}>Bienvenido</Text>
            <LoginFormPage />
            <Text style={styles.linkText}>¿No tienes una cuenta? <Text style={styles.link}>Registrarse</Text></Text>
            <Button title="Continuar con correo electrónico" onPress={() => { /* Lógica para continuar */ }} />
        </View>
    );
};

export default FormPage;