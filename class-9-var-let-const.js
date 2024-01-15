/* 
Reassign, Redeclare
var     ✅✅
let     ✅🔴
const   🔴🔴
*/

// ✅
var var1 = "kamrul";
var newvar1 = "kamrul";

// 🔴
let var2 = "kamrul";
let newvar2 = "kamrul";

// 🔴
let var3 = "kamrul";
let newvar3 = "kamrul";

// ✅
var var1 = "kamrul";
result1 = "islam";
console.log(result1);

// ✅
let var2 = "kamrul";
result2 = "islam";
console.log(result2);

// 🔴
let var3 = "kamrul";
result3 = "islam";
console.log(result3);
