
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import * as ImagePicker from 'expo-image-picker';
import { useAuthContext } from '../../context/AuthContext';
import { eventsLikeModel } from "../../models/LikeEventsModel";
export default function UserProfile() {

    const [eventLikeData,setEventLikeData] = useState<eventsLikeModel[]>([])

    const {showEmail} = useAuthContext();
    // States for user data
    const [name, setName] = useState<string>('José Chicaiza');
    const [faculty, setFaculty] = useState<string>('Facultad de Ingeniería');
    const [career, setCareer] = useState<string>('Carrera de Computación');
    // State to control if the form is in editing mode
    const [isEditing, setIsEditing] = useState<boolean>(false);
    // State to track if changes have been made
    const [hasChanges, setHasChanges] = useState<boolean>(false);

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
    };

    //take a photo with the camera
    const takePhoto = async () => {
        let result = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [4, 4],
            quality: 1,
        })
        if (!result.canceled && result.assets?.length > 0) {
            setImage(result.assets[0].uri || null);
        }
    };
    //main function to change the user image
    const handleImagePick = () => {
        Alert.alert(
            "Seleccione una imagen de usuario",
            "Elige una opcion:",
            [
                { text: "Tomar una foto",
                onPress: takePhoto
                },
                {text: "Seleccionar de galeria",
                onPress: pickImage
                },
                {text: "Cancelar",
                style: "cancel"
                },
            ]
        )
    };
 // Function to handle editing
    const handleEdit = () => {
        Alert.alert(
            "¿Desea editar sus datos?", "",
            [{
                text: "Cancelar",
                onPress: () => { },
                style: "cancel"
            },
            {
                text: "OK",
                onPress: () => {
                    setIsEditing(true);
                }
            }]
        );
    };
    // Function to save changes
    const handleSave = () => {
        if (hasChanges) {
            Alert.alert(
                "¿Desea guardar los cambios?", "",
                [{
                    text: "Cancelar",
                    onPress: () => { },
                    style: "cancel"
                },
                {
                    text: "Guardar",
                    onPress: () => {
                        setIsEditing(false); // Disable editing mode
                        setHasChanges(false); // Reset changes flag
                        Alert.alert("Cambios guardados", "Tu perfil ha sido actualizado.");
                    }
                }]
            );
        } else {
            setIsEditing(false); // Disable editing mode
        }
    };
    
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Perfil de usuario</Text>
            <View style={styles.profileSection}>
                <TouchableOpacity onPress={handleImagePick}> 
                <Image 
                source={ image ? {uri: image}: require('../../assets/icon-user.png')}
                    style={styles.profileImage}
                />
                </TouchableOpacity>

                <TextInput style={styles.name}
                    value={name}
                    onChangeText={(text) => { setName(text); setHasChanges(true); }}
                    editable={isEditing} />
                <Text style={styles.email}>{showEmail}</Text>
                <Text style={styles.boldText}>Estudiante:</Text>
                <TextInput style={styles.info}
                    value={faculty}
                    onChangeText={(text) => { setFaculty(text); setHasChanges(true); }}
                    editable={isEditing}
                />
                <TextInput style={styles.info}
                    value={career}
                    onChangeText={(text) => { setCareer(text); setHasChanges(true); }}
                    editable={isEditing}
                />
                <View style={styles.editContainer}>
                    <TouchableOpacity style={styles.editButton} onPress={isEditing ? handleSave : handleEdit}>
                        <Text style={styles.editButtonText}>{isEditing ? "Guardar Cambios" : "Editar Perfil"}</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <SafeAreaView style={styles.subContainer} >
                <View style={styles.subContainer}>
                    <View style={styles.card}>
                        <Text style={styles.cardTitle}>Eventos asistidos</Text>
                        {eventLikeData.map((event) => (
                            <Text
                            key={event.id}>
                                ☑ {event.event_name}
                            </Text>
                        ))}
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
        width: 120,
        height: 120,
        borderRadius: 60,
        marginBottom: 20,
        marginLeft: 30,
        marginTop: 20,
    },
    editContainer: {
        position: 'absolute',
        right: 30,
        top: 20,
    },
    editButton: {
        backgroundColor: '#003366',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 6,
    },
    editButtonText: {
        color: '#fff',
        fontSize: 16,
    },
    
    name: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#fff',
        marginLeft: 30,
        marginTop: -5,
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
    cardText: {
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

