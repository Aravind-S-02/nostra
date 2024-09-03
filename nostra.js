var sidenav=document.querySelector(".sidenav")
var cross=document.querySelector(".cross")


function side(){
    sidenav.style.left="0"
}

function crossed(){
    sidenav.style.left="-35%"
}

var enteredtext=""
var collections=document.querySelector("#product")
var element =collections.querySelectorAll("p")
var pro=document.getElementById("product-box")

function check(event){
    var enteredtext=event.target.value.toUpperCase()

    for (var i=0;i<element.length;i++){
        if(element[i].textContent.toUpperCase().indexOf(enteredtext)<0){
            element[i].parentElement.style.display="none"
            pro.style.display="none"
        }
        else{
            element[i].parentElement.style.display="block"
            pro.style.display="block"

        }
    }

}