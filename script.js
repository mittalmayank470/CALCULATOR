let input = document.querySelector("#input-box");
let buttons = document.querySelectorAll("button");
let string = "";

    buttons.forEach(button =>{
        button.addEventListener("click" , (event)=>{
            if(event.target.innerHTML == "="){
                string = eval(string);
                input.value = string;
            }  
            
            else if(event.target.innerHTML=="C"){
                string="";
                input.value=string;
            }


            else if(event.target.innerHTML=="DELETE"){
                string = string.slice(0,-1);
                input.value = string;
            }


            else{
                string = string + event.target.innerHTML;
                input.value = string;

            }          

            

        })
    }) 

    