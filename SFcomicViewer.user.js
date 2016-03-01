// ==UserScript==
// @name         SFcomic Viewer
// @namespace    
// @version      0.2.1
// @description  Auto load comic picture.
// @author       AntonioTsai
// @match        http://comic.sfacg.com/*
// @include      http://comic.sfacg.com/*
// @grant        none
// @downloadURL  https://github.com/AntonioTsai/SFcomic-Viewer/raw/master/SFcomicViewer.user.js
// ==/UserScript==

var ADblocker = new function() {
	for (var a = document.querySelector("iframe"); a; a = document.querySelector("iframe")) {
		a.parentElement.removeChild(a);
	}
};

var Viewer = new function() {
	var imgtable = document.getElementsByTagName("table")[0].getElementsByTagName("tbody")[0];
	var tempTr = document.createElement("tr");
	var imgs = document.createElement("img");
	tempTr.appendChild(document.createElement("td"));
	tempTr.children[0].appendChild(imgs);

	// remove original image
	var tr = document.querySelector("tr");
	tr.parentElement.removeChild(tr);
	
	// generate all images
	for (var i = 0; i < picCount; i++) {
		var imgTr = tempTr.cloneNode(true);
		imgTr.appendChild(document.createElement("img"));
		imgTr.children[0].children[0].src = picAy[i];
		imgtable.appendChild(imgTr);
	}
	

};