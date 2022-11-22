<template>
    <div class="profile">
        <div class="container">
            <div class="row">
                <b-tabs pills card vertical>
                    <b-tab title="PREVIOUS TIMED TESTS" active>
                        <b-card-text>
                            <div class="timed_test">
                                <div class="head">
                                    <span>PREVIOUS TIMED TESTS</span>
                                </div>

                                <div class="table-responsive">
                                    <table class="table  table-hover">
                                        <thead class="">
                                            <tr>
                                                <th scope="col">Name</th>
                                                <th scope="col">Number Of Question</th>
                                                <th scope="col">Status</th>
                                                <th scope="col">Review /Contiune</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            <tr>
                                                <td>1</td>
                                                <td>Mark</td>
                                                <td>Otto</td>
                                                <td>
                                                    <div class="btns flex-center flex-column">
                                                        <button class="main--btn review">Review</button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>Mark</td>
                                                <td>Otto</td>
                                                <td>
                                                    <div class="btns flex-center flex-column">
                                                        <button class="main--btn continue">Contiune</button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>Mark</td>
                                                <td>Otto</td>
                                                <td>
                                                    <div class="btns flex-center flex-column">
                                                        <button class="main--btn review">Review</button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>Mark</td>
                                                <td>Otto</td>
                                                <td>
                                                    <div class="btns flex-center flex-column">
                                                        <button class="main--btn review">Review</button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>Mark</td>
                                                <td>Otto</td>
                                                <td>
                                                    <div class="btns flex-center flex-column">
                                                        <button class="main--btn continue">Contiune</button>
                                                    </div>
                                                </td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>

                            </div>
                        </b-card-text>
                    </b-tab>
                    <b-tab title="Edit Account">
                        <b-card-text>
                            <div class="box_info">
                                <form action="">
                                    <h4>
                                        <span>Personal</span>
                                        <span class="word"> Information</span>
                                    </h4>
                                    <div class="form-group">
                                        <label for="">Name:</label>
                                        <input v-model.trim="name" type="text" placeholder="Name Here">
                                    </div>
                                    <div class="form-group">
                                        <label for="">E-Mail:</label>
                                        <input v-model.trim="email" type="text" placeholder="Hralryad@Gmail.Com">
                                    </div>
                                    <div class="form-group">
                                        <label for="">Mobil:</label>
                                        <input v-model.trim="mobil" type="text" placeholder="54 1234567">
                                    </div>
                                    <div class="form-group">
                                        <button type="button" :class="{ 'disabled': !name || !email || !mobil }"
                                            class="main--btn">Save</button>
                                    </div>
                                </form>
                            </div>
                        </b-card-text>
                    </b-tab>
                    <b-tab title="Edit Password">
                        <b-card-text>
                            <div class="box_info">
                                <form action="">
                                    <h4>
                                        <span>Edit </span>
                                        <span class="word"> Password</span>
                                    </h4>
                                    <div class="form-group position-relative">
                                        <label for="">Current Password :</label>
                                        <input v-model.trim="currentPassword"
                                            :type="[showPassword ? 'text' : 'password']" placeholder="*********">
                                        <span class="eye" @click="showPassword = !showPassword">
                                            <font-awesome-icon :icon="icon" />
                                        </span>
                                    </div>
                                    <div class="form-group position-relative">
                                        <label for="">New Password :</label>
                                        <input v-model.trim="NewPassword"
                                            :type="[showConfirmPassword ? 'text' : 'password']" placeholder="*********">
                                        <span class="eye" @click="showConfirmPassword = !showConfirmPassword">
                                            <font-awesome-icon :icon="icon2" />
                                        </span>
                                    </div>
                                    <div class="form-group">
                                        <button type="button" class="main--btn"
                                            :class="{ 'disabled': !currentPassword || !NewPassword }">Save</button>
                                    </div>
                                </form>
                            </div>
                        </b-card-text>
                    </b-tab>
                </b-tabs>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "profile",
    data() {
        return {
            showPassword: false,
            showConfirmPassword: false,

            name: "",
            email: "",
            mobil: "",
            currentPassword: "",
            NewPassword: ""
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

        icon2() {
            if (this.showConfirmPassword) {
                return ["fa-regular", "fa-eye-slash"];
            } else {
                return ["fa-regular", "fa-eye"];
            }
        },
    },
}
</script>

<style lang="scss" scoped>
.disabled {
    opacity: 0.5;
    pointer-events: none;
}
</style>