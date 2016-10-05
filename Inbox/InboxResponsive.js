// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://inbox.google.com/
// @grant        none
// @require http://code.jquery.com/jquery-latest.js
// ==/UserScript==

$(document).ready(function() {
    'use strict';

    // Your code here...
    var mq = window.matchMedia( "(max-width: 920px)" );
    if(mq.matches) {
        $('.bz').css('marginLeft', '10px');
        $('.bz').css('marginRight', '10px');

        // Below for debugging purposes
        //var elements = document.getElementsByClassName('bz');
        //console.log(elements);
    }
});
