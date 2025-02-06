
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import * as ImagePicker from 'expo-image-picker';
import { Alert } from 'react-native';

export default function UserProfile() {

    //Create const to chages users image
    const [image, setImage] = useState<string | null>(null);

    //choose image from gallery
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [4, 4],
            quality: 1,
        });

        if (!result.canceled && result.assets?.length > 0) {
            setImage(result.assets[0].uri || null);
        }
    }

    //take a photo with the camera
    const takePhoto = async () => {
        let result = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [4, 4],
            quality: 1,
        });
        if (!result.canceled && result.assets?.length > 0) {
            setImage(result.assets[0].uri || null);
        }
    };


    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Perfil de usuario</Text>
            <View style={styles.profileSection}>
                <Image source={require('../../assets/icon-user.png')}
                    style={styles.profileImage} resizeMode="contain"
                />
                <Text style={styles.name}>José Chicaiza</Text>
                <Text style={styles.email}>jrchicaizav@uce.edu.ec</Text>
                <Text style={styles.boldText}>Estudiante:</Text>
                <Text style={styles.info}>Facultad de Psicología</Text>
                <Text style={styles.info}>Carrera de psicopedagogía</Text>
            </View>
            <SafeAreaView style={styles.subContainer} >
                <View style={styles.subContainer}>
                    <View style={styles.card}>
                        <Text style={styles.cardTitle}>Eventos asistidos</Text>
                        <Text style={styles.cardText}>☑ Quimicazo</Text>
                        <Text style={styles.cardText}>☑ Fiestas Quito FEUE</Text>
                        <Text style={styles.cardText}>☑ Centralazo</Text>
                    </View>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Enviar nuevo evento</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#004771',
    },
    subContainer: {
        flex: 1,
        backgroundColor: '#CC0000',
    },
    profileSection: {
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        marginTop: 30,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
    },
    profileImage: {
        width: 115,
        height: 115,
        borderRadius: 50,
        marginBottom: 20,
        marginLeft: 30,
        marginTop: 20,
    },
    name: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#fff',
        marginLeft: 30,
        
    },
    email: {
        color: '#fff',
        marginBottom: 30,
        marginLeft: 30,
        fontSize: 16,
    },
    boldText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        marginLeft: 30,
    },
    info: {
        color: '#fff',
        marginLeft: 30,
        fontSize: 16,
    },
    card: {
        backgroundColor: '#fff',
        marginTop: 50,
        borderRadius: 10,
        padding: 15,
        marginBottom: 20,
        marginLeft: 50,
        marginRight: 50,
        
    },
    cardTitle: {
        fontWeight: 'bold',
        marginBottom: 10,
        fontSize: 22,
        textAlign: 'center',
    },
    cardText:{
        fontSize: 16,
    },
    button: {
        marginTop: 30,
        backgroundColor: '#003366',
        marginLeft: 100,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 6,
        alignItems: 'center',
        alignSelf: 'flex-start'
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
});

