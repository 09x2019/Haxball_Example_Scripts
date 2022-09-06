//style[number] 0 normal - 1 bold - 2 italic - 3 small - 4 small-bold - 5 small-italic
//sounds[number] 0 - 1 - 2

var vipsAuth = [["auth1"], ["auth2"]]; //write player auth
var vipsID = [[]];
var vipscolors = [0x95FF8E]; //color
var vipssounds = [0, 1, 2];
var vipsprefix = ["VIP・"]; //role prefix
var vipsstyle = ["normal", "bold", "italic", "small", "small-bold", "small-italic"]; //message style

room.onPlayerJoin = function(player) {
  
    for(var i = 0; i < vipsAuth.length; i++) {
        if (player.auth == vipsAuth[i][0]) {
            vipsID.push([player.id]);
        }
    }
}

room.onPlayerLeave = function(player) {
  
    vipsID.shift([player.id]);
}

room.onPlayerChat = function(player, message) {
  
for(var i = 0; i < vipsID.length; i++) {
        if (player.id == vipsID[i][0]) {
            room.sendAnnouncement(vipsprefix + player.name + ": " + message, null, vipscolors, vipsstyle[1], vipssounds[1]);
            return false;
        }
    }
}
