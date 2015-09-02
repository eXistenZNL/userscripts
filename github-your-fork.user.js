// ==UserScript==
// @name        GitHub Your Fork
// @namespace   https://github.com
// @description Shows a 'your fork is at' link below the title
// @include     https://*github.com/*
// @version     1.0.4
// @grant        none
// ==/UserScript==

(function($) {
    if (0 === $('h1.entry-title').length) {
        console.warn('No header found with class "entry-title"');
        return;
    }
    if (0 !== $('h1.fork-flag').length) {
        console.warn('Already have a fork');
        return;
    }
    var username = String.trim($('a.name').attr('href')).substring(1);
    var repository = $('h1 strong a').html();
    var url = '/' + username + '/' + repository;
    $.get(
        url,
        function () {
            $('.entry-title').append('<span class="fork-flag"><span class="text">your fork is at <a href="' + url + '">' + username + '/' + repository + '</a></span></span>');
        }
    ).fail(function() {
       $('.entry-title').append('<span class="fork-flag"><span class="text">You dont have a fork (yet!)</span></span>');
    });
})(jQuery);

