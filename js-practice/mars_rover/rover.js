var myRover = {
  position: [0,0], 
  direction: 'N'
};

function printPosition(rover) {
  console.log("New Rover Position: [" + rover.position[0] + ", " 
                + rover.position[1] + "] " + rover.direction);
}

function goForward(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[0]++
      if (rover.position[0] > 9) {
        rover.position[0] -= 10;
      }
      break;
    case 'E':
      rover.position[1]++
      if (rover.position[1] > 9) {
        rover.position[1] -= 10;
      }
      break;
    case 'S':
      rover.position[0]--
      if (rover.position[0] < 0) {
        rover.position[0] += 10;
      }
      break;
    case 'W':
      rover.position[1]--
      if (rover.position[1] < 0) {
        rover.position[1] += 10;
      }
      break;
  };

  printPosition(rover);
   
}

function goBack(rover){
  switch(rover.direction){
    case 'N':
      rover.position[0]--;
      if (rover.position[0] < 0) {
        rover.position[0] += 10;
      }
      break;
    case 'E':
      rover.position[1]--;
      if (rover.position[1] < 0) {
        rover.position[1] += 10;
      }
      break;
    case 'S':
      rover.position[0]++;
      if (rover.position[0] > 9) {
        rover.position[0] -= 10;
      }
      break;
    case 'W':
      rover.position[1]++;
      if (rover.position[1] > 9) {
        rover.position[1] -= 10;
      }
      break;
  };

  printPosition(rover);
}

function turnRight(rover) {
  switch(rover.direction){
    case 'N':
      rover.direction = 'E';
      break;
    case 'E':
      rrover.direction = 'S';
      break;
    case 'S':
      rover.direction = 'W';
      break;
    case 'W':
      rover.direction = 'N';
      break;
  };

  printPosition(rover);
}

function turnLeft(rover) {
  switch(rover.direction){
    case 'N':
      rover.direction = 'W';
      break;
    case 'E':
      rover.direction = 'N';
      break;
    case 'S':
      rover.direction = 'E';
      break;
    case 'W':
      rover.direction = 'S';
      break;
  };

  printPosition(rover);
}


function moveRover(rover,directions) {
  for (i in directions) {
    switch (directions[i]) {
      case 'f':
        goForward(rover);
        break;
      case 'b':
        goBack(rover);
        break;
      case 'r':
        turnRight(rover);
        break;
      case 'l':
        turnLeft(rover);
        break;
    }
  }
}

// var myDirections = "fffrfflfffbb".split("");
// moveRover(myRover,myDirections);

// myDirections = "fffffffffffflffffffffffff".split("");
// moveRover(myRover,myDirections);

myDirections = "bbbbbrbbbbbb".split("");
moveRover(myRover,myDirections);
