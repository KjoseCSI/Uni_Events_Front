import { EventsContext } from '../context/EventsContext';
import { useContext } from "react";

export function useEventsContext() {
    return useContext(EventsContext);
  }