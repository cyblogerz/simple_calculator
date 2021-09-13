let keys = document.querySelectorAll('.grid-item');
for(let i=0;i<keys.length;i++){
    keys[i].addEventListener("click",function(){
        if(this.classList.contains('key')){
            document.querySelector(".displayText").value += this.textContent;
        }
        else if(this.classList.contains('equal')){
            document.querySelector(".displayText").value = equal();


        }
        else if(this.classList.contains('reset')){
            clear();
            
        }
        else if(this.classList.contains('mul')){
            document.querySelector(".displayText").value += '*';
            
            
        }
        else if(this.classList.contains('del')){
            dis = document.querySelector(".displayText").value;
            document.querySelector(".displayText").value = dis.slice(0,dis.length-1);

        }
});
    console.log(keys[i]);

}

function equal(){
    return eval(document.querySelector(".displayText").value);
}

function clear(){
    document.querySelector(".displayText").value = ' ';
}