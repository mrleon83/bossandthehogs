<template>
<div class="margin-top">
    <b-row>
        <b-col class="col-12 col-md-4 col-sm-12 col-xs-12">
            <div class="three-boxes-short-container">
                <div class="three-boxes-short-inner">
                    <div class="three-boxes-short-top-left-text">
                        {{ boxTitle1 }}
                    </div>
                    <div class="three-boxes-short-icon">
                        <img :src="getImgUrl(image1)" class="three-box-image"/>
                    </div>
                    <p class="three-boxes-short-text">{{ boxText1 }}</p>
                </div>
            </div>
        </b-col>
        <b-col class="col-12 col-md-4 col-sm-12 col-xs-12">
            <div class="three-boxes-short-container">
                <div class="three-boxes-short-inner">
                    <div class="three-boxes-short-top-left-text">
                        {{ boxTitle2 }}
                    </div>
                    <div class="three-boxes-short-icon">
                        <img :src="getImgUrl(image2)" class="three-box-image"/>
                    </div>
                    <p class="three-boxes-short-text">{{ boxText2 }}</p>
                </div>
            </div>
        </b-col>
        <b-col class="col-12 col-md-4 col-sm-12 col-xs-12">
            <div class="three-boxes-short-container">
                <div class="three-boxes-short-inner">
                    <div class="three-boxes-short-top-left-text">
                         {{ boxTitle3 }}
                    </div>
                    <div class="three-boxes-short-icon">
                        <img :src="getImgUrl(image3)" class="three-box-image"/>
                    </div>
                    <p class="three-boxes-short-text">{{ boxText2 }}</p>
                </div>
            </div>
        </b-col>
    </b-row>
</div>


</template>
<style>
.three-boxes-short-container{
        height: 320px;
        position: relative;
        margin-bottom: 20px;
    }
.three-boxes-short-inner {
    padding: 20px;
    height: 100%;
    margin: 0 auto;
    border: 2px solid #ffffff;
    border-radius: 10px;
    position: relative;
    background-color: transparent;
}
.three-boxes-short-top-left-text{
    position: absolute;
    left: 15px;
    top: 15px;
    color: #ffffff;
    font-weight: 800;
    font-size: 1.2em;
}
.three-boxes-short-icon {
    width: 120px;
    height: 120px;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -40%);
}
.three-boxes-short-text{
    padding-left: 20px;
    padding-right: 20px;
    color: #ffffff;
    position: absolute;
    text-align: left;
    top: 180px;
    left: 8px;
}
.three-box-image {
    width: 120px;
}

@media only screen and (min-width: 1000px) {
    .component-container {
        background-color: transparent;
        max-width: 1000px;
    }
    .three-boxes-short-container{
        height: 320px;
        position: relative;
        margin-bottom: 20px;
    }
}


</style>
<script>
export default {
  name: 'ThreeBoxesShort',
  props: [ 
        'image1',
        'boxTitle1',
        'boxText1',
        'image2',
        'boxTitle2',
        'boxText2',
        'image3',
        'boxTitle3',
        'boxText3',
  ],
  data() {
      return {
        image: "./assets/images/Shop_Image.jpg"
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