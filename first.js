let boxes=document.querySelectorAll(".btn");
let reset_button=document.querySelector("#reset_btn");
let new_button=document.querySelector(".new_btn");
let msg=document.querySelector(".msg");
let msg_container=document.querySelector(".msg_container");
let win=false;
let player_o=true;
let arr=[[0,1,2],[3,4,5],[6,7,8],
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8],[2,4,6]
        ];

const disable=()=>{
    boxes.forEach((box)=>{
        box.disabled=true;
    })
}

boxes.forEach((box)=> { 
    box.addEventListener("click",()=>{
        console.log("box is clicked");
        if(player_o){
            box.innerText='o';
            player_o=false;
        }   
        else{
            box.innerText='x';
            player_o=true
        }
        box.disabled=true;
        checkWinner();
    });
}
);

const checkWinner=()=>{
    for(let i of arr){
        let val1=boxes[i[0]].innerText;
        let val2=boxes[i[1]].innerText;
        let val3=boxes[i[2]].innerText;
    
        if(val1!="" && val2!="" && val3!=""){
            if(val1===val2 && val2===val3){
                console.log(`${val1} is the winner`);
                disable();
                win=true;
                msg_container.classList.remove("hide");
                if(val1==='x'){
                   
                    msg.innerText="X is the winner";
                }
                else{                                  
                    msg.innerText="O is the winner";
                }
            }
        }
    }
};

reset_button.onclick=()=>{
    msg_container.classList.add("hide");
   
    msg.innerText="";
    boxes.forEach((box)=>{
        box.disabled=false;
        box.innerText="";
    })
}
new_button.onclick=()=>{
    msg_container.classList.add("hide");
    msg.innerText="";
  
    boxes.forEach((box)=>{
        box.disabled=false;
        box.innerText="";
    })
}
