
function load() {
  var imgs = [];

  var img1 = document.createElement("IMG");
  img1.src="SpaceShip1.jpg";
  imgs.push(img1);
  var img2 = document.createElement("IMG");
  img2.src="SpaceShip2.jpg";
  imgs.push(img2);
  var img3 = document.createElement("IMG");
  img3.src="SpaceShip3.jpg";
  imgs.push(img3);
  var img4 = document.createElement("IMG");
  img4.src="Spaceship4.jpg";
  imgs.push(img4);
  var img5 = document.createElement("IMG");
  img5.src="Spaceship5.jpg";
  imgs.push(img5);
  var imgBin = document.getElementById("normalImages");
  for (counter = 0; counter < imgs.length; counter++) {
    var img = imgs[counter];
    imgBin.appendChild(img);
    img.addEventListener("click", imgSwap);
  }
}
function imgSwap(event) {
  document.getElementById("bigImage").src = event.target.src;

}
