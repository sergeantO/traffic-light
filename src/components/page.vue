<template lang="pug">
  div
    .box
      trafficLight(
        color='red'
        :activeColor="activeColor"
        :flick="isActiveFlicker"
      )
      trafficLight(
        color='yellow'
        :activeColor="activeColor"
        :flick="isActiveFlicker"
      )
      trafficLight(
        color='green'
        :activeColor="activeColor"
        :flick="isActiveFlicker"
      )

    .timmer
      p {{ leftTime }} sec
</template>

<script>
import trafficLight from './traffic-light.vue'
export default {
  components: { trafficLight },
  data () {
    return {
      colors: {
        'red': {
          maxtime: 6,
          nextColor: 'yellow'
        },
        'yellow': {
          maxtime: 7,
          nextColor: 'green'
        },
        'green': {
          maxtime: 5,
          nextColor: 'red'
        }
      },
      leftTime: 100,
      isActiveFlicker: false
    }
  },
  mounted () {
    this.leftTime = this.maxtime
    setInterval(() => { this.leftTime-- }, 1000)
  },
  watch: {
    leftTime (newVal, oldVal) {
      if (newVal < 1) {
        this.$router.push(`/${this.nextColor}`)
        this.leftTime = this.maxtime
        this.isActiveFlicker = false
      } else if (newVal <= 3) {
        this.isActiveFlicker = true
      } else {
        this.isActiveFlicker = false
      }
    }
  },
  computed: {
    activeColor () {
      return this.$route.params.color
    },
    maxtime () {
      return this.colors[this.activeColor].maxtime
    },
    nextColor () {
      return this.colors[this.activeColor].nextColor
    }
  }
}
</script>

<style lang="scss" scoped>
.box {
  background-color: #555;
  margin: 0 auto;
  max-width: 250px;
  padding: 10px;
}

.timmer {
  border: 1px solid #555;
  border-radius: 3px;
  max-width: 150px;
  margin: 10px auto;
  padding: 3px;
}
</style>
