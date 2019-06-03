let currentimgelement=null;

var slideIndex = 0;
var slideIndex2 = 0;
var slideIndex3 = 0;
var slideIndex4 = 0;
var slideIndex5 = 0;
var slideIndex6 = 0;
var slideIndex7 = 0;
var slideIndex8 = 0;
var slideIndex9 = 0;

animate();

function animate() {
  var i;
  var x1 = document.getElementsByClassName("image1");
  var x2 = document.getElementsByClassName("image2");
  var x3 = document.getElementsByClassName("image3");
  var x4 = document.getElementsByClassName("image4");
  var x5 = document.getElementsByClassName("image5");
  var x6 = document.getElementsByClassName("image6");
  var x7 = document.getElementsByClassName("image7");
  var x8 = document.getElementsByClassName("image8");
  var x9 = document.getElementsByClassName("image9");
  for (i = 0; i < 3; i++) {
    x1[i].style.display = "none";
    x2[i].style.display = "none";
    x3[i].style.display = "none";
    x4[i].style.display = "none";
    x5[i].style.display = "none";
    x6[i].style.display = "none";
    x7[i].style.display = "none";
    x8[i].style.display = "none";
    x9[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > 3) {slideIndex = 1}
  x1[slideIndex-1].style.display = "block";
  x2[slideIndex-1].style.display = "block";
  x3[slideIndex-1].style.display = "block";
  x4[slideIndex-1].style.display = "block";
  x5[slideIndex-1].style.display = "block";
  x6[slideIndex-1].style.display = "block";
  x7[slideIndex-1].style.display = "block";
  x8[slideIndex-1].style.display = "block";
  x9[slideIndex-1].style.display = "block";
  setTimeout(animate, 5000); // Change image every 3 seconds
}

const showPhoto = (e) => {
    // figure out which element the user clicked from the event object:
    currentimgelement = e.target;
    console.log(currentimgelement);
    // fig  ure out what its background image is:
    const imgURL = currentimgelement.style.backgroundImage;
    console.log(imgURL);
    document.querySelector(".featured_image").style.backgroundImage=imgURL;
    document.querySelector(".preview_box").classList.add("active");
    // PART 1:
    // 1. set the featured_image element's backgroundImage property
    //    to the imgURL associated with the image the user just clicked
    //    the photo the user just clicked on.
    // 2. add the active class to the preview_box element so that the card
    //    becomes visible to the user.
};

// PART 2: Replace this code with what's commented below.
//         Instead of just applying the event handler to
//         the first .card element, you want to apply it to
//         all of the card elements
//document.querySelector('.card').onclick = showPhoto;

const cards = document.querySelectorAll('.image');
 for (image of cards) {
    image.onclick = showPhoto;
}

function closeimg() {
  console.log("closes");
  document.querySelector(".preview_box").classList.remove("active");
}

function nextimg(){
  let newimgurl=currentimgelement.parentNode.nextElementSibling.firstElementChild.style.backgroundImage;
  console.log(currentimgelement.parentNode.nextElementSibling.firstElementChild.style.backgroundImage);
  document.querySelector(".featured_image").style.backgroundImage=newimgurl;
  currentimgelement=currentimgelement.parentNode.nextElementSibling.firstElementChild;
}

function previmg(){
  let  newimgurl2=currentimgelement.parentNode.previousElementSibling.firstElementChild.style.backgroundImage;
  console.log(currentimgelement.parentNode.previousElementSibling.firstElementChild.style.backgroundImage);
    document.querySelector(".featured_image").style.backgroundImage=newimgurl2;
    currentimgelement=currentimgelement.parentNode.previousElementSibling.firstElementChild;
}
