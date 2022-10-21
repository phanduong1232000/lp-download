// scroll
$(document).ready(function() {
  $('#fullpage').fullpage({
    scrollBar: true,
    navigation: true,
    scrollingSpeed: 0,
    anchors: ['one', 'two', 'three', 'four', 'five','six', 'seven', 'eight'],
    navigationTooltips: ['Giới Thiệu', 'Tổng Quan', 'Cách khắc phục','Sự khác nhau', 'Các ưu điểm', 'thử nghiệm', 'liên hệ', 'Kết luận'],
  });
});

// import wowjs
new WOW().init();
// slider banner header
$(document).ready(function () {
  new Swiper('.swiper-banner', {
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 3000,
    },
    paginationClickable: true,
    spaceBetween: 20,
  });
});
// slider feedback
$(document).ready(function () {
  new Swiper('.swiper-feedback', {
    loop: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // autoplay: {
    //   delay: 2000,
    // },
    paginationClickable: true,
    spaceBetween: 20,
  });
});
// slider product
$(document).ready(function () {
  new Swiper('.swiper-product', {
    loop: true,
    autoplay: {
      delay: 3000,
    },
    paginationClickable: true,
    spaceBetween: 20,
    slidesPerView: 4,
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    },
  });
});

  // coutdown ==============
  (function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
  
    //I'm adding this section so I don't have to keep updating this pen every year :-)
    //remove this if you don't need it
    let today = new Date(),
        dd = String(today.getDate()).padStart(2, "0"),
        mm = String(today.getMonth() + 1).padStart(2, "0"),
        yyyy = today.getFullYear(),
        nextYear = yyyy + 1,
        dayMonth = "12/30/",
        birthday = dayMonth + yyyy;
    
    today = mm + "/" + dd + "/" + yyyy;
    if (today > birthday) {
      birthday = dayMonth + nextYear;
    }
    //end
    const countDown = new Date(birthday).getTime(),
        x = setInterval(function() {    
  
          const now = new Date().getTime(),
                distance = countDown - now;
  
          document.getElementById("days").innerText = Math.floor(distance / (day)),
          document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
          document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
          document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
        }, 0)
    }());


var menu = ['1', '2', '3', '4','5','6','7','8']
var mySwiper = new Swiper ('.swiper-container', {
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
			clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (menu[index]) + '</span>';
        },
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })




 