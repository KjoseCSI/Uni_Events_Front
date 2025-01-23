import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import { Gyroscope } from 'expo-sensors';

export function GyroscopeSensor() {
  const [gyroscopeData, setGyroscopeData] = useState({ x: 0, y: 0, z: 0 });
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isGyroscopeAvailable, setGyroscopeAvailable] = useState(false);

  useEffect(() => {
    // Verifica la disponibilidad del giroscopio
    const checkGyroscopeAvailability = async () => {
      try {
        const available = await Gyroscope.isAvailableAsync();
        setGyroscopeAvailable(available);
        console.log(
          available
            ? 'Giroscopio disponible en este dispositivo.'
            : 'El giroscopio no está disponible en este dispositivo.'
        );
      } catch (error) {
        console.error('Error verificando disponibilidad del giroscopio:', error);
        Alert.alert('Error', 'No se pudo verificar la disponibilidad del giroscopio.');
      }
    };

    checkGyroscopeAvailability();

    // Limpia los listeners al desmontar el componente
    return () => Gyroscope.removeAllListeners();
  }, []);

  const subscribe = () => {
    // Configura el intervalo de actualización
    Gyroscope.setUpdateInterval(100); // Actualiza cada 100 ms

    const subscription = Gyroscope.addListener((data) => {
      setGyroscopeData(data);
      console.log(`Datos del giroscopio: x=${data.x.toFixed(2)}, y=${data.y.toFixed(2)}, z=${data.z.toFixed(2)}`);
    });

    setIsSubscribed(true);
  };

  const unsubscribe = () => {
    Gyroscope.removeAllListeners();
    setIsSubscribed(false);
    console.log('Listener del giroscopio desactivado.');
  };

  const { x, y, z } = gyroscopeData;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Giroscopio</Text>
      <Text style={styles.text}>x: {x.toFixed(2)}</Text>
      <Text style={styles.text}>y: {y.toFixed(2)}</Text>
      <Text style={styles.text}>z: {z.toFixed(2)}</Text>
      <Text style={styles.text}>
        {isGyroscopeAvailable
          ? 'El giroscopio está disponible y habilitado.'
          : 'El giroscopio no está disponible en este dispositivo.'}
      </Text>
      <View style={styles.buttonContainer}>
        <Button
          title={isSubscribed ? 'Desactivar Giroscopio' : 'Activar Giroscopio'}
          onPress={isSubscribed ? unsubscribe : subscribe}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  text: {
    fontSize: 16,
    marginVertical: 8,
    color: '#333',
  },
  buttonContainer: {
    marginTop: 20,
  },
});
