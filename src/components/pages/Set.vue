<template>
<div>
  <b-container class="component-container setlist" style="margin-top: 120px; color: #000000;">
    <b-row>
      <b-col class="col-12 col-md-12">
       <h1>Our Current Songs</h1>
      </b-col>
    </b-row>

    <b-row style="margin-top: 20px;padding: 20px; border: 2px solid #FF511F; margin-bottom: 20px"
      data-aos="fade-up"
      data-aos-offset="-200"
      data-aos-easing="ease-in-ease-out"
      data-aos-duration="1000"
      data-aos-delay="50"
      data-aos-anchor-placement="top-center">
      <b-col class="col-12 col-md-12 float-right">
        <h2>Songs are being added constantly, we chose the set dependant upon time, type of concert and feel. </h2>
        <div style="font-family: ariel; font-size: 1.2em;">
        <p class="songlistpara">The Eagles - Take It Easy</p>
        <p class="songlistpara">Lady A - Love Don't Live Here</p>
        <p class="songlistpara">Sugarland - It Happens</p>
        <p class="songlistpara">Luke Combs - When It rains</p>
        <p class="songlistpara">Brett Young - In Case You Didn't Know</p>
        <p class="songlistpara">Ashley McBride - Dive Bar In Dehlonega</p>
        <p class="songlistpara">Cassedee Pope and Chris Young - Think Of You</p>
        <p class="songlistpara">Carly Pearce - Next Girl</p>
        <p class="songlistpara">Doughtry - Tenessee Line</p>
        <p class="songlistpara">Morgan Wade - Wilder Days</p>
        <p class="songlistpara">Lady A - What I Never Get Over You</p>
        <p class="songlistpara">Kellie Pickler - Small Town Girl</p>
        <p class="songlistpara">Darius Rucker - Wagon Wheel</p>
        <p class="songlistpara">Linda Rondstadt - When Will I Be Loved</p>
        <p class="songlistpara">Lynard Skynard - Sweet Home Alabama</p>
        <p class="songlistpara">Ashley McBride - El Dorado</p>
        <p class="songlistpara">Old Dominian - I Was On A Boat</p>
        <p class="songlistpara">Jo Dee Mesina - Heads Carolina, Tails California</p>
        <p class="songlistpara">Glen Campbell - Rhinestone Cowboy</p>
        <p class="songlistpara">Ashley McBride - Girl Goin' Nowhere</p>
        <p class="songlistpara">Mitch Rossell - Ran Into You</p>
        <p class="songlistpara">Alan Jackson - 5 O'Clock Somewhere</p>
        <p class="songlistpara">The Mavericks - Dance The Night Away</p>
        <p class="songlistpara">Martina McBride - Life #9</p>
        <p class="songlistpara">Brooks and Dunn - Boot Scootin Boogie</p>
        <p class="songlistpara">Blackberry Smoke - Good One Comin' On</p>
        <p class="songlistpara">Chris Stapleton - Tenessee Whiskey</p>
        <p class="songlistpara">Garth Brookes - Friends In Low Places</p>
        </div>
        </b-col>
    </b-row>







  </b-container>

</div>

</template>
<style scoped>
.about-image {
  width: 100%;
}
.setlist {
  font-size: 1.8em;
}
@media only screen and (min-width: 800px) {
  .about-image {
  width: 100%;
}
  .float-left {
    float: left;
  }
  .float-right {
    float: right
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
