<template>
  <div>
    <NavbarView />
    <!-- <b-progress :value="value" class="progress-xs" :variant="getVariantType()">
    </b-progress> -->
    <About />
    <FooterView />
    <CopyView />
  </div>
</template>

<script>
import About from "@/components/Pages/About.vue";
import FooterView from "../GlobalView/FooterView.vue";
import NavbarView from "../GlobalView/NavbarView.vue";
import CopyView from "./CopyView.vue";
export default {
  name: "aboutView",
  data() {
    return {
      // item: {
      //   value: {
      //     value: 10
      //   }
      // }

      // value: 70
    }
  },
  // methods: {
  //   getVariantType() {
  //     if (this.value > 50) {
  //       return 'success'
  //     } else if (this.value > 30) {
  //       return 'warning'
  //     } else if (this.value > 10) {
  //       return 'danger'
  //     }
  //     return ''
  //   }
  // },
  components: { About, NavbarView, FooterView, CopyView },
}
</script>

<style lang="scss" scoped>

</style>
