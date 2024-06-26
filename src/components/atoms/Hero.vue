<template>
<div class="container-fluid retail-hero-container">
    <div class="hero-background-image">
        <div class="hero-inner">
            <div class="hero-text-container">
                <h1>{{ heroTitle }}</h1>
                <p class="herotext">{{ heroText }}</p>
            </div>
        </div>
    </div>

    <p class="hero-undertext"><b>{{ heroUndertextHeading }}</b> {{ heroUndertextText }}</p>

</div>


</template>
<style scoped>
.retail-hero-container {
    padding-left: 0;
    padding-right: 0;
}
.hero-background-image {
    height: 600px;
    width: 100%;
    background-color: #000000;

    background-repeat: no-repeat;
    background-size: cover;
}
.hero-inner {
    max-width: 1000px;
    margin: 0 auto;
    height: 600px;
    position: relative;
    color: #ffffff;
}
.hero-text-container {
        position: absolute;
        top: 30%;
        left: 0;
        text-align: left;
        padding-left: 15px;
        padding-right: 15px;
}
.hero-text-container h1 {
    font-size: 5em;
}
.hero-undertext {
    text-align: left;
    color: #ffffff;
    margin-top: 20px;
    margin-left: 0;
    text-align: center;
}


@media only screen and (min-width: 800px) {
    .hero-text-container {
        position: absolute;
        text-align: left;
        width: 80% ;
    }

}


</style>
<script>
export default {
  name: 'hero',
  props: ['heroTitle', 'heroText', 'heroImage', 'heroUndertextHeading', 'heroUndertextText'],
  data() {
      return {
        image: "./assets/images/Shop_Image.jpg",
        publicPath: process.env.BASE_URL
      }
  },
  mounted(){
		},
  methods: {
      getImgUrl(){
        return require( '../../assets/images/' + this.heroImage )
      }
    }
}
</script>
