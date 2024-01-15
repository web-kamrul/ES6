function ourRestFun (...rest) {
    console.log (rest) // all value
    console.log (rest[1]) // one value
}
ourRestFun('we','know','that','he','is','good','man')