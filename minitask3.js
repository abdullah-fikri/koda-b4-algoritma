for (let i=0; i<5; i++){
    let l = ''
    for (let b =0; b<5; b++){

      if (i == 0 || i == 4 ){
        l += '* ' 
      }else if(b == 0 ){
        l += '* '
      }else if(b == 4) {
        l += '*'
      }
      else {
        l += '  '
      }
    }
    console.log(l)
}


let f = 5
for(let brs = 0; brs < f; brs++){
    let r = ''
    for(let klm = 0; klm < 11; klm++){
        if(brs == 0 || brs == 2 || brs == 4){
            if (klm%2==0){
                r += '*'     
            } else {
                r+= ' '
            }
        }else {
            if (brs == 1 && klm == 8){
                r += '*'
            }else if(klm != 10){
                r += ' '
            } else {
                r += '*'
            }
        } 
    }
    console.log(r)
}



let n = 5
for(let i = 0; i <= n; i++){
    let str = ''
    for(let k=i; k <= n; k++){
        str += ' '
    }
    for(let j=1; j <= i; j++){
        str += ' *'
    }
    console.log(str)
}