import { DictionaryQuery } from '../App';
import { useDictionary } from './useDictionary';

export const useWord = (dictionarQuery: DictionaryQuery) =>
  useDictionary(dictionarQuery, [dictionarQuery]);
