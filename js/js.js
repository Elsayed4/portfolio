var item = document.getElementsByClassName('.nav-link');
console.log(item)

for(let x = 1;x<4;x++){
    item[x].onclick = function(){
        console.log("Elsayed")
    }
}

