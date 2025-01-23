import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { Accelerometer } from 'expo-sensors';

export function AccelerometerSensor({handleLike,handlePass}) {
  const [accelerometerData, setAccelerometerData] = useState({ x: 0, y: 0, z: 0 });
  const [initialX, setInitialX] = useState(null); // Referencia inicial dinámica
  const [hasTriggeredRight, setHasTriggeredRight] = useState(false);
  const [hasTriggeredLeft, setHasTriggeredLeft] = useState(false);

  const timerRef = useRef(null); // Referencia para el temporizador
  const lastXRef = useRef(null); // Último valor de X para comparación

  // Umbrales
  const RELATIVE_THRESHOLD = 0.5; // Inclinación relativa
  const STABLE_THRESHOLD = 0.05; // Cambios mínimos para considerar estable
  const STABLE_TIME = 2000; // Tiempo en ms para considerar que el dispositivo está estable


  useEffect(() => {
    Accelerometer.setUpdateInterval(1000);

    const subscription = Accelerometer.addListener(data => {
      setAccelerometerData(data);

      // Detectar inclinaciones
      detectTilts(data);

      // Evaluar estabilidad y actualizar referencia inicial
      checkStability(data.x);
    });

    // Limpiar los listeners al desmontar el componente
    return () => {
      subscription.remove();
      clearTimeout(timerRef.current);
    };
  }, [initialX, hasTriggeredRight, hasTriggeredLeft]);

  const detectTilts = (data) => {
    if (initialX === null) {
      setInitialX(data.x);
      console.log(`Referencia inicial de X establecida: ${data.x.toFixed(2)}`);
    }

    // Inclinación hacia la derecha
    if (!hasTriggeredRight && data.x < initialX - RELATIVE_THRESHOLD) {
      setHasTriggeredRight(true);
      console.log(`Inclinación hacia la derecha detectada: x=${data.x.toFixed(2)}`);
      callHandleLike();
      resetTriggersAfterDelay();
    }

    // Inclinación hacia la izquierda
    if (!hasTriggeredLeft && data.x > initialX + RELATIVE_THRESHOLD) {
      setHasTriggeredLeft(true);
      console.log(`Inclinación hacia la izquierda: x=${data.x.toFixed(2)}`);
      callHandlePass();
      resetTriggersAfterDelay();
    }
  };

  const callHandlePass = () => {
    handlePass();
  }

  const callHandleLike = () => {
    handleLike();
  }


  const resetTriggersAfterDelay = () => {
    // Restablece los disparadores después de un corto periodo
    setTimeout(() => {
      setHasTriggeredRight(false);
      setHasTriggeredLeft(false);
    }, 3000); // 5 segundo para permitir nuevos movimientos
  };

  const checkStability = (currentX) => {
    if (lastXRef.current === null) {
      lastXRef.current = currentX;
      return;
    }

    // Si el cambio en X es menor que el umbral, consideramos que es estable
    if (Math.abs(currentX - lastXRef.current) < STABLE_THRESHOLD) {
      if (!timerRef.current) {
        timerRef.current = setTimeout(() => {
          setInitialX(currentX); // Actualizamos la referencia inicial
          console.log(`Nueva referencia inicial de X: ${currentX.toFixed(2)}`);
          timerRef.current = null; // Limpia el temporizador
        }, STABLE_TIME);
      }
    } else {
      // Si se detecta un cambio significativo, reiniciamos el temporizador
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }

    lastXRef.current = currentX; // Actualizamos el último valor de X
  };

  const { x, y, z } = accelerometerData;

  return (
    <View style={styles.container}>
      {hasTriggeredRight && <Text style={[styles.alert, { backgroundColor: 'green' }]}>Asistire</Text>}
      {hasTriggeredLeft && <Text style={[styles.alert, { backgroundColor: 'red' }]}>No me interesa</Text>}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.15,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  alert: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
    borderRadius: 10,
  },
});
