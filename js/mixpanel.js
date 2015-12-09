function setCookie(cname, cvalue) {
    document.cookie = cname + "=" + cvalue + ";";
}
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}

function initMixpanel()
{
	var uniqueId = getCookie("uniqueId");
	if(uniqueId == "")
	{
		uniqueId = String(Math.random() * Number.MAX_VALUE);
		setCookie("uniqueId", uniqueId);
	}
	
	mixpanel.identify(uniqueId);
	mixpanel.people.set({
		"$last_login": new Date(),
	});
	mixpanel.track("PageLoad", {Page : window.location.href });
}
initMixpanel();