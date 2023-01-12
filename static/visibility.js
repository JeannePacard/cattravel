// Visibility set to "block" when scrolling

unContexte.style.display = "none";

window.addEventListener(
  "scroll",
  function () {
    if (document.scrollX > 1920) {
      pied.style.display = "block";
    } else if (document.scrollX > 3840) {
      monocycle.style.display = "block";
    } else if (document.scrollX > 5760) {
      velo.style.display = "block";
    } else if (document.scrollX > 7680) {
      velo.style.display = "block";
    } else {
      patin.style.display = "block";
    }
  },
  false
);
