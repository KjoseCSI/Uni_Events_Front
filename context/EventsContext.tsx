import { createContext, PropsWithChildren } from "react";
import { useFetchEvents } from "../services/EventsStrapiAPI";

import { Datum } from "../models/EventsModel";

type EventsContextType = {
    events: Datum[]; // Ajusta el tipo si tienes una estructura específica
    error: string | null;
  };

export const EventsContext = createContext({} as EventsContextType);


export const EventsProvider = ({ children }: PropsWithChildren ) => {
    const { events, error } = useFetchEvents(); 

    return(
        <EventsContext.Provider value={{events , error}} >
            {children}

        </EventsContext.Provider>
    )
}