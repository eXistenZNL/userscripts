// ==UserScript==
// @name        Github Status
// @namespace   eXistenZNL
// @description Changes the colour of the main Github octocat icon according to status.github.com
// @include     https://*github.com/*
// @version     1.0.1
// @grant       none
// ==/UserScript==

(function($) {
  $.get(
    'https://status.github.com/api/status.json',
    function(data) {
      colors = {
        'good': '#396',
        'minor': '#f29d50',
        'major': '#c30'
      };
      $logo = $('.header-logo-invertocat .octicon-mark-github');
      $logo.css('color', colors[data.status]);
    }
  );
})(jQuery);

