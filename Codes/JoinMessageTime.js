var room = HBInit({ roomName: "Join Message Time", maxPlayers: 16, public: false, noPlayer: true });

var playerList = {};
var joinTime = 15000; //In milliseconds

room.onPlayerChat = function(player, message) {
    if (playerList[player.id].joinMessageTime == true) {
        room.sendAnnouncement("Members cannot send messages with in 15 seconds of entering the room.", player.id);
        return false;
    }
}

room.onPlayerJoin = function(player) {
    if (playerList[player.id] == undefined) {
        playerList[player.id] = {id: player.id, joinMessageTime: true};

        setTimeout(function() {
            playerList[player.id].joinMessageTime = false;
            room.sendAnnouncement(`${player.name} you can now write!`, null, 0x00FF00, "bold", 1);
        }, joinTime);
    }
}
