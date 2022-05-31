var mode = require("./calculateMode");

let resutl_1 = mode.calculateMode([1, 2, 3, 3, 4, 4, 4, 5, 5, 6]);
console.log(resutl_1[0][0] === JSON.stringify[4]);

let resutl_2 = mode.calculateMode([1,2,3,3])
console.log(resutl_2[0][0] === JSON.stringify[3]);

let resutl_3 = mode.calculateMode([4.5, 0, 0])
console.log(resutl_2[0][0] === JSON.stringify[0]);

let resutl_4 = mode.calculateMode([1.5, -1, 1, 1.5])
console.log(resutl_4[0][0] === JSON.stringify[1.5]);

let resutl_5 = mode.calculateMode([1,1,2,2])
console.log(resutl_5[0][0] === JSON.stringify[1]);
console.log(resutl_5[0][1] === JSON.stringify[1]);

let resutl_6 = mode.calculateMode([1,2,3])
console.log(resutl_5[0][0] === JSON.stringify[1]);
console.log(resutl_5[0][1] === JSON.stringify[2]);
console.log(resutl_5[0][3] === JSON.stringify[3]);

// console.log(mode.calculate_mode(["who", "what", "where", "who"]) === ["who"])
let resutl_7 = mode.calculateMode(["who", "what", "where", "who"])
console.log(resutl_5[0][0] === JSON.stringify['who']);