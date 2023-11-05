interface Meaning {
  partOfSpeech: string;
  definitions: { definition: string }[];
  synonyms?: string[];
}
interface Phonetics {
  text: string;
  audio: string;
}
export interface Dictionary {
  word: string;
  phonetics: Phonetics[];
  meanings: Meaning[];
  sourceUrls: string;
}
