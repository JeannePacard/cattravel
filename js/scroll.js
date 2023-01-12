var item = document.querySelector("html");

window.addEventListener("wheel", function (e) {
  console.log("wheel");
  if (e.deltaY > 0) item.scrollLeft += 250;
  else item.scrollLeft -= 250;
});
