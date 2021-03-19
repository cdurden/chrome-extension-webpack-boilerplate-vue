var settings = {
  'analyse_url': "http://www.aleksi.org/analyse/{word}.json",
  'loading_spinner_url': 'http://www.aleksi.org/img/loading_spinner.gif',
  'implicitGrantUrl': "https://accounts.google.com/o/oauth2/auth",
  'authUrl': 'http://www.aleksi.org/login/google-oauth2/?next=/html/done.html',
  'anki_connect_url': 'http://localhost:8765',
  'disable_links': false
};

// TODO: the purpose of this getter method is to enable a flexible way to store settings, which would for example allow users to change the settings from the extension options page.
// We need a mechanism that adjusts settings independently for each tab, but it would also be useful to store settings in associated with a domain or a specific page within chrome.storage so that these settings can be restored when a site is revisited.
// A simple solution would be to use window.settings, but this is unsafe. Another solution is to register settings for each tab by sending a message to the background script.
// Content scripts
// content_listener.js: sendMessage
// settings.js: get_settings/get_setting returns a promise.
//
// Background
// background.js: Register onMessage handler for 'get_settings'
function get_settings() {
    return new Promise((resolve) => {
        chrome.runtime.sendMessage({action: 'get_settings'}, function(response) {
            resolve(response);
        });
    });
}
function get_setting(key) {
    return new Promise((resolve) => {
        get_settings().then(function(response) {
            resolve(response[key]);
        });
    });
}
/*
function get_setting(setting) {
    if (typeof settings != 'undefined' && typeof settings[setting] != 'undefined') {
        return(settings[setting]);
    }
}
*/

/*
module.exports = {
    settings: settings
};
*/

export { settings, get_setting };
