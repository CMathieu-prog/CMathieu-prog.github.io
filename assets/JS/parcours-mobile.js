let contents = document.querySelectorAll(".parcours-content");
document.querySelectorAll(".year").forEach((el) =>
  el.addEventListener("click", function () {
    if (el.nextElementSibling.style.display == "block") {
      el.nextElementSibling.classList.remove('animationopen');
      el.nextElementSibling.classList.add('animationclose');
      el.children[0].className = "fas fa-plus-circle";
      setTimeout(function(){el.nextElementSibling.style.display = "none";},900)
      // 
    } else {
      el.nextElementSibling.style.display = "block";
      el.nextElementSibling.classList.add('animationopen');
      el.nextElementSibling.classList.remove('animationclose');
      el.children[0].className = "fas fa-minus-circle";
    }
    contents.forEach((ct) => {
      if (ct !== el.nextElementSibling) {
        ct.previousElementSibling.children[0].className = "fas fa-plus-circle";
        ct.classList.remove(['animationopen','animationclose']);
        ct.style.display = "none";
      }
    });
  })
);
