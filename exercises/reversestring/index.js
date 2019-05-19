// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//     var i=0,j=str.length-1;
//     var arr=str.split('');
//     while(i<=j){
//         var t=arr[i];
//         arr[i++]=arr[j];
//         arr[j--]=t;
//     }
//     return arr.join('');
// }

function reverse(str) {
    debugger;
    return str.split('').reduce((rev,ch)=>ch+rev,'');
}

reverse('asdf');

module.exports = reverse;
