<template>
<div class="container retail-hero-container">
    <div class="hero-background-image">
        <div class="hero-inner">
            <div class="hero-text-container">
                <h1 class="herotext">{{ heroTitle }}</h1>
                <p class="herotext" v-html="heroText"></p>
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
    margin-top: 15px;
    font-family: 'Raleway','Avenir', Helvetica, Arial, sans-serif;
}

.hero-background-image {
    width: 100%;
    background-image:  url('../../assets/images/bathfest.jpeg');
    background-repeat: no-repeat;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
}
.hero-inner {
    max-width: 1000px;
    margin: 0 auto;
    height: 400px;
    position: relative;
    color: #ffffff;
}
.hero-text-container {
        position: absolute;
        top: 40px;
        left: 0;
        text-align: left;
        padding-left: 15px;
        padding-right: 15px;
}
.hero-text-container h1 {
    font-size: 2.5em;
}

.herotext {
    font-weight: bold;
}
.hero-background-image {
        height: 277px;
    }
 .hero-undertext{
  display: none;
 }
 .herotext{
  display: none;
 }

@media only screen and (min-width: 800px) {
  .hero-background-image {
        height: 400px;
    }
}

@media only screen and (min-width: 1200px) {
  .hero-undertext {
    text-align: left;
    color: #ffffff;
    margin-top: 20px;
    display: block
}
    .herotext{
    display: block;
  }
    .retail-hero-container {
    margin-top: 100px;
    }
    .hero-text-container {
        position: absolute;
        text-align: left;
        width: 60% ;
    }
    .hero-undertext {
        margin-left: 80px;
    }
    .hero-background-image {
        height: 700px;
    }
    .hero-text-container h1 {
    font-size: 5em;
    }
    .hero-background-image {
    width: 100%;
    background-image:  url('../../assets/images/bathfest.jpeg');
    background-repeat: no-repeat;
    background-position: center;

    background-repeat: no-repeat;
    background-size: cover;
}
}
@media only screen and (min-width: 1400px) {
    .retail-hero-container {
        height: 700px;
    }
    .hero-background-image {
        height: 700px;
    }
}



</style>
<script>
export default {
  name: 'HomeHero',
  props: ['heroTitle', 'heroText', 'heroImage', 'heroUndertextHeading', 'heroUndertextText'],
  data() {
      return {

      }
  },
  mounted(){
		},
  methods: {

    }
}
</script>
