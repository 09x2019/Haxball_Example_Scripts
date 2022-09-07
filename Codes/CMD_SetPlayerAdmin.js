var room = HBInit({ roomName: "My room", maxPlayers: 16, public: false, noPlayer: true });

var adminPassword = "!password"; //write your admin password inside the quotes

room.onPlayerChat = function(player, message) {
	
if (message == adminPassword) {
room.setPlayerAdmin(player.id, true);
return false;	
}
}
