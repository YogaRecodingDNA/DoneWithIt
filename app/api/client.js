import { create } from 'apisauce'; 
/*  What's valuable about apisauce is
that whenever you call the server,
the promise is always resolved.   */

const apiClient = create({
    baseURL: 'http://192.168.1.194:9000/api',
});

export default apiClient;