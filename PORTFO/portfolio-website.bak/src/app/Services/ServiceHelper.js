import axios from "axios";
import { json } from "stream/consumers";

export const api = axios.create({
    baseURL:'https://localhost:4242.com',
    timeout: 10000,
    headers: {
        accept: 'application/json'
    }

})
