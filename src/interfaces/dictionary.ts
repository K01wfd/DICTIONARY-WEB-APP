export interface Meaning {
  partOfSpeech: string;
  definitions: { definition: string; example: string }[];
  synonyms: string[];
}
export interface Phonetics {
  text: string;
  audio: string;
}
export interface Dictionary {
  word: string;
  phonetics: Phonetics[];
  meanings: Meaning[];
  sourceUrls: string[];
}

export interface TranslationShape {
  word: string;
  phonetics: Phonetics;
  nounMeanings: Meaning[];
  verbMeanings: Meaning[];
  adjectiveMeaning: Meaning[];
  sourceUrl: string;
}
