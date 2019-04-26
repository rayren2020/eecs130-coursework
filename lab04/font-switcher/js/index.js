const makeBigger = () => {
   alert('make bigger!');
   document.querySelector(".content").style.fontSize="xx-large";
};

const makeSmaller = () => {
   alert('make smaller!');
    document.querySelector(".content").style.fontSize="x-small";
};


document.querySelector(".a1").onclick = makeBigger;
document.querySelector(".a2").onclick = makeSmaller;
