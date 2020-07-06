(function(window){
	var helloSpeaker ={
	};

helloSpeaker.name =window.name;
var speakWord = "Hello";

helloSpeaker.speak= function speak(name) {
  console.log(speakWord + " " + helloSpeaker.name);
}

window.helloSpeaker=helloSpeaker;

})(window);