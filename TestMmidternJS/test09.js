function digitalClock(seconds) {
    let hours = Math.floor(seconds / 3600) % 24; 
    let minutes = Math.floor(seconds % 3600 / 60); 
    let secs = seconds % 60; 

    
    let formattedHours = hours.toString().padStart(2, '0');
    let formattedMinutes = minutes.toString().padStart(2, '0');
    let formattedSeconds = secs.toString().padStart(2, '0');

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}


console.log(digitalClock(5025)); 
console.log(digitalClock(61201));
console.log(digitalClock(87000));