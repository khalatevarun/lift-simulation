function buildSingleLift(liftNo) {
    const lift = document.createElement("div");
    lift.style.height = "120px";
    lift.style.width = "60px";
    lift.style.position = "absolute";
    lift.style.bottom = "0";
    lift.style.left = `${liftNo*150}px`
    lift.classList.add('lift');
    lift.setAttribute('id',`lift-${liftNo}`);
    lift.style.display="flex";
    lift.style.border="1px solid #EEEEEE"

    const leftGateEl = document.createElement("div");
    leftGateEl.classList.add("left-gate");
    leftGateEl.style.height="auto";
    leftGateEl.style.width="50%";
    leftGateEl.style.transition="transform 2.5s";
    leftGateEl.style.transformOrigin = "left";

    const rightGateEl = document.createElement("div");
    rightGateEl.classList.add("right-gate");
    rightGateEl.style.height="auto";
    rightGateEl.style.width="50%";
    rightGateEl.style.transition="transform 2.5s";
    rightGateEl.style.transformOrigin="right";


    lift.appendChild(leftGateEl);
    lift.appendChild(rightGateEl);

    const groundFloor = document.querySelectorAll(".floor_container:last-child")[0];
    groundFloor.appendChild(lift);

    liftStates.push({ isActive: false, liftNo, atFloor: parseInt(totalFloors) });  // ground floor is actually last floor ( max floor no ), since elements are getting "APPENDED"

}