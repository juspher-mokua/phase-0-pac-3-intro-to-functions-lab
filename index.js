function shout(string) {
    return string.toUpperCase();

}
function whisper(string) {
    return string.toLowerCase();
} 
function logShout(string) {
    console.log(string.toUpperCase());
}
function logWhisper(string) {
    console.log(string.toLowerCase());
}
// returns "I can't hear you!" if 'string' is lowercase
// returns "YES INDEED!" if 'string' is uppercase
// returns "I would love to!" if 'string' is "let's have dinner together"

function sayHiToHeadphonedRoommate(string) {
    if (string.toLowerCase() === string) { 
        return "I can't hear you!";
   
    } else if (string.toUpperCase() === string) {
        return "YES INDEED!";
   
    } else if (string ==="Let's have dinner together!") {
        return "I would love to!"
    }
}
       