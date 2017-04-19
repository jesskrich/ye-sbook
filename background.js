// document.addEventListener('DOMContentLoaded', function() {
//   var checkPageButton = document.getElementById('checkPage');

  document.addEventListener('DOMContentLoaded', function() {
      chrome.tabs.executeScript({
        file:'jquery-3.1.1.min.js'
      })
      chrome.tabs.executeScript({
        file:'content.js'
      })
      chrome.tabs.insertCSS(
        null,
        {file: "style.css"
      });
  }, false);
}, false);
