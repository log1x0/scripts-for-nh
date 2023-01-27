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

const links = [
  [
    "https://newheaven.nl/files/imagecache/63726_pepe-001.gif",
    "https://newheaven.nl/files/imagecache/63733_pepe-095.gif",
    "https://newheaven.nl/files/imagecache/63726_pepe-002.png",
    "https://newheaven.nl/files/imagecache/63726_pepe-003.gif",
    "https://newheaven.nl/files/imagecache/63726_pepe-004.gif",
    "https://newheaven.nl/files/imagecache/63733_pepe-096.gif",
    "https://newheaven.nl/files/imagecache/63726_pepe-005.png",
    "https://newheaven.nl/files/imagecache/63733_pepe-119.gif",
    "https://newheaven.nl/files/imagecache/63726_pepe-006.png",
    "https://newheaven.nl/files/imagecache/63726_pepe-007.png",
    "https://newheaven.nl/files/imagecache/63726_pepe-008.png",
    "https://newheaven.nl/files/imagecache/63726_pepe-009.gif",
    "https://newheaven.nl/files/imagecache/63726_pepe-010.png",
    "https://newheaven.nl/files/imagecache/63726_pepe-011.gif",
    "https://newheaven.nl/files/imagecache/63726_pepe-012.png",
    "https://newheaven.nl/files/imagecache/63726_pepe-013.png",
    "https://newheaven.nl/files/imagecache/63733_pepe-080.png",
    "https://newheaven.nl/files/imagecache/63733_pepe-081.png",
    "https://newheaven.nl/files/imagecache/63733_pepe-082.png",
    "https://newheaven.nl/files/imagecache/63733_pepe-083.png",
    "https://newheaven.nl/files/imagecache/63733_pepe-084.png",
    "https://newheaven.nl/files/imagecache/63733_pepe-097.gif",
    "https://newheaven.nl/files/imagecache/63733_pepe-098.gif",
    "https://newheaven.nl/files/imagecache/63733_pepe-100.gif",
    "https://newheaven.nl/files/imagecache/63733_pepe-088.gif",
    "https://newheaven.nl/files/imagecache/63733_pepe-089.gif",
    "https://newheaven.nl/files/imagecache/63733_pepe-087.gif",
    "https://newheaven.nl/files/imagecache/63733_pepe-091.gif",
    "https://newheaven.nl/files/imagecache/63733_pepe-092.gif",
    "https://newheaven.nl/files/imagecache/63733_pepe-093.gif",
  ],
  [
    "https://newheaven.nl/files/imagecache/63726_pepe-014.gif",
    "https://newheaven.nl/files/imagecache/63726_pepe-015.png",
    "https://newheaven.nl/files/imagecache/63726_pepe-016.gif",
    "https://newheaven.nl/files/imagecache/63726_pepe-017.gif",
    "https://newheaven.nl/files/imagecache/63726_pepe-018.gif",
    "https://newheaven.nl/files/imagecache/63726_pepe-019.png",
    "https://newheaven.nl/files/imagecache/63733_pepe-099.gif",
    "https://newheaven.nl/files/imagecache/63726_pepe-020.gif",
    "https://newheaven.nl/files/imagecache/63726_pepe-021.gif",
    "https://newheaven.nl/files/imagecache/63733_pepe-101.gif",
    "https://newheaven.nl/files/imagecache/63733_pepe-102.gif",
    "https://newheaven.nl/files/imagecache/63733_pepe-110.gif",
    "https://newheaven.nl/files/imagecache/63733_pepe-111.gif",
    "https://newheaven.nl/files/imagecache/63733_pepe-120.gif",
    "https://newheaven.nl/files/imagecache/63733_pepe-112.gif",
    "https://newheaven.nl/files/imagecache/63733_pepe-113.gif",
    "https://newheaven.nl/files/imagecache/63733_pepe-114.gif",
    "https://newheaven.nl/files/imagecache/63733_pepe-115.gif",
    "https://newheaven.nl/files/imagecache/63733_pepe-116.gif",
    "https://newheaven.nl/files/imagecache/63733_pepe-118.gif",
    "https://newheaven.nl/files/imagecache/63733_pepe-103.gif",
    "https://newheaven.nl/files/imagecache/63733_pepe-104.gif",
    "https://newheaven.nl/files/imagecache/63733_pepe-105.gif",
    "https://newheaven.nl/files/imagecache/63733_pepe-106.gif",
    "https://newheaven.nl/files/imagecache/63733_pepe-107.gif",
    "https://newheaven.nl/files/imagecache/63733_pepe-108.gif",
    "https://newheaven.nl/files/imagecache/63726_pepe-022.gif",
    "https://newheaven.nl/files/imagecache/63726_pepe-023.gif",
    "https://newheaven.nl/files/imagecache/63726_pepe-024.gif",
    "https://newheaven.nl/files/imagecache/63726_pepe-025.gif",
  ],
  [
    "https://newheaven.nl/files/imagecache/63726_pepe-026.gif",
    "https://newheaven.nl/files/imagecache/56594_pepePoint.png",
    "https://newheaven.nl/files/imagecache/56594_bigPls.gif",
    "https://newheaven.nl/files/imagecache/63726_smilie_wet_175.gif",
    "https://newheaven.nl/files/imagecache/63733_pepe-069.gif",
    "https://newheaven.nl/files/imagecache/63733_pepe-070.gif",
    "https://newheaven.nl/files/imagecache/63733_pepe-071.gif",
    "https://newheaven.nl/files/imagecache/63733_pepe-072.gif",
    "https://newheaven.nl/files/imagecache/63733_pepe-073.gif",
    "https://newheaven.nl/files/imagecache/63733_pepe-074.gif",
    "https://newheaven.nl/files/imagecache/63733_pepe-075.gif",
    "https://newheaven.nl/files/imagecache/63733_pepe-076.gif",
    "https://newheaven.nl/files/imagecache/63733_pepe-077.gif",
    "https://newheaven.nl/files/imagecache/63733_pepe-078.gif",
    "https://newheaven.nl/files/imagecache/63733_pepe-079.gif",
    "https://newheaven.nl/files/imagecache/63733_pepe-094.gif",
    "https://newheaven.nl/files/imagecache/63733_pepe-109.gif",
    "https://newheaven.nl/files/imagecache/63733_pepe-121.gif",
    "https://newheaven.nl/files/imagecache/63733_pepe-122.gif",
    "https://newheaven.nl/files/imagecache/63733_pepe-123.gif",
    "https://newheaven.nl/files/imagecache/63733_pepe-124.gif",
    "https://newheaven.nl/files/imagecache/63733_pepe-125.gif",
    "https://newheaven.nl/files/imagecache/63733_pepe-126.gif",
    "https://newheaven.nl/files/imagecache/63733_pepe-127.gif",
    "https://newheaven.nl/files/imagecache/63733_pepe-128.gif",
    "https://newheaven.nl/files/imagecache/63733_pepe-129.gif",
    "https://newheaven.nl/files/imagecache/63733_pepe-130.gif",
    "https://newheaven.nl/files/imagecache/63733_pepe-131.gif",
    "https://newheaven.nl/files/imagecache/63733_pepe-132.gif",
    "https://newheaven.nl/files/imagecache/63733_pepe-133.gif",
  ],
  [
    "https://newheaven.nl/files/imagecache/63733_pepe-134.gif",
    "https://newheaven.nl/files/imagecache/63733_pepe-135.gif",
    "https://newheaven.nl/files/imagecache/63733_pepe-136.gif",
    "https://newheaven.nl/files/imagecache/63733_pepe-137.gif",
    "https://newheaven.nl/files/imagecache/63733_pepe-117.gif",
    "https://newheaven.nl/files/imagecache/56594_peepoCoffee.gif",
    "https://newheaven.nl/files/imagecache/63733_pepe-139.gif",
    "https://newheaven.nl/files/imagecache/63733_pepe-140.gif",
    "https://newheaven.nl/files/imagecache/63733_pepe-141.gif",
    "https://newheaven.nl/files/imagecache/63733_pepe-142.gif",
    "https://newheaven.nl/files/imagecache/63733_pepe-143.gif",
    "https://newheaven.nl/files/imagecache/63733_pepe-144.gif",
    "https://newheaven.nl/files/imagecache/63733_pepe-145.gif",
    "https://newheaven.nl/files/imagecache/63733_pepe-146.gif",
    "https://newheaven.nl/files/imagecache/63733_pepe-147.gif",
    "https://newheaven.nl/files/imagecache/63733_pepe-148.gif",
    "https://newheaven.nl/files/imagecache/63733_pepe-149.gif",
    "https://newheaven.nl/files/imagecache/63733_pepe-150.gif",
    "https://newheaven.nl/files/imagecache/63733_pepe-151.gif",
    "https://newheaven.nl/files/imagecache/63733_pepe-152.gif",
    "https://newheaven.nl/files/imagecache/63733_pepe-153.gif",
    "https://newheaven.nl/files/imagecache/63733_pepe-154.gif",
    "https://newheaven.nl/files/imagecache/63733_pepe-155.gif",
    "https://newheaven.nl/files/imagecache/63733_pepe-156.gif",
    "https://newheaven.nl/files/imagecache/63733_pepe-157.gif",
    "https://newheaven.nl/files/imagecache/63733_pepe-158.gif",
    "https://newheaven.nl/files/imagecache/63733_pepe-160.gif",
    "https://newheaven.nl/files/imagecache/63733_pepe-161.gif",
    "https://newheaven.nl/files/imagecache/63733_pepe-163.gif",
    "https://newheaven.nl/files/imagecache/63733_pepe-164.gif",
  ],
  [
    "https://newheaven.nl/files/imagecache/63733_pepe-165.gif",
    "https://newheaven.nl/files/imagecache/63733_pepe-159.gif",
    "https://newheaven.nl/files/imagecache/63837_piratenboot.gif",
    "https://newheaven.nl/files/imagecache/60835_na6otob9r4t.gif",
    "https://newheaven.nl/files/imagecache/60835_jo6a6witkjw.gif",
    "https://newheaven.nl/files/imagecache/60835_brbngzd0q4c.gif",
    "https://newheaven.nl/files/imagecache/63837_pirate.gif",
    "https://newheaven.nl/files/imagecache/63837_coffeem.gif",
    "https://newheaven.nl/files/imagecache/63837_yawnm.gif",
    "https://newheaven.nl/files/imagecache/63837_shoot.gif",
    "https://newheaven.nl/files/imagecache/63837_pirate2.gif",
    "https://newheaven.nl/files/imagecache/63837_wave2.gif",
    "https://newheaven.nl/files/imagecache/63837_0579.gif",
    "https://newheaven.nl/files/imagecache/63837_0529.gif",
    "https://newheaven.nl/files/imagecache/63837_0564.gif",
    "https://newheaven.nl/files/imagecache/63837_santa.gif",
    "https://newheaven.nl/files/imagecache/63837_user%20delete.gif",
    "https://newheaven.nl/files/imagecache/63837_97c4247b2d741ff6c721f26cda5a48ef.gif",
    "https://newheaven.nl/files/imagecache/63837_rarschleppen.gif",
    "https://newheaven.nl/files/imagecache/63837_3e22be6fc7ac0a317defd06f7d4a87de.gif",
    "https://newheaven.nl/files/imagecache/63837_rip.gif",
    "https://newheaven.nl/files/imagecache/63837_censored.gif",
    "https://newheaven.nl/files/imagecache/63837_0424.gif",
    "https://newheaven.nl/files/imagecache/63837_0567.gif",
    "https://newheaven.nl/files/imagecache/63837_whiteflag.gif",
    "https://newheaven.nl/files/imagecache/63837_doppelbatsch.gif",
    "https://newheaven.nl/files/imagecache/63837_007.gif",
    "https://newheaven.nl/files/imagecache/63837_explode.gif",
    "https://newheaven.nl/files/imagecache/63837_hmmm.gif",
    "https://newheaven.nl/files/imagecache/63837_0538.gif",
  ],
  [
    "https://newheaven.nl/files/imagecache/63837_furz.gif",
    "https://newheaven.nl/files/imagecache/63837_0441.gif",
    "https://newheaven.nl/files/imagecache/63837_7b3cdb2918bc7511686ccfbd5ab0870c.gif",
    "https://newheaven.nl/files/imagecache/60835_yovyor4rxqf.gif",
    "https://newheaven.nl/files/imagecache/60835_am7sukwngj.gif",
    "https://newheaven.nl/files/imagecache/60835_korx8xguvk2.gif",
    "https://newheaven.nl/files/imagecache/60835_tdq5oxvc2d0.gif",
    "https://newheaven.nl/files/imagecache/60835_5lb782jhyu5.gif",
    "https://newheaven.nl/files/imagecache/60835_2qshsmhe3j9.gif",
    "https://newheaven.nl/files/imagecache/60835_ouecny3owqv.gif",
    "https://newheaven.nl/files/imagecache/60835_iv3q20c6fue.gif",
    "https://newheaven.nl/files/imagecache/60835_o6qy11a0gnr.gif",
    "https://newheaven.nl/files/imagecache/60835_hl3qylku3jn.gif",
    "https://newheaven.nl/files/imagecache/60835_o6ujjd9fwic.gif",
    "https://newheaven.nl/files/imagecache/60835_cmnjri326fn.gif",
    "https://newheaven.nl/files/imagecache/60835_jo6a6witkjw.gif",
    "https://newheaven.nl/files/imagecache/60835_b3wecnal8r7.gif",
    "https://newheaven.nl/files/imagecache/60835_6sy27m11231.gif",
    "https://newheaven.nl/files/imagecache/60835_mwrel634yyk.gif",
    "https://newheaven.nl/files/imagecache/60835_0eadb9tf3sj.gif",
    "https://newheaven.nl/files/imagecache/60835_j9z3hg5fx8r.gif",
    "https://newheaven.nl/files/imagecache/60835_xntkyxe3mk7.gif",
    "https://newheaven.nl/files/imagecache/60835_na6otob9r4t.gif",
    "https://newheaven.nl/files/imagecache/60835_uriwd79j509.gif",
    "https://newheaven.nl/files/imagecache/60835_j1v404ijrbp.gif",
    "https://newheaven.nl/files/imagecache/60835_m1l1my18m6u.gif",
    "https://newheaven.nl/files/imagecache/60835_zntmbpn9kcd.gif",
    "https://newheaven.nl/files/imagecache/60835_upkmua9u4zx.gif",
    "https://newheaven.nl/files/imagecache/60835_krvlvl6n2di.gif",
  ],
  [
    "https://newheaven.nl/files/imagecache/60835_w7j8d2b27b8.gif",
    "https://newheaven.nl/files/imagecache/60835_ha2xo4bmnw0.gif",
    "https://newheaven.nl/files/imagecache/60835_4lfkh3dczw2.gif",
    "https://newheaven.nl/files/imagecache/60835_7wkeiyd4s4r.gif",
    "https://newheaven.nl/files/imagecache/60835_4ycax4rze0t.gif",
    "https://newheaven.nl/files/imagecache/60835_lvyj29uy41w.gif",
    "https://newheaven.nl/files/imagecache/60835_qpscbjc8np1.gif",
    "https://newheaven.nl/files/imagecache/60835_1ze6f5a9qv0.gif",
    "https://newheaven.nl/files/imagecache/60835_6p7wagn8zb9.gif",
    "https://newheaven.nl/files/imagecache/60835_rn3tshdb8tu.gif",
    "https://newheaven.nl/files/imagecache/60835_ycdy3qc1fdp.gif",
    "https://newheaven.nl/files/imagecache/60835_ukvaf7lmnx0.gif",
    "https://newheaven.nl/files/imagecache/60835_83yak1h0vun.gif",
    "https://newheaven.nl/files/imagecache/60835_hase.gif",
    "https://newheaven.nl/files/imagecache/60835_chill.gif",
    "https://newheaven.nl/files/imagecache/60835_x7y3azegxgz.gif",
    "https://newheaven.nl/files/imagecache/60835_gtfqbjst0pm.gif",
    "https://newheaven.nl/files/imagecache/60835_ejfsvutvlev.gif",
    "https://newheaven.nl/files/imagecache/60835_0foyaxkep1g.gif",
    "https://newheaven.nl/files/imagecache/60835_5yg0xzhapod.gif",
    "https://newheaven.nl/files/imagecache/60835_ufb3847f1hj.gif",
    "https://newheaven.nl/files/imagecache/60835_mxk9y83rdq8.gif",
    "https://newheaven.nl/files/imagecache/60835_qr9li65sh82.gif",
    "https://newheaven.nl/files/imagecache/60835_57t3bptnxff.gif",
    "https://newheaven.nl/files/imagecache/60835_l0rtjp29wvf.gif",
    "https://newheaven.nl/files/imagecache/60835_9cyu4mtxve8.gif",
    "https://newheaven.nl/files/imagecache/60835_o018f09hkfs.gif",
    "https://newheaven.nl/files/imagecache/60835_kjcq2pi9lq6.gif",
  ],
];

let table1 = null;
let table2 = null;
let standardHeight = null;
const newHeight = "800";

(function () {
  "use strict";
  // uncomment this, if needed:
  // swapInput();

  addPepe();
  add_4k();
  addSwitchStyle();
})();

function addSwitchStyle() {
  let td = document.querySelector("td.column1");
  if (td != null) {
  let tb = getNthParent(td, 2);
  let r = tb.insertRow(-1);
  let c = r.insertCell(-1);
  let a = document.createElement("a");
  a.href = "#";
  a.text = "Switch style...";
  a.addEventListener("click", styleClick);
  c.appendChild(a);
  if (!localStorage.shouldStyleSet) {
    localStorage.shouldStyleSet = 0;
  }
  if (localStorage.shouldStyleSet == 1) {
    setStyle();
  }
  }
}

function styleClick() {
  if (localStorage.shouldStyleSet) {
    localStorage.shouldStyleSet = (Number(localStorage.shouldStyleSet) + 1) % 2;
    if (localStorage.shouldStyleSet == 1) {
      setStyle();
    } else {
      location.reload();
    }
  }
}

function setStyle() {
  // choose background color:
  let color1 = "Gray";
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

function addPepe() {
  showPepe();
  hidePepe();
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
      let title_index = 1;
      for (let i = 0; i < links.length; i++) {
        const row_e = links[i];
        tb.appendChild(document.createElement("tr"));
        let tr = document.createElement("tr");
        // tr.style.height = "30px";
        // tr.appendChild(document.createElement("td"));
        for (let j = 0; j < row_e.length; j++) {
          const col_e = row_e[j];
          addTd(tr, col_e, col_e, title_index);
          title_index++;
        }
        tb.appendChild(tr);
      }

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

function addTd(tr, src, text, title) {
  let td = document.createElement("td");
  let img = document.createElement("img");
  td.style.textAlign = "center";
  td.style.verticalAlign = "middle";
  img.src = src;
  img.width = 20;
  img.height = 20;
  img.setAttribute("onclick", "setTag('[IMG]" + text + "[/IMG]');");
  img.title = title;
  td.appendChild(img);
  tr.appendChild(td);
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
