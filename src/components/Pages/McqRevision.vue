<template>
    <div class="mcqRevision">
        <div class="container">
            <div class="row">

                <div class="col-12">

                    <div class="all_questions">

                        <h2>{{ topic_name }}</h2>
                        <!-- {{ exam_type }} -->

                        <b-tabs>

                            <b-tab title="Question" active @click="(exam_type = 'question')">

                                <div class="question__tab">

                                    <div class="row align-items-start">
                                        <div class="col-lg-8 col-12">

                                            <div class="question__tab--categories">

                                                <p>Filter Your Questions Below (520 Questions Found):</p>

                                                <div class="info_checkboxes">

                                                    <h3>Categories</h3>

                                                    <div class="collapse_with_input"
                                                        v-for="(category, index) in categoriesGet">
                                                        <label class="containercheck" v-b-toggle="'collapse-' + index">
                                                            <input @click.stop type="checkbox" :key="('l' + index)"
                                                                v-model="selectedBoxes" :value="category.id">
                                                            <span class="checkmark"></span>
                                                            <div class="words">
                                                                <span>{{ category.name }}</span>
                                                                <div class="advantage">
                                                                    <span>{{ category.questions_count }}</span>
                                                                </div>
                                                            </div>
                                                            <span class="red"></span>
                                                        </label>

                                                        <b-collapse :id="'collapse-' + index" class="mt-2"
                                                            v-if="category.sub_categories">
                                                            <b-card>

                                                                <label class="containercheck"
                                                                    v-for="(sub_category, index) in category.sub_categories">
                                                                    <input @click.stop type="checkbox"
                                                                        :key="'c' + index" v-model="selectedBoxes"
                                                                        :value="sub_category.id" name="sub_category">

                                                                    <span class="checkmark"></span>
                                                                    <div class="words">
                                                                        <span>{{ sub_category.name }}</span>
                                                                        <div class="advantage">
                                                                            <span>{{ sub_category.questions_count
                                                                            }}</span>
                                                                        </div>
                                                                    </div>
                                                                    <span class="red"></span>
                                                                </label>


                                                                <!-- <b-collapse id="collapse-1-inner" class="mt-2">
                                                                    <b-card>

                                                                        <label class="containercheck">
                                                                            <input type="checkbox">
                                                                            <span class="checkmark"></span>
                                                                            <div class="words">
                                                                                <span>All</span>
                                                                                <div class="advantage">
                                                                                    <span>Attempted 12 Of 4,324</span>
                                                                                </div>
                                                                            </div>
                                                                            <span class="red"></span>
                                                                        </label>

                                                                    </b-card>
                                                                </b-collapse> -->

                                                            </b-card>
                                                        </b-collapse>
                                                    </div>



                                                    <!-- <label class="containercheck">
                                                        <input type="checkbox">
                                                        <span class="checkmark"></span>
                                                        <div class="words">
                                                            <span>All</span>
                                                            <div class="advantage">
                                                                <span>Attempted 12 Of 4,324</span>
                                                            </div>
                                                        </div>
                                                        <span class="red"></span>
                                                    </label>

                                                    <label class="containercheck">
                                                        <input type="checkbox">
                                                        <span class="checkmark"></span>
                                                        <div class="words">
                                                            <span>All</span>
                                                            <div class="advantage">
                                                                <span>Attempted 12 Of 4,324</span>
                                                            </div>
                                                        </div>
                                                        <span class="red"></span>
                                                    </label>

                                                    <label class="containercheck">
                                                        <input type="checkbox">
                                                        <span class="checkmark"></span>
                                                        <div class="words">
                                                            <span>All</span>
                                                            <div class="advantage">
                                                                <span>Attempted 12 Of 4,324</span>
                                                            </div>
                                                        </div>
                                                        <span class="red"></span>
                                                    </label>

                                                    <label class="containercheck">
                                                        <input type="checkbox">
                                                        <span class="checkmark"></span>
                                                        <div class="words">
                                                            <span>All</span>
                                                            <div class="advantage">
                                                                <span>Attempted 12 Of 4,324</span>
                                                            </div>
                                                        </div>
                                                        <span class="red"></span>
                                                    </label> -->

                                                </div>

                                                <div class="info_checkboxes half_width">
                                                    <h3>Question Selection:</h3>

                                                    <!-- <h3>{{ val_select.key }}</h3> -->

                                                    <v-select maxHeight="40px" label="option"
                                                        :placeholder="placeholder.default" :options="question_selection"
                                                        v-model="val_select">
                                                    </v-select>
                                                </div>

                                                <button class="main--btn" @click="sendData()">

                                                    <span>Start The Questions</span>
                                                    <span>
                                                        <font-awesome-icon icon="fa-solid fa-chevron-right" />
                                                    </span>

                                                </button>

                                            </div>

                                        </div>
                                        <div class="col-lg-4 col-12">

                                            <div class="question__tab--question">
                                                <h3 class="main_head">Questions</h3>
                                                <p>
                                                    Your Average Score Of 65% Puts You On The 65Th Percentile Of Users
                                                    Who Are Taking The Exam...
                                                    <span>More</span>
                                                </p>
                                            </div>

                                        </div>
                                    </div>

                                </div>

                            </b-tab>

                            <b-tab title="Time Test" @click="(exam_type = 'time')">

                                <div class="question__tab">

                                    <div class="row align-items-start justify-content-between">
                                        <div class="col-lg-7 col-12">

                                            <div class="question__tab--categories tab_two-cat">

                                                <p class="info">Create A New Timed Test</p>


                                                <div class="info_checkboxes">
                                                    <h3>Categories</h3>

                                                    <v-select maxHeight="40px" :placeholder="placeholder.default"
                                                        v-model="selected" :options="options">
                                                    </v-select>
                                                </div>
                                                <div class="info_checkboxes">
                                                    <h3>Number Of Questions:</h3>

                                                    <v-select maxHeight="40px" :placeholder="placeholder.default"
                                                        v-model="selected" :options="options">
                                                    </v-select>
                                                </div>
                                                <div class="info_checkboxes">
                                                    <h3>Length Of Test (Minutes, Will Default To The Amount Of Time
                                                        Given In The Exam):</h3>

                                                    <input type="text" placeholder="Enter Number">
                                                </div>

                                                <button class="main--btn" @>

                                                    <span>Start The Questions</span>
                                                    <span>
                                                        <font-awesome-icon icon="fa-solid fa-chevron-right" />
                                                    </span>

                                                </button>


                                                <p class="info info_bottom">Create A New Timed Test</p>


                                                <div class="table-responsive">
                                                    <table
                                                        class="table table-bordered table-hover text-center timed_table">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col">Date</th>
                                                                <th scope="col">Details</th>
                                                                <th scope="col">Others</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody v-for="(previous_exam, index) in previous_exams"
                                                            :key="('g' + index)">
                                                            <tr>
                                                                <td>{{ previous_exam.date }}</td>
                                                                <td>
                                                                    <div class="flex-center last_cell">
                                                                        <span class="dot"></span>
                                                                        <span>{{ previous_exam.details }}</span>
                                                                    </div>

                                                                </td>
                                                                <td>
                                                                    <div class="flex-center last_cell">
                                                                        <span>{{ previous_exam.status }}</span>
                                                                        <span class="continue">{{
                                                                                previous_exam.operation
                                                                        }}</span>
                                                                    </div>
                                                                </td>
                                                            </tr>

                                                        </tbody>
                                                    </table>
                                                </div>



                                            </div>

                                        </div>
                                        <div class="col-lg-4 col-12">

                                            <div class="question__tab--question tab_two">
                                                <p>
                                                    Your Average Score Of 65% Puts You On The 65Th Percentile Of Users
                                                    Who Are Taking The Exam
                                                </p>
                                                <p>
                                                    Your Average Score Of 65% Puts You On The 65Th Percentile Of Users
                                                    Who Are Taking The Exam
                                                </p>
                                                <p>
                                                    Your Average Score Of 65% Puts You On The 65Th Percentile Of Users
                                                    Who Are Taking The Exam
                                                </p>
                                            </div>

                                        </div>
                                    </div>

                                </div>

                            </b-tab>

                            <b-tab title="Mock Exams" @click="(exam_type = 'mock')">

                                <div class="question__tab tab_three">

                                    <div class="row justify-content-between">
                                        <div class="col-lg-7 col-12">

                                            <div class="mock-exam position-relative">

                                                <img src="@/assets/images/ray.png" alt="ray png">

                                                <h3 class="main_head">MRCP Part 2 - Mock Exam A (Paper 1)</h3>
                                                <p>This Mock Exam Consists Of <span class="number">100</span> Questions
                                                    Over
                                                    <span class="number">180</span> Minutes
                                                </p>

                                                <button @click="sendDataMock()">start exam</button>

                                            </div>
                                            <div class="mock-exam position-relative">

                                                <img src="@/assets/images/ray.png" alt="ray png">

                                                <h3 class="main_head">MRCP Part 2 - Mock Exam A (Paper 1)</h3>
                                                <p>This Mock Exam Consists Of <span class="number">100</span> Questions
                                                    Over
                                                    <span class="number">180</span> Minutes
                                                </p>

                                            </div>
                                            <div class="mock-exam position-relative">

                                                <img src="@/assets/images/ray.png" alt="ray png">

                                                <h3 class="main_head">MRCP Part 2 - Mock Exam A (Paper 1)</h3>
                                                <p>This Mock Exam Consists Of <span class="number">100</span> Questions
                                                    Over
                                                    <span class="number">180</span> Minutes
                                                </p>

                                            </div>
                                            <div class="mock-exam position-relative">

                                                <img src="@/assets/images/ray.png" alt="ray png">

                                                <h3 class="main_head">MRCP Part 2 - Mock Exam A (Paper 1)</h3>
                                                <p>This Mock Exam Consists Of <span class="number">100</span> Questions
                                                    Over
                                                    <span class="number">180</span> Minutes
                                                </p>

                                            </div>
                                            <div class="mock-exam position-relative">

                                                <img src="@/assets/images/ray.png" alt="ray png">

                                                <h3 class="main_head">MRCP Part 2 - Mock Exam A (Paper 1)</h3>
                                                <p>This Mock Exam Consists Of <span class="number">100</span> Questions
                                                    Over
                                                    <span class="number">180</span> Minutes
                                                </p>

                                            </div>

                                        </div>
                                        <div class="col-lg-5 col-12">

                                            <div class="question__tab--question tab_two">
                                                <p>
                                                    Your Average Score Of 65% Puts You On The 65Th Percentile Of Users
                                                    Who Are Taking The Exam
                                                </p>
                                                <p>
                                                    Your Average Score Of 65% Puts You On The 65Th Percentile Of Users
                                                    Who Are Taking The Exam
                                                </p>
                                                <p>
                                                    Your Average Score Of 65% Puts You On The 65Th Percentile Of Users
                                                    Who Are Taking The Exam
                                                </p>
                                                <p>
                                                    Your Average Score Of 65% Puts You On The 65Th Percentile Of Users
                                                    Who Are Taking The Exam
                                                </p>
                                                <p>
                                                    Your Average Score Of 65% Puts You On The 65Th Percentile Of Users
                                                    Who Are Taking The Exam
                                                </p>
                                            </div>

                                        </div>
                                    </div>

                                </div>

                            </b-tab>

                        </b-tabs>

                    </div>

                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "mcqRevision",
    data() {
        return {
            selected: 'Show Me New Quesations Only',
            options: [],
            placeholder: {
                default: ""
            },

            topic_name: '',
            categoriesGet: [],
            question_selection: [],
            val_select: '',


            selectedBoxes: [],

            childCheckbox: [],
            parentCheckbox: [],
            exam_type: 'question',

            previous_exams: []

        }
    },


    mounted() {
        this.getData();
        this.getDataTimed();
    },






    methods: {

        toggleType(e) {
            // this.exam_type = e.target.value;

            console.log(e.target)

        },


        async getData() {
            try {

                this.axios.get(`topic/${this.$route.params.id}/question`).then(response => {
                    this.loading = true;
                    this.topic_name = response.data.data.topic.name;
                    this.categoriesGet = response.data.data.categories;
                    this.question_selection = response.data.data.question_selection;
                    // this.exam_type = response.data.data.exam_type;

                    console.log(response.data.data.categories)
                }).catch(error => {
                    console.log(error.response.data.message)
                })

            } catch (error) {
                console.log("error=>", error)
            }
        },

        async getDataTimed() {
            try {

                this.axios.get(`topic/${this.$route.params.id}/time`).then(response => {
                    // this.loading = true;
                    // this.topic_name = response.data.data.topic.name;
                    // this.categoriesGet = response.data.data.categories;
                    // this.question_selection = response.data.data.question_selection;
                    // // this.exam_type = response.data.data.exam_type;
                    this.previous_exams = response.data.data.previous_exams;

                    console.log(response.data.data.categories)
                }).catch(error => {
                    console.log(error.response.data.message)
                })

            } catch (error) {
                console.log("error=>", error)
            }
        },

        async sendData() {
            try {

                this.axios.post('exam/start', { mode: this.val_select.key, categories: this.selectedBoxes, topic_id: this.$route.params.id, exam_type: this.exam_type }).then(response => {
                    console.log(response.data.message)

                    this.$swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Message sent Successfully',
                        text: `${response.data.message}`,
                        showConfirmButton: false,
                        timer: 3000
                    })
                }).catch(error => {
                    this.$swal.fire({
                        position: 'center',
                        icon: 'error',
                        title: 'Oops...',
                        text: `${error.response.data.message}`,
                        showConfirmButton: false,
                        timer: 3000
                    })
                })

            } catch (error) {
                console.log("error=>", error)
            }
        },

        async sendDataMock() {
            try {

                this.axios.post('exam/start', { topic_id: this.$route.params.id, exam_type: this.exam_type }).then(response => {
                    console.log(response.data.message)

                    this.$swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Message sent Successfully',
                        text: `${response.data.message}`,
                        showConfirmButton: false,
                        timer: 3000
                    })
                }).catch(error => {
                    this.$swal.fire({
                        position: 'center',
                        icon: 'error',
                        title: 'Oops...',
                        text: `${error.response.data.message}`,
                        showConfirmButton: false,
                        timer: 3000
                    })
                })

            } catch (error) {
                console.log("error=>", error)
            }
        }
    },
}
</script>

<style lang="scss" scoped>

</style>