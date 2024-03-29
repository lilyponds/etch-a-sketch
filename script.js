const container = document.querySelector(".container");

//to start with an initial 16X16 grid
for(i=0;i<16;i++){
    const block = document.createElement("div");
    block.classList.add("block");
        for(j=0;j<16;j++){
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.addEventListener("mouseenter", ()=>{
                cell.style.backgroundColor = "purple";
            });
          
            block.appendChild(cell);
        }
    container.appendChild(block);
}

const input = document.querySelector("#size"); //Ask for size of grid


//Trigger grid creation upon button click
const button = document.querySelector("#enter").addEventListener("click",generator);
const clrButton = document.querySelector("#clear").addEventListener("click",starter);

//Function accepts the value from input field to generate that many rows and then each row has that many cells.
function generator(){
    count = input.value;
    if(count!=0&&count<=500){
        container.replaceChildren();//to remove previous grid size
    
        for(i=0;i<count;i++){
        const block = document.createElement("div"); 
        block.classList.add("block");
            for(j=0;j<count;j++){
            const cell = document.createElement("div");
            cell.classList.add("cell");
            let enterEventCount = 0;
            //Event listener to create the sketch;
            cell.addEventListener("mouseenter", ()=>{
                const color = randomColor();
                console.log(color);
                cell.style.backgroundColor = color;

            });
          
            block.appendChild(cell);
            }
            container.appendChild(block);
            input.value = "";
        }
    } else {alert("Please enter a valid number that is less than 500 but greater than 0.");}

    
}

function randomColor(){
    const r = Math.floor(Math.random()*255+1);
    const g = Math.floor(Math.random()*255+1);
    const b = Math.floor(Math.random()*255+1);
    return 'rgb('+r+','+g+','+b+')';
}

function starter(){
    container.replaceChildren();//to remove previous grid 
    for(i=0;i<16;i++){
        
        const block = document.createElement("div");
        block.classList.add("block");
            for(j=0;j<16;j++){
                const cell = document.createElement("div");
                cell.classList.add("cell");
                cell.addEventListener("mouseenter", ()=>{
                    cell.style.backgroundColor = "purple";
                });
              
                block.appendChild(cell);
            }
        container.appendChild(block);
    }
}