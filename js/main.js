// import './floor.js';

let totalFloors = 0, totalLifts = 0, liftStates=[];


function setUpLiftSimulation(event) {

    totalFloors = document.getElementById('floors_input').value;
    totalLifts = document.getElementById('lifts_input').value;
    document.getElementById("input_page").style.display = "none";
    simulateLifts();
}


function simulateLifts () {

    for(let i = 1; i <= totalFloors; i++) {
        buildSingleFloor(i);
    }

    for(let i = 1; i <= totalLifts; i++) {
        buildSingleLift(i);
    }
}

function callLift(event){

    const calledAtFloor = parseInt(event.target.parentNode.parentNode.id);

    const idleLiftNo = findIdleLift();

    if(idleLiftNo){

        // calculate floor distance between current floor of idle lift and the floor at which its called, multiply by 2 as the desired speed is 2s per floor
        let speed = Math.abs(liftStates[idleLiftNo-1].atFloor-calledAtFloor)*2;
        
        const lift = document.getElementById(`lift-${idleLiftNo}`);
        lift.style.transition = `bottom ${speed}s`
        console.log()
        lift.style.bottom = `${(totalFloors - calledAtFloor)*200 + (totalFloors - calledAtFloor)*2}px`; // relavtive distance from the gound floor
        liftStates[idleLiftNo-1].atFloor = calledAtFloor;
        activateLift(idleLiftNo,speed);
    }
}


function activateLift(idleLiftNo,time){
   
    liftStates[idleLiftNo-1].isActive = true;

    setTimeout(()=>{    
        toggleDoors(idleLiftNo);
    },time*1000); // since timout takes argument in ms, we multiple the time with 1000

    setTimeout(()=>{
        liftStates[idleLiftNo-1].isActive = false;
    },((time*1000)+5000));
}

function toggleDoors(liftNo){
    const lift = document.getElementById(`lift-${liftNo}`);
    const leftGateEl = lift.childNodes[0];
    const rightGateEl = lift.childNodes[1];

    // to open doors
    leftGateEl.style.transform = "scale(0,1)";
    rightGateEl.style.transform = "scale(0,1)";
    

    // to close dooes after 2s
    setTimeout(()=>{
    leftGateEl.style.transform = "scale(1,1)";
    rightGateEl.style.transform = "scale(1,1)";
    },2500);


}

function findIdleLift(){
    for(let i=0; i< Object.keys(liftStates).length; i++){
            if(liftStates[i].isActive === false){
            return liftStates[i].liftNo;
            }
    }
    return 0;
}
