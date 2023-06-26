import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api/',
    params: {
        key: 'eefdf34748944a10880c865df9404fd9'
    }
});