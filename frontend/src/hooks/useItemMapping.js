import { useEffect, useState } from 'react';
import { ApiClient } from '../ApiCall/ApiClient';

let cachedOptions = null;
let inflight = null;

export default function useItemMapping() {
  const [options, setOptions] = useState(cachedOptions);
  const [loading, setLoading] = useState(!cachedOptions);
  const [error, setError] = useState(null);

  useEffect(() => {
    
    if (cachedOptions) {
      setOptions(cachedOptions);
      setLoading(false);
      return;
    }

    if (!inflight) {
      inflight = ApiClient()
        .GET('mappings')
        .then(console.log("Fetched item mappings"))
        .then((data) => data.map((item) => ({ label: item.name, id: item.id })))
        .then((opts) => {
          cachedOptions = opts;
          return opts;
        });
        
        
    }

    inflight
      .then((opts) => {
        setOptions(opts);
      })
      .catch((e) => setError(e))
      .finally(() => setLoading(false));
  }, []);

  return { options: options || [], loading, error };
}