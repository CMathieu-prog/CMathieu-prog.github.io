/* Charger une image */
function loadImg(src, callback) {
  var img = new Image();
  img.src = src;
  img.onload = function () {
    callback(img);
  };
}

/* Fonction principale */
(function Main(y) {
  /* Canvas */
  var cvs = document.getElementById("sprite-anim"),
    ctx = cvs.getContext("2d"),
    parentCvs = document.getElementById("timeline");
    let ol = document.getElementById('elmnts')
    cvs.width = (ol.getElementsByTagName('LI').length) * 70;
    cvs.height = 35;

  /* Paramètres */
  var size = 32,
    x = 0,
    y = 0,
    z = 0;

  /* Dessiner la scène */
  var draw = function (img) {
    /* Effacer le canvas */
    ctx.clearRect(0, 0, cvs.width, cvs.height);
    /* Dessiner l'image */
    ctx.drawImage(img, z * size, 0, size, size, y, x, size, size);
  };

  /* Animer */
  loadImg("image/anim_cv2_avance.png", function (img) {
    draw(img);
    let year = document.getElementById("events-wrapper");
    let currentSelected = 2016;
    let position = 0
    year.onclick = function () {
      let newSelected = document.getElementsByClassName("selected");

      let diff = parseInt(newSelected[0].textContent) - currentSelected;

      if(Math.sign(diff) == 1 || Math.sign(diff) == 0)
      {

          position += 70 * diff ;
          console.log('y : '+y+' position : '+position);
    
          let anim = window.setInterval(function () {
            draw(img);
            if (y < position) {
              y = y + 1;
              z = (z + 1) % 3; // deplacement sur l'image decoupage
            } else {
              z = 1;
              clearInterval(anim);
            }
          }, 1);
          
          
    
          
      }
      else
      {
        loadImg("image/anim_cv2_recule.png", function (img){

          position -=  (70 * Math.abs(diff)) ;
          console.log('diff : ' + diff + ' y : '+y+' position : '+position);
    
          let anim = window.setInterval(function () {
            draw(img);
            if (y > position) {
              y -= 1;
              z = (z + 1) % 3; // deplacement sur l'image decoupage
            } else {
              z = 1;
              clearInterval(anim);
            }
          }, 1);

        });
      }
      currentSelected = parseInt(newSelected[0].textContent);
    }

    //   window.setInterval(function () {
    //     draw(img);
    //     y = ( y + 1 ) % (cvs.width + (size/2)); //
    //     z = (z + 1) % 3; // deplacement sur l'image decoupage
    //   }, 10);
  });
})();
