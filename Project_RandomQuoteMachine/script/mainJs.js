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