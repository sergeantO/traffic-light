<template lang="pug">
  div
    trafficLight(activeColor="red")
    timmer(maxtime=10)
</template>

<script>
import trafficLight from '../traffic-light.vue'
import timmer from '../timmer'
export default {
  components: { trafficLight, timmer },
  mounted () {
    let time = 10
    setTimeout(() => {
      this.$router.push('/yellow')
    }, time * 1000)
  }
}
</script>

<style lang="scss" scoped>

</style>
