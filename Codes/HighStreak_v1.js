var room = HBInit({ roomName: "High Streak And Streak System", noPlayer: true, public: true, maxPlayers: 16 });

var redStreak = 0;
var blueStreak = 0;
var highStreak = 0;
var teamRedHighStreak = false;
var highStreakTeam = teamRedHighStreak == true ? "red" : "blue";

var SETTINGS = {
    Message: {
        redStreak: "The red team has won " + redStreak + " games in a row.",
        blueStreak: "The blue team has won " + blueStreak + " games in a row.",
        highStreak: "The " + highStreakTeam + " team holds the highStreak with " + highStreak + " straight win."
    },
};

room.onPlayerChat = function(player, message) {
    if (message == "!highstreak") {
        room.sendAnnouncement(SETTINGS.Message.highStreak, player.id, 0x660099, 'bold', 2);
    }
    
    if (message == "!streak") {
        if (redStreak >= blueStreak) {
            room.sendAnnouncement(SETTINGS.Message.redStreak, player.id, 0x660099, 'bold', 2);
        } else {
            if (blueStreak > redStreak) {
                room.sendAnnouncement(SETTINGS.Message.blueStreak, player.id, 0x660099, 'bold', 2);
            }
        }
    }
}

room.onTeamVictory = function(player, scores) {
    if (scores.red > scores.blue) {
        blueStreak = 0;
        redStreak++;
    } else {
        if (scores.blue > scores.red) {
            redStreak = 0;
            blueStreak++;
        }
    }
    if (redStreak > highStreak) {
        highStreak = redStreak;
        teamRedHighStreak = true;
    } else {
        if (blueStreak > highStreak) {
            highStreak = blueStreak;
            teamRedHighStreak = false;
        }
    }
}
