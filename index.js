// Code your solution in this file!
function distanceFromHqInBlocks(block) {
    if(block >= 42){
        return block - 42;
    }else if(block <= 42)
        return 42 - block;
}
function distanceFromHqInFeet (feet) {
    if(feet >= 42){
        return (feet-42) * 264;
    }else if(feet <= 42)
        return (42 - feet) * 264;
}
function distanceTravelledInFeet(start1, end) {
    if(start1 >= end){
        return(start1 - end) * 264;
    }else if(end >= start1)
        return(end - start1) * 264;
}
function calculatesFarePrice(start, destination){
    const feetblock = 264;
    const distance = Math.abs(destination -start);
    const fare = distance * feetblock;
    if(fare <= 400 ){
        return 0;
    }else if(fare > 400 && fare <= 2000){
        return (fare - 400) * 0.02;
    }else if(fare > 2000 && fare <= 2500){
        return 25;
    }else {
        return 'cannot travel that far';
    }
}

 
     









