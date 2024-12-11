// ==UserScript==
// @name       ddg2kagi
// @namespace  http://nozav.org/
// @version    0.1.0
// @description  Keyboard shortcut to send a DuckDuckGo query to Kagi
// @match      http*://duckduckgo.com/*
// @match      http*://next.duckduckgo.com/*
// @match      http*://search.brave.com/*
// @copyright  2024, Julien Barnier
// ==/UserScript==

function doc_keyUp(e) {
    switch (e.keyCode) {
        case 75:
            //k
            if (e.altKey) {
                // ddg
                let search_field = document.getElementById("search_form_input");
                // brave
                if (search_field === null) {
                    search_field = document.getElementById("searchbox");
                }
                const search_string = encodeURI(search_field.value);
                window.location = "https://kagi.com/search?q=" + search_string;
            }
            break;
    }
}

document.addEventListener("keyup", doc_keyUp, false);
