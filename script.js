const container = document.querySelector(".container");
const input = document.querySelector("#size"); //Ask for size of grid


//Trigger grid creation upon button click
const button = document.querySelector("#enter").addEventListener("click",generator);

//Function accepts the value from input field to generate that many rows and then each row has that many cells.
function generator(){
    count = input.value;
    if(count!=0&&count<=500){
        container.replaceChildren();
    
for(i=0;i<count;i++){
    const block = document.createElement("div"); //to remove previous grid size
    block.classList.add("block");
        for(j=0;j<count;j++){
            const cell = document.createElement("div");
            cell.classList.add("cell");
          
            block.appendChild(cell);
        }
    container.appendChild(block);
    input.value = "";
}} else {alert("Please enter a valid number that is less than 500 but greater than 0.");}
}