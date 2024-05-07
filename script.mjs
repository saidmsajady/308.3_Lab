// Part One = Fizz Buzz

console.log(`\nPart One!`)

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(`Fizz Buzz`);
    } else if (i % 3 === 0) {
        console.log(`Fizz`);
    } else if (i % 5 === 0) {
        console.log(`Buzz`);
    } else {
        console.log(i);
    }
}

// Part Two = Prime Time

console.log(`\nPart Two`);

let n = 11;
let isPrime = true;

for (let i = 2; i < n; i++) {
    if (n % i == 0) {
        isPrime = false;
        break;
    }
}

if (isPrime) {
    console.log(`${n} is a prime number`);
}

// Part Three = Feeling Loopy

console.log(`\nPart Three`);

// const str = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

// const rows = str.split('\n');
// const headers = rows[0].split(',');

// let cell1, cell2, cell3, cell4;

// for (const row of rows.slice(1)) { // Start from index 1 to skip the header row
//     const cells = row.split(',');
//     if (cells[0] === "42" || cells[0] === "57" || cells[0] === "63" || cells[0] === "98") {
//         cell1 = cells[0];
//     }
//     if (cells[1] === "Bruce" || cells[1] === "Bob" || cells[1] === "Blaine" || cells[1] === "Bill") {
//         cell2 = cells[1];
//     }
//     if (cells[2] === "Knight" || cells[2] === "Fry Cook" || cells[2] === "Quiz Master" || cells[2] === "Doctor’s Assistant") {
//         cell3 = cells[2];
//     }
//     if (cells[3] === "41" || cells[3] === "19" || cells[3] === "58" || cells[3] === "26") {
//         cell4 = cells[3];
//     }
// }

// console.log(cell1, cell2, cell3, cell4);
