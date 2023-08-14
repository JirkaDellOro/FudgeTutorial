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
    if (i == 0 || i == 1) {
      continue;
    }
    polys[i].onclick = () => openOverlay(polys[i].src);
  }
});

function openSideBar() {
  var sidebar = document.getElementById("sidenav").style;
  sidebar.width = "200px";
  document.getElementById("wrapper").style.marginLeft = "250";
  document.getElementById("navButton").style.marginLeft = "200";
}

function closeSideBar() {
  var sidebar = document.getElementById("sidenav").style;
  sidebar.width = "0";
  document.getElementById("wrapper").style.marginLeft = "250";
  document.getElementById("wrapper").style.marginLeft = null;
  document.getElementById("navButton").style.marginLeft = "0";
}
