<template>
    <div id="app" class="app">
        <b-modal
            ref="myModal"
            centered
            class="app_modal"
            hide-footer
            hide-header
        >
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

    methods: {
        showAlert() {
            this.$refs["myModal"].show();
        },
        hideAlert() {
            this.$refs["myModal"].hide();
        },
    },
    mounted() {
        window.scrollTo(0, 0);
        this.showAlert();

        setTimeout(() => {
            this.hideAlert();
        }, 2000);
    },
};
</script>

<style lang="scss" scoped>
::v-deep .modal-dialog-centered .modal-content {
    background: none !important;
    border: none;
    color: #fff;
    font-size: 30px;
}
</style>
