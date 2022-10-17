document.getElementById("demo1").innerHTML = "type conversion in js"

let str = "saqlain"
let num  = parseInt(str)
if(isNaN(num)){
    document.getElementById("demo2").innerHTML= "this is not a number"
}
console.log(num)