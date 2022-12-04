<template>
    <div class="topics">
        <div class="container">
            <h2 class="text-center main_head">{{ mainTitle }}</h2>
            <div class="row justify-content-center">

                <div class="col-lg-4 col-md-6 col-12" v-for="(topic, index) in topics" :key="'o' + index">
                    <div class="topics__box" data-aos="fade-down">
                        <div class="image">
                            <img :src="topic.image" alt="topic img">
                        </div>
                        <div class="topics__box--info">
                            <h3>{{ topic.name }}</h3>
                            <p class="text-ellipsis-2">{{ topic.description }}</p>
                            <div class="box__btns">
                                <router-link v-if="(topic.is_subscribed == false)" :to="`/packages/${topic.id}`">
                                    <button class="main--btn">Subscribe Package</button>
                                </router-link>

                                <router-link v-else :to="`/packages/${topic.id}`">
                                    <button class="main--btn">go to Package</button>
                                </router-link>



                                <router-link v-if="(topic.is_subscribed == false)" :to="`/topic/${topic.id}`">
                                    <button class="second--btn">Take A demo</button>
                                </router-link>
                                <!-- <button class="second--btn" >Take A demo</button> -->
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex-center m-5" v-if="!loading">
                    <b-spinner type="grow"></b-spinner>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "topics",

    data() {
        return {

            loading: false,

            //  topic data

            topics: '',
            mainTitle: ''
        }
    },

    methods: {


        //get topic data from api

        async getData() {

            try {

                await this.axios.get('page/home/topics').then(response => {

                    this.mainTitle = response.data.data.structure.title;
                    this.topics = response.data.data.topics;
                    this.loading = true;

                }).catch(error => {
                    console.log(error.response.data.message)
                })


            } catch (error) {
                console.log('try catch =>', error);
            }

        }
    },

    mounted() {
        window.scrollTo(0, 0);
        this.getData()
    }
}
</script>

<style lang="scss" scoped>

</style>