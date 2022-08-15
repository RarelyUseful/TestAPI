// console.log(verify("---(++++)----"));
// console.log(verify(")("));
// console.log(verify("before ( middle []) after "));
// console.log(verify(") ("));
// console.log(verify("<(   >)"));
// console.log(verify("(  [  <>  ()  ]  <>  )"));
// console.log(verify("   (      [)"));

// function verify(text) {
//   let openBrackets = [];
//   for (let c of text) {
//     if (c === "(" || c === "[" || c === "<") {
//       openBrackets.push(c);
//     } else if (c === ")" || c === "]" || c === ">") {
//       let currentBracket = openBrackets[openBrackets.length - 1];
//       // console.log(currentBracket);
//       if (currentBracket == "(" && c == ")") {
//         openBrackets.pop();
//       } else if (currentBracket == "[" && c == "]") {
//         openBrackets.pop();
//       } else if (currentBracket == "<" && c == ">") {
//         openBrackets.pop();
//       } else {
//         return 0;
//       }
//     }
//   }
//   if (openBrackets.length == 0) {
//     return 1;
//   } else return 0;
// }

// function func(s, a, b) {
//   for (let i = s.length - 1; i >= 0; i--) {
//     if (s[i] === a || s[i] === b) {
//       return i;
//     } else return -1;
//   }
// }

// console.log(func("abccc", "c", "f"));
