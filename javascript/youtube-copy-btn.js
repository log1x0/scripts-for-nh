// ==UserScript==
// @name         Copy youtube url to clipboard
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        none
// ==/UserScript==

(function () {
  "use strict";
  var dummy = document.createElement("button");
  dummy.innerHTML = "copy url";
  dummy.addEventListener("click", function () {
    navigator.clipboard.writeText(window.location.href);
  });
  document.getElementById("start").appendChild(dummy);
})();
