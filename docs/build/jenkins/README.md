# 什么是jenkins？它的作用是啥?
答:Jenkins是一款开源 CI&CD 软件，用于自动化各种任务，包括构建、测试和部署软件。CI/CD 是一种通过在应用开发阶段引入自动化来频繁向客户交付应用的方法。CI/CD 的核心概念是持续集成、持续交付和持续部署。作为一个面向开发和运营团队的解决方案，CI/CD 主要针对在集成新代码时所引发的问题（亦称："集成地狱"）。它不会加重开发者的学习成本，相反它可以提高开发者的效率，这是当前企业使用的热门解决方案。

关于 **jenkins** 的知识点，主要参考： 

* 《[jenkins是什么?]( https://www.jenkins.io/zh/doc)》
<div style="text-align:right">
<svg t="1639653585991" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2181" width="64" height="64"><path d="M303.786667 736.853333c-11.946667 7.253333-193.706667 122.88-193.706667 130.133334v9.386666l33.28 84.906667h737.28s35.413333-113.493333 33.28-141.653333c0-14.08-118.186667-92.16-118.186667-92.16s92.16-92.16 94.72-293.12a455.253333 455.253333 0 0 0-2.56-56.746667c-16.64-226.986667-160.853333-307.2-311.893333-314.453333S337.066667 129.28 337.066667 129.28s-96.853333 33.28-106.24 110.933333c0 0-75.52 14.08-35.413334 167.68-30.72 23.466667-37.973333 56.746667-37.973333 80.213334 0 30.72 9.386667 66.133333 28.16 87.466666 40.106667 42.666667 73.386667 33.28 73.386667 33.28s14.08 75.946667 44.8 128z" fill="#FFE0B2" p-id="2182"></path><path d="M814.506667 817.066667c-4.693333-30.72-18.773333-44.8-49.493334-44.8h-4.693333c-9.386667 2.56-23.466667 7.253333-64 35.413333l-23.466667 16.64a44.373333 44.373333 0 0 0-18.773333-4.693333 49.92 49.92 0 0 0-30.72 11.946666l-23.466667-11.946666-40.106666-21.333334c-21.333333-9.386667-42.666667-16.64-58.88-16.64a65.28 65.28 0 0 0-30.72 7.253334q-17.92 14.08-14.08 42.666666c0 9.386667 2.56 21.333333 2.56 30.72 4.693333 49.493333 7.253333 84.906667 54.186666 87.466667h7.253334a144.64 144.64 0 0 0 84.906666-30.72l21.333334-14.08a49.493333 49.493333 0 0 0 26.026666 9.386667 50.773333 50.773333 0 0 0 28.16-9.386667l33.28 7.253333a235.52 235.52 0 0 0 37.973334 4.693334h9.386666c11.946667 0 23.466667 0 35.413334-7.253334s21.333333-23.466667 21.333333-49.493333c0-11.946667-2.56-23.466667-2.56-33.28z" fill="#F44336" p-id="2183"></path><path d="M457.386667 864.426667c0-9.386667-2.56-18.773333-2.56-30.72a49.493333 49.493333 0 0 1 4.693333-33.28c-118.186667-2.56-156.16-64-156.16-64s-7.253333 37.973333 26.026667 80.213333C379.733333 875.946667 455.253333 883.2 455.253333 883.2h4.693334a58.88 58.88 0 0 0-2.56-18.773333z" fill="#FFFFFF" p-id="2184"></path><path d="M485.973333 961.28l-16.64-33.28a191.573333 191.573333 0 0 1-7.253333-26.026667l-2.56-16.64-16.64-2.56c-21.333333-4.693333-73.386667-18.773333-110.933333-64a127.146667 127.146667 0 0 1-23.466667-46.506666l-9.386667-30.72-26.026666 16.213333c-47.36 30.72-125.44 80.213333-151.466667 101.546667l-14.08 11.946666 35.413333 89.6z" fill="#546E7A" p-id="2185"></path><path d="M232.96 961.28h253.013333l-16.64-33.28a191.573333 191.573333 0 0 1-7.253333-26.026667l-2.56-16.64-16.64-2.56c-21.333333-4.693333-73.386667-18.773333-110.933333-64-2.56-2.56-4.693333-7.253333-7.253334-9.386666l-119.893333 81.066666z" fill="#455A64" p-id="2186"></path><path d="M906.666667 807.68c-14.08-14.08-56.746667-44.8-73.386667-56.746667l-16.64-11.946666a196.266667 196.266667 0 0 1-30.72 28.16l16.64 16.64a61.866667 61.866667 0 0 1 14.08 30.72v7.253333a145.493333 145.493333 0 0 1 2.56 33.28c0 40.106667-14.08 47.36-21.333333 49.493333a44.373333 44.373333 0 0 1-18.773334 4.693334l2.56 47.36h96.853334l4.693333-16.64c11.946667-37.973333 26.026667-92.16 28.16-115.626667v-11.946667z" fill="#546E7A" p-id="2187"></path><path d="M880.64 961.28l4.693333-16.64c7.253333-18.773333 11.946667-44.8 18.773334-66.133333l-87.466667-47.36c0 7.253333 2.56 16.64 2.56 26.026666 0 40.106667-14.08 47.36-21.333333 49.493334a44.373333 44.373333 0 0 1-18.773334 4.693333l2.56 47.36 99.413334 2.56z" fill="#455A64" p-id="2188"></path><path d="M188.16 413.013333l2.56-2.56a73.813333 73.813333 0 0 1 42.666667-16.64c14.08 0 21.333333 4.693333 28.16 7.253334 30.72 16.64 37.973333 47.36 40.106666 68.693333v4.693333c14.08-4.693333 28.16-9.386667 33.28-11.946666a41.386667 41.386667 0 0 0-2.56-14.08 242.346667 242.346667 0 0 0-9.386666-33.28c-9.386667-26.026667-7.253333-58.88 7.253333-101.546667l2.56-4.693333c2.56-9.386667 7.253333-18.773333 7.253333-26.026667a133.12 133.12 0 0 1 2.56-16.64A55.466667 55.466667 0 0 0 337.066667 247.466667l-4.693334-11.946667 7.253334-11.946667c21.333333-35.413333 99.413333-153.6 257.706666-153.6h11.946667a75.52 75.52 0 0 0-33.28-7.253333h-16.64c-127.573333 0-205.653333 54.186667-219.733333 64l-2.56 2.56-2.56 2.56c-14.08 4.693333-87.466667 35.413333-101.546667 98.986667l-4.693333 7.253333-9.386667 4.693333a46.506667 46.506667 0 0 0-21.333333 21.333334c-16.64 28.16-18.773333 70.826667-7.253334 130.133333l2.56 11.946667-9.386666 11.52-2.56 2.56z" fill="#616161" p-id="2189"></path><path d="M606.293333 913.92h141.653334v47.274667h-141.653334zM280.32 474.453333c-2.56-21.333333-9.386667-40.106667-26.026667-49.493333a55.466667 55.466667 0 0 0-18.773333-4.693333c-11.946667 0-26.026667 4.693333-37.973333 21.333333l-16.64-47.786667c21.333333-11.946667 40.106667-18.773333 58.88-18.773333a94.72 94.72 0 0 1 35.413333 7.253333 104.96 104.96 0 0 1 26.453333 18.773334c-4.693333-33.28 2.56-68.693333 11.946667-96.853334 4.693333-11.946667 7.253333-23.466667 9.386667-30.72 2.56-14.08 0-16.64-4.693334-23.466666a478.72 478.72 0 0 0-82.773333 16.64l-11.946667-45.226667c2.56 0 49.493333-14.08 104.106667-18.773333l16.64-2.56 7.253333 14.08a8.106667 8.106667 0 0 1 2.56 4.693333c7.253333 7.253333 16.64 21.333333 18.773334 44.8a72.96 72.96 0 0 1-2.56 21.333333c-2.56 11.946667-7.253333 21.333333-9.386667 35.413334-9.386667 28.16-16.64 61.44-7.253333 84.906666 4.693333 14.08 7.253333 28.16 9.386666 37.973334s4.693333 30.72-4.693333 37.973333-64 23.466667-64 23.466667-11.52-8.96-14.08-30.293334z" fill="#263238" p-id="2190"></path><path d="M358.4 242.773333l-42.666667-18.773333c0-2.56 87.466667-193.706667 307.2-179.626667l-2.56 47.36C431.786667 81.92 358.4 242.773333 358.4 242.773333z" fill="#263238" p-id="2191"></path><path d="M464.64 800.426667c-120.32 0-160.853333-64-160.853333-64s-7.253333 37.973333 26.026666 80.213333C379.733333 875.946667 455.253333 883.2 455.253333 883.2" fill="#FFFFFF" p-id="2192"></path><path d="M452.693333 906.666667c-2.56 0-84.906667-9.386667-139.52-75.52-40.106667-52.053333-33.28-94.72-30.72-99.413334l11.946667-61.44 33.28 54.186667c2.56 2.56 35.413333 52.053333 139.52 52.053333v47.36c-49.493333 0-87.466667-9.386667-115.626667-23.466666v2.56c42.666667 49.493333 106.24 56.746667 108.8 56.746666zM765.013333 937.386667h-7.253333c-42.666667 0-82.773333-14.08-84.906667-14.08l16.64-44.8a226.133333 226.133333 0 0 0 66.133334 11.946666h2.56c11.946667 0 23.466667 0 30.72-2.56s7.253333-21.333333 7.253333-30.72-2.56-21.333333-2.56-30.72V819.2c-2.56-18.773333-9.386667-26.026667-28.16-26.026667s-58.88 35.413333-75.52 47.36l-11.946667 9.386667-28.16-37.973333 9.386667-7.253334c44.8-33.28 80.213333-56.746667 104.106667-56.746666 42.666667 0 68.693333 23.466667 75.52 66.133333v7.253333c2.56 9.386667 2.56 23.466667 4.693333 35.413334 0 35.413333-9.386667 61.44-33.28 70.826666-17.066667 9.813333-31.146667 9.813333-45.226667 9.813334z" fill="#263238" p-id="2193"></path><path d="M518.826667 975.36H512c-68.693333-4.693333-73.386667-58.88-75.52-108.8 0-9.386667-2.56-18.773333-2.56-28.16-4.693333-37.973333 11.946667-56.746667 23.466667-66.133333 30.72-21.333333 78.08-11.946667 113.493333 4.693333l70.826667 37.973333-21.333334 42.666667-70.826666-38.4c-28.16-14.08-56.746667-16.64-64-9.386667s-4.693333 14.08-4.693334 21.333334a134.826667 134.826667 0 0 1 2.56 30.72c4.693333 56.746667 9.386667 64 33.28 66.133333 49.493333 4.693333 99.413333-42.666667 99.413334-44.8l33.28 33.28c-5.12 4.693333-61.866667 58.88-130.56 58.88zM441.173333 308.906667s-4.693333 14.08-14.08 14.08-9.386667-9.386667-9.386666-18.773334c0-28.16 18.773333-64 37.973333-80.213333a84.48 84.48 0 0 1 53.76-19.2c9.386667 0 21.333333 0 30.72 4.693333s18.773333 14.08 18.773333 33.28c0 0 0 9.386667-30.72 9.386667-18.773333 0-42.666667 2.56-52.053333 11.946667s-23.466667 18.773333-34.986667 44.8zM568.746667 441.173333a206.933333 206.933333 0 0 1-37.973334-4.693333 20.906667 20.906667 0 0 1-16.64-28.16l4.693334-7.253333a12.8 12.8 0 0 1 11.946666-7.253334h7.253334c18.773333 4.693333 47.36 4.693333 56.746666 4.693334-11.946667-44.8-9.386667-78.08-2.56-78.08s26.026667 54.186667 35.413334 66.133333a25.6 25.6 0 0 1-2.56 35.413333c-16.213333 14.506667-34.986667 19.2-56.32 19.2zM805.12 441.173333h-11.946667c-14.08-2.56-21.333333-11.946667-21.333333-26.026666 0 0 2.56-21.333333 14.08-21.333334s21.333333 4.693333 26.026667 4.693334c-4.693333-28.16-11.946667-75.52-4.693334-75.52S831.146667 379.733333 864 401.066667c9.386667 7.253333 9.386667 21.333333-4.693333 30.72a146.346667 146.346667 0 0 1-54.186667 9.386666zM849.92 287.573333c-4.693333-18.773333-26.026667-35.413333-49.493333-42.666666a70.4 70.4 0 0 0-52.053334 7.253333c0-21.333333 16.64-37.973333 23.466667-40.106667s14.08-7.253333 23.466667-7.253333c49.493333 0 68.693333 30.72 84.906666 61.44z" fill="#263238" p-id="2194"></path><path d="M698.453333 582.826667h-9.386666c-16.64 0-30.72-4.693333-40.106667-16.64-18.773333-21.333333-21.333333-49.493333-14.08-54.186667s11.946667 11.946667 35.413333 18.773333c0 0 16.64 2.56 21.333334 2.56h11.946666c30.72 0 56.746667-7.253333 66.133334-14.08a11.52 11.52 0 0 0 2.56-7.253333s0-7.253333-30.72-35.413333a125.44 125.44 0 0 1-40.106667-94.72c0-35.413333 4.693333-58.88 9.386667-58.88s14.08 75.52 64 118.186666c35.413333 30.72 44.8 52.053333 44.8 73.386667s-11.946667 33.28-18.773334 40.106667c-26.453333 23.466667-69.12 28.16-102.4 28.16zM686.933333 654.08c-73.386667-2.56-110.933333-47.36-110.933333-47.36s82.773333 7.253333 136.96 7.253333v40.106667zM738.986667 654.08v-42.666667c4.693333-2.56 42.666667 2.56 84.906666-14.08-9.386667 49.493333-82.773333 56.746667-84.906666 56.746667zM632.32 724.906667c-52.053333 0-78.08-14.08-96.853333-75.52 0 0-2.56-4.693333 4.693333-7.253334s9.386667 2.56 9.386667 2.56c9.386667 26.026667 49.493333 33.28 99.413333 33.28h78.08s-9.386667 47.36-58.88 47.36z" fill="#263238" p-id="2195"></path><path d="M630.186667 819.2c-75.52 0-134.826667-23.466667-198.4-92.16-35.413333-37.973333-35.413333-87.466667-30.72-92.16s11.946667 28.16 40.106666 58.88c56.746667 61.44 136.96 80.213333 205.653334 75.52 89.6-7.253333 127.573333-58.88 134.826666-64l40.106667 28.16c-2.56 2.56-56.746667 73.386667-170.24 82.773333a72.96 72.96 0 0 1-21.333333 2.986667zM261.546667 630.186667l-2.56-23.466667-2.56-23.466667a107.946667 107.946667 0 0 0 14.08-9.386666 17.92 17.92 0 0 1 21.333333 0l11.946667 9.386666a18.346667 18.346667 0 0 1 0 26.026667c-20.906667 18.773333-40.106667 20.906667-42.24 20.906667zM252.16 488.533333l37.973333 14.08c-2.56-9.386667-14.08-52.053333-47.36-61.44a25.173333 25.173333 0 0 0-28.16 21.333334v9.386666c2.56 40.106667 37.973333 64 37.973334 64z" fill="#263238" p-id="2196"></path><path d="M653.653333 937.386667a70.826667 70.826667 0 1 1 70.826667-70.826667 69.546667 69.546667 0 0 1-70.826667 70.826667z m0-94.72a23.893333 23.893333 0 0 0-23.466666 23.466666 23.466667 23.466667 0 1 0 23.466666-23.466666z" fill="#263238" p-id="2197"></path><path d="M880.64 984.746667H143.36c-9.386667 0-18.773333-4.693333-21.333333-14.08l-33.28-82.773334a34.986667 34.986667 0 0 1-2.56-14.08v-9.386666c2.56-23.466667 134.826667-106.24 186.88-136.96a470.186667 470.186667 0 0 1-33.28-96.853334c-18.773333-2.56-42.666667-11.946667-70.826667-40.106666s-35.413333-70.826667-35.413333-101.546667A127.573333 127.573333 0 0 1 166.826667 401.066667c-14.08-64-11.946667-113.493333 9.386666-146.346667 9.386667-16.64 21.333333-23.466667 30.72-30.72 19.2-73.386667 96.853333-106.666667 116.053334-116.053333s106.24-73.386667 252.586666-68.693334c198.4 7.253333 321.28 130.133333 335.786667 335.786667a455.253333 455.253333 0 0 1 2.56 56.746667c0 153.6-54.186667 248.32-82.773333 285.866666 106.24 73.386667 106.24 84.906667 106.24 96.853334 2.56 30.72-26.026667 122.88-35.413334 151.466666a22.613333 22.613333 0 0 1-21.333333 18.773334zM160 937.386667H861.866667c14.08-44.8 26.026667-92.16 28.16-110.933334-14.08-14.08-64-52.053333-108.8-80.213333-4.693333-4.693333-9.386667-9.386667-9.386667-16.64a26.88 26.88 0 0 1 7.253333-18.773333s84.906667-87.466667 87.466667-276.48a436.906667 436.906667 0 0 0-2.56-54.186667c-16.64-245.76-189.013333-288.426667-290.56-293.12-141.653333-4.693333-222.293333 58.88-224.426667 61.44s-4.693333 2.56-7.253333 4.693333-82.773333 28.16-89.6 92.16c-2.56 9.386667-9.386667 18.773333-18.773333 21.333334-16.64 4.693333-42.666667 40.106667-16.64 139.52 2.56 9.386667 0 18.773333-7.253334 23.466666-23.893333 18.773333-26.026667 46.933333-26.026666 61.013334 0 28.16 9.386667 56.746667 23.466666 70.826666 28.16 30.72 49.493333 26.026667 49.493334 26.026667a25.173333 25.173333 0 0 1 18.773333 2.56c4.693333 4.693333 9.386667 9.386667 9.386667 16.64 0 0 11.946667 73.386667 42.666666 120.32a25.173333 25.173333 0 0 1 2.56 18.773333c-2.56 7.253333-4.693333 11.946667-11.946666 14.08-16.64 9.386667-148.906667 94.72-182.186667 118.186667z m732.586667-108.8z" fill="#263238" p-id="2198"></path></svg>
</div>