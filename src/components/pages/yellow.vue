<template lang="pug">
  div
    trafficLight(
      activeColor="yellow"
    )
</template>

<script>
import trafficLight from '../traffic-light.vue'
export default {
  components: { trafficLight },
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
