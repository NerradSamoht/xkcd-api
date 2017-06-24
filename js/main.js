let xkcdController = (function() {

    let max = 0;

    function structureContent(title, img,  desc) {
        let $title = '<h1>' + title;
        let $image = $('<img>').attr({ src: img, alt: title });
        let $description = '<p>' + desc;

        $('#xkcd').html($title).append($image);
        $('#description').html($description);
    };

    function displayCurrentXKCD() {
        let promise = xkcd.loadContent();
        promise.then(data => {
            max = data.num > max ? data.num : max; // set current xkcd as max number
            structureContent(data.title, data.img, data.alt);
        });
    };

    function displayRandomXKCD() {
        let num = Math.floor(Math.random() * max) + 1;
        let promise = xkcd.loadContent(num);
        promise.then(data => structureContent(data.title, data.img, data.alt));
    };

    return {
        displayCurrentXKCD: displayCurrentXKCD,
        displayRandomXKCD: displayRandomXKCD
    };

})();