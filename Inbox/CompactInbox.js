// ==UserScript==
// @name         CompactInbox
// @namespace    Email
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://inbox.google.com/
// @grant        none
// @require http://code.jquery.com/jquery-latest.js
// ==/UserScript==

// In is google hangouts side bar, this loads slower than dom (as an iframe)
//   and won't be detected by the userscript if it is not loaded.

var runAlready = false;

$(document).ready(function() {
    'use strict';

    if(runAlready) return;
    runAlready = true;

    console.log("hi");

    // Increase width
    var css = '.cM{width: 90%; padding-right: 4% !important;} .lQ{line-height: 20px !important;}'
    css += '.an{padding: 0px !important; margin: auto !important;}'
    css += '.jS{margin: 0px !important; min-height: 30px !important}'

    // Auto Align
    css += '.iG{margin: auto !important; /*img*/}'
    css += '.rv{margin: auto !important;}'
    css += '.rv{margin: auto !important;}'
    css += '.hY{margin: auto !important;}'

    // Remove shadow, add borders
    css += '.aa::before, .an::before{box-shadow: none !important; border: 1px solid #ddd; border-left: solid #ddd}'

    // Shrink Icon Sizes
    css += '.gi, .gN{width: 20px !important; height: 20px !important;}'

    // Change Font size
    css += '.ai-b8{font-size: 15px; font-weight: bold;}'

    // Removing/Decreasing empty space
    css += '.ai-b8{margin: 0px !important; margin-top: 8px}'
    css += '.az{padding: 5px !important; margin-bottom: 0px !important; margin-top: 10px !important}'
    css += '.kz{margin-bottom: 0px;}'
    css += '.g-aq.b0{padding: 2px 24px !important;}'

    // Shrinking Attachments
    css += '.cq{height: 24px !important;} .cq:hover{height: 88px !important;}'
    css += '.mp{height: 24px !important;}'
    css += '.ga{height: 24px !important;}'

    // Apply Style
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);


    // Move attachment elements
    /*var attachmentElements = document.querySelectorAll(".u2");
    alert("length" + attachmentElements.length);
    for (i = 0; i < attachmentElements.length; i++) {
        console.log("boo");
        //alert("attachment:" + attachmentElements[0].style.backgroundColor);
    }*/
    //parent, parent, parent, parent, 3rd sibling, 4th sibling (class rv), 3rd siblign (class l9), insert in between, 2nd and 3rd siblings, classes No and nj respectivly
    /*var theOriginal = document.getElementById('myelement');
var theClone = theOriginal.cloneNode(true);
document.body.insertBefore(theClone, document.getElementById('wheretoinsert'));
theOriginal.parentNode.removeChild(theOriginal);*/

    console.log('bye');
});

