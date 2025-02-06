import Navigation from './navigation/Navigation';
import { EventsProvider } from './context/EventsContext';
import { AuthProvider } from './context/AuthContext';
export default function App() {
  return (
    <AuthProvider>
      <EventsProvider>
        <Navigation />
      </EventsProvider>
    </AuthProvider>
  );  
}



