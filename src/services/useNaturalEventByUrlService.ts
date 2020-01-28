import { useEffect, useState } from 'react';
import { NaturalEvent } from '../types/NaturalEvent';
import { Service } from '../types/Service';

const useNaturalEventByUrlService = (url: string) => {
  const [result, setResult] = useState<Service<NaturalEvent>>({
    status: 'loading'
  });

  useEffect(() => {
    if (url) {
      setResult({ status: 'loading' });
      fetch(url)
        .then(response => response.json())
        .then(response => setResult({ status: 'loaded', payload: response }))
        .catch(error => setResult({ status: 'error', error }));
    }
  }, [url]);

  return result;
};

export default useNaturalEventByUrlService;
