// WPU Coding Challange 2024
// 1/366
// https://www.codewars.com/kata/57f780909f7e8e3183000078

function grow(x) { // Cara Basic menggunakan For
    let result = x[0];
    for(let i = 1; i < x.length; i++) {
        result *= x[i];
    }
    return result;
}

const grown = (m) => ((acc,value) => acc * value); // Cara Advanced menggunakan reduce
console.log([2,2,2,2,2,]); 