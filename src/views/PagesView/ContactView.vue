<template>
    <div>
        <NavbarView />
        <Contact />
        <FooterView />
        <CopyView />
    </div>
</template>

<script>
import FooterView from "../GlobalView/FooterView.vue";
import NavbarView from "../GlobalView/NavbarView.vue";
import CopyView from "./CopyView.vue";
import Contact from '@/components/Pages/Contact.vue';
export default {
    name: "contactView",
    components: { Contact, NavbarView, FooterView, CopyView }
}
</script>

<style lang="scss" scoped>

</style>