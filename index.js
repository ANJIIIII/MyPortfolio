// alert("hey there");
// alert("i am kiddu");
// alert("connectio failed");
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents =document.getElementsByClassName("tab-contents");
 var event= Event;
function opentab(tabname){
    for(tablinks of tablinks){
        tablinks.classList.remove("active-link");
    }
    for(tabcontents of tabcontents){
        tabcontents.classList.remove("active-link");
    }
    Event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}