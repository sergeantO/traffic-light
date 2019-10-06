<template lang="pug">
  .circle(:class="[ color, isActive() ? 'active' : '' ]")
</template>

<script>
export default {
  name: 'traffic-light',
  props: {
    color: {
      type: String,
      required: true
    },
    activeColor: {
      type: String,
      required: true
    },
    flick: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {
      lightIsOn: true
    }
  },
  mounted () {
    setInterval(() => {
      if (this.flick) {
        this.lightIsOn = !this.lightIsOn
      }
    }, 500)
  },
  methods: {
    isActive () {
      return (this.activeColor === this.color && this.lightIsOn)
    }
  }
}
</script>

<style lang="scss" scoped>
.circle {
  margin: 5px auto;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 2px solid #ddd;
  opacity: 0.3;

  &.active {
    opacity: 1;
  }

  &.red {
    background-color: red;
  }
  &.yellow {
    background-color: yellow;
  }
  &.green {
    background-color: green;
  }
}
</style>
