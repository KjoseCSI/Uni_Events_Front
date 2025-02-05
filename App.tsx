import { createStackNavigator } from '@react-navigation/stack';
import Navigation from './navigation/Navigation';
import { EventsProvider } from './context/EventsContext';
import UserProfile from './screens/Events/UserProfile';
import MainEvents from './screens/Events/MainEvents';

export default function App() {
  return (
    <UserProfile/>
  );  
}



