$(document).ready(function(){
	chrome.tabs.getSelected(null, function(tab) {
		robotURL = "http://" + getHostname(tab.url) + "/robots.txt"
		window.open(robotURL);		// Open in new tab
      	});
});

function getHostname(str) {
	var re = new RegExp('^(?:f|ht)tp(?:s)?\://([^/]+)', 'im');
	return str.match(re)[1].toString();
}
