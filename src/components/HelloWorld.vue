<template>
  <hero 
    :heroTitle="heroTitle"
    :heroText="heroText"
    ></hero>
</template>

<script>
import hero from '@/components/atoms/Hero' 
export default {
  name: 'HelloWorld',
  components: {
   hero
  },
  data () {
    return {
      heroTitle: 'This is the title',
      heroText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
    }
  }
}
</script>

<style scoped>

</style>
