<template>
<div class="container-fluid retail-one-image-container">
            <div class="two-image-container" >
                <img :src="getImgUrl(image1)" class="one-image-image">
            </div>
</div>


</template>
<style>
.retail-one-image-container{
    height: 800px;
}
.one-image-container{
    height: 400px;
    width: 100%; 
    float: left; 
    padding: 20px;
}
.one-image-inner {
    margin: 0 auto;
    height: 800px;
    position: relative;
    color: #ffffff;
}
.one-image-image{
    width: 100%; 
    border-radius: 10px;
    height: 300px
}
    

@media only screen and (min-width: 900px) {
    .one-image-container{
    height: 500px;
    width: 100%; 
    float: left; 
    padding: 20px;
    }
    .one-image-container{
        height: 500px;
        width: 100%; 
        height: 500px
    }
    .one-image-image{
    width: 100%; 
    border-radius: 10px;
    height: 500px
    }
    
}


</style>
<script>
export default {
  name: 'FullWidthImage',
  props: ['image1'],
  data() {
      return {
        image: "./assets/images/Shop_Image.jpg",
        publicPath: process.env.BASE_URL
      }
    
  },

  mounted(){
		},
}
</script>