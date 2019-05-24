// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str){
    let result="";
    let prevChar=' ';
    for(let char of str.split('')){
        if(prevChar===' '){
            char=char.toUpperCase();
        }
        result+=char;
        prevChar=char;
    }
    return result;
}

module.exports = capitalize;

// function capitalizeFirstChar(word){
//     return word.charAt(0).toUpperCase()+word.slice(1);
// }
// function capitalize(str) {
//     let result=[];
//     str.split(' ').forEach(word => {
//         result.push(capitalizeFirstChar(word));
//     });
//     return result.join(' ');
// }
