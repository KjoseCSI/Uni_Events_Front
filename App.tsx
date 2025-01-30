import { createStackNavigator } from '@react-navigation/stack';
import RegistrationPage from './screens/RegistrationPage';
import Navigation from './navigation/Navigation';

const Stack = createStackNavigator(); 
export default function App() {
  return (
    <Navigation/>
  );  
}



