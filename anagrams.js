const firstWords = ["cinema", "host", "aba", "train","silent"];
const secondWords = ["iceman", "shot", "bab", "rain","listen"];

function isAnagram(firstWord, secondWord) {
    if (firstWord.length !== secondWord.length) {
      return 0;
    }
    if (firstWord === secondWord) {
        return 0;
    }
    let f1chars = Array.from(firstWord).sort().join();
    let f2chars = Array.from(secondWord).sort().join();
    return f1chars === f2chars ? 1 : 0;
  }

console.time("st")
firstWords.forEach((fw,index)=>{
    console.log(isAnagram(fw,secondWords[index]))
})
console.timeEnd("st")
