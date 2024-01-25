import {api} from '../ServiceHelper'

export const fetchme = async() => {
    return await api.get('/aboutme').then((response) => response.data)
}
