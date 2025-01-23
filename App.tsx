import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import FormPage from './screens/Events/FormPage';
import styles from './components/style';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
     <FormPage /> 
      <StatusBar style="auto" /> 
    </SafeAreaView>
  );
}