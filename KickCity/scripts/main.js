window.onload = function () {
  liteModal.open('#modalShare');
  var cardMain = document.getElementById('cardMain');
  var cardSide = document.getElementById('cardSide');

  var isInViewport = function (elem) {
    var bounding = elem.getBoundingClientRect();
    return (
      bounding.bottom >= 0
    );
  };

  function hasScrolled() {
    if (!isInViewport(cardMain)) {
      cardSide.classList.add('card-side-fixed_show');
    } else {
      cardSide.classList.remove('card-side-fixed_show');
    }
  }

  window.onscroll = function () {
    hasScrolled();
  };

};
