<template>
  <div>
    <b-carousel
      id="carousel-1"
      
      fade
      :interval="4000"
      background="#000000"
      img-width="624"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;margin-top: 140px;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >

      <b-carousel-slide
        caption="product development"
        text="We use your artwork to create the most amazing merchandise for your brand. We don’t just offer branded products, we offer bespoke ranges to work alongside your business. Merchandise isn’t just a product featuring a brand, it’s a memory and a keepsake from your guests experience with you. Your customers will link their product back to the experience with you producing a powerful reminder of your brand."
      >
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            :src="getImgUrl(image1)"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>

      <b-carousel-slide
       caption="product development"
        text="We use your artwork to create the most amazing merchandise for your brand. We don’t just offer branded products, we offer bespoke ranges to work alongside your business. Merchandise isn’t just a product featuring a brand, it’s a memory and a keepsake from your guests experience with you. Your customers will link their product back to the experience with you producing a powerful reminder of your brand."
      >
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            :src="getImgUrl(image2)"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>

      <b-carousel-slide
       caption="product development"
        text="We use your artwork to create the most amazing merchandise for your brand. We don’t just offer branded products, we offer bespoke ranges to work alongside your business. Merchandise isn’t just a product featuring a brand, it’s a memory and a keepsake from your guests experience with you. Your customers will link their product back to the experience with you producing a powerful reminder of your brand."
      >
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            :src="getImgUrl(image3)"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>
<style> 
.sr-only{
    display: none
}
.carousel-caption {
    top: 10%;
    text-align: left;
    left: 16%;
    width: 26%;
  }
.carousel-caption p {
  display: none;
}
@media only screen and (min-width: 800px) {
  .carousel-caption h3{
    font-size: 5em;
  }

}
@media only screen and (min-width: 1400px) {
  .carousel-caption {
    top: 10%;
  }
    .carousel-caption p {
    display: block;
  }
}
</style>

<script>
  export default {
    name: 'Carousel',
    components: {  },
    props: [ 
        'image1',
        'boxTitle1',
        'boxText1',
        'image2',
        'image3',
        'boxTitle2',
        'boxText2',
        'image3',
        'boxTitle3',
        'boxText3',
        'carouseltitle',
        'carouseltext'

  ],
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      },
      getImgUrl(pic){
        return require('../../assets/images/'+pic)
      }
    }
  }
</script>