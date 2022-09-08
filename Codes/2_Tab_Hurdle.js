var room = HBInit({ roomName: "2 Tab Hurdle", maxPlayers: 16, public: false, noPlayer: true });

var PlayerAuth = {};

room.onPlayerJoin = function(player) {

for (var i in PlayerAuth) {
	if(PlayerAuth[i].auth == player.auth)
		room.kickPlayer(PlayerAuth[i].id, "Tab detection is blocked. Don't! Your tab in the room: " + player.name, false);
}

PlayerAuth[player.auth] = player;

}
