import { useState } from 'react';

export default useApi = (apiFunc) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const request = async (...args) => { // API SAUCE always resolves a promise even if null
        // (no space) connecting the following 3 statements as 1 Story ========================================
        setLoading(true);
        const response = await apiFunc(...args); // The object returned from this method contains a "data" property which contains the data we get from the server.
        setLoading(false);
        // ===============================================================================
        // ALWAYS WRITE ERROR HANDLING CODE FIRST (BEST PRACTICE)
        if (!response.ok) return setError(true); // response.problem gives type of error
        
        setError(false); 
        setData(response.data);
        // console.log("response.data === ", response.data );
    };

    return { data, error, loading, request };
}