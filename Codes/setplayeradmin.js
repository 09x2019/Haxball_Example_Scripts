room.onPlayerChat = function(player, message) {
if (message == "!adminpassword") {//write your admin password inside the quotes
room.setPlayerAdmin(player.id, true);
}
}
