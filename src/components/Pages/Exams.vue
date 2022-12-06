<template>
    <div class="examsPage mcqRevision correct_exam">

        <div class="container">

            <div class="all_questions">

                <div class="row">

                    <div class="col-lg-7 col-12">

                        <div class="question__tab">

                            <div class="row align-items-start">
                                <div class="col-12">

                                    <div class="question__tab--categories">


                                        <div class="info_checkboxes">

                                            <div class="head_top">

                                                <button class="previous flex-center">
                                                    <font-awesome-icon icon="fa-solid fa-chevron-left" />
                                                    <span>Previous</span>
                                                </button>
                                                <span class="hide_sm">{{ numQuestion }}</span>
                                                <button class="previous flex-center next">
                                                    <span>Next</span>
                                                    <font-awesome-icon icon="fa-solid fa-chevron-right" />
                                                </button>

                                            </div>

                                            <div class="question_name">

                                                <p>{{ questionContent }}</p>

                                                <!-- <div class="table-responsive">
                                                    <table class="table table-bordered table-hover">

                                                        <tbody>
                                                            <tr>
                                                                <td>Hb</td>
                                                                <td>98 G/L</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Hb</td>
                                                                <td>98 G/L</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Hb</td>
                                                                <td>98 G/L</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Hb</td>
                                                                <td>98 G/L</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Hb</td>
                                                                <td>98 G/L</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Hb</td>
                                                                <td>98 G/L</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div> -->


                                            </div>

                                            <div class="progress_head" v-if="is_answered">

                                                <div class="head_info">

                                                    <div class="correct">
                                                        <span>
                                                            <font-awesome-icon icon="fa-solid fa-check" />
                                                        </span>
                                                        <span>Correct Answer</span>
                                                    </div>
                                                    <div class="prev_sol">
                                                        <span>Previous Solutions</span>
                                                    </div>

                                                </div>

                                                <b-progress class="position-relative" max="100"
                                                    v-for="(answer, index) in All_Answers" :key="('v' + index)">

                                                    <div class="top_progress">
                                                        <span>{{ answer.content }}</span>
                                                        <span>{{ answer.people_choice_percentage }}</span>
                                                    </div>

                                                    <b-progress-bar
                                                        :class="{ 'red-back': (answer.is_chosen && !answer.is_correct), 'gray-back': (!answer.is_chosen && !answer.is_correct) }"
                                                        :value="answer.people_choice_percentage">

                                                    </b-progress-bar>
                                                </b-progress>

                                                <!-- <b-progress max="100">
                                                    <b-progress-bar value="50">
                                                        <div class="progress_anser">
                                                            <span>Answer 5</span>
                                                            <span>50%</span>
                                                        </div>
                                                    </b-progress-bar>
                                                </b-progress>

                                                <b-progress max="100">
                                                    <b-progress-bar value="50">
                                                        <div class="progress_anser">
                                                            <span>Answer 5</span>
                                                            <span>50%</span>
                                                        </div>
                                                    </b-progress-bar>
                                                </b-progress>

                                                <b-progress max="100">
                                                    <b-progress-bar value="50">
                                                        <div class="progress_anser">
                                                            <span>Answer 5</span>
                                                            <span>50%</span>
                                                        </div>
                                                    </b-progress-bar>
                                                </b-progress> -->
                                            </div>


                                            <label v-if="!is_answered" class="containercheck"
                                                v-for="(answer, index) in All_Answers" :key="('l' + index)">
                                                <input type="radio" name="answer" :value="answer.id"
                                                    v-model="answerValue">
                                                <span class="checkmark"></span>
                                                <div class="words">
                                                    <span>{{ answer.content }}</span>
                                                </div>
                                                <span class="red"></span>
                                            </label>

                                            <button class="main--btn answer_submit" @click="submitExamAnswer()"
                                                v-if="!is_answered">

                                                <span>Submit Answer</span>

                                            </button>

                                        </div>

                                        <div class="under_question" v-if="is_answered">
                                            <p v-html="hint"></p>
                                        </div>

                                        <!-- <div class="defects">
                                            <h5>Visual field defects:</h5>
                                            <p>Hypocalcemia is associated with QT interval prolongation; Hypercalcemia
                                                is associated with QT interval shortening</p>

                                            <ul>
                                                <li>
                                                    <span class="dot"></span>
                                                    <span>left homonymous hemianopia means visual field defect to the
                                                        left, i.e. Lesion of right optic tract</span>
                                                </li>
                                                <li>
                                                    <span class="dot"></span>
                                                    <span>left homonymous hemianopia means visual field defect to the
                                                        left, i.e. Lesion of right optic tract</span>
                                                </li>
                                                <li>
                                                    <span class="dot"></span>
                                                    <span>left homonymous hemianopia means visual field defect to the
                                                        left, i.e. Lesion of right optic tract</span>
                                                </li>
                                            </ul>
                                        </div>

                                        <div class="main_points">
                                            <h5>The main points for the exam are:</h5>

                                            <ul>
                                                <li>
                                                    <span class="dot"></span>
                                                    <span>left homonymous hemianopia means visual field defect to the
                                                        left, i.e. Lesion of right optic tract</span>
                                                </li>
                                                <li>
                                                    <span class="dot"></span>
                                                    <span>left homonymous hemianopia means visual field defect to the
                                                        left, i.e. Lesion of right optic tract</span>
                                                </li>
                                                <li>
                                                    <span class="dot"></span>
                                                    <span>left homonymous hemianopia means visual field defect to the
                                                        left, i.e. Lesion of right optic tract</span>
                                                </li>
                                            </ul>

                                            <div class="table-responsive">
                                                <table class="table table-bordered table-hover table_answer">
                                                    <thead class="">
                                                        <tr>
                                                            <th scope="col">Congenital</th>
                                                            <th scope="col">Drugs</th>
                                                            <th scope="col">Others</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <div class="info">
                                                                    <span class="dot"></span>
                                                                    <span>lectrolyte:</span>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="info">
                                                                    <span class="dot"></span>
                                                                    <span>lectrolyte:</span>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="info">
                                                                    <span class="dot"></span>
                                                                    <span>lectrolyte:</span>
                                                                </div>
                                                            </td>
                                                        </tr>

                                                    </tbody>
                                                </table>
                                            </div>

                                        </div>

                                        <div class="answer_picture">
                                            <h5>answer pictures</h5>

                                            <div class="row">
                                                <div class="col-lg-4 col-md-6 col-12">
                                                    <div class="image">
                                                        <img src="@/assets/images/blue.png" alt="answer image">
                                                    </div>
                                                </div>
                                                <div class="col-lg-4 col-md-6 col-12">
                                                    <div class="image">
                                                        <img src="@/assets/images/header.webp" alt="answer image">
                                                    </div>
                                                </div>
                                                <div class="col-lg-4 col-md-6 col-12">
                                                    <div class="image">
                                                        <img src="@/assets/images/cml.png" alt="answer image">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="main_points">
                                            <h5>The main points for the exam are:</h5>

                                            <ul>
                                                <li>
                                                    <span class="dot"></span>
                                                    <span>left homonymous hemianopia means visual field defect to the
                                                        left, i.e. Lesion of right optic tract</span>
                                                </li>
                                                <li>
                                                    <span class="dot"></span>
                                                    <span>left homonymous hemianopia means visual field defect to the
                                                        left, i.e. Lesion of right optic tract</span>
                                                </li>
                                                <li>
                                                    <span class="dot"></span>
                                                    <span>left homonymous hemianopia means visual field defect to the
                                                        left, i.e. Lesion of right optic tract</span>
                                                </li>
                                            </ul>
                                        </div> -->

                                    </div>

                                </div>
                            </div>

                        </div>

                    </div>
                    <div class="col-lg-3 col-12">

                        <div class="ranges" v-if="!is_answered">
                            <h4 class="flex-center">
                                <img src="@/assets/images/literature.svg" alt="range" />
                                <span>Reference Ranges</span>
                            </h4>

                            <div class="all_ranges">
                                <div class="range_box">
                                    <div class="box_item">
                                        <!-- <h5>Haemoglobin</h5> -->
                                        <p v-html="references_table"></p>
                                    </div>
                                </div>

                            </div>

                        </div>

                        <div class="ranges" v-if="is_answered">
                            <h4 class="d-flex justify-content-start">
                                <img src="@/assets/images/literature.svg" alt="range" />
                                <span>Links</span>
                            </h4>

                            <div class="all_ranges">
                                <div class="range_box">
                                    <div class="box_item" style="border:none">
                                        <p v-html="links"></p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div class="col-lg-2 col-12">


                        <div class="table-responsive score_table">
                            <table class="table text-center table-bordered table-hover">
                                <thead>
                                    <tr class="row_head">
                                        <th scope="col">
                                            <div class="cell_icon flex-center">
                                                <span>
                                                    <img src="@/assets/images/scoreboard.svg" alt="range"></span>
                                                <span>Score</span>
                                            </div>
                                        </th>
                                        <th scope="col">
                                            <span style="color: #FFAE8B;">{{ score_percentage }}%</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody v-for="(question, index) in scoreQuestions" :key="('g' + index)">
                                    <tr>
                                        <td class="quest_number">{{ index + 1 }}</td>
                                        <td>
                                            <div class="correct" v-if="(question.is_correct == 1)">
                                                <font-awesome-icon icon="fa-solid fa-check" />
                                            </div>
                                            <div class="wrong" v-else-if="(question.is_correct == 0)">
                                                <font-awesome-icon icon="fa-solid fa-xmark" />
                                            </div>
                                            <div class="skip" v-else-if="(question.is_correct == null)">
                                                <font-awesome-icon icon="fa-solid fa-minus" />
                                            </div>
                                        </td>
                                    </tr>
                                    <!-- <tr>
                                        <td class="quest_number">2</td>
                                        <td>
                                            <div class="wrong">
                                                <font-awesome-icon icon="fa-solid fa-xmark" />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="quest_number">3</td>
                                        <td>
                                            <div class="skip">
                                                <font-awesome-icon icon="fa-solid fa-minus" />
                                            </div>
                                        </td>
                                    </tr> -->

                                </tbody>
                            </table>
                        </div>


                    </div>

                </div>

            </div>


        </div>

    </div>
</template>

<script>
export default {
    name: "exams",

    data() {
        return {

            loading: false,

            // numQuestion
            numQuestion: '',

            // exam info

            questionContent: "",
            question_id: '',
            All_Answers: [],

            //v-model answer value

            answerValue: '',

            //score Percentage

            score_percentage: '',
            scoreQuestions: [],

            // references table

            references_table: "",


            // is answerd question

            is_answered: '',

            // submit answer exam

            links: '',
            hint: '',

            // progress bar

            value: 100,
            dataValue: "",



        }
    },

    mounted() {
        window.scrollTo(0, 0);
        this.getData();
    },


    methods: {

        async getData() {
            try {

                this.axios.get(`exam/perform/${this.$route.params.id}`).then(response => {
                    this.loading = true;

                    this.questionContent = response.data.data.question.content;
                    this.question_id = response.data.data.question.id;

                    this.All_Answers = response.data.data.question.answers;

                    this.score_percentage = response.data.data.score.percentage;
                    this.scoreQuestions = response.data.data.score.questions;

                    this.references_table = response.data.data.question.references;

                    this.is_answered = response.data.data.is_answered;

                    this.numQuestion = response.data.message;

                    // this.exam_type = response.data.data.exam_type;

                    // console.log(response.data.data.categories)
                }).catch(error => {
                    console.log(error.response.data.message)
                })

            } catch (error) {
                console.log("error=>", error)
            }
        },

        // submit exam

        async submitExamAnswer() {
            try {

                this.axios.post("exam/answer", { exam_id: this.$route.params.id, question_id: this.question_id, user_answer_id: this.answerValue }).then(response => {

                    this.All_Answers = response.data.data.question.answers;
                    this.score_percentage = response.data.data.score.percentage;
                    this.scoreQuestions = response.data.data.score.questions;
                    this.links = response.data.data.question.links;
                    this.hint = response.data.data.question.hint;
                    this.is_answered = response.data.data.is_answered;

                }).catch(error => {
                    console.log(error.response.data.message)
                })

            } catch (error) {
                console.log("error=>", error)
            }
        },

        // progress bar

        getVariantType(value) {
            if (value > 50) {
                return 'success'
            }
            else if (value > 30) {
                return 'warning'
            }
            if (value > 10) {
                return 'danger'
            }

            return ''
        }

    },


}
</script>

<style lang="scss" scoped>
.top_progress {

    position: absolute;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    line-height: 40px;
    font-size: 16px;
    font-family: "Calibri-Regular";


    span {
        width: 50%;
        display: block;
        padding-inline-start: 30px;

        &:last-child {
            font-family: "Calibri-Bold";

        }
    }
}

.red-back {
    background-color: red !important;
    opacity: 0.5;
}


.gray-back {
    background-color: #DDD !important;
}
</style>