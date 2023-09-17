function changeFrameHeight(){
	var ifm = document.getElementById("iframePage");
	ifm.height = document.documentElement.clientHeight;
}

if (typeof window !== 'undefined') {
    window.onresize = function() {
		changeFrameHeight();
	}
 }

 if (typeof document !== 'undefined') {
	document.getElementById("iframePage").onload = changeFrameHeight;
}
 

