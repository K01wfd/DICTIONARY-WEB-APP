import { useEffect, useState } from 'react';
import { Dictionary } from '../interfaces/dictionary';
import axios, { CanceledError } from 'axios';
import { DictionaryQuery } from '../App';

export const useDictionary = (
  dictionarQuery: DictionaryQuery,
  depends?: any[]
) => {
  const [dictionary, setDictionary] = useState<Dictionary[]>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  useEffect(
    () => {
      const controller = new AbortController();
      const fetchData = async () => {
        setIsLoading(true);
        await axios
          .get<Dictionary[]>(
            `https://api.dictionaryapi.dev/api/v2/entries/en/${dictionarQuery.word}`,
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
      };
      fetchData();
      return () => {
        controller.abort();
      };
    },
    depends ? [...depends] : []
  );
  return { dictionary, isLoading, error };
};
