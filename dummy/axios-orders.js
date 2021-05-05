import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burgerbuilder-801d1-default-rtdb.firebaseio.com/'
});

export default instance;