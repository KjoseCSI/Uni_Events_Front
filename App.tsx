import { createStackNavigator } from '@react-navigation/stack';
import RegistrationPage from './screens/RegistrationPage';
import Navigation from './navigation/Navigation';
import { useFetchEvents } from './services/EventsStrapiAPI';
import { EventsProvider } from './context/EventsContext';

const Stack = createStackNavigator(); 
export default function App() {
  return (
    <EventsProvider>
      <Navigation />
    </EventsProvider>
  );  
}



