var room = HBInit({ roomName: "Administrator Slot", noPlayer: true, public: false, maxPlayers: 8 });

var SETTINGS = {
    Message: {
        kickNote: "The last 1 slot is reserved for admins."
    },
    General: {
        maxPlayers: 8,
        lockRoomWhenLast1Slot: false, //If you do this true, it will set a password to the room when the last 1 slot is left.
        password: "room pass" //It works if you set lockRoomWhenLast1Slot to true.
    },
    Authorities: {
        administrators: [{Auth: "Auth1", Conn: "Conn1"}, {Auth: "Auth2", Conn: "Conn2"}] //Administrators write here
    },
};

function checkAuthorized(player){
    return SETTINGS.Authorities.administrators.findIndex(a => a.Auth == player.auth || a.Conn == player.Conn) !== -1;
}

room.onPlayerJoin = function(player) {
    var playerCount = room.getPlayerList().length;

    if (playerCount == SETTINGS.General.maxPlayers - 1 && SETTINGS.General.lockRoomWhenLast1Slot == false) {
        if (checkAuthorized(player) == false) {
            room.kickPlayer(player.id, SETTINGS.Message.kickNote, false);
        }
    } else {
        if (playerCount == SETTINGS.General.maxPlayers - 1 && SETTINGS.General.lockRoomWhenLast1Slot == true) {
            room.setPassword(SETTINGS.General.password);
        }
    }
}

room.onPlayerLeave = function(player) {
    var playerCount = room.getPlayerList().length;

    if (playerCount == SETTINGS.General.maxPlayers - 2 && SETTINGS.General.lockRoomWhenLast1Slot == true) {
        room.setPassword(null);
    }
}
