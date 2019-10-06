<template lang="pug">
  div
    p {{ activeColor }}
</template>

<script>
export default {
  name: 'traffic-light',
  props: {
    activeColor: String
  }
}
</script>

<style lang="scss" scoped>

</style>