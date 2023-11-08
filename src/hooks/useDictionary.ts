import { useEffect, useState } from 'react';
import { Dictionary } from '../interfaces/dictionary';
import axios, { CanceledError } from 'axios';

export const useDictionary = (word: string) => {
  const [dictionary, setDictionary] = useState<Dictionary[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      setError('');
      setIsLoading(true);
      setTimeout(async () => {
        await axios
          .get<Dictionary[]>(
            `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`,
            {
              signal: controller.signal,
            }
          )
          .then((res) => {
            setDictionary(res.data);
            setIsLoading(false);
          })
          .catch((err) => {
            if (err instanceof CanceledError) {
              return;
            }
            setIsLoading(false);
            setError(err.message);
          });
      }, 5000);
    };

    if (word) {
      fetchData();
    }

    return () => {
      controller.abort();
    };
  }, [word]);
  return { dictionary, isLoading, error };
};
