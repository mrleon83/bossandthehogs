<template>
<div>
  <b-container class="component-container contact">
    <b-row>
      <b-col class="col-12 col-md-12 contact-card">
        <h1 >Boss and the Hogs are an energetic, professional band that will get your venue dancing, drinking and have a great time!
          <br/>
          <br/>
            We're able to supply PA, lighting and sound engineering to make it a night to remember!
          <br/>
          <br/>
        </h1>
        <div class="col-left">
          <img src="../../assets/images/bathlogo.png" alt="boss and the hogs logo" class="contact-logo"/>
        </div>

        <div class="col-right">
          <span class="contact-para">Contact Simon on <a href="tel:07515553969" style="color: #000000;">07515 553969</a></span>
          <p><a href="info@bossandthehogs.com" class="contact-para">Email: info@bossandthehogs.com</a></p>
          <p><a href="https://www.facebook.com/bossandthehogs" class="contact-para">Facebook</a></p>
          <p><a href="https://www.youtube.com/channel/UCEQx2CgR7os5CWnQgM8dlcQ" class="contact-para">Youtube</a></p>
        </div>

      </b-col>
    </b-row>
  </b-container>

</div>

</template>
<style scoped>
.component-container.contact {
  margin-top: 0;
}
.contact-logo {
  width: 250px;
}

.col-left {
  width: 100%;
  float: left;
}
.col-right {
  width: 100%;
}
.contact-para {
  font-weight: bold;
  color: #000000;
  font-size: 1.4em;
}
.contact-card {
  background-color: orange;
  padding: 20px;
}
.about-image {
  width: 100%;
}
.setlist {
  font-size: 1.8em;
  font-family: 'Raleway','Avenir', Helvetica, Arial, sans-serif;
}
@media only screen and (min-width: 800px) {
  .component-container.contact {
    margin-top: 180px;
    color: #000000;
  }
  .col-left {
  width: 30%;
  float: left;
  display: block;
}
.contact-card {
  background-color: orange;
  padding: 20px;
  border-radius: 20px;
}

.col-right {
  width: 70%;
  float: left;
}
  .about-image {
  width: 100%;
}
  .float-left {
    float: left;
  }
  .float-right {
    float: right
  }
  .form-label {
    width: 200px;
  }
  .input-field {
    margin-bottom: 20px;
  }
}
</style>
<script>

export default ({
   name: 'Set',
    data () {
      return {
        show: false,
        heroTitle: 'Set',
      }
    },
})
</script>
