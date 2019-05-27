// --- Directions Write a function that accepts an integer N and returns a NxN
// spiral matrix. --- Examples   matrix(2)     [[1, 2],     [4, 3]]   matrix(3)
//    [[1, 2, 3],     [8, 9, 4],     [7, 6, 5]]  matrix(4)     [[1,   2,  3, 4],
//     [12, 13, 14, 5],     [11, 16, 15, 6],     [10,  9,  8, 7]]
function display(m) {
    m.forEach(row => {
        let str = '';
        row.forEach(col => {
            str += col + ' ';
        });
        console.log(str);
    });
}
function matrix(n) {
    let startCol = 0,
        endCol = n - 1,
        startRow = 0,
        endRow = n - 1,
        counter = 1;
    let m = new Array(n);
    for (let i = 0; i < m.length; i++) {
        m[i] = new Array(n);
    }

    //display(m);

    while (startCol <= endCol && startRow <= endRow) {
        for (let col = startCol; col <= endCol; col++) {
            m[startRow][col] = counter++;
        }
        startRow++;

        for (let row = startRow; row <= endRow; row++) {
            m[row][endCol] = counter++;
        }
        endCol--;

        for (let col = endCol; col >= startCol; col--) {
            m[endRow][col] = counter++;
        }
        endRow--;

        for (let row = endRow; row >= startRow; row--) {
            m[row][startCol] = counter++;
        }
        startCol++;

    }
    //display(m);
    return m;
}
matrix(4);
module.exports = matrix;
