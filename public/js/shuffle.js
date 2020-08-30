function polaroids() {
  var polaroid = $(".polaroid"),
    polaroidContainer = $(".polaroid-container"),
    polaroidItem = $(".polaroid-item"),
    polaroidItemNum = polaroidItem.length,
    colorSelect = $("#color"),
    colorVal,
    colorId;

  function setColorVal() {
    colorVal = colorSelect.val();

    polaroidItem.removeClass("top-image");

    polaroidItem.each(function () {
      colorId = $(this).attr("id");

      if (colorId === colorVal) {
        $(this).addClass("top-image");
      }
    });
  }

  if ($(window).width() > 640) {
    function setPolaroids() {
      polaroidItem.each(function (i) {
        var numTop = Math.random() * 128 - 64,
          numDeg = Math.random() * 12 - 6;

        if ($(this).hasClass("top-image")) {
          $(this).css({ left: 0, top: 0, transform: "rotate(" + 0 + "deg)" });
        } else {
          $(this).css({ top: numTop, transform: "rotate(" + numDeg + "deg)" });
          if (i % 2 === 0) {
            $(this).css({ left: (i + 1) * 8 });
          } else {
            $(this).css({ left: (i + 1) * -8 });
          }
        }
      });
    }

    function setPolaroidHover() {
      polaroidItem.each(function (i) {
        var numTop = Math.random() * 128 - 64,
          numDeg = Math.random() * 12 - 6;

        if ($(this).hasClass("top-image")) {
          $(this).css({ left: 0, top: 0, transform: "rotate(" + 0 + "deg)" });
        } else {
          $(this).css({ top: numTop, transform: "rotate(" + numDeg + "deg)" });

          if (i % 2 === 0) {
            $(this).css({ left: (i + 1) * 24 });
          } else {
            $(this).css({ left: (i + 1) * -24 });
          }
        }
      });
    }

    setPolaroids();
    polaroid.css({
      height: 300 + polaroidItemNum * 24,
      "margin-top": polaroidItemNum * 12,
      "margin-bottom": polaroidItemNum * 12,
    });
    polaroidItem.show();

    polaroidItem.click(function () {
      polaroidItem.removeClass("top-image");
      $(this)
        .addClass("top-image")
        .css({ transform: "rotate(" + 0 + "deg)" });
      setPolaroidHover();

      colorId = $(this).attr("id");
      colorSelect.val(colorId);
    });

    polaroid.mouseenter(function () {
      setPolaroidHover();
    });

    polaroid.mouseleave(function () {
      setPolaroids();
    });

    colorSelect.change(function () {
      setColorVal();
      setPolaroids();
      console.log("color changed: " + colorVal);
    });
  } else {
    colorSelect.change(function () {
      setColorVal();
    });
    polaroidItem.css({ top: "", left: "", transform: "rotate(0)" });
  }
}

$(document).ready(function () {
  polaroids();
});

$(window).resize(function () {
  polaroids();
});
