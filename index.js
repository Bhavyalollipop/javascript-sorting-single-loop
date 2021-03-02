var a = [1,4,5,2,3,2,19,20,90];
var varycount = a.length
var swap = 1
var count = 0
var i =0

while(i < varycount){
   var temp = a[i]
   count++
    if(a[i] > a[i+swap]) {
      a[i] = a[i+swap]
      a[i+swap] = temp
      swap++
    } else if(swap < varycount) {
      if(a[i+swap + 1] > a[i]) {
        swap = swap + 2
      } else {
          swap++
      }
    }else {
      swap = 1
        i++
    }
  
}
console.log(count)
console.log(a)
