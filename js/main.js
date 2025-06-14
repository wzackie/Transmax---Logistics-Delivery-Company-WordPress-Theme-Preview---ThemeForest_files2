const swiper = new Swiper(".frist_swiper", {
    effect: "fade",
    autoplay: { delay: 2000 },
    loop: true, 
    navigation: {
    nextEl: "#slide-next",
    prevEl: "#slide-prev"
    },
    pagination: {
    el: '.frist_swiper-pagination',
    clickable: true,
  },
});


var swipers = new Swiper(".mySwiper", {
  loop: true,
    autoplay: {
  delay: 3000,
  disableOnInteraction: false,
},
  spaceBetween: 10,
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
    1104: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
});

    
   //     counters

   const counters = document.querySelectorAll('.counter');

  const startCount = (counter) => {
    const target = +counter.getAttribute('data-target');
    let count = 0;
    const increment = target / 200;

    const update = () => {
      if (count < target) {
        count += increment;
        counter.innerText = Math.ceil(count);
        requestAnimationFrame(update);
      } else {
        counter.innerText = target;
      }
    };

    update();
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        startCount(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.5 
  });

  counters.forEach(counter => {
    observer.observe(counter);
  });   





 //       People Say About Our Company

 const swi = new Swiper('.people-say', {
  loop: true,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 3000,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    }
  }
 });



 //  Helping Companies in Their Green

  const swipe = new Swiper('.swiperr.latest-news', {
    spaceBetween: 30,
    slidesPerView: 2, 
    pagination: {
      el: '.swip-pagination',
     clickable: true,
     },
    autoplay: {
      delay: 2500,
    },
    breakpoints: {
      0: {
        slidesPerView: 1, 
      },
      768: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
    }
  });