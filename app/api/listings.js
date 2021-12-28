import client from './client';

const endpoint = '/listings';

const getListings = () => client.get(endpoint);

// Exporting an object of methods to be used
export default {
    getListings,
};