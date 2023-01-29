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

let links = [["https://newheaven.nl/files/imagecache/63726_pepe-001.gif", 28, 28], ["https://newheaven.nl/files/imagecache/63733_pepe-095.gif", 28, 28], ["https://newheaven.nl/files/imagecache/63726_pepe-002.png", 28, 28], ["https://newheaven.nl/files/imagecache/63726_pepe-003.gif", 28, 28], ["https://newheaven.nl/files/imagecache/63726_pepe-004.gif", 28, 28], ["https://newheaven.nl/files/imagecache/63733_pepe-096.gif", 35, 34], ["https://newheaven.nl/files/imagecache/63726_pepe-005.png", 25, 25], ["https://newheaven.nl/files/imagecache/63733_pepe-119.gif", 32, 32], ["https://newheaven.nl/files/imagecache/63726_pepe-006.png", 28, 28], ["https://newheaven.nl/files/imagecache/63726_pepe-007.png", 28, 28], ["https://newheaven.nl/files/imagecache/63726_pepe-008.png", 28, 28], ["https://newheaven.nl/files/imagecache/63726_pepe-009.gif", 28, 27], ["https://newheaven.nl/files/imagecache/63726_pepe-010.png", 28, 28], ["https://newheaven.nl/files/imagecache/63726_pepe-011.gif", 28, 28], ["https://newheaven.nl/files/imagecache/63726_pepe-012.png", 28, 28], ["https://newheaven.nl/files/imagecache/63726_pepe-013.png", 28, 28], ["https://newheaven.nl/files/imagecache/63733_pepe-080.png", 28, 28], ["https://newheaven.nl/files/imagecache/63733_pepe-081.png", 28, 28], ["https://newheaven.nl/files/imagecache/63733_pepe-082.png", 28, 28], ["https://newheaven.nl/files/imagecache/63733_pepe-083.png", 28, 28], ["https://newheaven.nl/files/imagecache/63733_pepe-084.png", 28, 28], ["https://newheaven.nl/files/imagecache/63733_pepe-097.gif", 32, 32], ["https://newheaven.nl/files/imagecache/63733_pepe-098.gif", 32, 32], ["https://newheaven.nl/files/imagecache/63733_pepe-100.gif", 32, 32], ["https://newheaven.nl/files/imagecache/63733_pepe-088.gif", 35, 34], ["https://newheaven.nl/files/imagecache/63733_pepe-089.gif", 30, 32], ["https://newheaven.nl/files/imagecache/63733_pepe-087.gif", 44, 44], ["https://newheaven.nl/files/imagecache/63733_pepe-091.gif", 30, 32], ["https://newheaven.nl/files/imagecache/63733_pepe-092.gif", 30, 32], ["https://newheaven.nl/files/imagecache/63733_pepe-093.gif", 30, 32], ["https://newheaven.nl/files/imagecache/63726_pepe-014.gif", 21, 28], ["https://newheaven.nl/files/imagecache/63726_pepe-015.png", 28, 28], ["https://newheaven.nl/files/imagecache/63726_pepe-016.gif", 28, 28], ["https://newheaven.nl/files/imagecache/63726_pepe-017.gif", 28, 28], ["https://newheaven.nl/files/imagecache/63726_pepe-018.gif", 28, 28], ["https://newheaven.nl/files/imagecache/63726_pepe-019.png", 28, 28], ["https://newheaven.nl/files/imagecache/63733_pepe-099.gif", 35, 34], ["https://newheaven.nl/files/imagecache/63726_pepe-020.gif", 28, 28], ["https://newheaven.nl/files/imagecache/63726_pepe-021.gif", 28, 28], ["https://newheaven.nl/files/imagecache/63733_pepe-101.gif", 32, 32], ["https://newheaven.nl/files/imagecache/63733_pepe-102.gif", 32, 32], ["https://newheaven.nl/files/imagecache/63733_pepe-110.gif", 32, 32], ["https://newheaven.nl/files/imagecache/63733_pepe-111.gif", 32, 32], ["https://newheaven.nl/files/imagecache/63733_pepe-120.gif", 32, 32], ["https://newheaven.nl/files/imagecache/63733_pepe-112.gif", 32, 32], ["https://newheaven.nl/files/imagecache/63733_pepe-113.gif", 32, 32], ["https://newheaven.nl/files/imagecache/63733_pepe-114.gif", 32, 32], ["https://newheaven.nl/files/imagecache/63733_pepe-115.gif", 32, 32], ["https://newheaven.nl/files/imagecache/63733_pepe-116.gif", 32, 32], ["https://newheaven.nl/files/imagecache/63733_pepe-118.gif", 32, 32], ["https://newheaven.nl/files/imagecache/63733_pepe-103.gif", 32, 32], ["https://newheaven.nl/files/imagecache/63733_pepe-104.gif", 32, 32], ["https://newheaven.nl/files/imagecache/63733_pepe-105.gif", 32, 32], ["https://newheaven.nl/files/imagecache/63733_pepe-106.gif", 32, 32], ["https://newheaven.nl/files/imagecache/63733_pepe-107.gif", 32, 32], ["https://newheaven.nl/files/imagecache/63733_pepe-108.gif", 32, 32], ["https://newheaven.nl/files/imagecache/63726_pepe-022.gif", 28, 28], ["https://newheaven.nl/files/imagecache/63726_pepe-023.gif", 28, 28], ["https://newheaven.nl/files/imagecache/63726_pepe-024.gif", 28, 28], ["https://newheaven.nl/files/imagecache/63726_pepe-025.gif", 28, 28], ["https://newheaven.nl/files/imagecache/63726_pepe-026.gif", 28, 28], ["https://newheaven.nl/files/imagecache/56594_pepePoint.png", 32, 32], ["https://newheaven.nl/files/imagecache/56594_bigPls.gif", 28, 28], ["https://newheaven.nl/files/imagecache/63726_smilie_wet_175.gif", 46, 24], ["https://newheaven.nl/files/imagecache/63733_pepe-069.gif", 50, 46], ["https://newheaven.nl/files/imagecache/63733_pepe-070.gif", 28, 28], ["https://newheaven.nl/files/imagecache/63733_pepe-071.gif", 88, 19], ["https://newheaven.nl/files/imagecache/63733_pepe-072.gif", 48, 30], ["https://newheaven.nl/files/imagecache/63733_pepe-073.gif", 81, 26], ["https://newheaven.nl/files/imagecache/63733_pepe-074.gif", 40, 25], ["https://newheaven.nl/files/imagecache/63733_pepe-075.gif", 18, 18], ["https://newheaven.nl/files/imagecache/63733_pepe-076.gif", 41, 40], ["https://newheaven.nl/files/imagecache/63733_pepe-077.gif", 26, 18], ["https://newheaven.nl/files/imagecache/63733_pepe-078.gif", 36, 29], ["https://newheaven.nl/files/imagecache/63733_pepe-079.gif", 42, 32], ["https://newheaven.nl/files/imagecache/63733_pepe-094.gif", 36, 26], ["https://newheaven.nl/files/imagecache/63733_pepe-109.gif", 32, 32], ["https://newheaven.nl/files/imagecache/63733_pepe-121.gif", 32, 32], ["https://newheaven.nl/files/imagecache/63733_pepe-122.gif", 32, 32], ["https://newheaven.nl/files/imagecache/63733_pepe-123.gif", 32, 32], ["https://newheaven.nl/files/imagecache/63733_pepe-124.gif", 32, 32], ["https://newheaven.nl/files/imagecache/63733_pepe-125.gif", 32, 32], ["https://newheaven.nl/files/imagecache/63733_pepe-126.gif", 32, 32], ["https://newheaven.nl/files/imagecache/63733_pepe-127.gif", 32, 32], ["https://newheaven.nl/files/imagecache/63733_pepe-128.gif", 32, 32], ["https://newheaven.nl/files/imagecache/63733_pepe-129.gif", 32, 32], ["https://newheaven.nl/files/imagecache/63733_pepe-130.gif", 32, 32], ["https://newheaven.nl/files/imagecache/63733_pepe-131.gif", 32, 32], ["https://newheaven.nl/files/imagecache/63733_pepe-132.gif", 32, 32], ["https://newheaven.nl/files/imagecache/63733_pepe-133.gif", 32, 32], ["https://newheaven.nl/files/imagecache/63733_pepe-134.gif", 32, 32], ["https://newheaven.nl/files/imagecache/63733_pepe-135.gif", 32, 32], ["https://newheaven.nl/files/imagecache/63733_pepe-136.gif", 32, 32], ["https://newheaven.nl/files/imagecache/63733_pepe-137.gif", 41, 36], ["https://newheaven.nl/files/imagecache/63733_pepe-117.gif", 32, 32], ["https://newheaven.nl/files/imagecache/56594_peepoCoffee.gif", 32, 32], ["https://newheaven.nl/files/imagecache/63733_pepe-139.gif", 32, 32], ["https://newheaven.nl/files/imagecache/63733_pepe-140.gif", 32, 32], ["https://newheaven.nl/files/imagecache/63733_pepe-141.gif", 32, 32], ["https://newheaven.nl/files/imagecache/63733_pepe-142.gif", 32, 32], ["https://newheaven.nl/files/imagecache/63733_pepe-143.gif", 32, 32], ["https://newheaven.nl/files/imagecache/63733_pepe-144.gif", 32, 32], ["https://newheaven.nl/files/imagecache/63733_pepe-145.gif", 32, 32], ["https://newheaven.nl/files/imagecache/63733_pepe-146.gif", 32, 32], ["https://newheaven.nl/files/imagecache/63733_pepe-147.gif", 32, 32], ["https://newheaven.nl/files/imagecache/63733_pepe-148.gif", 32, 32], ["https://newheaven.nl/files/imagecache/63733_pepe-149.gif", 32, 32], ["https://newheaven.nl/files/imagecache/63733_pepe-150.gif", 32, 32], ["https://newheaven.nl/files/imagecache/63733_pepe-151.gif", 32, 32], ["https://newheaven.nl/files/imagecache/63733_pepe-152.gif", 32, 32], ["https://newheaven.nl/files/imagecache/63733_pepe-153.gif", 32, 32], ["https://newheaven.nl/files/imagecache/63733_pepe-154.gif", 32, 32], ["https://newheaven.nl/files/imagecache/63733_pepe-155.gif", 32, 32], ["https://newheaven.nl/files/imagecache/63733_pepe-156.gif", 32, 32], ["https://newheaven.nl/files/imagecache/63733_pepe-157.gif", 32, 32], ["https://newheaven.nl/files/imagecache/63733_pepe-158.gif", 32, 32], ["https://newheaven.nl/files/imagecache/63733_pepe-160.gif", 64, 64], ["https://newheaven.nl/files/imagecache/63733_pepe-161.gif", 64, 64], ["https://newheaven.nl/files/imagecache/63733_pepe-163.gif", 64, 64], ["https://newheaven.nl/files/imagecache/63733_pepe-164.gif", 64, 64], ["https://newheaven.nl/files/imagecache/63733_pepe-165.gif", 64, 64], ["https://newheaven.nl/files/imagecache/63733_pepe-159.gif", 64, 64], ["https://newheaven.nl/files/imagecache/63837_piratenboot.gif", 140, 130], ["https://newheaven.nl/files/imagecache/60835_na6otob9r4t.gif", 23, 29], ["https://newheaven.nl/files/imagecache/60835_jo6a6witkjw.gif", 56, 29], ["https://newheaven.nl/files/imagecache/60835_brbngzd0q4c.gif", 96, 26], ["https://newheaven.nl/files/imagecache/63837_pirate.gif", 42, 42], ["https://newheaven.nl/files/imagecache/63837_coffeem.gif", 29, 30], ["https://newheaven.nl/files/imagecache/63837_yawnm.gif", 20, 23], ["https://newheaven.nl/files/imagecache/63837_shoot.gif", 120, 20], ["https://newheaven.nl/files/imagecache/63837_pirate2.gif", 25, 25], ["https://newheaven.nl/files/imagecache/63837_wave2.gif", 26, 18], ["https://newheaven.nl/files/imagecache/63837_0579.gif", 34, 26], ["https://newheaven.nl/files/imagecache/63837_0529.gif", 113, 65], ["https://newheaven.nl/files/imagecache/63837_0564.gif", 109, 33], ["https://newheaven.nl/files/imagecache/63837_santa.gif", 20, 22], ["https://newheaven.nl/files/imagecache/63837_user%20delete.gif", 80, 80], ["https://newheaven.nl/files/imagecache/63837_97c4247b2d741ff6c721f26cda5a48ef.gif", 69, 46], ["https://newheaven.nl/files/imagecache/63837_rarschleppen.gif", 24, 42], ["https://newheaven.nl/files/imagecache/63837_3e22be6fc7ac0a317defd06f7d4a87de.gif", 75, 86], ["https://newheaven.nl/files/imagecache/63837_rip.gif", 43, 34], ["https://newheaven.nl/files/imagecache/63837_censored.gif", 48, 18], ["https://newheaven.nl/files/imagecache/63837_0424.gif", 43, 27], ["https://newheaven.nl/files/imagecache/63837_0567.gif", 40, 30], ["https://newheaven.nl/files/imagecache/63837_whiteflag.gif", 54, 40], ["https://newheaven.nl/files/imagecache/63837_doppelbatsch.gif", 100, 50], ["https://newheaven.nl/files/imagecache/63837_007.gif", 126, 56], ["https://newheaven.nl/files/imagecache/63837_explode.gif", 48, 112], ["https://newheaven.nl/files/imagecache/63837_hmmm.gif", 25, 23], ["https://newheaven.nl/files/imagecache/63837_0538.gif", 60, 55], ["https://newheaven.nl/files/imagecache/63837_furz.gif", 37, 25], ["https://newheaven.nl/files/imagecache/63837_0441.gif", 50, 22], ["https://newheaven.nl/files/imagecache/63837_7b3cdb2918bc7511686ccfbd5ab0870c.gif", 66, 26], ["https://newheaven.nl/files/imagecache/60835_yovyor4rxqf.gif", 50, 40], ["https://newheaven.nl/files/imagecache/60835_am7sukwngj.gif", 188, 46], ["https://newheaven.nl/files/imagecache/60835_korx8xguvk2.gif", 153, 29], ["https://newheaven.nl/files/imagecache/60835_tdq5oxvc2d0.gif", 39, 29], ["https://newheaven.nl/files/imagecache/60835_5lb782jhyu5.gif", 234, 109], ["https://newheaven.nl/files/imagecache/60835_2qshsmhe3j9.gif", 58, 51], ["https://newheaven.nl/files/imagecache/60835_ouecny3owqv.gif", 48, 34], ["https://newheaven.nl/files/imagecache/60835_iv3q20c6fue.gif", 39, 22], ["https://newheaven.nl/files/imagecache/60835_o6qy11a0gnr.gif", 80, 60], ["https://newheaven.nl/files/imagecache/60835_hl3qylku3jn.gif", 76, 51], ["https://newheaven.nl/files/imagecache/60835_o6ujjd9fwic.gif", 68, 48], ["https://newheaven.nl/files/imagecache/60835_cmnjri326fn.gif", 41, 49], ["https://newheaven.nl/files/imagecache/60835_jo6a6witkjw.gif", 56, 29], ["https://newheaven.nl/files/imagecache/60835_b3wecnal8r7.gif", 63, 60], ["https://newheaven.nl/files/imagecache/60835_6sy27m11231.gif", 69, 46], ["https://newheaven.nl/files/imagecache/60835_mwrel634yyk.gif", 60, 34], ["https://newheaven.nl/files/imagecache/60835_0eadb9tf3sj.gif", 27, 27], ["https://newheaven.nl/files/imagecache/60835_j9z3hg5fx8r.gif", 104, 67], ["https://newheaven.nl/files/imagecache/60835_xntkyxe3mk7.gif", 50, 35], ["https://newheaven.nl/files/imagecache/60835_na6otob9r4t.gif", 23, 29], ["https://newheaven.nl/files/imagecache/60835_uriwd79j509.gif", 136, 81], ["https://newheaven.nl/files/imagecache/60835_j1v404ijrbp.gif", 92, 45], ["https://newheaven.nl/files/imagecache/60835_m1l1my18m6u.gif", 48, 34], ["https://newheaven.nl/files/imagecache/60835_zntmbpn9kcd.gif", 118, 75], ["https://newheaven.nl/files/imagecache/60835_upkmua9u4zx.gif", 114, 44], ["https://newheaven.nl/files/imagecache/60835_krvlvl6n2di.gif", 97, 43], ["https://newheaven.nl/files/imagecache/60835_w7j8d2b27b8.gif", 98, 60], ["https://newheaven.nl/files/imagecache/60835_ha2xo4bmnw0.gif", 67, 62], ["https://newheaven.nl/files/imagecache/60835_4lfkh3dczw2.gif", 35, 30], ["https://newheaven.nl/files/imagecache/60835_7wkeiyd4s4r.gif", 79, 55], ["https://newheaven.nl/files/imagecache/60835_4ycax4rze0t.gif", 74, 32], ["https://newheaven.nl/files/imagecache/60835_lvyj29uy41w.gif", 89, 40], ["https://newheaven.nl/files/imagecache/60835_qpscbjc8np1.gif", 120, 44], ["https://newheaven.nl/files/imagecache/60835_1ze6f5a9qv0.gif", 48, 51], ["https://newheaven.nl/files/imagecache/60835_6p7wagn8zb9.gif", 71, 53], ["https://newheaven.nl/files/imagecache/60835_rn3tshdb8tu.gif", 120, 100], ["https://newheaven.nl/files/imagecache/60835_ycdy3qc1fdp.gif", 93, 54], ["https://newheaven.nl/files/imagecache/60835_ukvaf7lmnx0.gif", 64, 51], ["https://newheaven.nl/files/imagecache/60835_83yak1h0vun.gif", 43, 36], ["https://newheaven.nl/files/imagecache/60835_hase.gif", 74, 54], ["https://newheaven.nl/files/imagecache/60835_chill.gif", 59, 34], ["https://newheaven.nl/files/imagecache/60835_x7y3azegxgz.gif", 19, 18], ["https://newheaven.nl/files/imagecache/60835_gtfqbjst0pm.gif", 77, 30], ["https://newheaven.nl/files/imagecache/60835_ejfsvutvlev.gif", 47, 59], ["https://newheaven.nl/files/imagecache/60835_0foyaxkep1g.gif", 58, 40], ["https://newheaven.nl/files/imagecache/60835_5yg0xzhapod.gif", 86, 86], ["https://newheaven.nl/files/imagecache/60835_ufb3847f1hj.gif", 56, 34]];
let table1 = null;
let table2 = null;
let standardHeight = null;
const newHeight = 860;

(function () {
  "use strict";
  // uncomment this, if needed:
  // swapInput();

  addPepe();
  add_4k();
  addSwitchStyle();
})();

function addSwitchStyle() {
  let select = document.querySelector('select[name="theme"]');
  if (select != null) {
    let opt = document.createElement("option");
    opt.value = 9;
    opt.innerHTML = "Custom by Logi";
    select.onchange = styleClick;
    select.appendChild(opt);
    if (localStorage.shouldStyleSet && localStorage.shouldStyleSet == 1) {
      select.value = 9;
    }
  }
  if (!localStorage.shouldStyleSet) {
    // init:
    localStorage.shouldStyleSet = 0;
  }
  if (localStorage.shouldStyleSet == 1) {
    setStyle();
  }
}

function styleClick() {
  let select = document.querySelector('select[name="theme"]');
  if (localStorage.shouldStyleSet && select != null && select.value == 9) {
    // select black & white... select Logi... and reload site again...:
    localStorage.shouldStyleSet = 0;
    select.value = 1;
    document.detailbox.submit();
    localStorage.shouldStyleSet = 1;
    select.value = 9;
    setStyle();
  } else {
    localStorage.shouldStyleSet = 0;
    document.detailbox.submit();
  }
}

function setStyle() {
  // choose background color:
  let color1 = "#454545";
  // let color1 = "SlateGray";

  let color2 = "LightGray";
  let color3 = "#DDCCBB";
  document.body.style.backgroundColor = color1;
  document.querySelectorAll(".column1, .column2").forEach((e) => {
    e.style.background = color1;
  });
  document.querySelectorAll("td").forEach((e) => {
    e.style.color = color2;
  });
  document.querySelectorAll("a, font").forEach((e) => {
    e.style.color = color3;
  });
  document.querySelectorAll(".user_class, .vip_class").forEach((e) => {
    e.style.color = color3;
  });
  document.querySelectorAll(".framecorner, .framebar").forEach((e) => {
    e.style.backgroundImage = "none";
  });

  // uncomment this, if the font size should be increased:
  // document.querySelectorAll("font, td").forEach(e => { e.style.fontSize = "9pt" });
}

function swapInput() {
  let msg = document.querySelector("#message");
  let tbl = getNthParent(msg, 4);
  if (tbl != null) {
    let row1 = tbl.rows[tbl.rows.length - 2].cloneNode(true);
    tbl.deleteRow(tbl.rows.length - 2);
    let row2 = tbl.insertRow(-1);
    row2.innerHTML = row1.innerHTML;
  }
}

async function preloadImages(array) {
  let s = "";
  for (let i = 0; i < array.length; i++) {
    const e = array[i];
    let img = new Image();
    await new Promise((resolve, reject) => {
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = e;
    });
    s += '[ "' + e + '", ' + img.width + ', ' + img.height + ' ], ';
  }
  console.log(s);
}

function addPepe() {
  showPepe();
  hidePepe();
}

function getWidth(link) {
  let w = link[1];
  let h = link[2];
  let f = 0.95;
  if (w >= h) {
    f *= 20.0 / h;
  } else {
    f *= 20.0 / w;
  }
  return Math.round(w * f);
}

function getHeight(link) {
  let w = link[1];
  let h = link[2];
  let f = 0.95;
  if (w >= h) {
    f *= 20.0 / h;
  } else {
    f *= 20.0 / w;
  }
  return Math.round(h * f);
}

function initLinks() {
  // Should be divisible by 25 without remainder:
  console.log(links.length);

  const w = 25;
  const h = links.length / w;
  links.sort(function (a, b) {
    return getWidth(a) - getWidth(b);
  });
  let newLinks = [];
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      let idx = j * h + i;
      if (idx < links.length) {
        newLinks.push(links[idx]);
      }
    }
  }

  let newLinks2 = [];
  while (newLinks.length) {
    newLinks2.push(newLinks.splice(0, 25));
  }
  links = newLinks2;
}

function showPepe() {
  if (table1 == null) {
    let std = document.querySelector('[title=":)"]');
    let tbl = getNthParent(std, 4);
    if (tbl != null) {
      table1 = tbl.cloneNode(true);
    }
  }
  if (table2 == null) {
    let std = document.querySelector('[title=":)"]');
    let tb = getNthParent(std, 3);
    if (tb != null) {
      initLinks();
      let newRows = [];
      let title_index = 1;
      for (let i = 0; i < links.length; i++) {
        const row_e = links[i];
        tb.appendChild(document.createElement("tr"));
        let tr = document.createElement("tr");
        for (let j = 0; j < row_e.length; j++) {
          const col_e = row_e[j];
          addTd(tr, col_e[0], col_e[1], col_e[2], title_index);
          title_index++;
        }
        tb.appendChild(tr);
        newRows.push(tr);
      }
      resizeTds(newRows);

      let tbl = getNthParent(std, 4);
      if (tbl != null) {
        table2 = tbl.cloneNode(true);

        addSwitch(0, 1);

        let ifr = window.top.document.querySelector('[name="shoutbox"]');
        if (ifr != null) {
          standardHeight = ifr.getAttribute("height");
          ifr.setAttribute("height", newHeight);
        }
      }
    }
  } else {
    let std = document.querySelector('[title=":)"]');
    let tbl = getNthParent(std, 4);
    if (tbl != null) {
      tbl.innerHTML = table2.innerHTML;

      addSwitch(0, 1);

      let ifr = window.top.document.querySelector('[name="shoutbox"]');
      if (ifr != null) {
        ifr.setAttribute("height", newHeight);
      }
    }
  }
}

function hidePepe() {
  if (table1 != null) {
    let std = document.querySelector('[title=":)"]');
    let tbl = getNthParent(std, 4);
    if (tbl != null) {
      tbl.innerHTML = table1.innerHTML;

      addSwitch(1, 1);

      let ifr = window.top.document.querySelector('[name="shoutbox"]');
      if (ifr != null) {
        ifr.setAttribute("height", standardHeight);
      }
    }
  }
}

function addSwitch(mode, index) {
  let std = document.querySelector('[title=":)"]');
  let tbl = getNthParent(std, 4);
  if (tbl != null) {
    let rows = tbl.rows;
    let r = rows[index];
    let c = r.insertCell(-1);

    let a = document.createElement("a");
    a.href = "#";
    if (mode == 0) {
      a.text = "hide";
      a.addEventListener("click", hidePepe);
    } else {
      a.text = "show";
      a.addEventListener("click", showPepe);
    }
    c.appendChild(a);
  }
}

function getNthParent(elem, i) {
  if (elem == null) {
    return null;
  }
  if (i <= 0) {
    return elem;
  }
  return getNthParent(elem.parentNode, i - 1);
}

function addTd(tr, src, width, height, title) {
  let td = document.createElement("td");
  let img = document.createElement("img");
  td.style.textAlign = "center";
  td.style.verticalAlign = "middle";
  img.src = src;
  img.width = getWidth([0,width,height]);
  img.height = getHeight([0,width,height]);
  img.setAttribute("onclick", "setTag('[IMG]" + src + "[/IMG]');");
  img.title = title;
  td.appendChild(img);
  tr.appendChild(td);
}

function resizeTds(rows) {
  for (let i = 0; i < rows.length; i++) {
    let r = rows[i];
    while (r.cells.length < 30) {
      r.insertCell(-1);
    }
    r.cells[22].colSpan = "2";
    r.cells[23].colSpan = "3";
    r.cells[24].colSpan = "3";
  }
}

function add_4k() {
  document.querySelectorAll("img").forEach((e) => {
    if (e.src == "https://newheaven.nl/images/categories/9/2_109.gif") {
      e.src = "https://newheaven.nl/files/imagecache/63726_29907_2160p.png";
    }
    if (e.src == "https://newheaven.nl/images/categories/9/4_110.gif") {
      e.src = "https://newheaven.nl/files/imagecache/63726_29907_2160p_TV.png";
    }
  });
}
