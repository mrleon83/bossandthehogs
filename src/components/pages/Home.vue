<template>

  <div v-if="show" class="page-container">

      <HomeHero
      :heroTitle="heroTitle"
      :heroText="heroText"
      :heroImage="heroImage"
      ></HomeHero>
  <b-container class="component-container mt-5" >
    <b-tabs content-class="mt-3">
      <b-tab title="Upcoming Concerts" active>
        <div style="margin-top: 25px;" class="gig-list-container">
          
            <h1>Come and see Boss and The Hogs Live!</h1>
            <hr/>
            <br/>
            <div v-for="gig in futureEventsArray" :key="gig.id">
                <p class="gig-listing">
                  {{ gig.date }} -
                  {{ gig.venue }},
                  {{ gig.location }},{{ gig.postcode }}
                  <br/><a :href="createMapLink(gig.postcode)" target="_blank" class="googleLink">Google Map Link</a>
                </p><hr/>
              </div>
            <p>Book us to play your venue or party using the <a href="/contact">contact details</a></p>
            </div>
      </b-tab>
      <b-tab title="Previous Concerts">
        <div v-for="gig in pastEventsArray" :key="gig.id">
                <p class="gig-listing">
                  {{ gig.date }} -
                  {{ gig.venue }},
                  {{ gig.location }},{{ gig.postcode }}
                  <br/><a :href="createMapLink(gig.postcode)" target="_blank" class="googleLink">Google Map Link</a>
                </p><hr/>
              </div>

      </b-tab>
      
    </b-tabs>
  </b-container>

  </div>
</template>
<style>
.gig-list-container {
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  border: 2px solid #FF511F;
}
a.googleLink {
  font-size: .7em;
  color: #2d0e09;
}
@media only screen and (min-width: 1200px) {
  .gig-list-container {
    width: 1000px;
    margin: 0 auto;
    padding: 20px;
    border: 2px solid #FF511F;
  }
}
.gig-list {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.gig-list li {
  padding: 20px;
  font-size: 1.2em;
}
.gig-listing {
  font-size: 1.4em;
}
.youtube-iframe {
  min-height: 500px;
}
</style>

<script>

import HomeHero from '@/components/atoms/HomeHero'
import gigs from '@/assets/data.json'

export default {

  name: 'Home',
  components: {
   HomeHero,
  },
  data () {
    return {
      show: false,
      heroTitle: 'Boss and The Hogs',
      heroText: 'Northamptonshire\'s #1 Country Band',
      heroImage: 'background-image: url(\'../../assets/images/bathband.jpeg\');',
      gigs: gigs,
      futureEventsArray: [],
      pastEventsArray: []
    }
  },
  mounted() {
    this.show = true
    this.checkFutureDate()
    this.checkPastDate()
  },
  methods: {
    getImgUrl(pic){
        return require('../../assets/images/'+pic)
      },
      checkPastDate(){
        const currentDate = new Date()
        this.gigs.gigs.forEach(gigs => {
          const gigDate = new Date(gigs.codedate)
          if(currentDate > gigDate) {
            this.pastEventsArray.push(gigs)
          }
        })
      },
      checkFutureDate(){
        const currentDate = new Date()
        this.gigs.gigs.forEach(gigs => {
          const gigDate = new Date(gigs.codedate)
          if(gigDate > currentDate) {
            this.futureEventsArray.push(gigs)
          }
        })
      },
      createMapLink(postCode){
        return `https://www.google.com/maps/search/?api=1&query=${postCode}`
      }
    },
}
</script>