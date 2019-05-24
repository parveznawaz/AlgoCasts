// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n,row=0,stair=''){
    if(n==row) return;
    if(n==stair.length){
        console.log(stair);
        return steps(n,row+1);
    }
    const add = stair.length<=row? '#' : ' ';
    steps(n, row, stair+add);
}

// function steps(n,row=1){
//     let str="";
//     if(row>n) return;
//     for(let i=1;i<=n;i++){
//         if(i<=row) str+="#";
//         else str+=" ";
//     }
//     console.log(str);
//     steps(n,row+1);
// }

// function steps(n) {
//     let row=1;
//     while(row<=n){
//         let column=1;
//         let s="";
//         while(column<=n){
//             if(column<=row){
//                 s+="#";  
//             }
//             else{
//                 s+=" ";
//             }
//             column++;
//         }
        
//         console.log(s);
//         row++;
//     }
// }

module.exports = steps;
