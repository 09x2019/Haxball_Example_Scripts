room.onPlayerChat = function(player, message) {
if (message == "!adminpassword") {
room.setPlayerAdmin(player.id, true);
}
}
