// placeholder

document.addEventListener("DOMContentLoaded", function(event) {
	"use strict"
	let aTags = document.getElementsByTagName("a");
	for(var n=0; n<aTags.length; n++){
		let isOutboud = aTags[n].getAttribute("href").indexOf("http")
		if(isOutboud === 0){
			aTags[n].setAttribute("target", "_blank");
		}
	}
});
