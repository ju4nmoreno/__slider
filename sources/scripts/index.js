(function () {
  // init 

  let Model = {
    currentSlide:  null,
    nextSlide: null,
    farSlide: null,
    slides: [
      {
        image:"assets/images/slider-home/img_banner_001.jpg",
        link:"#/one",
        class:"Slider__active"
      },
      {
        image:"assets/images/slider-home/img_banner_002.jpg",
        link:"#/two",
        class:"Slider__next"
      },
      {
        image:"assets/images/slider-home/img_banner_003.jpg",
        link:"#/three",
        class:"Slider__far"
      },
      {
        image:"assets/images/slider-home/img_banner_002.jpg",
        link:"#/four",
        class:""
      }
    ]
  }
  
  let SliderCtrl = {
    init: function () {
      if (Model.slides.length > 2){

        Model.currentSlide = Model.slides[0];
        Model.nextSlide = Model.slides[1];
        Model.farSlide = Model.slides[2];

        ViewSlider.init();

      }
    },

    nextSlide: function() {

      let f = Model.slides.shift(),
          slides = Model.slides;
      
      Model.slides.push(f);

      for (let i = 0; i < slides.length; i++){

        if(i === 0) slides[i].class = "Slider__active";
        else if(i === 1) slides[i].class = "Slider__next";
        else if(i === 2) slides[i].class = "Slider__far";
        else slides[i].class = "";
      }

      ViewSlider.render();

    },

    slides: function(){
      return Model.slides;
    }
  }

  let ViewSlider ={

    ctx: document.querySelector(".js-items"),

    init: function () {

      let infoSlide = SliderCtrl.slides();

      if (infoSlide.length > 2) {
        this.render();
      }

      document.querySelector(".js-hitSlider").addEventListener("click", (e) => {
        e.preventDefault();
        SliderCtrl.nextSlide();
      }, false);


    }, 

    tmp: function (info){
      return `<a class="Slider__anchor ${info.class}" href="${info.link}"><span class="Slider__item"><i class="Slider__bg" style="background-image:url(${info.image});"></i></span></a>`;
    },

    render: function () {
      let infoSlide = SliderCtrl.slides();

      if (infoSlide.length > 2){
        this.ctx.innerHTML = "";

        for (let slide in infoSlide) {
          this.ctx.innerHTML += this.tmp(infoSlide[slide]); 
        }
      }

    }
  }


  document.addEventListener("DOMContentLoaded", () => {
    SliderCtrl.init();
  }, false);
})();
















