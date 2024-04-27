import axios from 'axios';

console.log(process.env.REACT_APP_DEV_BASEURL)


const client = axios.create({
    baseURL: `http://jsonplaceholder.typicode.com/`
});
export default client;