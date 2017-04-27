// document.addEventListener('DOMContentLoaded', function() {
//   var checkPageButton = document.getElementById('checkPage');


// function updateIcon() {
//         chrome.browserAction.setIcon({path:"green.png"});
//         chrome.tabs.executeScript(null,{file:'content.js'});
//         location.reload();
// }

var off = true;

function updateIcon() {
    if (off == true) {
        off = false;
        chrome.browserAction.setIcon({path:"green.png"});
        chrome.tabs.executeScript(null,{file:'content.js'});
        location.reload();
    }
    else {
        off = true;
        chrome.browserAction.setIcon({path:"red.png"});
        window.location.reload();
    }
    return;
}






chrome.browserAction.onClicked.addListener(updateIcon);
updateIcon();
