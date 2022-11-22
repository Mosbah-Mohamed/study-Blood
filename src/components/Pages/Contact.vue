<template>
    <div class="contact">
        <img src="@/assets/images/ray.png" class="ray" alt="ray" />
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-12" data-aos="fade-right">
                    <h3 class="main_head">
                        <span>Contact</span>
                        <span class="word">Us</span>
                    </h3>

                    <p>{{ description }}</p>
                    <form action="" @submit.prevent="sendData">
                        <h4>SEND MESSAGE</h4>

                        <div class="form-group">
                            <label for="">Name:</label>
                            <input type="text" required placeholder="Abdallah Hammad" v-model.trim="formData.name">
                        </div>



                        <div class="form-group">
                            <label for="">E-Mail:</label>
                            <input type="email" required placeholder="Hralryad@Gmail.Com" v-model.trim="formData.email">
                        </div>


                        <label for="">Mobil:</label>
                        <div class="form-group form_tel">
                            <vue-tel-input :inputOptions="inputOptions" :dropdownOptions="dropdownOptions"
                                defaultCountry="sa" v-model.trim="formData.phone"></vue-tel-input>
                        </div>

                        <div class="form-group">
                            <label for="">Message:</label>
                            <textarea required placeholder="Your Message" v-model.trim="formData.message"></textarea>
                        </div>
                        <div class="form-group">
                            <button type="submit" class="main--btn">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "contact",
    data() {
        return {
            description: '',

            formData: {
                name: "",
                email: "",
                phone: "",
                message: ""
            },

            dropdownOptions: {
                showDialCodeInSelection: true,
                showFlags: true
            },
            inputOptions: {
                required: true,
                maxlength: 18,
                showDialCode: true
            }

        }
    },
    mounted() {
        window.scrollTo(0, 0);
        this.getData();
    },

    methods: {
        async getData() {

            await this.axios.get('page/contact-us').then(res => {
                this.description = res.data.data.description;
                // console.log(res.data.data.description)
            }).catch(error => {
                console.log(error)
            })

        },

        async sendData() {

            try {
                await this.axios.post('contact', this.formData).then(res => {

                    this.formData.name = '';
                    this.formData.email = '';
                    this.formData.phone = '';
                    this.formData.message = '';

                    this.$swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Message sent Successfully',
                        text: `${res.data.message}`,
                        showConfirmButton: false,
                        timer: 3000
                    })


                }).catch(error => {
                    console.log(error.response.data.message)

                    this.$swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: `${error.response.data.message}`,
                        timer: 3000,
                        confirmButtonColor: '#ff7400',
                    })

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