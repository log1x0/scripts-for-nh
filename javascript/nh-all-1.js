// ==UserScript==
// @name         Userscript NH Style
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://newheaven.nl/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=newheaven.nl
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    setStyle();
    addPepe();
    add_4k();
})();

function setStyle() {
    // let color1 = "#181818";
    let color1 = "SlateGray";
    let color2 = "LightGray";
    let color3 = "#DDCCBB";
    document.body.style.backgroundColor = color1;
    document.querySelectorAll(".column1, .column2").forEach(e => { e.style.background = color1 });
    document.querySelectorAll("td").forEach(e => { e.style.color = color2 });
    document.querySelectorAll("a, font").forEach(e => { e.style.color = color3 });
    document.querySelectorAll(".user_class, .vip_class").forEach(e => { e.style.color = color3 });
    document.querySelectorAll(".framecorner, .framebar").forEach(e => { e.style.backgroundImage = "none" });
}

function addPepe() {
    let links = [[
        "https://newheaven.nl/files/imagecache/63726_pepe-001.gif",
        "https://newheaven.nl/files/imagecache/63726_pepe-002.png",
        "https://newheaven.nl/files/imagecache/63726_pepe-003.gif",
        "https://newheaven.nl/files/imagecache/63726_pepe-004.gif",
        "https://newheaven.nl/files/imagecache/63726_pepe-005.png",
        "https://newheaven.nl/files/imagecache/63726_pepe-006.png",
        "https://newheaven.nl/files/imagecache/63726_pepe-007.png",
        "https://newheaven.nl/files/imagecache/63726_pepe-008.png",
        "https://newheaven.nl/files/imagecache/63726_pepe-009.gif",
        "https://newheaven.nl/files/imagecache/63726_pepe-010.png",
        "https://newheaven.nl/files/imagecache/63726_pepe-011.gif",
        "https://newheaven.nl/files/imagecache/63726_pepe-012.png",
        "https://newheaven.nl/files/imagecache/63726_pepe-013.png",
        "https://newheaven.nl/files/imagecache/63726_pepe-014.gif",
        "https://newheaven.nl/files/imagecache/63726_pepe-015.png",
        "https://newheaven.nl/files/imagecache/63726_pepe-016.gif",
        "https://newheaven.nl/files/imagecache/63726_pepe-017.gif",
        "https://newheaven.nl/files/imagecache/63726_pepe-018.gif",
        "https://newheaven.nl/files/imagecache/63726_pepe-019.png",
        "https://newheaven.nl/files/imagecache/63726_pepe-020.gif"
    ], [
        "https://newheaven.nl/files/imagecache/63726_pepe-021.gif",
        "https://newheaven.nl/files/imagecache/63726_pepe-022.gif",
        "https://newheaven.nl/files/imagecache/63726_pepe-023.gif",
        "https://newheaven.nl/files/imagecache/63726_pepe-024.gif",
        "https://newheaven.nl/files/imagecache/63726_pepe-025.gif",
        "https://newheaven.nl/files/imagecache/63726_pepe-026.gif",
        "https://newheaven.nl/files/imagecache/56594_pepePoint.png",
        "https://newheaven.nl/files/imagecache/56594_bigPls.gif",
        "https://newheaven.nl/files/imagecache/63726_smilie_wet_175.gif"
    ]];
    let std = document.querySelector('[title=":)"]');
    let tb = getNthParent(std, 3);
    if (tb != null) {
        let title_index = 1;
        for (let i = 0; i < links.length; i++) {
            const row_e = links[i];
            let tr = document.createElement("tr");
            tr.appendChild(document.createElement("td"));
            for (let j = 0; j < row_e.length; j++) {
                const col_e = row_e[j];
                addTd(tr, col_e, col_e, title_index);
                title_index++;
            }
            tb.appendChild(tr);
        }

        let ifr = this.window.top.document.querySelector('[name="shoutbox"]');
        ifr.setAttribute("height", parseInt(ifr.getAttribute("height")) + (links.length - 0) * 32);
    }
}

function getNthParent(elem, i) {
    if (elem == null) {
        return null;
    }
    if (i <= 0) {
        return elem;
    }
    return getNthParent(elem.parentElement, i - 1);
}

function addTd(tr, src, text, title) {
    let td = document.createElement("td");
    let img = document.createElement("img");
    img.src = src;
    img.width = 20;
    img.height = 20;
    img.setAttribute("onclick", "setTag('[IMG]" + text + "[/IMG]');");
    img.title = title;
    td.appendChild(img);
    tr.appendChild(td);
}

function add_4k() {
    document.querySelectorAll("img").forEach(e => {
        if (e.src == "https://newheaven.nl/images/categories/9/2_109.gif") {
            e.src = "https://newheaven.nl/files/imagecache/63726_29907_2160p.png";
        }
        if (e.src == "https://newheaven.nl/images/categories/9/4_110.gif") {
            e.src = "https://newheaven.nl/files/imagecache/63726_29907_2160p_TV.png";
        }
    });
}
