var expect = require("chai").expect;
var muting = require("../muting");

describe("muting", function () {
    describe("init()", function () {
        it("should inject an object into twitter", function () {
            var twitter = "twitter";
            muting.init(twitter);
            expect(muting.twitter).to.equal(twitter);
        });
    });

    describe("processDirectMessage()", function () {
        it("should inject an object into twitter", function () {
            var twitter = "twitter";
            muting.init(twitter);
            expect(muting.processDirectMessage("fakeurig 1h")).to.deep.equal(["fakeurig", "1h"]);
        });
    });

});