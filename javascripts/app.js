// Rover Object Goes Here
// ======================

var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: []
};

// based off of which function is being called, turn the rover in the correct direction based off of its current direction  

function turnLeft(rover) {
  // takes in rover direction as argument and changes direction 90 degrees to the left
  switch (rover.direction) {
    case "N":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "N";
      break;
  }
  console.log("turnLeft was called! Current direction is " + rover.direction);
}

function turnRight(rover) {
  // takes in rover direction as argument and changes direction 90 degrees to the right
  switch (rover.direction) {
    case "N":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "N";
      break;
  }
  console.log("turnRight was called! Current direction is " + rover.direction);
}


function moveForward(rover) {
  console.log("moveForward was called");
  // first if statement checks for rover direction & if rover will move outside boundary
  if(rover.direction === "N" && rover.y > 0) {
    rover.y -= 1;
  } else if(rover.direction === "E" && rover.x < 10) {
    rover.x += 1;
  } else if(rover.direction === "S" && rover.y < 10) {
    rover.y += 1;
  } else if(rover.direction === "W" && rover.x > 0) {
    rover.x -= 1;
  } else {
    console.log("You must stay within the 10x10 grid! Position: " + rover.x + ", " + rover.y);
  } // pushes x & y coordinates to the array travelLog
    rover.travelLog.push("(" + rover.x + ", " + rover.y + ")");
}

function moveBackward(rover) {
  console.log("moveBackward was called");
  // first if statement checks for rover direction & if rover will move outside boundary
  if(rover.direction === "N" && rover.y > 0) {
    rover.y -= 1;
  } else if(direction === "E" && rover.x > 0 ) {
    rover.x -= 1;
  } else if(direction === "S" && rover.y < 10) {
    rover.y += 1;
  } else if(direction === "W" && rover.x < 10) {
    rover.x += 1;
  } else {
    console.log("You must stay within the 10x10 grid! Position: " + rover.x + ", " + rover.y);
  } // pushes x & y coordinates to the array travelLog
    rover.travelLog.push("(" + rover.x + ", " + rover.y + ")");
}

function commandInput(rover, commandString) {
  for (var i = 0; i < commandString.length; i++) {
    switch (commandString[i]) {
      case "r":
        turnRight(rover);
        break;
      case "l":
        turnLeft(rover);
        break;
      case "f":
        moveForward(rover);
        break;
    }
  }
}

commandInput(rover, "rffrfflfrff");
console.log(rover.travelLog);

