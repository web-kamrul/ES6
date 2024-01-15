var cricket = {
    format: 'One Day International',
    teams: 'India',
    venue: 'Melbourne Cricket Ground',
    date: 'January 15, 2023',
    result: "win"
};
// property
for (let deatails in cricket) {
    console.log(deatails)
}

// value 
for (let deatails in cricket) {
    console.log(cricket[deatails])
}

// property + value
for (let deatails in cricket) {
    console.log(deatails + "=" + cricket[deatails])
}