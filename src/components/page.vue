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
          colorTime: 10,
          nextColor: 'yellow'
        },
        'yellow': {
          colorTime: 3,
          nextColor: 'green'
        },
        'green': {
          colorTime: 15,
          nextColor: 'red'
        }
      },

      leftTime: 100,
      isActiveFlicker: false
    }
  },
  mounted () {
    this.leftTime = localStorage.getItem('leftTime') || this.colorTime
    setInterval(() => { this.leftTime-- }, 1000)
  },
  watch: {
    leftTime (newVal, oldVal) {
      localStorage.setItem('leftTime', newVal)

      if (newVal < 1) {
        this.$router.push(`/${this.nextColor}`)
        this.leftTime = this.colorTime
        this.isActiveFlicker = false
      } else if (newVal <= 3) {
        this.isActiveFlicker = true
      }
    }
  },
  computed: {
    activeColor () {
      localStorage.setItem('color', this.$route.params.color)
      return this.$route.params.color
    },
    colorTime () {
      return this.colors[this.activeColor].colorTime
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
  margin: 20px auto;
  max-width: 250px;
  padding: 10px;
  border-radius: 3px;
}

.timmer {
  border: 1px solid #555;
  border-radius: 3px;
  max-width: 150px;
  margin: 10px auto;
  padding: 10px;
}
</style>
