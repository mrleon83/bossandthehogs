<template>
  <div style="max-width: 600px; margin: 0 auto; margin-top: 20px;">
    <b-carousel
      id="carousel-1"
      v-model="slide"
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >

    <b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-100 carousel-image"
            width="1024"
            height="480"
            src="../../assets/images/gallery/fest2.jpeg"
            alt="boss and the hogs playing live"
          >
        </template>
      </b-carousel-slide>

      <b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-100 carousel-image"
            width="1024"
            height="480"
            src="../../assets/images/gallery/fest3.jpeg"
            alt="boss and the hogs playing live"
          >
        </template>
      </b-carousel-slide>

      <b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-100 carousel-image"
            width="1024"
            height="480"
            src="../../assets/images/gallery/fest4.jpeg"
            alt="boss and the hogs playing live"
          >
        </template>
      </b-carousel-slide>

      <b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-100 carousel-image"
            width="1024"
            height="480"
            src="../../assets/images/gallery/fest5.jpeg"
            alt="boss and the hogs playing live"
          >
        </template>
      </b-carousel-slide>

      <b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-100 carousel-image"
            width="1024"
            height="480"
            src="../../assets/images/gallery/fest2.jpeg"
            alt="boss and the hogs playing live"
          >
        </template>
      </b-carousel-slide>


    </b-carousel>
  </div>
</template>

<style scoped>
  .sr-only {
    visibility: hidden !important;
  }
</style>

<script>
  export default {
    name: 'gallery',
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
      }
    }
  }
</script>
