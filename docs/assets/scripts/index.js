"use strict";

(function () {
  // init 

  var Model = {
    currentSlide: null,
    nextSlide: null,
    farSlide: null,
    slides: [{
      image: "assets/images/slider-home/bg0001.gif",
      link: "#/one",
      class: ""
    }, {
      image: "assets/images/slider-home/bg0002.jpg",
      link: "#/two",
      class: ""
    }, {
      image: "assets/images/slider-home/bg0003.gif",
      link: "#/three",
      class: ""
    }, {
      image: "assets/images/slider-home/bg0004.jpg",
      link: "#/four",
      class: ""
    }, {
      image: "assets/images/slider-home/bg0005.gif",
      link: "#/four",
      class: ""
    }, {
      image: "assets/images/slider-home/bg0006.jpg",
      link: "#/four",
      class: ""
    }, {
      image: "assets/images/slider-home/bg0007.gif",
      link: "#/four",
      class: ""
    }, {
      image: "assets/images/slider-home/bg0008.JPG",
      link: "#/four",
      class: ""
    }, {
      image: "assets/images/slider-home/bg0009.gif",
      link: "#/four",
      class: ""
    }, {
      image: "assets/images/slider-home/bg0010.jpg",
      link: "#/four",
      class: ""
    }, {
      image: "assets/images/slider-home/bg0011.gif",
      link: "#/four",
      class: ""
    }, {
      image: "assets/images/slider-home/bg0012.gif",
      link: "#/four",
      class: ""
    }, {
      image: "assets/images/slider-home/bg0013.JPG",
      link: "#/four",
      class: ""
    }, {
      image: "assets/images/slider-home/bg0014.gif",
      link: "#/four",
      class: ""
    }, {
      image: "assets/images/slider-home/bg0015.gif",
      link: "#/four",
      class: ""
    }, {
      image: "assets/images/slider-home/bg0016.jpg",
      link: "#/four",
      class: ""
    }, {
      image: "assets/images/slider-home/bg0017.gif",
      link: "#/four",
      class: ""
    }, {
      image: "assets/images/slider-home/bg0018.jpg",
      link: "#/four",
      class: ""
    }, {
      image: "assets/images/slider-home/bg0019.gif",
      link: "#/four",
      class: ""
    }, {
      image: "assets/images/slider-home/bg0020.jpg",
      link: "#/four",
      class: ""
    }, {
      image: "assets/images/slider-home/bg0021.gif",
      link: "#/four",
      class: ""
    }, {
      image: "assets/images/slider-home/bg0022.jpg",
      link: "#/four",
      class: ""
    }, {
      image: "assets/images/slider-home/bg0023.gif",
      link: "#/four",
      class: ""
    }, {
      image: "assets/images/slider-home/bg0024.jpg",
      link: "#/four",
      class: ""
    }, {
      image: "assets/images/slider-home/bg0025.gif",
      link: "#/four",
      class: ""
    }, {
      image: "assets/images/slider-home/bg0026.gif",
      link: "#/four",
      class: ""
    }, {
      image: "assets/images/slider-home/bg0027.jpg",
      link: "#/four",
      class: ""
    }, {
      image: "assets/images/slider-home/bg0028.gif",
      link: "#/four",
      class: ""
    }, {
      image: "assets/images/slider-home/bg0029.jpg",
      link: "#/four",
      class: ""
    }, {
      image: "assets/images/slider-home/bg0030.gif",
      link: "#/four",
      class: ""
    }, {
      image: "assets/images/slider-home/bg0031.jpg",
      link: "#/four",
      class: ""
    }, {
      image: "assets/images/slider-home/bg0032.jpg",
      link: "#/four",
      class: ""
    }, {
      image: "assets/images/slider-home/bg0033.jpg",
      link: "#/four",
      class: ""
    }, {
      image: "assets/images/slider-home/bg0034.jpg",
      link: "#/four",
      class: ""
    }]
  };

  var SliderCtrl = {
    init: function init() {
      if (Model.slides.length > 2) {

        this.updatesPos();

        ViewSlider.init();
      }
    },

    nextSlide: function nextSlide() {

      var firstElement = document.querySelectorAll('.js-items a')[1].classList.add('Slider__active'),
          secondElement = document.querySelectorAll('.js-items a')[2].classList.add('Slider__next'),
          f = Model.slides.shift(),
          slides = Model.slides;

      Model.slides.push(f);

      for (var i = 0; i < slides.length; i++) {

        if (i === 0) slides[i].class = "Slider__active";else if (i === 1) slides[i].class = "Slider__next";else if (i === 2) slides[i].class = "Slider__far";else slides[i].class = "";
      }

      this.updatesPos();

      setTimeout(function () {
        ViewSlider.render();
      }, 1000);
    },

    updatesPos: function updatesPos() {
      Model.currentSlide = Model.slides[0];
      Model.nextSlide = Model.slides[1];
      Model.farSlide = Model.slides[2];
    },

    slides: function slides() {
      return Model.slides;
    }
  };

  var ViewSlider = {

    ctx: document.querySelector(".js-items"),

    initSlider: true,

    init: function init() {

      var infoSlide = SliderCtrl.slides();

      if (infoSlide.length > 2) {
        this.render();
      }

      document.querySelector(".js-hitSlider").addEventListener("click", function (e) {
        e.preventDefault();
        SliderCtrl.nextSlide();
      }, false);
    },

    tmp: function tmp(info) {
      return "<a class=\"Slider__anchor " + info.class + "\" href=\"" + info.link + "\">\n        <span class=\"Slider__item\">\n          <i class=\"Slider__bg\" style=\"background-image:url(" + info.image + ");\"></i>\n        </span></a>";
    },

    render: function render() {
      var infoSlide = SliderCtrl.slides(),
          aClassName = ['Slider__active', 'Slider__next', 'Slider__far'];

      if (infoSlide.length > 2) {
        this.ctx.innerHTML = "";

        for (var slide in infoSlide) {
          var elem = this.tmp(infoSlide[slide]);
          this.ctx.innerHTML += elem;

          if (this.initSlider) fnAddClass(slide);
        }

        this.initSlider = false;
      }

      function fnAddClass(slide) {
        setTimeout(function () {

          if (aClassName[slide]) ViewSlider.ctx.querySelectorAll('a')[slide].classList.add(aClassName[slide]);
        }, 1);
      }
    }
  };

  document.addEventListener("DOMContentLoaded", function () {
    SliderCtrl.init();
  }, false);
})();