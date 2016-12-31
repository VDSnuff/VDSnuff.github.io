//This variant does not work with https protocol
//Start
/*
var post;

function getQuote() {
    $.ajax({
        url: 'http://quotesondesign.com//wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
        success: function(data) {
            post = data.shift();
            $('#quote-content').html("<em>" + post.content + "</em>");
            $('#quote-title').text(' - ' + post.title);
            if (typeof post.custom_meta !== 'undefined' && typeof post.custom_meta.Source !== 'undefined') {
                $('#quote-source').html('Source:' + post.custom_meta.Source);
            } else {
                $('#quote-source').text('');
            }
        },
        cache: false
    });
}

function postTwitter() {
    var plainText = post.content.slice(3, post.content.length - 5);
    if (post.content.length + post.title.length > 140) {
        var tempString = plainText.slice(0, 132 - post.title.length);
        window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent('"' + tempString + '...' + '"' + ' - ' + post.title));
    } else {
        window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent('"' + plainText + '"' + " - " + post.title));
    }
}

$(document).ready(function() {
    getQuote();
    $('#getQuote').on('click', getQuote);
    $('#postTwitter').on('click', postTwitter);
});
*/
//End

//New solution
//Start
var responseQuote;
var responseAuthor;

function getQuote() {
    var spinner = '<i id="mySpinner" class="fa fa-spinner fa-spin fa-3x fa-fw"></i><span class="sr-only">Loading...</span>';
    $('#quote-content').html(spinner);
    $('#quote-title').text(" ");
    $.ajax({
        headers: {
            "X-Mashape-Key": "2n5fJiMTdEmshqW92nSbpjJlnBijp1KT8McjsnFnBr26ikWBa6",
            "Content-Type": "application/x-www-form-urlencoded",
            Accept: "application/json"
        },
        url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=',
        success: function(response) {
            var resp = JSON.parse(response);
            responseQuote = '<em>"' + resp.quote + '"</em>';
            responseAuthor = ' - ' + resp.author;

            $('#quote-content').html(responseQuote);
            $('#quote-title').text(responseAuthor);

        }
    });
}

function postTwitter() {
    var plainText = responseQuote.slice(4, responseQuote.length - 5);
    if (plainText.length + responseAuthor.length > 140) {
        var tempString = plainText.slice(0, 137 - responseAuthor.length);
        window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(tempString + '...' + responseAuthor));
    } else {
        window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(plainText + responseAuthor));
    }
}

$(document).ready(function() {
    getQuote();
    $('#getQuote').on('click', getQuote);
    $('#postTwitter').on('click', postTwitter);
});

//End