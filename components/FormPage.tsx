import React from 'react';
import { View, Text, Button } from 'react-native';
import LoginFormPage from './LoginFormPage';
import styles from './Estilos';

const FormPage = () => {
    return (
        <View style={styles.container}>

           {/* } <Image
                source={require('../images/icon.png')}
                style={styles.icon}
            /> */}
            

            <Text style={styles.TitleText}>Bienvenido</Text>
            <LoginFormPage />
            <Text style={styles.linkText}>¿No tienes una cuenta? <Text style={styles.link}>Registrarse</Text></Text>
            <Button title="Continuar con correo electrónico" onPress={() => { /* Lógica para continuar */ }} />
        </View>
    );
};

export default FormPage;