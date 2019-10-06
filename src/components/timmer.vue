<template lang="pug">
  p {{ time }}
</template>

<script>
export default {
  props: {
    maxtime: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      time: this.maxtime
    }
  },
  mounted () {
    setInterval(() => { this.time-- }, 1000)
  }
}
</script>

<style lang="scss" scoped>

</style>
