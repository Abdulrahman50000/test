let span = document.querySelector(".up");
let button = document.querySelector(".watch");
let myVideo = document.querySelector(".video-container")
let xButton = document.querySelector(".x-bottun")

var vid = document.getElementById("vid"); 


window.onscroll = function () {
   console.log(this.scrollY);
  this.scrollY >= 620 ? span.classList.add("show") : span.classList.remove("show");
};


span.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

button.onclick = function () {
   myVideo.classList.add("show");
};


xButton.onclick = function pauseVid() { 
  myVideo.classList.remove("show");
  vid.pause(); 
} 



