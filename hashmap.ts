type Words = {
  [key: string]: string;
};

class Word {
  constructor(public readonly term: string, public readonly def: string) {}
}

class Dict {
  private words: Words;
  constructor() {
    this.words = {};
  }

  add(word: Word) {
    if (this.words[word.term] === undefined) {
      this.words[word.term] = word.def;
    }
  }

  def(term: string) {
    return this.words[term];
  }

  update(bef: Word, af: string) {
    this.words[bef.term] = af;
  }

  del(word: string) {
    delete this.words[word];
  }
}

const dict = new Dict();

const kimchi = new Word("kimchi", "한국의 음식");
const potato = new Word("potato", "감자");
const bread = new Word("bread", "빵");

dict.add(kimchi);
dict.add(potato);
dict.update(kimchi, "김치");
dict.del(kimchi.term);

console.log(dict); // Dict { words: { potato: '감자' } }
