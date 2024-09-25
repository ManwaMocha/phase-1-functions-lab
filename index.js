// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    //returns the number of blocks given a value
    
    if (someValue>=42){
        return someValue - 42
    }else if(someValue<=42){
        return 42-someValue
    }
}

function distanceFromHqInFeet(someValue) {
    distanceFromHqInBlocks(someValue);
    
    return distanceFromHqInBlocks() * 264
}


function distanceTravelledInFeet(start, destination) {
   return Math.abs(start-destination)*264 
}
function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    const distance= distanceTravelledInFeet(start,destination)
    if (distance<=400){
        return 0
    }else if(distance>400&&distance<=2000){
        return distance * 2 / 100
    } else if(distance>2000&&distance<=2500){
        return  25
    }else {
        return "cannot travel that far"
    }


}
distanceFromHqInFeet(264)
distanceFromHqInFeet(2112)