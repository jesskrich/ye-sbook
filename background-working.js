// document.addEventListener('DOMContentLoaded', function() {
//   var checkPageButton = document.getElementById('checkPage');

  document.addEventListener('DOMContentLoaded', function() {
      chrome.tabs.executeScript({
        file:'jquery-3.1.1.min.js'
      })
      chrome.tabs.executeScript({
        file:'content.js'
      });
  }, false);
}, false);

var off = true;

function updateIcon() {
    if (off == true) {
        off = false;
        chrome.browserAction.setIcon({path:"kanye_west.png"});
        console.log(off);
    }
    else {
        off = true;
        chrome.browserAction.setIcon({path:"kanye_orig.png"});
        console.log(off);
    }
    return;
}
chrome.browserAction.onClicked.addListener(updateIcon);
updateIcon();
