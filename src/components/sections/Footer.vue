<template>
<div>
    <footer style="margin-top: 120px; background-color: #2d0e09; height: 240px;">
      <div class="retail-footer-container">
            <div class="copy-holder" style="padding-top: 50px;">
            <p class="footer-para">&copy; {{ new Date().getFullYear() }} Boss and The Hogs.</p>
            <img src="../../assets/images/bathlogo.png" alt="boss and the hogs logo" style="width: 150px;"/>
        </div>

      </div>
    </footer>
</div>
</template>
<style scoped>
footer.retail-footer-container {
    height: 150px;
    width: 400px;
    margin: 0 auto;
    margin-top: 100px;
    margin-bottom: 40px;
    background-color: #000000;
    color: #ffffff;
}
.footer-icon-container, .footer-lower-container, .copy-holder{
    width: 450px;
    margin: 0 auto;
    margin-top: 40px;
    position: relative;
    height: 40px;
}
.footer-icon-container {
    width: 200px;
}
.footer-icon-container
{
    padding-bottom: 30px;
}
.copy-holder {
    padding-bottom: 30px;
}
.footer-icon, .footer-link {
    width: 33%;
    float: left;
    color: #ffffff;
}
.footer-para {
    color: #ffffff;
    overflow-wrap: break-word;
}
a {
    color: #ffffff;
    text-decoration: none;
}
</style>


<script>

export default {
  name: 'Footer',
  props: [

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
