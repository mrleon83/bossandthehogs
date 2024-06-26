<template>
<div class="margin-top">
    <div class="inpage-text-component container">
        <div class="inpage-text-component-text">
            <p v-html="lorum1"></p>
            <p v-html="lorum2"></p>
            <p v-html="lorum3"></p>
        </div>
    </div>
</div>
</template>

<style>
.inpage-text-component {
    
}
.inpage-text-component-text {
    margin: 0 auto;
    text-align: left;
    padding-top: 50px;
    margin-bottom: 50px;
    margin-top: 50px;
    font-size: 1.2em;
    color: #ffffff;
}
</style>
<script>
export default {
  name: 'InPageText',
  props: [ 
        'lorum1',
        'lorum2',
        'lorum3',
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