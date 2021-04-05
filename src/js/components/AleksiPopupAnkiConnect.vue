<template>
    <div id="anki_connect_wrapper">
        <div id="anki_connect_get_decks_button_container">
            <a
                id="anki_connect_get_decks_button"
                class="ui-button ui-corner-all ui-widget"
                role="button"
            >
                Connect with Anki
            </a>
        </div>
        <div id="anki_connect" style="display: none">
            <fieldset class="ui-widget ui-widget-content">
                <legend>Associated Anki study set</legend>
                <div class="controlgroup-vertical-b">
                    <div id="anki_connect_deck_selector">
                        <select
                            id="anki_connect_deck_selectmenu"
                            name="anki_connect_deck_id"
                            style="display: none"
                        >
                            <option id="anki_connect_deck_radio_0" value="0">
                                -- select an Anki deck --
                            </option></select
                        ><span
                            tabindex="0"
                            id="anki_connect_deck_selectmenu-button"
                            role="combobox"
                            aria-expanded="false"
                            aria-autocomplete="list"
                            aria-owns="anki_connect_deck_selectmenu-menu"
                            aria-haspopup="true"
                            class="ui-selectmenu-button ui-selectmenu-button-closed ui-corner-all ui-button ui-widget"
                            ><span
                                class="ui-selectmenu-icon ui-icon ui-icon-triangle-1-s"
                            ></span
                            ><span class="ui-selectmenu-text">
                                -- select a Anki deck --
                            </span></span
                        >
                    </div>
                </div>
                <form
                    action="javascript:anki_connect_create_deck('http://localhost/aleksi/anki_connect_create_deck')"
                    id="anki_connect_create_deck_form"
                >
                    <!-- create new Anki deck -->
                    <div class="controlgroup-vertical-b">
                        <!--<div> <label style="padding-right: 5px;"> New Anki deck title: </label> </div> <div> <span class="fill"> <input id="new_anki_connect_deck_title_input" name="new_anki_connect_deck_title" type="text"> </span> </div> <a href="javascript:anki_connect_create_deck()" id="anki_connect_create_deck_button" class="ui-button ui-corner-all ui-widget ui-button-disabled ui-state-disabled" role="button"> Create </a>-->
                    </div>
                </form>
            </fieldset>
            <!-- <fieldset class="ui-widget ui-widget-content"> <legend> Sync behavior </legend> <div class="controlgroup-vertical-b"> <table stlye="border: 0px;"> <tr> <td colspan=2> <div style="display: block;"> <input id="prune_anki_connect_on_sync_input" name="prune_anki_connect_on_sync" type="checkbox"> <label for="prune_anki_connect_on_sync_input" style="padding-right: 5px;"> Remove extra Anki terms on sync </label> </div> <div style="display: block;"> <input id="prune_pins_on_sync_input" name="prune_pins_on_sync" type="checkbox"> <label for="prune_pins_on_sync_input" style="padding-right: 5px;"> Remove extra pins on sync </label> </div> </div> </fieldset>-->
            <div id="aleksi_anki_connect_add_pins"></div>
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
