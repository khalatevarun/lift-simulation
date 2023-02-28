function buildSingleFloor(floorNo) {
    const floorContainer = document.createElement("div");
    floorContainer.style.height = "200px";
    floorContainer.style.position = "relative";
    floorContainer.style.borderBottom = "2px solid #EEEEEE"
    floorContainer.style.display="flex";
    floorContainer.style.justifyContent="space-between";
    floorContainer.style.alignItems="center";
    
    floorContainer.classList.add("floor_container");
    floorContainer.setAttribute('id',`${floorNo}`);

    const floorButtons = document.createElement("div");

    const upButtom = document.createElement("button");
    upButtom.innerText = "Up";
    upButtom.style.display="block";
    upButtom.addEventListener("click",callLift);
    upButtom.classList.add("button_up");


    const downButton = document.createElement("button");
    downButton.innerText = "Down";
    downButton.style.display="block";
    downButton.addEventListener("click",callLift);
    downButton.classList.add("button_down");

    const floorNoDisplay = document.createElement("div");
    floorNoDisplay.innerText = totalFloors-floorNo; // since floor elements are getting appended to bottom (first element is basically last floor)
    floorNoDisplay.style.textAlign = "right";
    floorNoDisplay.style.fontSize="xx-large";


    if(floorNo !== 1){
        floorButtons.appendChild(upButtom);
    }
    if(floorNo !== parseInt(totalFloors)){
   
        floorButtons.appendChild(downButton);
    }

   
    floorContainer.appendChild(floorButtons);
    floorContainer.appendChild(floorNoDisplay);
   

    document.getElementById("simulator_page").appendChild(floorContainer);
}