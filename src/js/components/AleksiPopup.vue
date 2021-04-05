<template>
    <div id="aleksi_dialog">
        <div id="yui3-cssreset">
            <div id="aleksi">
                <div id="aleksi_dialog">
                    <ul id="aleksi_tabs">
                        <li>
                            <a id="aleksi_word" href="#aleksi_main"
                                ><span id="aleksi_word_text"> none</span>
                                <div
                                    id="aleksi_analysis_progress_indicator"
                                    class="lds-ellipsis"
                                >
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div></div
                            ></a>
                        </li>
                        <li><a href="#aleksi_pins">Pins</a></li>
                        <li id="ui-tab-dialog-close"></li>
                    </ul>
                    <div id="aleksi_main">
                        <span id="requesting_analysis"
                            >Requesting analysis...</span
                        >
                        <div id="analysis_failed">
                            <span id="analysis_failed_text"
                                >Analysis failed:
                                <span id="analysis_error"></span
                            ></span>
                        </div>
                        <span id="analysis_results">
                            <p>Dictionary entries:</p>
                            <table id="aleksi_translations_table"></table>
                            <p>Morphological analysis:</p>
                            <table id="aleksi_morph_tag_tables"></table>
                            <div class="reference">
                                Powered by
                                <a
                                    class="reference"
                                    href="http://voikko.puimula.org/"
                                    >Voikko</a
                                >
                            </div>
                        </span>
                    </div>
                    <div id="aleksi_pins">
                        <div id="aleksi_pins_table_div">
                            <p>Pins:</p>
                            <table id="aleksi_pins_table"></table>
                        </div>
                        <aleksi-popup-anki-connect></aleksi-popup-anki-connect>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AleksiPopupAnkiConnect from "./AleksiPopupAnkiConnect.vue";
export default {
    components: {
        "aleksi-popup-anki-connect": AleksiPopupAnkiConnect,
    },
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
