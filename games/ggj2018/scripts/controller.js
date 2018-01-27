navigator.vibrate = (navigator.vibrate ||
                           navigator.webkitVibrate ||
                           navigator.mozVibrate ||
                           navigator.msVibrate);

var airconsole;
/**
 * Sets up the communication to the screen.
 */
function init() {
    airconsole = new AirConsole({ "orientation": "portrait" });

    /*
     * Checks if this device is part of the active game.
     */
    airconsole.onActivePlayersChange = function (player) 
	{
         /*var div = document.getElementById("player_id");
        if (player !== undefined) {
            div.innerHTML = (["Left Player", "Right Player"][player]);
        } else {
            div.innerHTML = "It's a 2 player game!";
        }*/
    };

    /*
     * Makes the device vibrate if the screen says so.
     */
    airconsole.onMessage = function (from, msg) 
	{
        if (from == AirConsole.SCREEN && msg.type == "vibrate") 
		{
            navigator.vibrate(msg.vibrate);
            console.log("Vibrating: " + msg.vibrate);
        }
		
		if (from == AirConsole.SCREEN && msg.type == "setrole") 
		{
			var role = msg.data;
			
			if(role == "Wait")
				$('#controls-wait').removeAttr('hidden');
			else
				$('#controls-wait').attr('hidden', true);
			
			if(role == "Conductor")
				$('#controls-conductor').removeAttr('hidden');
			else
				$('#controls-conductor').attr('hidden', true);
			
			if(role == "Car")
				$('#controls-car').removeAttr('hidden');
			else
				$('#controls-car').attr('hidden', true);
        }
    };
}

/**
 * Tells the screen to move the paddle of this player.
 * @param amount
 */
function move(amount) 
{
    airconsole.message(AirConsole.SCREEN, { "type": "move", "data": amount })
}

function honk() 
{
    airconsole.message(AirConsole.SCREEN, { "type": "honk", "data": null })
}

function setlights(val) 
{
    airconsole.message(AirConsole.SCREEN, { "type": "setlights", "data": val })
}

function calltrain() 
{
    airconsole.message(AirConsole.SCREEN, { "type": "calltrain", "data": null })
}

