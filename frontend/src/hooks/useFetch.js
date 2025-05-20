import axios from 'axios' // Axios es una librería para hacer peticiones HTTP
import { toast } from 'react-toastify' // Librería para mostrar notificaciones

function useFetch() {

    const fetchDataBackend = async (url, form = null, method = 'POST') => {

        try {
            let respuesta
            if (method === 'POST') {
                respuesta = await axios.post(url, form)
            } else if (method === 'GET') {
                respuesta = await axios.get(url)
            }
            toast.success(respuesta?.data?.msg)
            return respuesta?.data
            
        } catch (error) {
            toast.error(error.response?.data?.msg)
            const errorMsg = error.response?.data?.msg || 'An error occurred';
            throw new Error(errorMsg);
        }
    }

    return { fetchDataBackend }
}

export default useFetch