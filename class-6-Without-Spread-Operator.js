// push Spread Operator এর বিকল্প হতে পারে
// দিলে আউটপুটের ভিতরে নতুন array তৈরি হয়
// তাই push চেয়ে Spread Operator ব্যবহার করা ভালো

let poorCountry = ['Bangladesh', 'Pakistan', 'Afghanistan'];
let richCountry = ['Canada', 'America'];
richCountry.push(poorCountry);
console.log(richCountry);