import axios from 'axios';
import { useState } from 'react';
import { NaturalEvent } from '../types/NaturalEvent';
import { Service } from '../types/Service';

export interface Filter {
    prop: string;
    value: string;
}

const useNaturalEventService = (filters: Filter[]) => {
    const [result, setResult] = useState<Service<NaturalEvent[]>>({
        status: 'loading'
    });

    let query = '';

    for (let index = 0; index < filters.length; index++) {
        const element = filters[index];

        if (element.value && index == 0) {
            query += "?" + element.prop + "=" + element.value;
        }
        else {
            if (element.value) {
                query += "&" + element.prop + "=" + element.value;
            }
        }

    }

    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Accept': '*/*',
        'User-Agent': 'React-NaturalEvent'
    };

    if (!query) {
        const open = axios.get('/events?status=Open&limit=365', {
            headers
        });

        const closed = axios.get('/events?status=Closed&limit=365', {
            headers
        });

        axios.all([open, closed])
            .then(axios.spread((...responses) => {
                const resOpen = responses[0].data as NaturalEvent[];
                const resClosed = responses[1].data as NaturalEvent[];
                const response = resOpen.concat(resClosed).sort((a, b) => {
                    if (a.geometries[0].date > b.geometries[0].date) {
                        return 1;
                    }

                    if (a.geometries[0].date < b.geometries[0].date) {
                        return -1;
                    }

                    return 0;
                })

                setResult({ status: 'loaded', payload: response })
            }))
            .catch(error => setResult({ status: 'error', error }))
    }
    else {
        axios.get<NaturalEvent[]>('/events' + query + '&limit=365', {
            headers
        })
            .then(function (response) {
                console.log(response);
                setResult({ status: 'loaded', payload: response.data });
            })
            .catch(error => setResult({ status: 'error', error }));
    }

    return result;
};

export default useNaturalEventService;
