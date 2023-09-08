
// image
function openOverlay(imageSrc) {
  const overlay = document.querySelector(".overlay");
  const overlayImage = document.querySelector("#overlayImage");
  const body = document.querySelector("body");
  overlayImage.src = imageSrc;
  overlayImage.style.width = "auto";
  overlayImage.style.height = "auto";
  overlay.style.display = "flex";
  body.style.overflow = "hidden";
}

function closeOverlay() {
  const overlay = document.querySelector(".overlay");
  const body = document.querySelector("body");

  overlay.style.display = "none";
  body.style.overflow = "visible";
}



window.addEventListener("load", function () {
  let polys = this.document.getElementsByTagName("img");
  for (let i = 0; i < polys.length; i++) {
    if (polys[i].id == "logo") {
      // console.log(polys[i].id);
      continue;
    }
    polys[i].onclick = () => openOverlay(polys[i].src);
  }
});

var body = $(window).height();

$(window).on("resize", function () {
  body = $(window).height();
  // console.log(body);
});

var controller = new ScrollMagic.Controller();
$(function () {
  // wait for document ready
  // build scene
  var scene = new ScrollMagic.Scene({
    triggerElement: "#sticky",
    triggerHook: 0,
  })
    .setPin("#sticky")
    // .addIndicators({ name: "2 (duration: 0)" }) // add indicators (requires plugin)
    .addTo(controller);
});
