<template>
<div class="margin-top">
    <div class="heading-component-container">
        <div class="heading-component-text">
            {{ heading }}
        </div>
    </div>
</div>
</template>

<style>
.heading-component {
    padding-left: 50px;
    padding-right: 50px;
}
.heading-component-text {
    width: 80%;
    border-top: 3px solid #ffffff;
    margin: 0 auto;
    padding-top: 50px;
    margin-bottom: 50px;
    margin-top: 50px;
    font-size: 2.5em;
    font-weight: bold;
    color: #ffffff;
}
</style>
<script>
export default {
  name: 'Heading',
  props: [ 
        'heading',
  ],
  data() {
      return {
        
      }
    
  },

  mounted(){
		},
}
</script>