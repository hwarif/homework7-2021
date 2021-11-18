var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	var sliderVals = document.querySelector("#slider");
	video.volume = sliderVals.value / 100;
	document.querySelector("#volume").innerHTML=video.volume * 100 + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Video");
	video.playbackRate = video.playbackRate - 0.05;
	console.log("New speed is " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Fast Video");
	video.playbackRate = video.playbackRate + 0.05;
	console.log("New speed is " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Video");
	if (video.currentTime + 15 < video.duration) {
		video.currentTime = video.currentTime + 15; 
		console.log("Progressing 15 secs through the video");
	}
	else {
		video.currentTime = 0;
		console.log("15 secs goes past the end, restarting video");
	}
	console.log("Current video time is " + video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	console.log("Mute/Unmute Video");
	if (video.muted == true) {
		video.muted = false;
		document.querySelector("#mute").innerHTML="Mute";
		console.log("Unmuted video");
	}
	else {
		video.muted = true;
		document.querySelector("#mute").innerHTML="Unmute";
		console.log("Muted video");
	}
});


document.querySelector("#slider").addEventListener("click", function() {
	console.log("Volume Change");
	var sliderVals = document.querySelector("#slider");
	video.volume = sliderVals.value / 100;
	console.log("Volume is now " + video.volume * 100 + "%");
	document.querySelector("#volume").innerHTML=video.volume * 100 + "%";
});

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Vintage View");
	document.querySelector("#player1").className="oldSchool";


});

document.querySelector("#orig").addEventListener("click", function() {
	console.log("Original View");
	document.querySelector("#player1").className="video";


});