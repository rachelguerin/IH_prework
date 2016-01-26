var myRover = {
  type: 'myRover',
  position: [0,0], 
  direction: 'N'
};

var sheRover = {
  type: 'sheRover',
  position: [1,0],
  direction: 'N'
};

var rock = {
  type: 'rock',
  position: [2,0]
};

var hole = {
  type: 'hole',
  position: [5,5]
};

var myMap = {
  dimensions: [9,9],
  objects: [myRover,sheRover,rock,hole]
}

function checkForObstacles(position) {
  for (i in myMap.objects) {
    if (myMap.objects[i].position[0] === position[0] && myMap.objects[i].position[1] === position[1]){
      console.log("There is a " + myMap.objects[i].type + " at [" + position + "].");
      return true;
    }
  }

  return false;

}

function printPosition(rover) {
  console.log("Rover " + rover.type + " Position: [" + rover.position[0] + ", " 
                + rover.position[1] + "] " + rover.direction);
}

function printAction(rover,action) {
  console.log("Rover " + rover.type + " " + action);
}

function goForward(rover) {
  printAction(rover,"going forward..");
  switch(rover.direction) {
    case 'N':
      if (checkForObstacles([rover.position[0]+1,rover.position[1]]) === false) {
        rover.position[0]++
        if (rover.position[0] > myMap.dimensions[0]) {
          rover.position[0] -= myMap.dimensions[0]+1;
        }
      }
      break;
    case 'E':
      if (checkForObstacles([rover.position[0],rover.position[1]+1]) === false) {
        rover.position[1]++
        if (rover.position[1] > myMap.dimensions[1]) {
          rover.position[1] -= myMap.dimensions[1]+1;
        }
      }
      break;
    case 'S':
      
      if (checkForObstacles([rover.position[0]-1,rover.position[1]]) === false) {
        rover.position[0]--
        if (rover.position[0] < 0) {
          rover.position[0] += myMap.dimensions[0]+1;
        }
      }
      break;
    case 'W':
      if (checkForObstacles([rover.position[0],rover.position[1]-1]) === false) {
        rover.position[1]--
        if (rover.position[1] < 0) {
          rover.position[1] += myMap.dimensions[1]+1;
        }
      }
      break;
  };

  printPosition(rover);
   
}

function goBack(rover){
  printAction(rover,"going back..");
  switch(rover.direction){
    case 'N':
      if (checkForObstacles([rover.position[0]--,rover.position[1]]) === false) {
        rover.position[0]--;
        if (rover.position[0] < 0) {
          rover.position[0] += myMap.dimensions[0]+1;
        }
      }
      break;
    case 'E':
      if (checkForObstacles([rover.position[0],rover.position[1]--]) === false) {
        rover.position[1]--;
        if (rover.position[1] < 0) {
          rover.position[1] += myMap.dimensions[1]+1;
        }
      }
      break;
    case 'S':
      if (checkForObstacles([rover.position[0]++,rover.position[1]]) === false) {
        rover.position[0]++;
        if (rover.position[0] > myMap.dimensions[0]) {
          rover.position[0] -= myMap.dimensions[0]+1;
        }
      }
      break;
    case 'W':
      if (checkForObstacles([rover.position[0],rover.position[1]++]) === false) {
        rover.position[1]++;
        if (rover.position[1] > myMap.dimensions[1]) {
          rover.position[1] -= myMap.dimensions[1]+1;
        }
      }
      break;
  };

  printPosition(rover);
}

function turnRight(rover) {
  printAction(rover,"turning..");
  switch(rover.direction){
    case 'N':
      rover.direction = 'E';
      break;
    case 'E':
      rover.direction = 'S';
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
  printAction(rover,"turning..");
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

// checkForObstacles(myMap,[5,5]);

var myDirections = "fffrfflfffbb".split("");
moveRover(myRover,myDirections);
moveRover(sheRover,myDirections);

// myDirections = "fffffffffffflffffffffffff".split("");
// moveRover(myRover,myDirections);

// myDirections = "bbbbbrbbbbbb".split("");
// moveRover(myRover,myDirections);
