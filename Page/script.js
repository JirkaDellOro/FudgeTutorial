function openOverlay(imageSrc) {
  const overlay = document.querySelector(".overlay");
  const overlayImage = document.querySelector("#overlayImage");
  const body = document.querySelector("body");
  overlayImage.src = imageSrc;
  overlay.style.display = "flex";
  body.style.overflow = "hidden";
}

function closeOverlay() {
  const overlay = document.querySelector(".overlay");
  const body = document.querySelector("body");

  overlay.style.display = "none";
  body.style.overflow ="visible";
}

window.addEventListener("load", function () {
  let polys = this.document.getElementsByTagName("img");
  for (let i = 0; i < polys.length; i++) {
    polys[i].onclick = () => openOverlay(polys[i].src);
  }
});
