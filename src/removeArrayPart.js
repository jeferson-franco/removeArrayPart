function solution(inputArray, l, r) {
    return inputArray.filter((_, i) => i < l || i > r);
}

module.exports = solution;

// npm init -y
// npm i jest-cli -g
// package.json: "scripts": { "test": "jest" }
// npm test removeArrayPart

// alternative solution
