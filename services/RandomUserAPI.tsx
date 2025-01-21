
import { Alert } from 'react-native'
import { useEffect, useState } from 'react'
import axios from "axios";



export interface TopLevel {
    results: Result[];
    info:    Info;
}

export interface Info {
    seed:    string;
    results: number;
    page:    number;
    version: string;
}

export interface Result {
    gender:     string;
    name:       Name;
    location:   Location;
    email:      string;
    login:      Login;
    dob:        Dob;
    registered: Dob;
    phone:      string;
    cell:       string;
    id:         ID;
    picture:    Picture;
    nat:        string;
}

export interface Dob {
    date: Date;
    age:  number;
}

export interface ID {
    name:  string;
    value: string;
}

export interface Location {
    street:      Street;
    city:        string;
    state:       string;
    country:     string;
    postcode:    number;
    coordinates: Coordinates;
    timezone:    Timezone;
}

export interface Coordinates {
    latitude:  string;
    longitude: string;
}

export interface Street {
    number: number;
    name:   string;
}

export interface Timezone {
    offset:      string;
    description: string;
}

export interface Login {
    uuid:     string;
    username: string;
    password: string;
    salt:     string;
    md5:      string;
    sha1:     string;
    sha256:   string;
}

export interface Name {
    title: string;
    first: string;
    last:  string;
}

export interface Picture {
    large:     string;
    medium:    string;
    thumbnail: string;
}




export function useFetchUsers() {
    
    const url = 'https://randomuser.me/api/?gender=female&results=50';
    const [users, setUsers] = useState<Result[]>([])
    const [ error, setError ] = useState(null)

    const fetchUser = async () =>{
        try {
            const { data } = await axios.get<TopLevel>(url)
            setUsers(data.results)
            console.log(data.results)
        } catch (error) {
            setError(error)
            console.log(error)
            Alert.alert('Error getting users', '', [{ text: 'Retry', onPress: () => fetchUser() }])
        }

    }
    useEffect(() => {
        fetchUser();
    }, [])

    return {users , error, fetchUser}
}



