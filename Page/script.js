//sidebar
function sidebar_switch() {
  let style = document.getElementById("SideBar_Content").style;
  if (style.display == "none") {
    style.display = "block";
  } else {
    style.display = "none";
  }
}

function sidebar_close() {
  document.getElementById("SideBar_Content").style.display = "none";
}

// image
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
  body.style.overflow = "visible";
}

window.addEventListener("load", function () {
  let polys = this.document.getElementsByTagName("img");
  for (let i = 0; i < polys.length; i++) {
    if (polys[i].id =="logo") {
      console.log(polys[i].id)
      continue;
    }
    polys[i].onclick = () => openOverlay(polys[i].src);
  }
});

function openSideBar() {
  var sidebar = document.getElementById("sidenav").style;
  sidebar.width = "200px";
  var wr = document.getElementById("wrapper");
  wr.style.marginLeft = "250";
  document.getElementById("navButton").style.marginLeft = "200";
  console.log(wr.style.marginLeft);
}

function closeSideBar() {
  var sidebar = window.document.getElementById("sidenav").style;
  sidebar.width = "0";
  document.getElementById("wrapper").style.marginLeft = "250";
  document.getElementById("wrapper").style.marginLeft = null;
  document.getElementById("navButton").style.marginLeft = "0";
}
var body = $(window).height();

$(window).on("resize", function () {
  body = $(window).height();
  console.log(body);
});

var controller = new ScrollMagic.Controller();
$(function () {
  // wait for document ready
  // build scene
  var scene = new ScrollMagic.Scene({
    triggerElement: "#sticky",
    triggerHook: 0
  })
    .setPin("#sticky")
    // .addIndicators({ name: "2 (duration: 0)" }) // add indicators (requires plugin)
    .addTo(controller);
});
