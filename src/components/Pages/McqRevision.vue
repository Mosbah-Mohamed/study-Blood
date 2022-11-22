<template>
    <div class="mcqRevision">
        <div class="container">
            <div class="row">

                <div class="col-12">

                    <div class="all_questions">

                        <h2>MRCP PART 1 REVISION</h2>

                        <b-tabs>

                            <b-tab title="Question" active>

                                <div class="question__tab">

                                    <div class="row align-items-start">
                                        <div class="col-lg-8 col-12">

                                            <div class="question__tab--categories">

                                                <p>Filter Your Questions Below (520 Questions Found):</p>

                                                <div class="info_checkboxes">

                                                    <h3>Categories</h3>

                                                    <label class="containercheck" v-b-toggle.collapse-1>
                                                        <input @click.stop type="checkbox">
                                                        <span class="checkmark"></span>
                                                        <div class="words">
                                                            <span>All</span>
                                                            <div class="advantage">
                                                                <span>Attempted 12 Of 4,324</span>
                                                            </div>
                                                        </div>
                                                        <span class="red"></span>
                                                    </label>

                                                    <b-collapse id="collapse-1" class="mt-2">
                                                        <b-card>

                                                            <label class="containercheck" v-b-toggle.collapse-1-inner>
                                                                <input @click.stop type="checkbox">
                                                                <span class="checkmark"></span>
                                                                <div class="words">
                                                                    <span>All</span>
                                                                    <div class="advantage">
                                                                        <span>Attempted 12 Of 4,324</span>
                                                                    </div>
                                                                </div>
                                                                <span class="red"></span>
                                                            </label>



                                                            <b-collapse id="collapse-1-inner" class="mt-2">
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
                                                            </b-collapse>



                                                        </b-card>
                                                    </b-collapse>

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

                                                </div>

                                                <div class="info_checkboxes half_width">
                                                    <h3>Question Selection:</h3>

                                                    <v-select maxHeight="40px" open :placeholder="placeholder.default"
                                                        :options="options">
                                                    </v-select>
                                                </div>

                                                <button class="main--btn">

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

                            <b-tab title="Time Test">

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

                                                <button class="main--btn">

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
                                                        <tbody>
                                                            <tr>
                                                                <td>5th September 22</td>
                                                                <td>
                                                                    <div class="flex-center last_cell">
                                                                        <span class="dot"></span>
                                                                        <span>P_5_1 72 questions over 0 mins</span>
                                                                    </div>

                                                                </td>
                                                                <td>
                                                                    <div class="flex-center last_cell">
                                                                        <span>P_5_1 72 questions over 0 mins</span>
                                                                        <span class="continue">continue</span>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>5th September 22</td>
                                                                <td>
                                                                    <div class="flex-center last_cell">
                                                                        <span class="dot"></span>
                                                                        <span>P_5_1 72 questions over 0 mins</span>
                                                                    </div>

                                                                </td>
                                                                <td>
                                                                    <div class="flex-center last_cell">
                                                                        <span>P_5_1 72 questions over 0 mins</span>
                                                                        <span class="review">review</span>
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

                            <b-tab title="Mock Exams">

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
            options: [
                'Show Me New Quesations Only',
                'bar',
                'baz'
            ],
            placeholder: {
                default: ""
            },

        }
    }
}
</script>

<style lang="scss" scoped>

</style>