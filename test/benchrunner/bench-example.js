$.ajax({
    url: '../data/map.xml',
    success: function(dom) {
        var conn = iD.Connection();
        benchsuite('parsing', function() {
            bench('.parse()', function() {
                conn.parse(dom);
            });
            bench('.fastParse()', function() {
                conn.fastParse(dom);
            });
        });
    }
});
