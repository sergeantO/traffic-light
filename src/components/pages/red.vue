<template lang="pug">
  div
    trafficLight(
      activeColor="red"
    )
</template>

<script>
import trafficLight from '../traffic-light.vue'
export default {
  components: { trafficLight },
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
