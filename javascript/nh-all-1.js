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

let links = [
  ["https://newheaven.nl/files/imagecache/63726_pepe-001.gif", 28, 28],
  ["https://newheaven.nl/files/imagecache/63733_pepe-095.gif", 28, 28],
  ["https://newheaven.nl/files/imagecache/63726_pepe-002.png", 28, 28],
  ["https://newheaven.nl/files/imagecache/63726_pepe-003.gif", 28, 28],
  ["https://newheaven.nl/files/imagecache/63726_pepe-004.gif", 28, 28],
  ["https://newheaven.nl/files/imagecache/63733_pepe-096.gif", 35, 34],
  ["https://newheaven.nl/files/imagecache/63726_pepe-005.png", 25, 25],
  ["https://newheaven.nl/files/imagecache/63733_pepe-119.gif", 32, 32],
  ["https://newheaven.nl/files/imagecache/63726_pepe-006.png", 28, 28],
  ["https://newheaven.nl/files/imagecache/63726_pepe-007.png", 28, 28],
  ["https://newheaven.nl/files/imagecache/63726_pepe-008.png", 28, 28],
  ["https://newheaven.nl/files/imagecache/63726_pepe-009.gif", 28, 27],
  ["https://newheaven.nl/files/imagecache/63726_pepe-010.png", 28, 28],
  ["https://newheaven.nl/files/imagecache/63726_pepe-011.gif", 28, 28],
  ["https://newheaven.nl/files/imagecache/63726_pepe-012.png", 28, 28],
  ["https://newheaven.nl/files/imagecache/63726_pepe-013.png", 28, 28],
  ["https://newheaven.nl/files/imagecache/63733_pepe-080.png", 28, 28],
  ["https://newheaven.nl/files/imagecache/63733_pepe-081.png", 28, 28],
  ["https://newheaven.nl/files/imagecache/63733_pepe-082.png", 28, 28],
  ["https://newheaven.nl/files/imagecache/63733_pepe-083.png", 28, 28],
  ["https://newheaven.nl/files/imagecache/63733_pepe-084.png", 28, 28],
  ["https://newheaven.nl/files/imagecache/63733_pepe-097.gif", 32, 32],
  ["https://newheaven.nl/files/imagecache/63733_pepe-098.gif", 32, 32],
  ["https://newheaven.nl/files/imagecache/63733_pepe-100.gif", 32, 32],
  ["https://newheaven.nl/files/imagecache/63733_pepe-088.gif", 35, 34],
  ["https://newheaven.nl/files/imagecache/63733_pepe-089.gif", 30, 32],
  ["https://newheaven.nl/files/imagecache/63733_pepe-087.gif", 44, 44],
  ["https://newheaven.nl/files/imagecache/63733_pepe-091.gif", 30, 32],
  ["https://newheaven.nl/files/imagecache/63733_pepe-092.gif", 30, 32],
  ["https://newheaven.nl/files/imagecache/63733_pepe-093.gif", 30, 32],
  ["https://newheaven.nl/files/imagecache/63726_pepe-014.gif", 21, 28],
  ["https://newheaven.nl/files/imagecache/63726_pepe-015.png", 28, 28],
  ["https://newheaven.nl/files/imagecache/63726_pepe-016.gif", 28, 28],
  ["https://newheaven.nl/files/imagecache/63726_pepe-017.gif", 28, 28],
  ["https://newheaven.nl/files/imagecache/63726_pepe-018.gif", 28, 28],
  ["https://newheaven.nl/files/imagecache/63726_pepe-019.png", 28, 28],
  ["https://newheaven.nl/files/imagecache/63733_pepe-099.gif", 35, 34],
  ["https://newheaven.nl/files/imagecache/63726_pepe-020.gif", 28, 28],
  ["https://newheaven.nl/files/imagecache/63726_pepe-021.gif", 28, 28],
  ["https://newheaven.nl/files/imagecache/63733_pepe-101.gif", 32, 32],
  ["https://newheaven.nl/files/imagecache/63733_pepe-102.gif", 32, 32],
  ["https://newheaven.nl/files/imagecache/63733_pepe-110.gif", 32, 32],
  ["https://newheaven.nl/files/imagecache/63733_pepe-111.gif", 32, 32],
  ["https://newheaven.nl/files/imagecache/63733_pepe-120.gif", 32, 32],
  ["https://newheaven.nl/files/imagecache/63733_pepe-112.gif", 32, 32],
  ["https://newheaven.nl/files/imagecache/63733_pepe-113.gif", 32, 32],
  ["https://newheaven.nl/files/imagecache/63733_pepe-114.gif", 32, 32],
  ["https://newheaven.nl/files/imagecache/63733_pepe-115.gif", 32, 32],
  ["https://newheaven.nl/files/imagecache/63733_pepe-116.gif", 32, 32],
  ["https://newheaven.nl/files/imagecache/63733_pepe-118.gif", 32, 32],
  ["https://newheaven.nl/files/imagecache/63733_pepe-103.gif", 32, 32],
  ["https://newheaven.nl/files/imagecache/63733_pepe-104.gif", 32, 32],
  ["https://newheaven.nl/files/imagecache/63733_pepe-105.gif", 32, 32],
  ["https://newheaven.nl/files/imagecache/63733_pepe-106.gif", 32, 32],
  ["https://newheaven.nl/files/imagecache/63733_pepe-107.gif", 32, 32],
  ["https://newheaven.nl/files/imagecache/63733_pepe-108.gif", 32, 32],
  ["https://newheaven.nl/files/imagecache/63726_pepe-022.gif", 28, 28],
  ["https://newheaven.nl/files/imagecache/63726_pepe-023.gif", 28, 28],
  ["https://newheaven.nl/files/imagecache/63726_pepe-024.gif", 28, 28],
  ["https://newheaven.nl/files/imagecache/63726_pepe-025.gif", 28, 28],
  ["https://newheaven.nl/files/imagecache/63726_pepe-026.gif", 28, 28],
  ["https://newheaven.nl/files/imagecache/56594_pepePoint.png", 32, 32],
  ["https://newheaven.nl/files/imagecache/56594_bigPls.gif", 28, 28],
  ["https://newheaven.nl/files/imagecache/63726_smilie_wet_175.gif", 46, 24],
  ["https://newheaven.nl/files/imagecache/63733_pepe-069.gif", 50, 46],
  ["https://newheaven.nl/files/imagecache/63733_pepe-070.gif", 28, 28],
  ["https://newheaven.nl/files/imagecache/63733_pepe-071.gif", 88, 19],
  ["https://newheaven.nl/files/imagecache/63733_pepe-072.gif", 48, 30],
  ["https://newheaven.nl/files/imagecache/63733_pepe-074.gif", 40, 25],
  ["https://newheaven.nl/files/imagecache/63733_pepe-075.gif", 18, 18],
  ["https://newheaven.nl/files/imagecache/63733_pepe-076.gif", 41, 40],
  ["https://newheaven.nl/files/imagecache/63733_pepe-077.gif", 26, 18],
  ["https://newheaven.nl/files/imagecache/63733_pepe-078.gif", 36, 29],
  ["https://newheaven.nl/files/imagecache/63733_pepe-079.gif", 42, 32],
  ["https://newheaven.nl/files/imagecache/63733_pepe-094.gif", 36, 26],
  ["https://newheaven.nl/files/imagecache/63733_pepe-109.gif", 32, 32],
  ["https://newheaven.nl/files/imagecache/63733_pepe-121.gif", 32, 32],
  ["https://newheaven.nl/files/imagecache/63733_pepe-123.gif", 32, 32],
  ["https://newheaven.nl/files/imagecache/63733_pepe-124.gif", 32, 32],
  ["https://newheaven.nl/files/imagecache/63733_pepe-125.gif", 32, 32],
  ["https://newheaven.nl/files/imagecache/63733_pepe-126.gif", 32, 32],
  ["https://newheaven.nl/files/imagecache/63733_pepe-127.gif", 32, 32],
  ["https://newheaven.nl/files/imagecache/63733_pepe-128.gif", 32, 32],
  ["https://newheaven.nl/files/imagecache/63733_pepe-129.gif", 32, 32],
  ["https://newheaven.nl/files/imagecache/63733_pepe-130.gif", 32, 32],
  ["https://newheaven.nl/files/imagecache/63733_pepe-131.gif", 32, 32],
  ["https://newheaven.nl/files/imagecache/63733_pepe-132.gif", 32, 32],
  ["https://newheaven.nl/files/imagecache/63733_pepe-133.gif", 32, 32],
  ["https://newheaven.nl/files/imagecache/63733_pepe-134.gif", 32, 32],
  ["https://newheaven.nl/files/imagecache/63733_pepe-135.gif", 32, 32],
  ["https://newheaven.nl/files/imagecache/63733_pepe-136.gif", 32, 32],
  ["https://newheaven.nl/files/imagecache/63733_pepe-137.gif", 41, 36],
  ["https://newheaven.nl/files/imagecache/63733_pepe-117.gif", 32, 32],
  ["https://newheaven.nl/files/imagecache/56594_peepoCoffee.gif", 32, 32],
  ["https://newheaven.nl/files/imagecache/63733_pepe-139.gif", 32, 32],
  ["https://newheaven.nl/files/imagecache/63733_pepe-140.gif", 32, 32],
  ["https://newheaven.nl/files/imagecache/63733_pepe-141.gif", 32, 32],
  ["https://newheaven.nl/files/imagecache/63733_pepe-142.gif", 32, 32],
  ["https://newheaven.nl/files/imagecache/63733_pepe-143.gif", 32, 32],
  ["https://newheaven.nl/files/imagecache/63733_pepe-144.gif", 32, 32],
  ["https://newheaven.nl/files/imagecache/63733_pepe-145.gif", 32, 32],
  ["https://newheaven.nl/files/imagecache/63733_pepe-146.gif", 32, 32],
  ["https://newheaven.nl/files/imagecache/63733_pepe-147.gif", 32, 32],
  ["https://newheaven.nl/files/imagecache/63733_pepe-148.gif", 32, 32],
  ["https://newheaven.nl/files/imagecache/63733_pepe-149.gif", 32, 32],
  ["https://newheaven.nl/files/imagecache/63733_pepe-150.gif", 32, 32],
  ["https://newheaven.nl/files/imagecache/63733_pepe-151.gif", 32, 32],
  ["https://newheaven.nl/files/imagecache/63733_pepe-152.gif", 32, 32],
  ["https://newheaven.nl/files/imagecache/63733_pepe-153.gif", 32, 32],
  ["https://newheaven.nl/files/imagecache/63733_pepe-154.gif", 32, 32],
  ["https://newheaven.nl/files/imagecache/63733_pepe-155.gif", 32, 32],
  ["https://newheaven.nl/files/imagecache/63733_pepe-156.gif", 32, 32],
  ["https://newheaven.nl/files/imagecache/63733_pepe-157.gif", 32, 32],
  ["https://newheaven.nl/files/imagecache/63733_pepe-158.gif", 32, 32],
  ["https://newheaven.nl/files/imagecache/63733_pepe-160.gif", 64, 64],
  ["https://newheaven.nl/files/imagecache/63733_pepe-161.gif", 64, 64],
  ["https://newheaven.nl/files/imagecache/63733_pepe-163.gif", 64, 64],
  ["https://newheaven.nl/files/imagecache/63733_pepe-164.gif", 64, 64],
  ["https://newheaven.nl/files/imagecache/63733_pepe-159.gif", 64, 64],
  ["https://newheaven.nl/files/imagecache/63837_piratenboot.gif", 140, 130],
  ["https://newheaven.nl/files/imagecache/60835_na6otob9r4t.gif", 23, 29],
  ["https://newheaven.nl/files/imagecache/60835_jo6a6witkjw.gif", 56, 29],
  ["https://newheaven.nl/files/imagecache/60835_brbngzd0q4c.gif", 96, 26],
  ["https://newheaven.nl/files/imagecache/63837_pirate.gif", 42, 42],
  ["https://newheaven.nl/files/imagecache/63837_coffeem.gif", 29, 30],
  ["https://newheaven.nl/files/imagecache/63837_yawnm.gif", 20, 23],
  ["https://newheaven.nl/files/imagecache/63837_shoot.gif", 120, 20],
  ["https://newheaven.nl/files/imagecache/63837_pirate2.gif", 25, 25],
  ["https://newheaven.nl/files/imagecache/63837_wave2.gif", 26, 18],
  ["https://newheaven.nl/files/imagecache/63837_0579.gif", 34, 26],
  ["https://newheaven.nl/files/imagecache/63837_0581.gif", 31, 28],
  ["https://newheaven.nl/files/imagecache/63837_0564.gif", 109, 33],
  ["https://newheaven.nl/files/imagecache/63837_santa.gif", 20, 22],
  ["https://newheaven.nl/files/imagecache/63837_user%20delete.gif", 80, 80],
  [
    "https://newheaven.nl/files/imagecache/63837_97c4247b2d741ff6c721f26cda5a48ef.gif",
    69,
    46,
  ],
  ["https://newheaven.nl/files/imagecache/63837_rarschleppen.gif", 24, 42],
  [
    "https://newheaven.nl/files/imagecache/63837_2d2a5515902de4c05b1cx42.gif",
    27,
    24,
  ],
  ["https://newheaven.nl/files/imagecache/63837_rip.gif", 43, 34],
  ["https://newheaven.nl/files/imagecache/63837_censored.gif", 48, 18],
  ["https://newheaven.nl/files/imagecache/63837_0424.gif", 43, 27],
  ["https://newheaven.nl/files/imagecache/63837_0567.gif", 40, 30],
  ["https://newheaven.nl/files/imagecache/63837_whiteflag.gif", 54, 40],
  ["https://newheaven.nl/files/imagecache/63837_doppelbatsch.gif", 100, 50],
  ["https://newheaven.nl/files/imagecache/63837_007.gif", 126, 56],
  ["https://newheaven.nl/files/imagecache/63837_explode.gif", 48, 112],
  ["https://newheaven.nl/files/imagecache/63837_hmmm.gif", 25, 23],
  ["https://newheaven.nl/files/imagecache/63837_0538.gif", 60, 55],
  ["https://newheaven.nl/files/imagecache/63837_furz.gif", 37, 25],
  [
    "https://newheaven.nl/files/imagecache/63837_e61196ed2593a051ea628db21e0c8d1f.gif",
    90,
    70,
  ],
  [
    "https://newheaven.nl/files/imagecache/63837_7b3cdb2918bc7511686ccfbd5ab0870c.gif",
    66,
    26,
  ],
  ["https://newheaven.nl/files/imagecache/60835_yovyor4rxqf.gif", 50, 40],
  ["https://newheaven.nl/files/imagecache/60835_am7sukwngj.gif", 188, 46],
  ["https://newheaven.nl/files/imagecache/60835_korx8xguvk2.gif", 153, 29],
  ["https://newheaven.nl/files/imagecache/60835_tdq5oxvc2d0.gif", 39, 29],
  ["https://newheaven.nl/files/imagecache/60835_5lb782jhyu5.gif", 234, 109],
  ["https://newheaven.nl/files/imagecache/60835_2qshsmhe3j9.gif", 58, 51],
  ["https://newheaven.nl/files/imagecache/60835_ouecny3owqv.gif", 48, 34],
  ["https://newheaven.nl/files/imagecache/60835_iv3q20c6fue.gif", 39, 22],
  ["https://newheaven.nl/files/imagecache/60835_o6qy11a0gnr.gif", 80, 60],
  ["https://newheaven.nl/files/imagecache/60835_hl3qylku3jn.gif", 76, 51],
  ["https://newheaven.nl/files/imagecache/60835_o6ujjd9fwic.gif", 68, 48],
  ["https://newheaven.nl/files/imagecache/60835_cmnjri326fn.gif", 41, 49],
  ["https://newheaven.nl/files/imagecache/60835_tg71teti0l9.gif", 35, 35],
  ["https://newheaven.nl/files/imagecache/60835_b3wecnal8r7.gif", 63, 60],
  ["https://newheaven.nl/files/imagecache/60835_6sy27m11231.gif", 69, 46],
  ["https://newheaven.nl/files/imagecache/60835_mwrel634yyk.gif", 60, 34],
  ["https://newheaven.nl/files/imagecache/60835_0eadb9tf3sj.gif", 27, 27],
  ["https://newheaven.nl/files/imagecache/60835_j9z3hg5fx8r.gif", 104, 67],
  ["https://newheaven.nl/files/imagecache/60835_xntkyxe3mk7.gif", 50, 35],
  ["https://newheaven.nl/files/imagecache/60835_81i8gejdfw3.gif", 115, 46],
  ["https://newheaven.nl/files/imagecache/60835_uriwd79j509.gif", 136, 81],
  ["https://newheaven.nl/files/imagecache/60835_j1v404ijrbp.gif", 92, 45],
  ["https://newheaven.nl/files/imagecache/60835_m1l1my18m6u.gif", 48, 34],
  ["https://newheaven.nl/files/imagecache/60835_zntmbpn9kcd.gif", 118, 75],
  ["https://newheaven.nl/files/imagecache/60835_upkmua9u4zx.gif", 114, 44],
  ["https://newheaven.nl/files/imagecache/60835_krvlvl6n2di.gif", 97, 43],
  ["https://newheaven.nl/files/imagecache/60835_w7j8d2b27b8.gif", 98, 60],
  ["https://newheaven.nl/files/imagecache/60835_ha2xo4bmnw0.gif", 67, 62],
  ["https://newheaven.nl/files/imagecache/60835_4lfkh3dczw2.gif", 35, 30],
  ["https://newheaven.nl/files/imagecache/60835_7wkeiyd4s4r.gif", 79, 55],
  ["https://newheaven.nl/files/imagecache/60835_4ycax4rze0t.gif", 74, 32],
  ["https://newheaven.nl/files/imagecache/60835_lvyj29uy41w.gif", 89, 40],
  ["https://newheaven.nl/files/imagecache/60835_qpscbjc8np1.gif", 120, 44],
  ["https://newheaven.nl/files/imagecache/60835_1ze6f5a9qv0.gif", 48, 51],
  ["https://newheaven.nl/files/imagecache/60835_6p7wagn8zb9.gif", 71, 53],
  ["https://newheaven.nl/files/imagecache/60835_rn3tshdb8tu.gif", 120, 100],
  ["https://newheaven.nl/files/imagecache/60835_ycdy3qc1fdp.gif", 93, 54],
  ["https://newheaven.nl/files/imagecache/60835_ukvaf7lmnx0.gif", 64, 51],
  ["https://newheaven.nl/files/imagecache/60835_83yak1h0vun.gif", 43, 36],
  ["https://newheaven.nl/files/imagecache/60835_hase.gif", 74, 54],
  ["https://newheaven.nl/files/imagecache/60835_chill.gif", 59, 34],
  ["https://newheaven.nl/files/imagecache/60835_x7y3azegxgz.gif", 19, 18],
  ["https://newheaven.nl/files/imagecache/60835_gtfqbjst0pm.gif", 77, 30],
  ["https://newheaven.nl/files/imagecache/60835_ejfsvutvlev.gif", 47, 59],
  ["https://newheaven.nl/files/imagecache/60835_0foyaxkep1g.gif", 58, 40],
  ["https://newheaven.nl/files/imagecache/60835_5yg0xzhapod.gif", 86, 86],
  ["https://newheaven.nl/files/imagecache/60835_ufb3847f1hj.gif", 56, 34],
  ["https://newheaven.nl/files/imagecache/60835_mxk9y83rdq8.gif", 39, 37],
  ["https://newheaven.nl/files/imagecache/60835_qr9li65sh82.gif", 36, 42],
  ["https://newheaven.nl/files/imagecache/60835_57t3bptnxff.gif", 48, 38],
  ["https://newheaven.nl/files/imagecache/60835_l0rtjp29wvf.gif", 38, 43],
  ["https://newheaven.nl/files/imagecache/60835_9cyu4mtxve8.gif", 43, 39],
  ["https://newheaven.nl/files/imagecache/60835_o018f09hkfs.gif", 26, 22],
  ["https://newheaven.nl/files/imagecache/60835_kjcq2pi9lq6.gif", 45, 50],
  // Default imgs:
  ["https://newheaven.nl/themes/default/images/smilies/smile1.gif", 18, 18],
  ["https://newheaven.nl/themes/default/images/smilies/wink.gif", 20, 20],
  ["https://newheaven.nl/themes/default/images/smilies/grin.gif", 18, 18],
  ["https://newheaven.nl/themes/default/images/smilies/tongue.gif", 20, 20],
  ["https://newheaven.nl/themes/default/images/smilies/sad.gif", 18, 18],
  ["https://newheaven.nl/themes/default/images/smilies/cry.gif", 20, 20],
  [
    "https://newheaven.nl/themes/default/images/smilies/noexpression.gif",
    18,
    18,
  ],
  ["https://newheaven.nl/themes/default/images/smilies/confused.gif", 18, 18],
  ["https://newheaven.nl/themes/default/images/smilies/ohmy.gif", 18, 18],
  ["https://newheaven.nl/themes/default/images/smilies/cool1.gif", 18, 18],
  ["https://newheaven.nl/themes/default/images/smilies/angel.gif", 18, 22],
  ["https://newheaven.nl/themes/default/images/smilies/sleep.gif", 20, 20],
  ["https://newheaven.nl/themes/default/images/smilies/angry.gif", 20, 20],
  ["https://newheaven.nl/themes/default/images/smilies/laugh.gif", 20, 20],
  ["https://newheaven.nl/themes/default/images/smilies/cool2.gif", 20, 20],
  ["https://newheaven.nl/themes/default/images/smilies/fun.gif", 20, 20],
  ["https://newheaven.nl/themes/default/images/smilies/thumbsup.gif", 36, 18],
  ["https://newheaven.nl/themes/default/images/smilies/thumbsdown.gif", 27, 18],
  ["https://newheaven.nl/themes/default/images/smilies/blush.gif", 20, 20],
  ["https://newheaven.nl/themes/default/images/smilies/weep.gif", 18, 18],
  ["https://newheaven.nl/themes/default/images/smilies/unsure.gif", 20, 20],
  ["https://newheaven.nl/themes/default/images/smilies/closedeyes.gif", 20, 20],
  ["https://newheaven.nl/themes/default/images/smilies/yes.gif", 20, 20],
  ["https://newheaven.nl/themes/default/images/smilies/no.gif", 20, 20],
  ["https://newheaven.nl/themes/default/images/smilies/kaffee.gif", 32, 32],
  ["https://newheaven.nl/themes/default/images/smilies/love.gif", 19, 19],
  ["https://newheaven.nl/themes/default/images/smilies/question.gif", 19, 19],
  ["https://newheaven.nl/themes/default/images/smilies/excl.gif", 20, 20],
  ["https://newheaven.nl/themes/default/images/smilies/idea.gif", 19, 19],
  ["https://newheaven.nl/themes/default/images/smilies/hmm.gif", 20, 20],
  ["https://newheaven.nl/themes/default/images/smilies/huh.gif", 20, 20],
  ["https://newheaven.nl/themes/default/images/smilies/w00t.gif", 18, 20],
  ["https://newheaven.nl/themes/default/images/smilies/geek.gif", 18, 18],
  ["https://newheaven.nl/themes/default/images/smilies/look.gif", 20, 18],
  ["https://newheaven.nl/themes/default/images/smilies/rolleyes.gif", 20, 20],
  ["https://newheaven.nl/themes/default/images/smilies/kiss.gif", 18, 18],
  ["https://newheaven.nl/themes/default/images/smilies/shifty.gif", 20, 20],
  ["https://newheaven.nl/themes/default/images/smilies/blink.gif", 20, 20],
  ["https://newheaven.nl/themes/default/images/smilies/smartass.gif", 25, 22],
  ["https://newheaven.nl/themes/default/images/smilies/sick.gif", 20, 20],
  ["https://newheaven.nl/themes/default/images/smilies/crazy.gif", 20, 20],
  ["https://newheaven.nl/themes/default/images/smilies/wacko.gif", 20, 20],
  ["https://newheaven.nl/themes/default/images/smilies/alien.gif", 20, 20],
  ["https://newheaven.nl/themes/default/images/smilies/wizard.gif", 24, 30],
  ["https://newheaven.nl/themes/default/images/smilies/wave.gif", 26, 18],
  ["https://newheaven.nl/themes/default/images/smilies/wavecry.gif", 26, 18],
  ["https://newheaven.nl/themes/default/images/smilies/baby.gif", 20, 22],
  ["https://newheaven.nl/themes/default/images/smilies/ras.gif", 20, 20],
  ["https://newheaven.nl/themes/default/images/smilies/sly.gif", 18, 18],
  ["https://newheaven.nl/themes/default/images/smilies/devil.gif", 18, 23],
  ["https://newheaven.nl/themes/default/images/smilies/evil.gif", 18, 18],
  ["https://newheaven.nl/themes/default/images/smilies/evilmad.gif", 20, 20],
  ["https://newheaven.nl/themes/default/images/smilies/yucky.gif", 20, 20],
  ["https://newheaven.nl/themes/default/images/smilies/nugget.gif", 20, 20],
  ["https://newheaven.nl/themes/default/images/smilies/sneaky.gif", 18, 18],
  ["https://newheaven.nl/themes/default/images/smilies/smart.gif", 18, 20],
  ["https://newheaven.nl/themes/default/images/smilies/shutup.gif", 20, 20],
  ["https://newheaven.nl/themes/default/images/smilies/shutup2.gif", 29, 18],
  ["https://newheaven.nl/themes/default/images/smilies/yikes.gif", 19, 25],
  ["https://newheaven.nl/themes/default/images/smilies/flowers.gif", 28, 18],
  ["https://newheaven.nl/themes/default/images/smilies/wub.gif", 22, 29],
  ["https://newheaven.nl/themes/default/images/smilies/osama.gif", 18, 25],
  ["https://newheaven.nl/themes/default/images/smilies/saddam.gif", 18, 25],
  ["https://newheaven.nl/themes/default/images/smilies/santa.gif", 20, 22],
  ["https://newheaven.nl/themes/default/images/smilies/indian.gif", 24, 29],
  ["https://newheaven.nl/themes/default/images/smilies/guns.gif", 38, 18],
  ["https://newheaven.nl/themes/default/images/smilies/crockett.gif", 23, 22],
  ["https://newheaven.nl/themes/default/images/smilies/zorro.gif", 26, 22],
  ["https://newheaven.nl/themes/default/images/smilies/snap.gif", 27, 21],
  ["https://newheaven.nl/themes/default/images/smilies/beer.gif", 59, 21],
  ["https://newheaven.nl/themes/default/images/smilies/drunk.gif", 58, 30],
  ["https://newheaven.nl/themes/default/images/smilies/sleeping.gif", 20, 27],
  ["https://newheaven.nl/themes/default/images/smilies/mama.gif", 18, 32],
  ["https://newheaven.nl/themes/default/images/smilies/pepsi.gif", 45, 25],
  ["https://newheaven.nl/themes/default/images/smilies/medieval.gif", 39, 27],
  ["https://newheaven.nl/themes/default/images/smilies/rambo.gif", 21, 18],
  ["https://newheaven.nl/themes/default/images/smilies/ninja.gif", 20, 20],
  ["https://newheaven.nl/themes/default/images/smilies/hannibal.gif", 18, 18],
  ["https://newheaven.nl/themes/default/images/smilies/party.gif", 18, 25],
  ["https://newheaven.nl/themes/default/images/smilies/snorkle.gif", 25, 38],
  ["https://newheaven.nl/themes/default/images/smilies/evo.gif", 18, 18],
  ["https://newheaven.nl/themes/default/images/smilies/king.gif", 23, 25],
  ["https://newheaven.nl/themes/default/images/smilies/chef.gif", 23, 28],
  ["https://newheaven.nl/themes/default/images/smilies/mario.gif", 21, 20],
  ["https://newheaven.nl/themes/default/images/smilies/pope.gif", 20, 36],
  ["https://newheaven.nl/themes/default/images/smilies/fez.gif", 19, 24],
  ["https://newheaven.nl/themes/default/images/smilies/cap.gif", 20, 20],
  ["https://newheaven.nl/themes/default/images/smilies/cowboy.gif", 22, 20],
  ["https://newheaven.nl/themes/default/images/smilies/pirate.gif", 20, 18],
  ["https://newheaven.nl/themes/default/images/smilies/rock.gif", 20, 20],
  ["https://newheaven.nl/themes/default/images/smilies/cigar.gif", 22, 25],
  ["https://newheaven.nl/themes/default/images/smilies/icecream.gif", 22, 25],
  ["https://newheaven.nl/themes/default/images/smilies/oldtimer.gif", 28, 29],
  ["https://newheaven.nl/themes/default/images/smilies/wolverine.gif", 20, 20],
  [
    "https://newheaven.nl/themes/default/images/smilies/strongbench.gif",
    40,
    21,
  ],
  ["https://newheaven.nl/themes/default/images/smilies/weakbench.gif", 35, 21],
  ["https://newheaven.nl/themes/default/images/smilies/bike.gif", 31, 31],
  ["https://newheaven.nl/themes/default/images/smilies/music.gif", 26, 24],
  ["https://newheaven.nl/themes/default/images/smilies/book.gif", 35, 20],
  ["https://newheaven.nl/themes/default/images/smilies/fish.gif", 60, 25],
  ["https://newheaven.nl/themes/default/images/smilies/whistle.gif", 35, 20],
  ["https://newheaven.nl/themes/default/images/smilies/stupid.gif", 53, 51],
  ["https://newheaven.nl/themes/default/images/smilies/dots.gif", 46, 51],
  ["https://newheaven.nl/themes/default/images/smilies/axe.gif", 27, 28],
  ["https://newheaven.nl/themes/default/images/smilies/hooray.gif", 31, 26],
  ["https://newheaven.nl/themes/default/images/smilies/yay.gif", 40, 60],
  ["https://newheaven.nl/themes/default/images/smilies/cake.gif", 28, 25],
  ["https://newheaven.nl/themes/default/images/smilies/hbd.gif", 81, 26],
  ["https://newheaven.nl/themes/default/images/smilies/hi.gif", 60, 45],
  ["https://newheaven.nl/themes/default/images/smilies/offtopic.gif", 44, 49],
  ["https://newheaven.nl/themes/default/images/smilies/band.gif", 125, 37],
  ["https://newheaven.nl/themes/default/images/smilies/hump.gif", 80, 24],
  ["https://newheaven.nl/themes/default/images/smilies/punk.gif", 33, 30],
  ["https://newheaven.nl/themes/default/images/smilies/bounce.gif", 25, 36],
  ["https://newheaven.nl/themes/default/images/smilies/group.gif", 70, 18],
  ["https://newheaven.nl/themes/default/images/smilies/console.gif", 46, 20],
  ["https://newheaven.nl/themes/default/images/smilies/smurf.gif", 20, 24],
  ["https://newheaven.nl/themes/default/images/smilies/soldiers.gif", 100, 105],
  ["https://newheaven.nl/themes/default/images/smilies/spidey.gif", 18, 18],
  ["https://newheaven.nl/themes/default/images/smilies/rant.gif", 33, 37],
  ["https://newheaven.nl/themes/default/images/smilies/pimp.gif", 22, 25],
  ["https://newheaven.nl/themes/default/images/smilies/nuke.gif", 20, 20],
  ["https://newheaven.nl/themes/default/images/smilies/judge.gif", 30, 26],
  ["https://newheaven.nl/themes/default/images/smilies/jacko.gif", 18, 18],
  ["https://newheaven.nl/themes/default/images/smilies/ike.gif", 22, 22],
  ["https://newheaven.nl/themes/default/images/smilies/greedy.gif", 18, 18],
  ["https://newheaven.nl/themes/default/images/smilies/dumbells.gif", 32, 18],
  ["https://newheaven.nl/themes/default/images/smilies/clover.gif", 37, 32],
  ["https://newheaven.nl/themes/default/images/smilies/uglywoot.gif", 41, 46],
  ["https://newheaven.nl/themes/default/images/smilies/uangel.gif", 30, 23],
  ["https://newheaven.nl/themes/default/images/smilies/ustone.gif", 16, 15],
  ["https://newheaven.nl/themes/default/images/smilies/uzzz.gif", 16, 30],
  ["https://newheaven.nl/themes/default/images/smilies/usorry.gif", 50, 24],
  ["https://newheaven.nl/themes/default/images/smilies/usanta.gif", 30, 30],
  ["https://newheaven.nl/themes/default/images/smilies/usex.gif", 29, 31],
  ["https://newheaven.nl/themes/default/images/smilies/uwave.gif", 25, 16],
  ["https://newheaven.nl/themes/default/images/smilies/uno.gif", 32, 22],
  ["https://newheaven.nl/themes/default/images/smilies/urock.gif", 29, 25],
  ["https://newheaven.nl/themes/default/images/smilies/ulove.gif", 16, 25],
  ["https://newheaven.nl/themes/default/images/smilies/uball.gif", 25, 49],
  ["https://newheaven.nl/themes/default/images/smilies/ubuschmann.gif", 23, 34],
  ["https://newheaven.nl/themes/default/images/smilies/stockpieks.gif", 60, 20],
  [
    "https://newheaven.nl/themes/default/images/smilies/popoklatsch.gif",
    48,
    40,
  ],
  ["https://newheaven.nl/themes/default/images/smilies/knutschi.gif", 44, 18],
  ["https://newheaven.nl/themes/default/images/smilies/narf.gif", 18, 18],
  ["https://newheaven.nl/themes/default/images/smilies/2uglys.gif", 59, 50],
  [
    "https://newheaven.nl/themes/default/images/smilies/kakapferdchen.gif",
    56,
    66,
  ],
  ["https://newheaven.nl/themes/default/images/smilies/brrr.gif", 26, 32],
  ["https://newheaven.nl/themes/default/images/smilies/blol2.gif", 29, 27],
  ["https://newheaven.nl/themes/default/images/smilies/beek.gif", 15, 15],
  ["https://newheaven.nl/themes/default/images/smilies/bevil.gif", 15, 15],
  ["https://newheaven.nl/themes/default/images/smilies/bcool.gif", 15, 15],
  ["https://newheaven.nl/themes/default/images/smilies/bcrying.gif", 15, 15],
  ["https://newheaven.nl/themes/default/images/smilies/Basi.gif", 50, 40],
  ["https://newheaven.nl/themes/default/images/smilies/bbaby.gif", 15, 15],
  ["https://newheaven.nl/themes/default/images/smilies/pullcar.gif", 120, 38],
  // Add your own imgs here:
  ["https://newheaven.nl/files/imagecache/63733_Bouncing_Kirby.gif", 28, 28],
  ["https://newheaven.nl/files/imagecache/63733_Gary.gif", 28, 28],
  ["https://newheaven.nl/files/imagecache/63733_Smoking.gif", 28, 28],
  ["https://newheaven.nl/files/imagecache/63733_spongbob_party.gif", 28, 28],
  ["https://newheaven.nl/files/imagecache/63733_Spongebob.gif", 28, 28],

];
let orgTable = null;
const standardHeight = 550;
const newHeight = 1175;
const rowElements = 24;
const scalar = 1.1;

(function () {
  "use strict";
  // (un)comment this line, if needed:
  swapInput();
  removeHints();
  addPepe();
  add_4k();
  addSwitchStyle();
})();

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

function removeHints() {
  let std = getFirstSmiley();
  let tbl = getNthParent(std, 7);
  if (tbl != null && tbl.rows.length >= 1) {
    tbl.rows[1].innerHTML = "<hr>";
  }
}

function addPepe() {
  showPepe();
  hidePepe();
}

function getWidth(link) {
  let w = link[1];
  let h = link[2];
  let f = scalar;
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
  let f = scalar;
  if (w >= h) {
    f *= 20.0 / h;
  } else {
    f *= 20.0 / w;
  }
  return Math.round(h * f);
}

function initLinks() {
    const w = rowElements;
    const h = Math.ceil( links.length / w);
    console.log(w, h, links.length);
  while (links.length < w*h) {
    // Placeholder img (transparent):
    links.push([
      "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",
      18,
      18,
    ]);
  }

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
    newLinks2.push(newLinks.splice(0, w));
  }
  links = newLinks2;
}

function getFirstSmiley() {
  return document.querySelector('[title=":)"]');
}

function showPepe() {
  if (orgTable == null) {
    let std = getFirstSmiley();
    let tbl = getNthParent(std, 4);
    if (tbl != null) {
      for (let i = 5; i >= 2; i--) {
        tbl.deleteRow(i);
      }
      orgTable = tbl.cloneNode(true);
    }

    initLinks();
  }

  let std = getFirstSmiley();
  let tb = getNthParent(std, 3);
  if (tb != null) {
    let newRows = [];
    let title_index = 1;
    for (let i = 0; i < links.length; i++) {
      const row_e = links[i];
      tb.appendChild(document.createElement("tr"));
      let tr = document.createElement("tr");
      for (let j = 0; j < row_e.length; j++) {
        const col_e = row_e[j];
        addTd(tr, col_e, title_index);
        title_index++;
      }
      tb.appendChild(tr);
      newRows.push(tr);
    }
    resizeTds(newRows);
    addSwitch(0);

    let ifr = window.top.document.querySelector('[name="shoutbox"]');
    if (ifr != null) {
      ifr.setAttribute("height", newHeight);
    }
  }
}

function hidePepe() {
  if (orgTable != null) {
    let std = getFirstSmiley();
    let tbl = getNthParent(std, 4);
    if (tbl != null) {
      tbl.innerHTML = orgTable.innerHTML;
      addSwitch(1);

      let ifr = window.top.document.querySelector('[name="shoutbox"]');
      if (ifr != null) {
        ifr.setAttribute("height", standardHeight);
      }
    }
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

function addTd(tr, link, title) {
  let td = document.createElement("td");
  let img = document.createElement("img");
  td.style.textAlign = "center";
  td.style.verticalAlign = "middle";
  img.src = link[0];
  img.width = getWidth(link);
  img.height = getHeight(link);
  img.setAttribute("onclick", "setTag('[IMG]" + link[0] + "[/IMG]');");
  img.title = title;
  td.appendChild(img);
  tr.appendChild(td);
}

function addSwitch(mode) {
  let std = getFirstSmiley();
  let tbl = getNthParent(std, 4);
  if (tbl != null) {
    let rows = tbl.rows;
    let r = rows[1];
    while (r.cells.length > 30) {
      r.deleteCell(-1);
    }
    let c = r.insertCell(-1);

    let a = document.createElement("a");
    a.href = "#";
    if (mode == 0) {
      a.text = " hide ";
      a.addEventListener("click", hidePepe);
    } else {
      a.text = " more ... ";
      a.addEventListener("click", showPepe);
    }
    c.appendChild(a);
  }
}

function resizeTds(rows) {
  const diff = 30 - rowElements;
  const low = Math.floor(diff / 4.0) + 1;
  const hei = Math.ceil(diff / 4.0) + 1;
  for (let i = 0; i < rows.length; i++) {
    let r = rows[i];
    while (r.cells.length < 30) {
      r.insertCell(-1);
    }
    r.cells[rowElements - 4].colSpan = low;
    r.cells[rowElements - 3].colSpan = low;
    r.cells[rowElements - 2].colSpan = hei;
    r.cells[rowElements - 1].colSpan = hei;
  }
}

function getWidthImg(img) {
  let w = img.naturalWidth;
  let h = img.naturalHeight;
  let f = scalar;
  if (w >= h) {
    f *= 20.0 / h;
  } else {
    f *= 20.0 / w;
  }
  if (f) {
    return Math.round(w * f);
  }
  return 30;
}

function rearrangeCells(rows) {
  if (rows.length > 0) {
    let w = rows[0].cells.length;
    let h = rows.length;
    let allCells = [];
    for (let i = 0; i < h; i++) {
      let cells = rows[i].cells;
      for (let j = 0; j < cells.length; j++) {
        allCells.push(cells[j]);
      }
    }
    allCells.sort(function (a, b) {
      return getWidthImg(a.firstChild) - getWidthImg(b.firstChild);
    });
    let newCells = [];
    for (let i = 0; i < h; i++) {
      for (let j = 0; j < w; j++) {
        let idx = j * h + i;
        if (idx < allCells.length) {
          newCells.push(allCells[idx]);
        }
      }
    }
    for (let i = 0; i < h; i++) {
      let r = rows[i];
      while (r.cells.length > 0) {
        r.deleteCell(-1);
      }
      for (let j = 0; j < w; j++) {
        let c = r.insertCell(-1);
        c.innerHTML = newCells[i * w + j].innerHTML;
        c.style.textAlign = "center";
        c.style.verticalAlign = "middle";
      }
    }
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

function addSwitchStyle() {
  if (!localStorage.shouldStyleSet) {
    // init:
    localStorage.shouldStyleSet = 0;
  }

  let select = document.querySelector('select[name="theme"]');
  if (select != null) {
    let opt = document.createElement("option");
    opt.value = 9;
    opt.innerHTML = "Custom by Logi";
    select.onchange = styleClick;
    select.appendChild(opt);
    if (localStorage.shouldStyleSet == 1) {
      select.value = 9;
    }
  }

  if (localStorage.shouldStyleSet == 1) {
    setStyle();
  }
}

function styleClick() {
  let select = document.querySelector('select[name="theme"]');
  if (localStorage.shouldStyleSet && select != null && select.value == 9) {
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
