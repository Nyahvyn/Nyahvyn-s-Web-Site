const loop = document.querySelector(".loop");
const items = document.querySelector(".items");
const width = items.scrollWidth + 20;
const clone = items.cloneNode(true);
loop.appendChild(clone);

document.documentElement.style.setProperty(
    "--scrollSpeed",
    `${width}px`
);
