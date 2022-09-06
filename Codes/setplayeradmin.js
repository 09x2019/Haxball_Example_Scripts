var room = HBInit({
	roomName: "My room",
	maxPlayers: 16,
        public: false,
	noPlayer: true // Remove host player (recommended!)
});

var adminPassword = "!password"; //write your admin password inside the quotes

room.onPlayerChat = function(player, message) {
if (message == adminPassword) {
room.setPlayerAdmin(player.id, true);
return false;	
}
}
