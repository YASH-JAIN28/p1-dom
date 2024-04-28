var istatus = document.querySelector("h5")
var addfriend = document.querySelector("#add")
var btn= document.querySelector("#remove")
var check = 0
addfriend.addEventListener("click", function(){

    istatus.innerHTML="following"
    istatus.style.color="blue"
    console.log("odd click")
     
})
btn.addEventListener("click", function(){
    if(check==0){
    istatus.innerHTML="stranger"
    istatus.style.color="red"
    btn.innerHTML = ("UNDO")
    console.log("odd")
    check =1
    }
    else{
            istatus.innerHTML="following"
            istatus.style.color="blue"
            console.log("odd")
            btn.innerHTML= ("remove")
            check =0

    }
})
