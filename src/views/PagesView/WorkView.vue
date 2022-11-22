<template>
    <div>
        <NavbarView />
        <Work />
        <FooterView />
        <CopyView />

    </div>
</template>

<script>
import Work from '@/components/Pages/Work.vue';
import FooterView from '../GlobalView/FooterView.vue';
import NavbarView from '../GlobalView/NavbarView.vue';
import CopyView from './CopyView.vue';

export default {
    name: "workView",
    components: { Work, NavbarView, FooterView, CopyView }
}
</script>

<style lang="scss" scoped>

</style>