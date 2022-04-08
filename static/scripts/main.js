import {generateBombs} from "./game.js"
let a = Array.from({length: 6}, e => Array.from({length: 12}, e => 0))
console.log(generateBombs(1, a))