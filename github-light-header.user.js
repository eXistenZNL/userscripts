// ==UserScript==
// @name        GitHub Light Header
// @icon        https://github.com/eXistenZNL/userscripts/raw/master/icons/github.png
// @namespace   eXistenZNL
// @description Changes the header back to the light color scheme again
// @include     https://*github.com/*
// @version     1.0.0
// @grant       none
// @require     https://ajax.googleapis.com/ajax/libs/jquery/2.2.3/jquery.min.js
// ==/UserScript==

(function($) {
  $('div.header').removeClass('header-dark');
})(jQuery);
