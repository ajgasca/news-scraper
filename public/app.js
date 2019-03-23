// Grab all articles
$.getJSON('/articles', function(data) {
    let hbsObj = {
        articles: data
    };
    res.render('index', hbsObj);
});


