var room = HBInit({
	roomName: "My room",
	maxPlayers: 16,
        public: false,
	noPlayer: true // Remove host player (recommended!)
});

var PlayerAuth = {};

room.onPlayerJoin = function(player) {

for (var i in PlayerAuth) {
	if(PlayerAuth[i].auth == player.auth)
		room.kickPlayer(PlayerAuth[i].id, "Tab detection is blocked. Don't! Your tab in the room: " + player.name, false);
}

PlayerAuth[player.auth] = player;

}
