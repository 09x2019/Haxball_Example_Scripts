var room = HBInit({ roomName: "Number Single Or Double Control", maxPlayers: 16, public: false, noPlayer: true });

var distributable = false;

function calculate(number){ 
 
//Is the remainder 0 after dividing the number by 2?
if(number%2 == 0) {
console.log("Number double!");
distributable = true;
}
else { 
console.log("Number single!");
distributable = false;
}
}
