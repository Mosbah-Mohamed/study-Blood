<template>



    <div class="Signup login_page">

        <Navbar />

        <div class="container">
            <div class="row justify-content-center">

                <div class="col-lg-5 col-12 ">

                    <div class="signup__box">

                        <form action="" @submit.prevent="sendData">

                            <div class="form_head">
                                <h4>
                                    <span>LOG</span>
                                    <span class="up_word">IN</span>
                                </h4>
                            </div>

                            <div class="form-group">
                                <label for="">E-Mail:</label>
                                <input type="email" placeholder="Hralryad@Gmail.Com" v-model="formData.email">
                            </div>

                            <div class="form-group position-relative">
                                <label for="">Password :</label>
                                <input :type="[showPassword ? 'text' : 'password']" placeholder="************"
                                    v-model="formData.password">
                                <span class="eye" @click="showPassword = !showPassword">
                                    <font-awesome-icon :icon="icon" />
                                </span>
                            </div>

                            <div class="form-group remember_row">
                                <div class="remember_me">
                                    <router-link to="/forgetPassword">
                                        <span>Forget Password</span>
                                    </router-link>
                                </div>
                                <div class="check_box">
                                    <label for="">Remember Me</label>
                                    <input type="checkbox">
                                </div>
                            </div>

                            <div class="form-group">
                                <button type="submit" class="main--btn">Log In</button>
                            </div>

                        </form>

                    </div>

                    <router-link to="/signup">
                        <h4 class="create">Creat An Account</h4>
                    </router-link>

                </div>

            </div>
        </div>

        <CopyRightComponent />

    </div>



</template>

<script>
import CopyRightComponent from '../Globals/CopyRightComponent.vue';
import Navbar from '../Globals/Navbar.vue';

export default {
    name: "login",

    data() {
        return {
            showPassword: false,
            formData: {
                email: '',
                password: ''
            }
        }
    },

    computed: {
        icon() {
            if (this.showPassword) {
                return ["fa-regular", "fa-eye-slash"];
            } else {
                return ["fa-regular", "fa-eye"];
            }
        },
    },

    mounted() {
        window.scrollTo(0, 0);
    },

    methods: {
        async sendData() {

            try {
                await this.axios.post('login', this.formData).then(res => {

                    this.formData.email = "";
                    this.formData.password = "";

                    this.$swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Message sent Successfully',
                        text: `${res.data.message}`,
                        showConfirmButton: false,
                        timer: 3000
                    });

                    this.$router.push('/');


                }).catch(error => {
                    console.log(error.response.data.message)

                    this.$swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: `${error.response.data.message}`,
                        confirmButtonColor: '#ff7400',
                        timer: 3000
                    })

                })
            } catch (error) {
                console.log('try catch =>', error);
            }

        }
    },

    components: { Navbar, CopyRightComponent }
}
</script>

<style lang="scss" scoped>

</style>