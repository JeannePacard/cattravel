// Create text elements
var text1 = document.querySelector(".unreveal-1");
var text2 = document.querySelector(".unreveal-2");
// var text3 = document.querySelector(".unreveal-3");
var text4 = document.querySelector(".unreveal-4");
var text5 = document.querySelector(".unreveal-5");
var text6 = document.querySelector(".unreveal-6");
var text7 = document.querySelector(".unreveal-7");
var text8 = document.querySelector(".unreveal-8");
var text9 = document.querySelector(".unreveal-9");
var text10 = document.querySelector(".unreveal-10");
var text11 = document.querySelector(".unreveal-11");
var text12 = document.querySelector(".unreveal-12");
var text13 = document.querySelector(".unreveal-13");
var text14 = document.querySelector(".unreveal-14");
var text15 = document.querySelector(".unreveal-15");
var text16 = document.querySelector(".unreveal-16");
var text17 = document.querySelector(".unreveal-17");
var text18 = document.querySelector(".unreveal-18");
var text19 = document.querySelector(".unreveal-19");
// Get t7e image element7
var image1 = document.getElementById("image-1");
var image2 = document.getElementById("image-2");
//var image3 = document.getElementById("image-3");
var image4 = document.getElementById("image-4");
var image5 = document.getElementById("image-5");
var image6 = document.getElementById("image-6");
var image7 = document.getElementById("image-7");
var image8 = document.getElementById("image-8");
var image9 = document.getElementById("image-9");
var image10 = document.getElementById("image-10");
var image11 = document.getElementById("image-11");
var image12 = document.getElementById("image-12");
var image13 = document.getElementById("image-13");
var image14 = document.getElementById("image-14");
var image15 = document.getElementById("image-15");
var image16 = document.getElementById("image-16");
var image17 = document.getElementById("image-17");
var image18 = document.getElementById("image-18");
var image19 = document.getElementById("image-19");

// Intersection observer options
var options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5,
};

// Create the intersection observer
var observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      if (entry.target.id === "image-1") {
        console.log("image 1");
        text1.classList.add("reveal");
      } else {
        text1.classList.remove("reveal");
      }
      if (entry.target.id === "image-2") {
        console.log("image 2");
        text2.classList.add("reveal");
      } else {
        text2.classList.remove("reveal");
      }
      // if (entry.target.id === "image-3") {
      //  console.log("image 3");
      //  text3.classList.add("reveal");
      // } else {
      //  text3.classList.remove("reveal");
      //}
      if (entry.target.id === "image-4") {
        console.log("image 4");
        text4.classList.add("reveal");
      } else {
        text4.classList.remove("reveal");
      }
      if (entry.target.id === "image-5") {
        console.log("image 5");
        text5.classList.add("reveal");
      } else {
        text5.classList.remove("reveal");
      }
      if (entry.target.id === "image-6") {
        console.log("image 6");
        text6.classList.add("reveal");
      } else {
        text6.classList.remove("reveal");
      }
      if (entry.target.id === "image-7") {
        console.log("image 7");
        text7.classList.add("reveal");
      } else {
        text7.classList.remove("reveal");
      }
      if (entry.target.id === "image-8") {
        console.log("image 8");
        text8.classList.add("reveal");
      } else {
        text8.classList.remove("reveal");
      }
      if (entry.target.id === "image-9") {
        console.log("image 9");
        text9.classList.add("reveal");
      } else {
        text9.classList.remove("reveal");
      }
      if (entry.target.id === "image-10") {
        console.log("image 10");
        text10.classList.add("reveal");
      } else {
        text10.classList.remove("reveal");
      }
      if (entry.target.id === "image-11") {
        console.log("image 11");
        text11.classList.add("reveal");
      } else {
        text11.classList.remove("reveal");
      }
      if (entry.target.id === "image-8") {
        console.log("image 8");
        text8.classList.add("reveal");
      } else {
        text8.classList.remove("reveal");
      }
      if (entry.target.id === "image-9") {
        console.log("image 9");
        text9.classList.add("reveal");
      } else {
        text9.classList.remove("reveal");
      }
      if (entry.target.id === "image-10") {
        console.log("image 10");
        text10.classList.add("reveal");
      } else {
        text10.classList.remove("reveal");
      }
      if (entry.target.id === "image-11") {
        console.log("image 11");
        text11.classList.add("reveal");
      } else {
        text11.classList.remove("reveal");
      }
      if (entry.target.id === "image-12") {
        console.log("image 12");
        text12.classList.add("reveal");
      } else {
        text12.classList.remove("reveal");
      }
      if (entry.target.id === "image-13") {
        console.log("image 13");
        text13.classList.add("reveal");
      } else {
        text13.classList.remove("reveal");
      }
      if (entry.target.id === "image-14") {
        console.log("image 14");
        text14.classList.add("reveal");
      } else {
        text14.classList.remove("reveal");
      }
      if (entry.target.id === "image-15") {
        console.log("image 15");
        text15.classList.add("reveal");
      } else {
        text15.classList.remove("reveal");
      }
      if (entry.target.id === "image-16") {
        console.log("image 16");
        text16.classList.add("reveal");
      } else {
        text16.classList.remove("reveal");
      }
      if (entry.target.id === "image-17") {
        console.log("image 17");
        text17.classList.add("reveal");
      } else {
        text17.classList.remove("reveal");
      }
      if (entry.target.id === "image-18") {
        console.log("image 18");
        text18.classList.add("reveal");
      } else {
        text18.classList.remove("reveal");
      }
      if (entry.target.id === "image-19") {
        console.log("image 19");
        text19.classList.add("reveal");
      } else {
        text19.classList.remove("reveal");
      }
    }
  });
}, options);

// Observe the images
observer.observe(image1);
observer.observe(image2);
// observer.observe(image3);
observer.observe(image4);
observer.observe(image5);
observer.observe(image6);
observer.observe(image7);
observer.observe(image8);
observer.observe(image9);
observer.observe(image10);
observer.observe(image11);
observer.observe(image12);
observer.observe(image13);
observer.observe(image14);
observer.observe(image15);
observer.observe(image16);
observer.observe(image17);
observer.observe(image18);
observer.observe(image19);
