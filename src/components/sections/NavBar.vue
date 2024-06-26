<template>
<div>
  <b-navbar toggleable="lg" type="dark" class="bath-nav">
    <b-navbar-brand href="/" style="margin-left: 30px;">
        <img src="../../assets/images/bathlogo.png" alt="boss and the hogs logo" class="navbarlogo"/>
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse" style="margin-right: 20px;"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto retail-link-list" >
          <b-nav-item active-class="active" href="/">Home</b-nav-item>
          <b-nav-item active-class="active" href="/about">About Us</b-nav-item>
          <b-nav-item active-class="active" href="/media">Media</b-nav-item>
          <b-nav-item active-class="active" href="/set">Set</b-nav-item>
          <b-nav-item active-class="active" href="/cal">Availability</b-nav-item>
          <b-nav-item active-class="active"  href="/contact">Contact Us</b-nav-item>
        </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>

</template>

<style scoped>
.nav-logo {
  width: 220px;
}
.bath-nav {
  background-color: #2d0e09;
}
.navbarlogo {
  width: 100px;
}
@media only screen and (min-width: 800px) {
  .bath-nav {
    height: 100px;
  }
  .navbarlogo {
  margin-top: 80px;width: 190px;
  }
}
a.nav-link {
  color: #ffffff !important;
  font-size: 1.4em !important;
}
.navbar-dark .navbar-nav .nav-link {
    color: #ffffff;
    font-size: 1em;
    font-family: 'Raleway','Avenir', Helvetica, Arial, sans-serif;
}
.retail-contact{
    border: 1px solid #ffffff;
    border-radius: 10px;
}
@media only screen and (min-width: 800px) {
  .retail-nav-link {
    margin-right: 50px;
  }
}

@media only screen and (min-width: 800px) {
  .bath-nav {
  position: fixed;
  width: 100%;
  z-index: 99999;
  top: 0;
}
  .retail-link-list{
    margin-left: auto;
  }
  .retail-link-list li {
      margin-right: 40px;
      }
}



</style>

<script>
export default {
  name: 'navbar',
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
