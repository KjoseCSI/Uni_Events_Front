import { createStackNavigator } from '@react-navigation/stack';
import Navigation from './navigation/Navigation';
import { EventsProvider } from './context/EventsContext';

export default function App() {
  return (
    <EventsProvider>
      <Navigation />
    </EventsProvider>
  );  
}



