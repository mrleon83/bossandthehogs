<template>
<div class="container-fluid retail-two-image-container">
            <div class="two-image-container" >
                <img :src="getImgUrl(image1)" class="two-image-image">
            </div>
            <div class="two-image-container">
                <img :src="getImgUrl(image2)" class="two-image-image" >
            </div>

</div>


</template>
<style>
.retail-two-image-container{
    height: 600px;
}
.two-image-container{
    height: 400px;
    width: 100%; 
    float: left; 
    padding: 20px;
}
.two-image-inner {
    max-width: 1000px;
    margin: 0 auto;
    height: 800px;
    position: relative;
    color: #ffffff;
}
.two-image-image{
    width: 100%; 
    border-radius: 10px;
    height: 300px
}
    

@media only screen and (min-width: 900px) {
    .retail-two-image-container{
    height: 400px;
    }
    .two-image-container{
    height: 400px;
    width: 100%; 
    float: left; 
    padding: 20px;
    }
    .two-image-container{
        height: 500px;
        width: 50%; 
        height: 500px
    }
    .two-image-image{
    width: 100%; 
    border-radius: 10px;
    height: 400px
    }
    
}


</style>
<script>
export default {
  name: 'TwoImages',
  props: ['image1', 'image2'],
  data() {
      return {
        image: "./assets/images/Shop_Image.jpg",
        publicPath: process.env.BASE_URL
      }
    
  },

  mounted(){
		},
  methods: {
      getImgUrl(pic){
        return require('../../assets/images/'+pic)
      }
    }
}
</script>