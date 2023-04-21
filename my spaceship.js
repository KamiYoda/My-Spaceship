function my_spaceship(param){
     flightPath = {x: 0, y: 0, direction: 'up'};

    for( i = 0; i<param.length; i++){
        if(param.charAt(i) ==='A'){
            advance(flightPath.direction);
        }
        else if(param.charAt(i) ==='R'){
            turnRight(flightPath.direction);
        }
        else if(param.charAt(i) ==='L'){
            turnLeft(flightPath.direction);
        }
    }

    function advance(direction){
        if(direction == 'up'){
            flightPath.y--  ;
        }
        else if(direction == 'down'){
            flightPath.y++;
        }
        else if (direction == 'right'){
            flightPath.x++;
        }
        else if (direction == 'left'){
            flightPath.x--;
        }
    }

    function turnRight(direction){
        if(direction == 'up'){
            flightPath.direction = 'right';
        }
        else if(direction == 'down'){
            flightPath.direction = 'left';
        }
        else if (direction == 'right'){
            flightPath.direction = 'down' ;
        }
        else if (direction == 'left'){
            flightPath.direction = 'up';
        }
    }

    function turnLeft(direction){
        if(direction == 'up'){
            flightPath.direction = 'left';
        }
        else if(direction == 'down'){
            flightPath.direction = 'right';
        }
        else if (direction == 'right'){
            flightPath.direction = 'up' ;
        }
        else if (direction == 'left'){
            flightPath.direction = 'down';
        }
    }
    return `{x: ${flightPath.x}, y: ${flightPath.y}, direction: '${flightPath.direction}'}`;
}

