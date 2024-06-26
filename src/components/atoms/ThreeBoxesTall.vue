<template>
<div class="margin-top">
    <b-row>
        <b-col class="col-12 col-md-4 col-sm-12 col-xs-12">
            <div class="three-boxes-tall-container">
                <div class="three-boxes-tall-inner">
                    <div class="three-boxes-tall-top-left-text">
                        {{ boxTitle1 }}
                    </div>
                    <div class="three-boxes-tall-icon">
                        <img :src="getImgUrl(image1)" class="three-box-image" :alt="boxTitle1"/>
                    </div>
                    <p class="three-boxes-tall-text">{{ boxText1 }}</p>
                </div>
            </div>
        </b-col>
        <b-col class="col-12 col-md-4 col-sm-12 col-xs-12">
            <div class="three-boxes-tall-container">
                <div class="three-boxes-tall-inner">
                    <div class="three-boxes-tall-top-left-text">
                        {{ boxTitle2 }}
                    </div>
                    <div class="three-boxes-tall-icon">
                        <img :src="getImgUrl(image2)" class="three-box-image" :alt="boxTitle2"/>
                    </div>
                    <p class="three-boxes-tall-text">{{ boxText2 }}</p>
                </div>
            </div>
        </b-col>
        <b-col class="col-12 col-md-4 col-sm-12 col-xs-12">
            <div class="three-boxes-tall-container">
                <div class="three-boxes-tall-inner">
                    <div class="three-boxes-tall-top-left-text">
                         {{ boxTitle3 }}
                    </div>
                    <div class="three-boxes-tall-icon">
                        <img  :src="getImgUrl(image3)" class="three-box-image" :alt="boxTitle3"/>
                    </div>
                    <p class="three-boxes-tall-text">{{ boxText3 }}</p>
                </div>
            </div>
        </b-col>
    </b-row>
</div>


</template>
<style>
.three-boxes-tall-container{
    height: 450px;
    position: relative;
    margin-bottom: 20px;
}
.three-boxes-tall-inner {
    height: 100%;
    margin: 0 auto;
    border: 2px solid #ffffff;
    border-radius: 10px;
    position: relative;
    background-color: transparent;
}
.three-boxes-tall-top-left-text{
    position: absolute;
    left: 15px;
    top: 15px;
    color: #ffffff;
    font-weight: 800;
    font-size: 1.2em;
}
.three-boxes-tall-icon {
    width: 180px;
    height: 180px;
    position: absolute;
    top: 25%;
    left: 47%;
    transform: translate(-50%, -40%);
}
.three-boxes-tall-text{
    color: #ffffff;
    position: absolute;
    text-align: left;
    top: 250px;
    left: 8px;
    padding-left: 20px;
    padding-right: 20px;
}

.three-box-image {
    width: 200px;
}

@media only screen and (min-width: 800px) {
    .component-container {
        background-color: transparent;
        max-width: 1000px;
    }
    .three-boxes-tall-container{
        height: 450px;
        position: relative;
        margin-bottom: 20px;
    }
}


</style>
<script>
export default {
  name: 'ThreeBoxesTall',
  props: [ 
        'image1',
        'boxTitle1',
        'boxText1',
        'image2',
        'boxTitle2',
        'boxText2',
        'image3',
        'boxTitle3',
        'boxText3'
  ],
  data() {
      return {
        
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