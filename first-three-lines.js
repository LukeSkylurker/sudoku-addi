// JavaScript source code
var rowArrays = [
    [], //row_0_Array    0
    [], //row_1_Array    1
    [], //row_2_Array    2
    [], //row_3_Array    3
    [], //row_4_Array    4
    [], //row_5_Array    5
    [], //row_6_Array    6
    [], //row_7_Array    7
    [], //row_8_Array    8
]


columnArrays = [
    [], //column_0_Array    0
    [], //column_1_Array    1
    [], //column_2_Array    2
    [], //column_3_Array    3
    [], //column_4_Array    4
    [], //column_5_Array    5
    [], //column_6_Array    6
    [], //column_7_Array    7
    [], //column_8_Array    8
]

squareArrays = [
    [], //square_0_Array    0
    [], //square_1_Array    1
    [], //square_2_Array    2
    [], //square_3_Array    3
    [], //square_4_Array    4
    [], //square_5_Array    5
    [], //square_6_Array    6
    [], //square_7_Array    7
    [], //square_8_Array    8
]

//THIS WORKS and returns true for arrays with duplicates
var truthCheck = 0;

const hasDuplicates = (arr) => arr.length !== new Set(arr).size;

function checkAll() {
truthCheck = 0;
for (i=0;i<9;i++) {
if (hasDuplicates(rowArrays[i]) == true || hasDuplicates(columnArrays[i]) == true || hasDuplicates(squareArrays[i]) == true) {
    truthCheck++;
}
else {
    console.log('CHECKED THE TRUTH! ' + truthCheck)
}
}
}

//simple approach pick number, check grid, if duplicate exists, delete number, pick new number, if all numbers exhausted start over. Need to move by 1s 3s and 9s.


const digits = [1,2,3,4,5,6,7,8,9];
var rowDigits = [1,2,3,4,5,6,7,8,9];
var columnDigits = [1,2,3,4,5,6,7,8,9];
var squareDigits = [1,2,3,4,5,6,7,8,9];
var randDigit;

//START SECOND ROW

function shuffle(array) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
}

function truth() {
if (truthCheck == 0) {
    for (j=0;j<9;j++) {
        document.getElementById("cell-" + j).innerHTML = '<p>' + rowArrays[0][j] + '</p>';
    }
}
}
function truth2() {
    //console.log('tried to run truth 2');
if (truthCheck == 0) {
    for (j=9;j<18;j++) {
        document.getElementById("cell-" + j).innerHTML = '<p>' + rowArrays[1][j] + '</p>';
    }
}
}

function findNumber() {
    shuffle(rowDigits);
    randDigit = rowDigits[0];
    rowDigits.shift()
}

function restoreRowDigits() {
    rowDigits = [1,2,3,4,5,6,7,8,9];
}

function firstRow() {
    for (i=0;i<9;i++) {
    findNumber();
    if (i < 9) {
    columnArrays[i].push(randDigit);
    rowArrays[0].push(randDigit);
    }
    if (i<3) {
    squareArrays[0].push(randDigit);
    }
    if (i>2 && i<6) {
    squareArrays[1].push(randDigit);
    }
    if (i>5 && i<9) {
    squareArrays[2].push(randDigit);
    }
    }
    truth();
    }

 
var secondRowFinished = 0;
var secondRowTries = 0;
var counter = 0;

function secondRow() {
    while (secondRowFinished<1 && secondRowTries<200) {
        restoreRowDigits();
        console.log(secondRowTries);
        console.log(rowDigits);
        for (i = counter;i<9;i++) {
            findNumber();
                 if (i < 9) {
                    columnArrays[i].push(randDigit);
                    rowArrays[1].push(randDigit);
                    }
                if (i<3) {
                    squareArrays[0].push(randDigit);
                                   }
                if (i>2 && i<6) {
                    squareArrays[1].push(randDigit);
                    }
                if (i>5 && i<9) {
                    squareArrays[2].push(randDigit);
                    }
        }
                checkAll();

        if (truthCheck < 1) {
            for (j=0;j<9;j++) {
            k = j + 9;
            document.getElementById("cell-" + k).innerHTML = '<p>' + rowArrays[1][j] + '</p>';
            secondRowFinished = 5;
            }
            } 
        else {
            console.log('removing digits from second row');
            for (y=0;y<9;y++){
            columnArrays[y].pop();
            }
            rowArrays[1] = [];
            for (u=0;u<3;u++) {
            squareArrays[0].pop();
            squareArrays[1].pop();
            squareArrays[2].pop();
            }
            counter = 0;
            rowDigits = digits;
            secondRowTries++;
            }
        }
}


var thirdRowArray = [1,2,3,4,5,6,7,8,9]

function thirdRow() {
console.log("running thirdrow");16
console.log(squareArrays[0]);

var tempArray1 = [1,2,3,4,5,6,7,8,9]
// Create a Set from secondArray for efficient lookups
const secondArraySet = new Set(squareArrays[0]);
const filteredArray = tempArray1.filter(element => !secondArraySet.has(element));
squareArrays[0].push(...filteredArray);
rowArrays[2].push(...filteredArray);


var tempArray2 = [1,2,3,4,5,6,7,8,9]
const secondArraySet2 = new Set(squareArrays[1]);
const filteredArray2 = tempArray2.filter(element => !secondArraySet2.has(element));
squareArrays[1].push(...filteredArray2);
rowArrays[2].push(...filteredArray2);

var tempArray3 = [1,2,3,4,5,6,7,8,9]
const secondArraySet3 = new Set(squareArrays[2]);
const filteredArray3 = tempArray3.filter(element => !secondArraySet3.has(element));
squareArrays[2].push(...filteredArray3);
rowArrays[2].push(...filteredArray3);

for (i=0;i<9;i++){
    columnArrays[i].push(rowArrays[2][i]);
    k = i + 18;
    document.getElementById("cell-" + k).innerHTML = '<p>' + rowArrays[2][i] + '</p>';
    rowDigits = digits;
    }

console.log(columnArrays);
console.log(rowArrays[2]);
console.log(squareArrays[0]);
console.log(squareArrays[1]);
console.log(squareArrays[2]);
}   