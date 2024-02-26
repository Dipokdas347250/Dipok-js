let type = document.querySelector(".type")
let typetext = type.innerHTML
let typedArr = typetext.split("")
type.innerHTML = ("")
let typeing = 0;





function typedjs(){
   if(typeing < typetext.length){
    type.innerHTML += typetext.charAt(typeing)
    typeing++
    typedArr = typetext.split("")
   }else{
    typedArr.pop("")
    type.innerHTML = typedArr.join("")
    if(typedArr.length == 0){
        typeing = 0;
    }
   }
}
setInterval(() =>{
    typedjs()
},500)
typedjs()
