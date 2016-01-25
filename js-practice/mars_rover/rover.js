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

function checkForObstacles(map,position) {
  for (i in map.objects) {
    if (map.objects[i].position[0] === position[0] && map.objects[i].position[1] === position[1]){
      console.log("There is a " + map.objects[i].type + " at [" + position + "].");
      return true;
    }
  }

  return false;

}

function printPosition(rover) {
  console.log("New Rover Position: [" + rover.position[0] + ", " 
                + rover.position[1] + "] " + rover.direction);
}

function goForward(rover,map) {
  switch(rover.direction) {
    case 'N':
      if (checkForObstacles(map,[rover.position[0]+1,rover.position[1]]) === false) {
        rover.position[0]++
        if (rover.position[0] > map.dimensions[0]) {
          rover.position[0] -= map.dimensions[0]+1;
        }
      }
      break;
    case 'E':
      rover.position[1]++
      if (rover.position[1] > map.dimensions[1]) {
        rover.position[1] -= map.dimensions[1]+1;
      }
      break;
    case 'S':
      rover.position[0]--
      if (rover.position[0] < 0) {
        rover.position[0] += map.dimensions[0]+1;
      }
      break;
    case 'W':
      rover.position[1]--
      if (rover.position[1] < 0) {
        rover.position[1] += map.dimensions[1]+1;
      }
      break;
  };

  printPosition(rover);
   
}

function goBack(rover,map){
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
        rover.position[1] += map.dimensions[1]+1;
      }
      break;
    case 'S':
      rover.position[0]++;
      if (rover.position[0] > map.dimensions[0]) {
        rover.position[0] -= map.dimensions[0]+1;
      }
      break;
    case 'W':
      rover.position[1]++;
      if (rover.position[1] > map.dimensions[1]) {
        rover.position[1] -= map.dimensions[1]+1;
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


function moveRover(rover,map,directions) {
  for (i in directions) {
    switch (directions[i]) {
      case 'f':
        goForward(rover,map);
        break;
      case 'b':
        goBack(rover,map);
        break;
      case 'r':
        turnRight(rover,map);
        break;
      case 'l':
        turnLeft(rover,map);
        break;
    }
  }
}

// checkForObstacles(myMap,[5,5]);

var myDirections = "fffrfflfffbb".split("");
moveRover(myRover,myMap,myDirections);
moveRover(sheRover,myMap,myDirections);

// myDirections = "fffffffffffflffffffffffff".split("");
// moveRover(myRover,myDirections);

// myDirections = "bbbbbrbbbbbb".split("");
// moveRover(myRover,myDirections);
