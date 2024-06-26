<template>
  <b-container  class="component-container">
      <b-row>
        <b-col class="col-12" >
          <h1 style="font-weight: 800; margin-bottom: 20px; margin-top: 20px;">Live Gigs</h1>

          <div class="video-container">
            <h2>Northampton Beer Festival 2023 - Highlights</h2>
            <iframe width="100%" class="youtube-iframe" src="https://www.youtube.com/embed/oyRRidcWIfA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>

          <div class="video-container">
            <h2>Tennessee Whiskey at Headlands Country Club</h2>
            <iframe width="100%" class="youtube-iframe" src="https://www.youtube.com/embed/bOnUxp-wwO8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>

          <div class="video-container">
            <h2>Boot Scootin Boogie at Headlands Country Club</h2>
            <iframe width="100%" class="youtube-iframe" src="https://www.youtube.com/embed/sMg0o1aZ8Ps" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>

          <div class="video-container">
            <h2>Sweet Home Alabama Live at The Wheatshef - Chinnor</h2>
            <iframe width="100%" class="youtube-iframe" src="https://www.youtube.com/embed/ToVdRYCE82o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </b-col>
      </b-row>
    <hr/>
      <b-row>
        <b-col class="col-12">
          <h1 style="font-weight: 800; margin-bottom: 20px;">Live From The Hog House</h1>
          <h2>Girl Going Nowhere</h2>
          <div class="video-container">
          <iframe width="100%" class="youtube-iframe" src="https://www.youtube.com/embed/laImacYgEJw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        </b-col>
      </b-row>
    <hr/>


  </b-container>


</template>
<style scoped>
.media-video{
  width: 100%;
}
.youtube-iframe {
    min-height: 500px;
  }
.video-container {
  margin-bottom: 20px;
  padding: 20px;
  border: 2px solid orange;
  border-radius: 10px;
}
.component-container {
    margin-top: 40px;
    color: #000000;
  }
@media only screen and (min-width: 800px) {
  .media-video{
    width: 50%;
  }
  .video-container {
    width: 48%;
    float: left;
    margin:10px;
  }

  .component-container {
    margin-top: 120px;
    color: #000000;
  }

}
</style>
<script>

export default ({
  name: 'Media',
})
</script>
