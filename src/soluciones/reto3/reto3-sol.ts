export default function findNaughtyStep(original:string, modified:string):string {
  // Code here
  let answer: string = ""
  if(modified.length > original.length){
    for(let v of modified ){
        !original.includes(v) ? (answer += v ): original = original.replace(v, "");
    }
  }
  else
  {
    for(let v of original){
        !modified.includes(v)? (answer += v): modified = modified.replace(v, "");
    }
  }
  return answer
}

// const original = 'abcd'
// const modified = 'abcde'
// console.log(findNaughtyStep(original, modified)) // 'e'

// const original = 'stepfor'
// const modified = 'stepor'
// console.log(findNaughtyStep(original, modified)) // 'f'

// const original = 'abcde'
// const modified = 'abcde'
// console.log(findNaughtyStep(original, modified)) // ''

const original = "iiiii";
const modified = "iiii";
console.log(findNaughtyStep(original, modified)) // 'i'
