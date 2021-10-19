function multiplyInt(m, n) {
if(Number.isInteger(m) && Number.isInteger(n)){
    return n * m;
} 
else {
    console.log("Inputted numbers are not integers.")
    return false;
}
}
module.exports = multiplyInt;