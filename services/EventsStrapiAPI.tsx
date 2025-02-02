import { Alert } from 'react-native'
import { useEffect, useState } from 'react'
import axios from "axios";

import { TopLevel,Datum } from "../models/EventsModel";

export function useFetchEvents() {
    
    const url = 'http://192.168.100.2:1337/api/events?populate=[id][fields][0]=id&populate[ImageEvent][fields][0]=url';
    const [events, setEvents] = useState<Datum[]>([])
    const [ error, setError ] = useState(null)

    const fetchUser = async () =>{
        try {
            const { data } = await axios.get<TopLevel>(url)
            setEvents(data.data)
            console.log(data.data)
        } catch (error) {
            setError(error)
            console.log(error)
            Alert.alert('Error getting users', '', [{ text: 'Retry', onPress: () => fetchUser() }])
        }

    }
    useEffect(() => {
        fetchUser();
    }, [])

    return { events , error}
}