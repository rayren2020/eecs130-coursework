const defaultTheme = () => {
   alert('switch to default theme');
   document.querySelector("header").style.backgroundColor= "black"
   document.querySelector("h1").style.fontFamily="Covered By Your Grace"
   document.querySelector(".content").style.backgroundColor="white"
};

const oceanTheme = () => {
   alert('switch to ocean theme');
   document.querySelector("header").style.backgroundColor="#434a6c"
   document.querySelector("h1").style.fontFamily="Indie Flower, cursive"
   document.querySelector(".content").style.backgroundColor="#99cccc"
};

const desertTheme = () => {
   alert('switch to desert theme');
   document.querySelector("header").style.backgroundColor="#A8651E"
   document.querySelector("h1").style.fontFamily="ZCOOL KuaiLe, cursive"
   document.querySelector(".content").style.backgroundColor="#EFDEC2"
};


document.querySelector("#default").onclick = defaultTheme;
document.querySelector("#ocean").onclick = oceanTheme;
document.querySelector("#desert").onclick = desertTheme;
