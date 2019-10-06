<template lang="pug">
  .box
    .circle.red(:class="{ active: isActive('red') }")
    .circle.yellow(:class="{ active: isActive('yellow') }")
    .circle.green(:class="{ active: isActive('green') }")

</template>

<script>
export default {
  name: 'traffic-light',
  props: {
    activeColor: {
      type: String,
      required: true
    },
    time: {
      type: Number,
      required: true
    }
  },
  methods: {
    isActive (color) {
      return (this.activeColor === color)
    }
  }
}
</script>

<style lang="scss" scoped>
.box {
  background-color: #555;
  margin: 0 auto;
  max-width: 40%;
  padding: 10px;

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
}
</style>
