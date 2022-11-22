<template>
  <div id="app" class="app">


    <b-modal class="app_modal" ref="myModal" centered hide-footer hide-header>
      <div class="flex-center m-5">
        <!-- <strong>Loading...</strong> -->
        <b-spinner type="grow"></b-spinner>
      </div>
    </b-modal>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",

  mounted() {
    window.scrollTo(0, 0);
    this.showAlert()
  },

  methods: {
    showAlert() {
      this.$refs['myModal'].show()
    },
    hideAlert() {
      this.$refs['myModal'].hide()
    }
  },
  mounted() {

    this.showAlert();

    setTimeout(() => {
      this.hideAlert();

    }, 2000)

  },
}
</script>

<style lang="scss" scoped>
::v-deep .modal-dialog-centered .modal-content {
  background: none !important;
  border: none;
  color: #FFF;
  font-size: 30px;
}
</style>