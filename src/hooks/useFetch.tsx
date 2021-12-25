import { useState, useEffect } from 'react';

const statusOptions = { 
    idle: 'Idle',
    fetching: 'Fetching',
    fetched: 'Fetched'
};

const queryOptions = {
    get: '',
    post: '',
    put: '',
    delete: ''
}

/* 
    The functionality is not generic, but will be later
    At this time, the hook is simply to refer to the design of calling an API
    Features like query options and my words I believe would be better suited in a global context
*/

const useFetch = (query: string) => {
    const [ status, setStatus ] = useState<string>(statusOptions.idle);
    const [ myWords, setMyWords ] = useState<string[]>([]);
    
    useEffect(() => {
        if (query === null) return;

        const fetchData = async () => {
            setStatus(statusOptions.fetching);

            // const response = await fetch(queryOptions.get);
            // const data = await response.json();

            const data: string[] = ['Hello', 'World'];
            setMyWords(data);
            setStatus(statusOptions.fetched);
        }

        fetchData();    
    }, [query]);

    return { myWords, status };
}

export default useFetch;