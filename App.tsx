import Navigation from './navigation/Navigation';
import { EventsProvider } from './context/EventsContext';
import { AuthProvider } from "./context/AuthContext";
import { SQLiteProvider } from 'expo-sqlite';
import {createDbIfNeeded} from './database/EventsDatabase';
import registerNNPushToken from 'native-notify';


export default function App() {
  return (
    <SQLiteProvider databaseName="eventslike.db" onInit={createDbIfNeeded}>
      <AuthProvider>
        <EventsProvider>
          <Navigation />
        </EventsProvider>
      </AuthProvider>
    </SQLiteProvider>
  );  
}



