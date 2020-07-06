(function(window){
	var byeSpeaker ={
		};
byeSpeaker.name =window.name;
// DO NOT attach the speakWord variable to the 'byeSpeaker' object.
var speakWord = "Good Bye";

byeSpeaker.speak=function speak(name) {
  console.log(speakWord + " " + byeSpeaker.name);
}

window.byeSpeaker = byeSpeaker;

}(window);