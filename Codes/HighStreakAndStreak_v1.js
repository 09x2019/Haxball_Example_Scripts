var SETTINGS = {
    Message: {
        redStreak: "The red team has won " + SETTINGS.General.redStreak + " games in a row.",
        blueStreak: "The blue team has won " + SETTINGS.General.blueStreak + " games in a row.",
        highStreak: "The " + SETTINGS.General.highStreakTeam + " team holds the highStreak with " + SETTINGS.General.highStreak + " straight win."
    },
    General: {
        redStreak: 0,
        blueStreak: 0,
        highStreak: 0,
        teamRedHighStreak: false,
        highStreakTeam: SETTINGS.General.teamRedHighStreak == true ? "red" : "blue"
    },
};

room.onPlayerChat = function(player, message) {
    if (message == "!highstreak") {
        room.sendAnnouncement(SETTINGS.Message.highStreak, player.id, 0x660099, 'bold', 2);
    }
    
    if (message == "!streak") {
        if (SETTINGS.General.redStreak >= SETTINGS.General.blueStreak) {
            room.sendAnnouncement(SETTINGS.Message.redStreak, player.id, 0x660099, 'bold', 2);
        } else {
            if (SETTINGS.General.blueStreak > SETTINGS.General.redStreak) {
                room.sendAnnouncement(SETTINGS.Message.blueStreak, player.id, 0x660099, 'bold', 2);
            }
        }
    }
}

room.onTeamVictory = function(player, scores) {
    if (scores.red > scores.blue) {
        SETTINGS.General.blueStreak = 0;
        SETTINGS.General.redStreak++;
    } else {
        if (scores.blue > scores.red) {
            SETTINGS.General.redStreak = 0;
            SETTINGS.General.blueStreak++;
        }
    }
    if (SETTINGS.General.redStreak > SETTINGS.General.highStreak) {
        SETTINGS.General.highStreak = SETTINGS.General.redStreak;
        SETTINGS.General.teamRedHighStreak = true;
    } else {
        if (SETTINGS.General.blueStreak > SETTINGS.General.highStreak) {
            SETTINGS.General.highStreak = SETTINGS.General.blueStreak;
            SETTINGS.General.teamRedHighStreak = false;
        }
    }
}
