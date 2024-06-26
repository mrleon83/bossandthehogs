<template>
<div class="margin-top">
    <b-row>
        <b-col class="col-12 col-md-4 col-sm-12 col-xs-12">
            <div class="three-boxes-circle-container">
                <div class="three-boxes-circle-inner">
                    <div class="three-boxes-circle-icon">
                        <img src="../../assets/images/Natasha_C_BW.png" class="three-circle-image"/>
                    </div>
                </div>
                <p class="three-boxes-circle-text">{{ boxTitle1 }}</p>
                <p class="three-boxes-circle-text">{{ boxText1 }}</p>
            </div>
        </b-col>
        <b-col class="col-12 col-md-4">
            <div class="three-boxes-circle-container">
                <div class="three-boxes-circle-inner">     
                    <div class="three-boxes-circle-icon">
                        <img src="../../assets/images/Carla_019_BW.png"  class="three-circle-image"/>
                    </div>
                </div>
                <p class="three-boxes-circle-text">{{ boxTitle2 }}</p>
                <p class="three-boxes-circle-text">{{ boxText2 }}</p>
            </div>
        </b-col>
        <b-col class="col-12 col-md-4">
            <div class="three-boxes-circle-container">
                <div class="three-boxes-circle-inner">
                    <div class="three-boxes-circle-icon">
                        <img src="../../assets/images/Kristian_BW_BW.png"  class="three-circle-image"/>
                    </div>
                </div>
                <p class="three-boxes-circle-text">{{ boxTitle3 }}</p>
                <p class="three-boxes-circle-text">{{ boxText3 }}</p>
            </div>
        </b-col>

        <b-col class="col-12 col-md-4">
            <div class="three-boxes-circle-container">
                <div class="three-boxes-circle-inner">
                    <div class="three-boxes-circle-icon">
                        <img src="../../assets/images/Natasha_K_022_BW.png"  class="three-circle-image"/>
                    </div>
                </div>
                <p class="three-boxes-circle-text">{{ boxTitle4 }}</p>
                <p class="three-boxes-circle-text">{{ boxText4 }}</p>
            </div>
        </b-col>
        <b-col class="col-12 col-md-4">
            <div class="three-boxes-circle-container">
                <div class="three-boxes-circle-inner">
                    <div class="three-boxes-circle-icon">
                        <img src="../../assets/images/Jessica_003_BW.png"  class="three-circle-image"/>
                    </div>
                </div>
                <p class="three-boxes-circle-text">{{ boxTitle5 }}</p>
                <p class="three-boxes-circle-text">{{ boxText5 }}</p>
            </div>
        </b-col>
        <b-col class="col-12 col-md-4">
            <div class="three-boxes-circle-container">
                <div class="three-boxes-circle-inner">
                    <div class="three-boxes-circle-icon">
                        <img src="../../assets/images/alex_wu.jpeg"  class="three-circle-image"/>
                    </div>
                </div>
                <p class="three-boxes-circle-text">{{ boxTitle6 }}</p>
                <p class="three-boxes-circle-text">{{ boxText6 }}</p>
            </div>
        </b-col>

        <b-col class="col-12 col-md-4">
            <div class="three-boxes-circle-container">
                <div class="three-boxes-circle-inner">
                    <div class="three-boxes-circle-icon">
                        <img src="../../assets/images/samuel_long.jpeg"  class="three-circle-image"/>
                    </div>
                </div>
                <p class="three-boxes-circle-text">{{ boxTitle7 }}</p>
                <p class="three-boxes-circle-text">{{ boxText7 }}</p>
            </div>
        </b-col>
        <b-col class="col-12 col-md-4">
            <div class="three-boxes-circle-container">
                <div class="three-boxes-circle-inner">
                    <div class="three-boxes-circle-icon">
                        <img src="../../assets/images/sophie_clarke.jpeg"  class="three-circle-image"/>
                    </div>
                </div>
                <p class="three-boxes-circle-text">{{ boxTitle8 }}</p>
                <p class="three-boxes-circle-text">{{ boxText8 }}</p>
            </div>
        </b-col>
        <b-col class="col-12 col-md-4">
            <div class="three-boxes-circle-container">
                <div class="three-boxes-circle-inner">
                    <div class="three-boxes-circle-icon">
                        <img src="../../assets/images/quincy_wong.jpeg"  class="three-circle-image"/>
                    </div>
                </div>
                <p class="three-boxes-circle-text">{{ boxTitle9 }}</p>
                <p class="three-boxes-circle-text">{{ boxText9 }}</p>
            </div>
        </b-col>
        <b-col class="col-12 col-md-4">
            <div class="three-boxes-circle-container">
                <div class="three-boxes-circle-inner">
                    <div class="three-boxes-circle-icon">
                        <img src="../../assets/images/jasmine_wright.jpeg"  class="three-circle-image"/>
                    </div>
                </div>
                <p class="three-boxes-circle-text">{{ boxTitle10 }}</p>
                <p class="three-boxes-circle-text">{{ boxText10 }}</p>
            </div>
        </b-col>
        <b-col class="col-12 col-md-4">
            <div class="three-boxes-circle-container">
                <div class="three-boxes-circle-inner">
                    <div class="three-boxes-circle-icon">
                        <!--<img src="../../assets/images/jasmine_wright.jpeg"  class="three-circle-image"/>-->
                        <div class="three-circle-image"></div>
                    </div>
                </div>
                <p class="three-boxes-circle-text">{{ boxTitle11 }}</p>
                <p class="three-boxes-circle-text">{{ boxText11 }}</p>
            </div>
        </b-col>
    </b-row>
</div>
</template>
<style>
.three-boxes-circle-container{
        height: 420px;
        position: relative;
        margin-bottom: 20px;
    }
.three-boxes-circle-inner {
    padding: 20px;
    width: 100%;
    margin: 0 auto;
    position: relative;
}

.three-boxes-circle-icon {
    overflow: hidden;
}
.three-circle-image
{
    width: 70%;
    border-radius: 50%;
    filter: grayscale(100%);
    height: 280px;
    background-color: #666666;
}
.three-boxes-circle-text {
    color: #ffffff;
    font-size: 1.1em;
    font-weight: 600;
}


@media only screen and (min-width: 1000px) {
    .component-container {
        background-color: transparent;
        max-width: 1000px;
    }
    .three-circle-image
    {
    width: 100%;
    }
}


</style>
<script>
export default {
  name: 'ThreeCircleBoxes',
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
        'boxTitle4',
        'boxText4',
        'boxTitle5',
        'boxText5',
        'boxTitle6',
        'boxText6',
        'boxTitle7',
        'boxText7',
        'boxTitle8',
        'boxText8',
        'boxTitle9',
        'boxText9',
        'boxTitle10',
        'boxText10',
        'boxTitle11',
        'boxText11',
  ],
  data() {
      return {
        image: "./assets/images/Shop_Image.jpg"
      }
    
  },

  mounted(){
		},
    }
</script>