import natural from "natural";

const sentenceTokenizer = new natural.SentenceTokenizer();
const wordTokenizer = new natural.AggressiveTokenizerEs();

const stopWords = ["un", "una", "el", "la", "los", "las", "a", "cuando", "acerca", "por", "y", "con", "de"];

const normalizing = (sentence) => {
  let words = wordTokenizer.tokenize(sentence);
  for (let i in words) {
    if (stopWords.includes(words[i])) {
      words.splice(i, 1);
      continue;
    }
    words[i] = natural.PorterStemmer.stem(words[i]);
  }
  return words;
};

// https://github.com/lilia-simeonova/jaccard-similarity-sentences
const similarity = (sentence1, sentence2) => {
  const a = normalizing(sentence1);
  const b = normalizing(sentence2);
  const identical = a.filter(Set.prototype.has, new Set(b)); // intersection
  const result = identical.length / (a.length + b.length - identical.length);
  return result;
};

// https://github.com/lilia-simeonova/text-summary
export const summary = ({ text = "", question = "", numberSentences = 2 }) => {
  const sentences = sentenceTokenizer.tokenize(text);
  if (sentences?.length > 0) {
    const weigthedSentences = sentences.map((sentence, i) => ({
      index: i,
      sentence: sentence,
      weight: similarity(question !== "" ? question : sentences[0], sentence),
    }));
    const sortedArray = weigthedSentences
      .sort((a, b) => b.weight - a.weight)
      .slice(0, numberSentences)
      .sort((a, b) => a.index - b.index);
    const result = sortedArray.map((item) => item.sentence).join(" ");
    return result;
  }
  return [];
};

export default summary;
