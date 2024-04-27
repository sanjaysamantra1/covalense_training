import axios from 'axios';

export function myInterceptor() {
    axios.interceptors.request.use((req) => {
        if (req.url.includes('comments')) {
            console.log(('request Interceptor called'))
            req.headers.authorization = "my secret token";
            return req;
        } else {
            return req;
        }
    });
}
export function myResponseInterceptor() {
    axios.interceptors.response.use((response) => {
        return response.data;
    });
}