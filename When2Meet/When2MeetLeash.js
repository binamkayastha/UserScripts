// ==UserScript==
// @name        When2Meet
// @namespace   Hide
// @include     http://www.when2meet.com/?4651666-lfBwY
// @version     1
// @grant       none
// ==/UserScript==
  var scriptCode = new Array();   // this is where we are going to build our new script
  
  // here's the build of the new script, one line at a time
  scriptCode.push('function ShowSlot(Time) {');
  scriptCode.push('    AvailableList = "";');
  scriptCode.push('    UnavailableList = "";');
  scriptCode.push('    AvailableCount=0;');
  scriptCode.push('    Count=0;');
  scriptCode.push('    for (var i=0;i<AvailableIDs.length;i++) {');
  scriptCode.push('      Count++;');
  scriptCode.push('      var found = (-1 != AvailableAtSlot[TimeOfSlot.indexOf(Time)].indexOf(AvailableIDs[i]) );');
  scriptCode.push('      if (found) {');
  scriptCode.push('        AvailableList += PeopleNames[PeopleIDs.indexOf(AvailableIDs[i])]+"<br>";');
  scriptCode.push('        AvailableCount++;');
  scriptCode.push('      } else');
  scriptCode.push('        UnavailableList += PeopleNames[PeopleIDs.indexOf(AvailableIDs[i])]+"<br>";');
  scriptCode.push('    }');
  scriptCode.push('    var listDiv = document.createElement("p");');
  scriptCode.push('    var node = document.createTextNode("<div>Here will be the names.</div>")');
  scriptCode.push('    console.log(node);')
  scriptCode.push('    //listDiv.appendChild(node);');    
  scriptCode.push('    var element = document.getElementById("NewEventNameDiv");');
  scriptCode.push('    console.log(element);')
  
  scriptCode.push('    document.getElementById("Available").innerHTML = AvailableList;');
  scriptCode.push('    document.getElementById("Unavailable").innerHTML = UnavailableList;');
  scriptCode.push('    document.getElementById("AvailableFraction").innerHTML = AvailableCount+"/"+Count;');

  scriptCode.push('    document.getElementById("LeftPanel").style.display="none";');
  scriptCode.push('    document.getElementById("SlotAvailability").style.display="";');
  scriptCode.push('    element.innerHTML = \'<div id="listOfMembers">\' + PeopleNames[PeopleIDs.indexOf(AvailableIDs[0])] +\'</div>\';');

  scriptCode.push(' }');
  
  // now, we put the script in a new script element in the DOM
  var script = document.createElement('script');    // create the script element
  script.innerHTML = scriptCode.join('\n');         // add the script code to it
  scriptCode.length = 0;                            // recover the memory we used to build the script
  
  // this is sort of hard to read, because it's doing 2 things:
  // 1. finds the first <head> tag on the page
  // 2. adds the new script just before the </head> tag
  document.getElementsByTagName('head')[0].appendChild(script); 

