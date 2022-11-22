<template>
    <div class="packages about__us">
        <div class="container">
            <div class="all_row_package">
                <div class="row align-items-end">
                    <div class="col-lg-6 col-12">
                        <div class="package__content">
                            <h4>You Can Choose The Package That Suits You</h4>
                            <p>t is a long established fact that a reader will be distracted by the readable content of
                                a
                                page when looking at its layout. the point of using lorem ipsum is that it has a
                                more-or-less normal distribution of letters, as opposed to using 'content here, content
                                here', making it look like readable english. many desktop publishing packages and web
                                page
                                editors now use lorem ipsum as their default model text, and a search for 'lorem ipsum'
                                will
                                uncover many web sites still in their infancy. various versions have evolved over the
                                years,
                                sometimes by accident</p>
                        </div>
                    </div>
                    <div class="col-lg-6 col-12">

                        <div class="packages__payment">
                            <div class="head flex-center">
                                <div class="icon_info">
                                    <div class="icon active">
                                        <img src="@/assets/images/selection.svg" alt="pay img" />
                                    </div>
                                    <span>Package</span>
                                </div>

                                <div class="icon_info">
                                    <div class="icon">
                                        <img src="@/assets/images/payment-card.svg" alt="pay img" />
                                    </div>
                                    <span>payment</span>
                                </div>
                            </div>

                            <form action="">
                                <h3>Medical Student Years 1-3 Subscription Options</h3>

                                <label class="containercheck">
                                    <input type="checkbox" checked="checked">
                                    <span class="checkmark"></span>
                                    <div class="words">
                                        <span>50 $</span>
                                        <div class="advantage">
                                            <span>12 Months</span>
                                            <span>Last Test Report</span>
                                        </div>
                                    </div>
                                    <span class="red"></span>
                                </label>

                                <label class="containercheck">
                                    <input type="checkbox">
                                    <span class="checkmark"></span>
                                    <div class="words">
                                        <span>25 $</span>
                                        <div class="advantage">
                                            <span>6 Months</span>
                                            <span>Last Test Report</span>
                                        </div>
                                    </div>
                                    <span class="red"></span>
                                </label>

                                <div class="form-group">
                                    <router-link to="/payment">
                                        <button type="button" class="main--btn">SUBSCRIBE</button>
                                    </router-link>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div class="all_row">
                <div class="row">
                    <div class="col-lg-6 col-12">
                        <div class="about-image flex-center">
                            <img src="@/assets/images/blue.png" alt="about img">
                        </div>
                    </div>
                    <div class="col-lg-6 col-12">
                        <div class="about_content">
                            <h4 class="main_head">Medical Student Years 1-3 Subscription Options</h4>
                            <ul>
                                <li>
                                    <span class="dot"></span>
                                    <span>we will pay you! our rates are more generous than other publishers - we are
                                        obsessed with quality and relevance and are willing to pay for it</span>
                                </li>
                                <li>
                                    <span class="dot"></span>
                                    <span>it looks great on your cv/job application. writing questions/topics not only
                                        shows
                                        your teaching ability but also demonstrates communication skills. we will
                                        provide
                                        all authors with a certificate they can upload to their portfolio.</span>
                                </li>
                                <li>
                                    <span class="dot"></span>
                                    <span>we will pay you! our rates are more generous than other publishers - we are
                                        obsessed with quality and relevance and are willing to pay for it</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>

            <div class="all_row">
                <div class="row">

                    <div class="col-lg-6 col-12">
                        <div class="about__info">
                            <h3 class="main_head">Main Tilt Here</h3>
                            <p>it is a long established fact that a reader will be distracted by the readable content of
                                a
                                page when looking at its layout. the point of using lorem ipsum is that it has a
                                more-or-less normal distribution of letters, as opposed to using 'content here, content
                                here', making it look like readable english. many desktop publishing packages and web
                                page
                                editors now use lorem ipsum as their default model text, and a search for 'lorem ipsum'
                                will
                                uncover many web sites still in their infancy. various versions have evolved over the
                                years,
                                sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                        </div>
                    </div>

                    <div class="col-lg-6 col-12">
                        <div class="about-image flex-center">
                            <img src="@/assets/images/blue.png" alt="about img">
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Packages"
}
</script>

<style lang="scss" scoped>

</style>