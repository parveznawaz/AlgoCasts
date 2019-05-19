// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let map={};
    str.split('').forEach(char => {
        if(map[char]){
            map[char]++;
        }else{
            map[char]=1;
        }
    });
    let max=0;
    let maxChar='';
    for(let char in map){
        if(map[char]>max){
            max=map[char];
            maxChar=char;
        }
    }
    
    return maxChar;
}

module.exports = maxChar;
