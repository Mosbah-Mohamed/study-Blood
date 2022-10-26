<template>
  <div class="app">
    <button @click="showAlert">Hello world</button>
  </div>
</template>

<script>
export default {
  name: "App",

  methods: {
    showAlert() {
      // Use sweetalert2
      this.$swal(
        'Good job!',
        'You clicked the button!',
        'success'
      )
    },
  },
}
</script>

<style lang="scss" scoped>

</style>