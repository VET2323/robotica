window.onload = function () {
      var btn1 = document.getElementById("btn1");
      var body = document.getElementsByTagName("body");
      btn1.addEventListener("change", function () {
        if (btn1.checked == true) {
          body[0].classList.add("dark");
        } else {
          body[0].classList.remove("dark");
        }

      })

    }