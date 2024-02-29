$(document).ready(function () {
  feather.replace();
});

/*----------------Page Scrolling - ScrollIt----------------*/
$.scrollIt({
  topOffset: -50,
});

/*----------------Navbar Collapse----------------*/
// $(".nav-link").on("click", function () {
//     $(".navbar-collapse").collapse("hide");
// });

// function initFreshChat() {
//     window.fcWidget.init({
//         token: "bd4a22dd-ddb0-4e8d-a898-326a9b3319af",
//         host: "https://wchat.freshchat.com"
//     });
// }
// function initialize(i, t) { var e; i.getElementById(t) ? initFreshChat() : ((e = i.createElement("script")).id = t, e.async = !0, e.src = "https://wchat.freshchat.com/js/widget.js", e.onload = initFreshChat, i.head.appendChild(e)) } function initiateCall() { initialize(document, "Freshdesk Messaging-js-sdk") } window.addEventListener ? window.addEventListener("load", initiateCall, !1) : window.attachEvent("load", initiateCall, !1);
















// Progressbar rounded

$(".circle_percent").each(function () {
  var $this = $(this),
    $dataV = $this.data("percent"),
    $dataDeg = $dataV * 3.6,
    $round = $this.find(".round_per");
  $round.css("transform", "rotate(" + parseInt($dataDeg + 180) + "deg)");
  $this.append(
    '<div class="circle_inbox"><span class="percent_text"></span></div>'
  );
  $this.prop("Counter", 0).animate(
    { Counter: $dataV },
    {
      duration: 2000,
      easing: "swing",
      step: function (now) {
        $this.find(".percent_text").text(Math.ceil(now) + "%");
      },
    }
  );
  if ($dataV >= 51) {
    $round.css("transform", "rotate(" + 360 + "deg)");
    setTimeout(function () {
      $this.addClass("percent_more");
    }, 1000);
    setTimeout(function () {
      $round.css("transform", "rotate(" + parseInt($dataDeg + 180) + "deg)");
    }, 1000);
  }
});

// Quatity calculator

jQuery(document).ready(($) => {
  $(".quantity").on("click", ".plus", function (e) {
    let $input = $(this).prev("input.qty");
    let val = parseInt($input.val());
    $input.val(val + 1).change();
  });

  $(".quantity").on("click", ".minus", function (e) {
    let $input = $(this).next("input.qty");
    var val = parseInt($input.val());
    if (val > 0) {
      $input.val(val - 1).change();
    }
  });
});

// Accordion

document.addEventListener("DOMContentLoaded", function () {
  const accordionHeaders = document.querySelectorAll(".accordion-header");
  accordionHeaders.forEach((header) => {
    header.addEventListener("click", function () {
      const accordionItem = this.closest(".accordion-item");
      accordionItem.classList.toggle("active");
      const accordionContent =
        accordionItem.querySelector(".accordion-content");
      accordionContent.classList.toggle("active");

      // Memperbarui nilai tabel dan memanggil fungsi untuk animasi menghitung
      updateTableValues();
      animateCount();
    });
  });

  // Fungsi untuk memperbarui nilai tabel
  const updateTableValues = () => {
    const suratMasuk = 170; // Ganti dengan nilai sesuai kebutuhan
    const suratKeluar = 50; // Ganti dengan nilai sesuai kebutuhan
    const totalSurat = suratMasuk + suratKeluar;
    document.getElementById("suratMasuk").textContent = suratMasuk;
    document.getElementById("suratKeluar").textContent = suratKeluar;
    document.getElementById("totalSurat").textContent = totalSurat;

    const uangMasuk = 1200000; // Ganti dengan nilai sesuai kebutuhan
    const uangKeluar = 4500000; // Ganti dengan nilai sesuai kebutuhan
    const totalSaldo = uangMasuk - uangKeluar;
    document.getElementById("uangMasuk").textContent = uangMasuk;
    document.getElementById("uangKeluar").textContent = uangKeluar;
    document.getElementById("totalSaldo").textContent = totalSaldo;
  };

  // Animate count on table
  const animateCount = () => {
    const counters = document.querySelectorAll(".count-animate");
    counters.forEach((counter) => {
      const target = +counter.textContent;
      let count = 0;
      const increment = target / 100;
      const updateCount = () => {
        count += increment;
        if (count < target) {
          counter.textContent = Math.ceil(count);
          setTimeout(updateCount, 10);
        } else {
          counter.textContent = target;
        }
      };
      updateCount();
    });
  };

  // Memanggil fungsi untuk memperbarui nilai tabel saat halaman dimuat
  updateTableValues();
});

// Date Footer Update Automatic

document.getElementById("currentYear").textContent = new Date().getFullYear();
