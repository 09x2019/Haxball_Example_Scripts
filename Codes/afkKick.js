var room = HBInit({ roomName: "My room", maxPlayers: 16, public: false, noPlayer: true });

var playersAfk = {};

room.onPlayerActivity = function(player) {
if(player.team != 0)
playersAfk[player.name] = 0;
}

setInterval(() => {
	var players = room.getPlayerList();
	for (i = 0; i < players.length; i++) {
		if (players[i].position != null && alfaTest == false && kickOff == true) {
			playersAfk[players[i].name]++;
			if(playersAfk[players[i].name] == 4)
			room.sendAnnouncement("❌ Hey " + players[i].name + ", Eğer Önümüzdeki '6' Saniye İçinde Hareket Etmezsen Kick'lenirsiniz!", players[i].id, "0xf54c55", "normal", 2);
			else if(playersAfk[players[i].name] == 10)
			room.kickPlayer(players[i].id, "💤 𝐀𝐅𝐊.", false);
		}
		else
		playersAfk[players[i].name] = 0;
	}
}, 1000);

var alfaTest = false;
