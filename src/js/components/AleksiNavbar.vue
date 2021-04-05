<template>
    <div id="aleksi_navbar">
        <div id="navbar" style="top: 0px">
            <div id="tophiddenbar">
                <ul class="left">
                    <li>
                        <a href="http://localhost/aleksi/"> <b> Aleksi </b> </a>
                    </li>
                    <li>
                        <a
                            href="http://localhost/aleksi/sessions"
                            id="leave_session_button"
                        >
                            <span class="fas-inverse icon-th-large"> </span>
                            <span class="mobile-hide"> Sessions </span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="javascript:update_current_website()"
                            id="update_website_button"
                        >
                            <span class="fas-inverse icon-refresh"> </span>
                            <span class="mobile-hide"> Update Website </span>
                        </a>
                    </li>
                    <!--          <li><a id="open_config_dialog_button">Link behavior</a></li> -->
                    <li>
                        <a id="open_session_dialog_button">
                            <span class="fas-inverse icon-cog"> </span>
                            <span class="mobile-hide"> Settings </span>
                        </a>
                    </li>
                </ul>
                <ul class="right">
                    <li>
                        <a href="http://localhost/aleksi/logout"> Logout </a>
                    </li>
                    <!-- <li><a id="open_quizlet_dialog_button">Quizlet configuration</a></li> -->
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            msg: "Hello from Vue Pop Up component!",
        };
    },
};
</script>

<style>
.message {
    color: blue;
}
</style>
