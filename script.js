(function () {
  function init() {
    var heartFront = document.querySelector(".heart-front");
    heartFront.addEventListener("click", function () {
      heartFront.classList.add("open");
    });

    var searchParams = new URLSearchParams(window.location.search.substring(1));
    var data = window.atob(searchParams.get("data"));

    document.querySelector(".message").innerText = data;
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
