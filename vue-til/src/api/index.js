import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.VUE_APP_API_URL
})

const resisterUser = (userData) => {
    return instance.post('signup', userData);
}

const loginUser = (userData) => {
    return instance.post('login', userData);
}

export { resisterUser, loginUser }