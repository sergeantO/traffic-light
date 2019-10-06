<template lang="pug">
  div
    trafficLight(
      activeColor="green"
    )
    timmer(maxtime=15)
</template>

<script>
import trafficLight from '../traffic-light.vue'
import timmer from '../timmer'
export default {
  components: { trafficLight, timmer },
  mounted () {
    let time = 15
    setTimeout(() => {
      this.$router.push('/red')
    }, time * 1000)
  }
}
</script>

<style lang="scss" scoped>

</style>
