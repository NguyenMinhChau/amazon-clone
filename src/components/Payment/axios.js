import axios from 'axios';

const instanceURL = axios.create({
    //THE API (clound function firebase) URL
    baseURL: 'http://localhost:5001/clone-c0db1/us-central1/api',
});

export default instanceURL;
