<template lang="pug">
  div
    trafficLight(
      activeColor="green"
    )
</template>

<script>
import trafficLight from '../traffic-light.vue'
export default {
  components: { trafficLight },
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
