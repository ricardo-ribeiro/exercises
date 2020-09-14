function spreadSpacesEvenly(line= "All happy families are alike ",width=30){
    let _line = line;
    _line = _line.trim();
    let remaining = width - _line.length;
    let splited = _line.split(" ");
    let wordspacing = splited.length - 2;
    let index = 0;
    while(remaining > 0){
        splited[index] = splited[index] + " ";
        remaining = remaining-1
        index =  index == wordspacing ? 0 : index + 1;
    }
    return splited.join(" ")
}

function wordsToLines(words, width){
    let line = "";
    let lines = [];
    for(let i = 0; i< words.length; i++){
        if(line.length + words[i].length >  width){
            line = spreadSpacesEvenly(line,width)
            lines.push(line);
            line = "";
        }
        if(line.length + words[i].length  < width){
            line = line + words[i] + " ";
            if(i == words.length-1){
                if(line.length < width){
                    let remaining = width - line.length;
                    line = line + new Array(remaining).fill(" ").join("")
                }
                lines.push(line);
            }
            continue;
        }
  
        
    }
    return lines;
} 

const solution = (words, width) => {
 let lines = wordsToLines(words,width);
 return lines;
}

console.log(solution(["All", "happy", "families", "are", "alike", "every", "unhappy", "family","is","unhappy","in","its","own","way"], 30))

