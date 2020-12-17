import axios from 'axios';

const instance = axios.create({
    baseURL:"https://burger-project-a8980.firebaseio.com/"
});

export default instance;