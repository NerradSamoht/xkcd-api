let xkcd = (function() {

    function loadContent(num) {
        url = 'https://dynamic.xkcd.com/api-0/jsonp/comic';
        if (num) {
            url = url + '/' + num;
        };
        return Promise.resolve($.ajax(url, {
            dataType: 'jsonp',
            error: function() {
                alert("Ruh roh! Sorry something went wrong.");
            },
            success: function(data) {
                return data;
            }
        }));
    };

    return {
        loadContent: loadContent
    };
    
})();