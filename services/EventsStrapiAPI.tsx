import { Alert } from 'react-native'
import { useEffect, useState } from 'react'
import axios from "axios";

import { TopLevel,Datum } from "../models/EventsModel";

export function useFetchEvents() {
    const url = "https://ingenious-basket-709997b19b.strapiapp.com/api/eventos?populate=*";
    const otherurl = 'https://ingenious-basket-709997b19b.strapiapp.com/api/eventos?populate[event_photo][fields][0]=url';
    const [events, setEvents] = useState<Datum[]>([])
    const [ error, setError ] = useState(null)

    const fetchUser = async () =>{
        try {
            const { data } = await axios.get<TopLevel>(url)
            setEvents(data.data)
            /* console.log(data.data) */
        } catch (error) {
            setError(error)
            console.log(error)
            /* Alert.alert('Error getting users', '', [{ text: 'Retry', onPress: () => fetchUser() }]) */
        }

    }
    useEffect(() => {
        fetchUser();
    }, [])

    return { events , error}
}