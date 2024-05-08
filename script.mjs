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

let ogN = 8
let n = ogN;
let isPrime = true;

for (let i = 2; ; n++) {
    isPrime = true;
    for (let j = 2; j <= n / 2; j++) {
        if (n % j === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(`The next prime number after ${ogN} is ${n}`);
        break;
    }
}

// Part Three = Feeling Loopy

console.log(`\nPart Three`);

const string = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

let cell1 = "";
let cell2 = "";
let cell3 = "";
let cell4 = "";
let currentCell = ""; 

for (const char of string) {
    if (char === ',') {
        // When you encounter a comma, move to the next cell.
        if (cell1 === "") {
            cell1 = currentCell;
        } else if (cell2 === "") {
            cell2 = currentCell;
        } else if (cell3 === "") {
            cell3 = currentCell;
        } else if (cell4 === "") {
            cell4 = currentCell;
        }
        currentCell = "";
    } else if (char === '\n') {
        // When you encounter the “\r\n” sequence, move to the next “row.”
        cell4 = currentCell;
        console.log(cell1, cell2, cell3, cell4);

        // Reset cells for next row
        cell1 = "";
        cell2 = "";
        cell3 = "";
        cell4 = "";
        currentCell = "";
    } else {
        // Append character to current cell
        currentCell += char;
    }
}

// Log the last row
if (currentCell !== "") {
    cell4 = currentCell;
    console.log(cell1, cell2, cell3, cell4);
}