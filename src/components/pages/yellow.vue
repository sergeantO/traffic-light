<template lang="pug">
  div
    trafficLight(
      activeColor="yellow"
    )
    timmer(maxtime=3)
</template>

<script>
import trafficLight from '../traffic-light.vue'
import timmer from '../timmer'
export default {
  components: { trafficLight, timmer },
  mounted () {
    let time = 3
    setTimeout(() => {
      this.$router.push('/green')
    }, time * 1000)
  }
}
</script>

<style lang="scss" scoped>

</style>
