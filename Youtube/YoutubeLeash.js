// ==UserScript==
// @name        YoutubeHide
// @namespace   Hide
// @description Hides distracting elements on the youtube page
// @include     https://www.youtube.com/*
// @version     1
// @grant       none
// ==/UserScript==

var commentSection = document.getElementById('watch-discussion');
var sidebarSection = document.getElementById('watch7-sidebar');

commentSection.style.visibility = 'hidden';
sidebarSection.style.visibility = 'hidden';
