import client from './client';

const endpoint = '/listings';

const getListings = () => client.get(endpoint);

const addListing = (listing, onUploadProgress) => {
    // content-type tells the server which kind of data we're going to send in the request 
    // application/json for json data
    // multipart/form-data for image data --> tells the server we're sending a large request and the body of the request is divided into multiple parts
    const data = new FormData(); // <-- built-in API SAUCE shorthand method for setting the content-type to multipart/form-data
    // returns an object of methods { append, delete, forEach, get, getAll, has, set }
    data.append('title', listing.title); // adds the data to the body
    data.append('price', listing.price);
    data.append('categoryId', listing.category.value);
    data.append('description', listing.description);
    listing.images.forEach((image, index) => 
        data.append('images', {
            name: 'image' + index,
            type: 'image/jpeg',
            uri: image // image is a string of the uri of an image from the user's device
        }));

    if (listing.location){
        data.append('location', JSON.stringify(listing.location));
    }
    // Parent > Child 
    // Method returns a promise.. 3rd Argument is an Axios configuration object
    return client.post(endpoint, data, { 
        onUploadProgress: (progress) => onUploadProgress(progress.loaded / progress.total),// TRACKING UPLOADING PROGRESS <- function fires repeatedly while the request is being sent
        // need to somehow get this info from the API to the UI for a visual
    }); 

};

// Exporting an object of methods to be used
export default {
    addListing,
    getListings,
};