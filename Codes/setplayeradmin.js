var room = HBInit({
	roomName: "My room",
	maxPlayers: 16,
        public: false,
	noPlayer: true // Remove host player (recommended!)
});

room.onPlayerChat = function(player, message) {
if (message == "!adminpassword") {//write your admin password inside the quotes
room.setPlayerAdmin(player.id, true);
}
}
