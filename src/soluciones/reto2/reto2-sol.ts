function manufacture(gifts: Array<string>, materials: string): Array<String> {
  // Code here
  let deleteRepeate = (s) =>{
     let conjunto = new Set<string>();
     let resultado = "";
     for (let c of s) {
       if (!conjunto.has(c)) {
         conjunto.add(c);
         resultado += c;
       }
     }

     return resultado;
  }

  materials = deleteRepeate(materials)

  var answer : string[] = [];
  let counter:number = 0;
    for(let gift of gifts){
        // console.log(gift)
        for(let str of gift){
            for(let i = 0; i < materials.length; i++){
                // console.log("letra: ",materials[i],str);
                if(materials[i] === str){
                    counter = counter + 1
                }
            }
        }
        if(counter === gift.length){
            answer.push(gift);
            // console.log(materials)
            // console.log(counter);
            // console.log(gift);
        }
        counter = 0;
    }
  return answer;
}

//TEST 1
const gifts = ['tren', 'oso', 'pelota']
const materials = "tronesa"

console.log(manufacture(gifts, materials)) // ["tren", "oso"]
// 'tren' SÍ porque sus letras están en 'tronesa'
// 'oso' SÍ porque sus letras están en 'tronesa'
// 'pelota' NO porque sus letras NO están en 'tronesa'


//TEST 2
// const gifts = ['juego', 'puzzle']
// const materials = 'jlepuz'

// console.log(manufacture(gifts, materials)); // ["puzzle"]

//TEST 3
// const gifts = ['libro', 'ps5']
// const materials = 'psli'

// console.log(manufacture(gifts, materials)); // []

//TEST 04 
// const gifts = ['patineta', 'robot', 'libro']
// const materials = "nopor"
// console.log(manufacture(gifts, materials)); // []

export{}