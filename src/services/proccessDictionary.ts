import {
  Dictionary,
  Meaning,
  Phonetics,
  TranslationShape,
} from '../interfaces/dictionary';

export const getWord = (dictionary: Dictionary[]) => {
  let word = '';
  dictionary.forEach((data) => (word = data.word));
  return word;
};
export const processPhonetics = (dictionary: Dictionary[]) => {
  let phonetics = {} as Phonetics;
  let phoneticsArr: Phonetics[] = [];
  dictionary.forEach((data) => {
    data.phonetics.forEach((obj) => {
      if (obj.text && obj.audio) {
        phoneticsArr.push({ text: obj.text, audio: obj.audio });
      } else if (obj.text || obj.audio) {
        phoneticsArr.push({ text: obj.text, audio: obj.audio });
      }
    });
  });

  for (const obj of phoneticsArr) {
    if (
      phoneticsArr.some((item) => JSON.stringify(item) === JSON.stringify(obj))
    ) {
      phonetics.text = obj.text;
      phonetics.audio = obj.audio;
    }
  }
  return phonetics;
};

export const processMeanings = (dictionary: Dictionary[], filter: string) => {
  let meanings: Meaning[] = [];
  dictionary.forEach((data) => {
    data.meanings.forEach((meaning) => {
      if (meaning.partOfSpeech === filter) {
        meanings.push(meaning);
      }
    });
  });

  return meanings;
};
export const getSourceUrl = (dictionary: Dictionary[]) => {
  let sourceUrl: string = '';
  dictionary.forEach((data) => {
    data.sourceUrls.forEach((url) => {
      sourceUrl = sourceUrl !== url ? url : '';
    });
  });
  return sourceUrl;
};

export const getDictionaryData = (dictionary: Dictionary[]) => {
  let translation = {} as TranslationShape;

  translation.word = getWord(dictionary);
  translation.phonetics = processPhonetics(dictionary);
  translation.nounMeanings = processMeanings(dictionary, 'noun');
  translation.verbMeanings = processMeanings(dictionary, 'verb');
  translation.adjectiveMeaning = processMeanings(dictionary, 'adjective');
  translation.sourceUrl = getSourceUrl(dictionary);

  return translation;
};
