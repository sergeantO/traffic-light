<template lang="pug">
  div
    trafficLight(
      activeColor="yellow"
    )
</template>

<script>
import trafficLight from '../traffic-light.vue'
export default {
  components: { trafficLight }
}
</script>

<style lang="scss" scoped>

</style>
