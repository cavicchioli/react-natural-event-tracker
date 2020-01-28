import axios from 'axios';
import { useState } from 'react';
import { Category } from '../types/Category';
import { Service } from '../types/Service';

const useCategoryService = () => {
    const [result, setResult] = useState<Service<Category[]>>({
        status: 'loading'
    });

    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Accept': '*/*',
        'User-Agent': 'React-NaturalEvent'
    };

    axios.get<Category[]>('/categories', {
        headers
    })
        .then(function (response) {
            console.log(response);
            setResult({ status: 'loaded', payload: response.data });
        })
        .catch(error => setResult({ status: 'error', error }));

    return result;
};

export default useCategoryService;
