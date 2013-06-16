/// <reference path="../src/scripts/MovingObject.js" />
/// <reference path="../QUnit/qunit-1.11.0.js" />
define(function (require) {
    var Point = require('../scripts/Point.js');
    var MovingObject = require('../scripts/MovingObject.js');

    var obj = new MovingObject(null, Point(5, 5), null, Point(1, 1));

    // todo
    test("When adding to Point",
        function () {
            obj.update();

            var expected = Point(6, 6);
            deepEqual(obj.position.row, expected.row);
            deepEqual(obj.position.col, expected.col);
        });
});

