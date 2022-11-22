<template>
    <div>
        <div class="header" v-for="(item, index) in items" :key="'a' + index"
            :style="{ backgroundImage: `url(${item.image})` }">
            <div class="overlay">
                <div class="content flex-center" data-aos="fade-right">
                    <h1 class="main_head">{{ item.title }}</h1>
                    <p>{{ item.description }}</p>
                    <a class="main--btn" :href="item.buttons[0].link">{{ item.buttons[0].content }}</a>
                </div>
            </div>
        </div>
        <div class="flex-center mt-5" v-if="!loading">
            <!-- <strong>Loading...</strong> -->
            <b-spinner type="grow"></b-spinner>
        </div>
    </div>
</template>

<script>
export default {
    name: "Header",


    data() {
        return {
            items: [],
            loading: false

        }
    },

    mounted() {
        window.scrollTo(0, 0);
        this.getData();
    },

    methods: {

        async getData() {

            try {
                await this.axios.get('page/home/slider').then(response => {
                    this.loading = true;
                    this.items = response.data.data;
                    console.log(response.data.data)
                }).catch(error => {
                    console.log(error.response.data.msg)
                })

            } catch (error) {
                console.log('try catch =>', error);
            }

        }

    }
}
</script>

<style lang="scss" scoped>

</style>