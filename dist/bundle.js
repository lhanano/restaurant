!function(e){var t={};function n(a){if(t[a])return t[a].exports;var d=t[a]={i:a,l:!1,exports:{}};return e[a].call(d.exports,d,d.exports,n),d.l=!0,d.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var d in e)n.d(a,d,function(t){return e[t]}.bind(null,d));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);n(1)},function(e,t){class n{static addTitle(e){const t=document.querySelector("#content"),n=document.createElement("div");n.textContent=e,n.classList.add("title"),t.appendChild(n)}static addButton(e){const t=document.querySelector("#content"),n=document.createElement("div");n.textContent=e,n.classList.add("button"),n.classList.add(e),t.appendChild(n)}static addTitlePage(){const e=document.querySelector("#content"),t=document.createElement("div"),n=document.createElement("span");t.classList.add("welcome"),n.classList.add("title"),n.textContent="marrakech la",t.appendChild(n),e.appendChild(t)}static addSection(e,t){const n=document.querySelector("#content"),a=document.createElement("section"),d=document.createElement("p");a.classList.add("section"),a.classList.add(e),d.textContent=t,a.appendChild(d),n.appendChild(a)}static addDiv(e,t){const n=document.querySelector("#content"),a=document.createElement("div"),d=document.createElement("div"),i=document.createElement("span");a.classList.add("image"),a.classList.add(e),d.classList.add("divText"),i.textContent=t,d.appendChild(i),a.appendChild(d),n.appendChild(a)}static addMenu(e){const t=document.querySelector("#content"),n=document.createElement("div"),a=document.createElement("div"),d=document.createElement("p"),i=document.createElement("img"),c=document.createElement("img"),o=document.createElement("img");n.classList.add("menuPage"),a.classList.add("menuText"),d.textContent=e,i.src="../dist/images/img3.jpg",i.classList.add("img1"),c.src="../dist/images/img1.jpg",c.classList.add("img2"),o.src="../dist/images/img2.jpg",o.classList.add("img3"),a.appendChild(d),n.appendChild(a),t.appendChild(i),t.appendChild(c),t.appendChild(n),t.appendChild(o)}}n.addTitlePage(),n.addSection("s1","the best eating in morocco happens at home"),n.addSection("s2","we welcome you to ours"),n.addDiv("d"),n.addDiv("d1","a garden of eden in the city"),n.addDiv("d"),n.addSection("s3","moroccan cooking techniques applied to locally sourced food grown in la"),n.addMenu(" ---seasonal menu--- \n\n mediteranian chopped salad \n couscous with seven vegetables \n khubz - flat bread \n stewed lentils \n kalinti - chickpea quiche\n seffa medfouna - vermicelli, saffron, almonds, raisins\n zalouk - whole roasted eggplants, tomatoes, garlic\n makouda - deep-fried potato balls with spicy sauce\n brochettes - chicken or lamb skewers \n fish chermoula - grilled fish in mix of herbs and spices\n tagine with dried apricots - stew with vegetables and traditional spices\n chicken tagine - stew with vegetables and traditional spices\n bastilla - chicken pie\n chicken rfissa - stew with saffron, ras el hanout, fenugreek \n mechoui - lamb slow cooked over fire pit"),n.addDiv("d2","experience the true welcome of morocco"),n.addSection("s5","located in west la, email us, hours: mon-sun 4pm-2am")}]);