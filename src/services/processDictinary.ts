import { Dictionary, Meaning, Phonetics } from '../interfaces/dictionary';

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
