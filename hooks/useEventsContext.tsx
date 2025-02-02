import { EventsContext } from '../context/EventsContext';
import { useContext } from "react";

export default function useEventsContext() {
    return useContext(EventsContext);
  }