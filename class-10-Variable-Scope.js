// Local Scope শুধুমাত্র ঐ ব্লকের ভিতরেই ব্যবহার করা যায় অন্য কোথাও ব্যবহার করা যায় না 
function myFun() {
    var ourHome = "Hello World"
    console.log(ourHome);
}
myFun();

// Global Scope সব জায়গায় ব্যবহার করা যায় 
function globalFun() {

}
var glob= "Kamrul Islam"
console.log(glob)
globalFun();