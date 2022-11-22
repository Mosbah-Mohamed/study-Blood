<template>
    <div class="Footer">
        <div class="container">
            <div class="row">
                <div class="footer__info flex-center">
                    <div class="image">
                        <img src="@/assets/images/logofooter.png" alt="footer img">
                    </div>
                    <ul>
                        <li><a href="#">
                                <router-link to="/">home</router-link>
                            </a></li>
                        <li><a href="#">
                                <router-link to="/about">about us</router-link>
                            </a></li>
                        <li><a href="#">
                                <router-link to="/work-with-us">work with us</router-link>
                            </a></li>
                        <li><a href="#">
                                <router-link to="contact">contact us</router-link>
                            </a></li>

                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Footer",


}
</script>

<style lang="scss" scoped>

</style>